# Start WSL w/ external drive mounting

## Why?

_Short answer?_ **MediaTek**.

_Long answer?_

For almost **3 years**, I've been running a **Raspberry Pi 4** as my home server. It sips power like a 1.9 TDI sips diesel, efficient and reliable… but lately, it hasn’t been powerful enough to keep up with my needs. You could say that I blew its turbo, and now it’s a naturally aspirated diesel - still dependable, still reliable as all hell, but not exactly speedy.

Enter my **second-hand [ASUS Vivobook with an i3-1215U](https://www.asus.com/laptops/for-home/vivobook/vivobook-15-x1502/?overviewpath=12th-gen-intel-overview)**, which is **[400–700% more powerful](https://browser.geekbench.com/v6/cpu/15016158)** than the Pi, even under WSL. When I bought it, my plan was simple: use it daily for a few months for media consumption and car diagnostics (which I still do, from time to time), then retire it as my new home server. Little did I know… it came with a Wi-Fi card designed to specifically make the life of enthusiasts hell: the infamous **MediaTek MT7902**, which still doesn’t have a **[working Linux driver](https://linux-hardware.org/?id=pci:14c3-7902-1a3b-5520)**. Lovely.

I _could_ just simply start WSL when booting Windows, but I also have a 2TB HDD in an external enclosure full of my, _cough_, Linux ISOs. In the event of a power outage, the laptop keeps running just fine - but the enclosure dies, freezing WSL when it wants to access files from the drive. Not ideal for a _reliable server_.

This script monitors the drives attached to my computer, starting and mounting the HDD to WSL _and_ stopping WSL when it detects the enclosure disconnect.

Basically, it babysits WSL so I don't have to.

As for why it's written in JavaScript: Simply put, it’s the language I know best. Writing it in something "more efficient" isn’t worth it - this script barely touches system resources (<1% CPU, ~13MB RAM), and I got it up and running fastest this way.

## Setup

- Make sure you have Node.js (at least LTS) installed, with [node-gyp](https://github.com/nodejs/node-gyp?tab=readme-ov-file#on-windows)
- Run `npm ci`
- Run `node src/setup.js` one time
- Add to actions in Task Scheduler `powershell` with `-noexit -command node <path-to-dotfiles>\scripts\wsl-start-external-drive\src\index.js` as the argument to start when Windows boots (make sure to check **Run with highest priviledges**)
- Profit
