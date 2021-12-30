/*
    Autor: Waldir Tiago Dias
    Data: 29/12/2021
    Descrição: Aplicação que ficará executando na TRAY(Próximo ao relógio). 
    Será responsável por fazer a leitura do Firebase do App Confere Estoque
    ao fazer backup das leituras (codigos/quantidade) irá gerar um arquivo 
    na pasta para que o software da Contech possa importar.
*/


const  { Tray } = require('electron')
const { resolve } = require('path')
const iconPath = resolve(__dirname,'./','assets','CE64X64.png')

//Cria o tray. App que irá rodar perto do relógio do windows
function createTray(){
    const tray = new Tray(iconPath)
    tray.setToolTip('Monitor APP Confere Estoque')
    return tray
}
//Exporta o tray já executando
module.exports = createTray()