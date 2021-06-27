#!/bin/bash
sudo npm install
echo "Instalar referências do Package.json"
sudo npm install express@4.8 --save
echo "Express instalado"
sudo npm install ejs@0.8 --save
echo "EJS instalado"
sudo npm install body-parser@1.6 method-override@2.1 --save
echo "Body-parser e método-override  instalados"
sudo npm install bower@1.3 -g
echo "Bower instalado"
sudo npm audit fix
echo "Pacotes corrigidos"
