#!/bin/bash
cd .

echo "Install grunt"
sudo npm install grunt-cli -g
clear

if [ ! -d node_modules ];then
    sudo npm install
fi
# grunt build
grunt dev
