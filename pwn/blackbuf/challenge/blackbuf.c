// gcc -o program blackbuf.c -fno-stack-protector -z relro -z execstack -no-pie

#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

void win()
{
    execve("/bin/sh", NULL, NULL);
}

int main()
{
    char buf[32];

    printf("win address: %p\n", win);
    printf("You know buffer overflow?\n");
    printf("input: ");
    fflush(stdout);

    scanf("%s", buf);

    return 0;
}