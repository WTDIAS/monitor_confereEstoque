/*
    Autor: Waldir Tiago Dias
    Data: 29/12/2021
    Descrição: Aplicação que ficará executando na TRAY(Próximo ao relógio). 
    Será responsável por fazer a leitura do Firebase do App Confere Estoque
    ao fazer backup das leituras (codigos/quantidade) irá gerar um arquivo 
    na pasta para que o software da Contech possa importar.
*/


const { app } = require('electron')
const path = require('path')
const controlWindow = require('./ControlWindow.js')


function App(){
  const win = require('./CreateWindow.js')
  const tray = require('./Tray.js')
  const { toggle } = controlWindow(win, tray)
  
  //Ao clicar no tray 
  tray.on('click',toggle)
  //Quando perder o focus esconde
  win.on('blur',win.hide)
} 

app.whenReady().then(() => {
  App()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

