<h1 align="center">Bot stats discord server for Discord</h1>
<em><h5 align="center">(Programming Language - Node.js | Shell)</h5></em>

# Tutorial to install the bot ! For LINUX (VPS or Dedicated Server)

## 1 - on Terminal

<h5>A) Auto installer</h5>

- Run command :

```shell script
bash <(curl -s https://raw.githubusercontent.com/Kurama250/Stats_bot/main/setup.sh)
```

<h5>B) Manual installer</h5>

```shell script
apt update && apt upgrade -y
apt install npm nodejs git
curl -fsSL https://deb.nodesource.com/setup_16.x | bash - &&\
apt-get install -y nodejs
```

```shell script
git clone https://github.com/Kurama250/Stats_bot.git
cd Stats_bot
npm install discord.js
npm install pm2 -g
```

## 2 - on Terminal

```shell script
nano config.json
```

## And you also change this line :

```json
  "token": "YOUR_TOKEN",
```

After doing this, press CTRL + X and you press Y and ENTER then you do the following commands !

## 3 - on Terminal

```shell script
pm2 start index.js -n Stats_bot
```

- Demo : 

![alt text](https://github.com/Kurama250/Stats_bot/blob/main/stats.png)

<h1 align="center">Then it's the end you have started the bot have fun !</h1>
