Playground-NodeJs
===

Randomness, Playground-NodeJs just exists for testing things, playing with some code.

May kill everyone you love if not properly used!

Meant to be used together with [Playground](https://github.com/Evisceration/Playground)

Components
---

* UDP Server

To test it you can use "sendip" on linux, where -us is the source port and -ud the destination port


    sudo sendip -p ipv4 -is 127.0.0.1 -p udp -us 5070 -ud 1337 -d "Hello via UDP!" -v 127.0.0.1
