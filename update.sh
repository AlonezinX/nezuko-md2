#!bin/bash

CYAN="\033[1;36m"
YELLOW="\033[1;33m"
PURPLE="\033[1;35m"
GREEN="\033[1;32m"
RED='\033[1;31m'
NC='\033[0m'

echo $YELLOW"Você tem certeza que deseja atualizar a nezuko-md? [s/n]"
read -p "> " opts

if [ $opts = "s" ]; then

clear
echo $YELLOW"Atualizando a nezuko-md, aguarde..."
git clone https://github.com/AlonezinX/nezuko-md2 > /dev/null 2> /dev/null

cd nezuko-md2
cp -r * ..
cd ..
rm -rf nezuko-md2
npm i

clear
echo $GREEN"nezuko-md atualizado com sucesso!!"

elif [ $opts = "n"]; then
    clear
    echo $RED"Atualização da nezuko-md abortada"
    exit
fi
