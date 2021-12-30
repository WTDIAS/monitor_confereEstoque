/*
    Autor: Waldir Tiago Dias
    Data: 29/12/2021
    Descrição: Aplicação que ficará executando na TRAY(Próximo ao relógio). 
    Será responsável por fazer a leitura do Firebase do App Confere Estoque
    ao fazer backup das leituras (codigos/quantidade) irá gerar um arquivo 
    na pasta para que o software da Contech possa importar.
*/

const { BrowserWindow } = require('electron')
const path = require('path');

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 400,
    height: 300,
    //frame: false,
    //Não abrir a janela
    closable: false,
    //Não exibe a janela ao criar, só irá mostrar ao clicar na tray
    show: false,
    //Não deixa aumentar o tamanho da janela
    resizable: false,
    //Não deixa maximizar a janela
    fullscreen: false,
    //não deixa minimizar a janela
    minimizable: false,

    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  mainWindow.loadFile('index.html')
  //aqui retorno mainWindow
  return mainWindow
}

//Aqui estou exportando apenas o mainWindow pois ja estou executando a função createWindow()
//Para exportar a função teria que ser sem os parênteses: module.exports = createWindow
module.exports = createWindow()