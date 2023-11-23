FROM ubuntu:jammy-20231004

RUN apt update && apt install -y gcc gcc-multilib g++-multilib \
    build-essential libc6 libc-dev xinetd netcat socat

RUN mkdir /home/chall
RUN useradd -d /home/chall pwn -s /bin/bash 
RUN chown -R pwn:pwn /home/chall/

RUN chown -R root:pwn /home/chall
RUN chmod 750 /home/chall 

ADD blackbuf /home/chall/blackbuf
RUN chmod +x /home/chall/blackbuf

ADD flag /
RUN chown root:pwn /flag 
RUN chmod 440 /flag 

ADD pwn.xinetd /etc/xinetd/pwn 
ADD ./start.sh /
RUN chmod +x /start.sh

CMD ["/usr/sbin/xinetd","-dontfork"]
