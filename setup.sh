#!/bin/bash
# setup.sh by Kurama250
# Github : https://github.com/Kurama250

apt update && apt upgrade -y
apt install npm node.js git -y
curl -fsSL https://deb.nodesource.com/setup_16.x | bash - &&\
apt-get install -y nodejs -y
git clone https://github.com/Kurama250/Stats_bot.git
cd Ghost_bot/
npm install discord.js
npm install pm2 -g