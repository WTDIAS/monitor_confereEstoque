/*
    Autor: Waldir Tiago Dias
    Data: 29/12/2021
    Descrição: Aplicação que ficará executando na TRAY(Próximo ao relógio). 
    Será responsável por fazer a leitura do Firebase do App Confere Estoque
    ao fazer backup das leituras (codigos/quantidade) irá gerar um arquivo 
    na pasta para que o software da Contech possa importar.
*/

const { BrowserWindow, Menu } = require('electron')
//const { ipcRenderer } = require('electron')
//const  path  = require('path');


const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 400,
    height: 300,
    //frame: true,
    //Não abrir a janela
    closable: true,
    //Exibir a janela ao criar, só irá mostrar ao clicar na tray
    show: false,
    //Almentar o tamanho da janela
    resizable: true,
    //Maximizar a janela
    //fullscreen: true,
    //Minimizar a janela
    minimizable: false,
    //Maximizar a janela
    maximizable: true,

    webPreferences: {
      //Liberação de integração do Electron com Node      
      nodeIntegration: true
      //preload: path.join(__dirname, 'preload.js')
    }
  })

  mainWindow.loadFile('html/index.html')

  
  //aqui retorno mainWindow
  return mainWindow
}

//--------------------------------------------------------------------------------------------------------------------------
//Meu template menu
const templateMenu = [
  {
    label: 'Sobre',
    submenu : [
      {
        label: 'Versão'
      }
    ]
  },
    {
      label: 'OpenDevToos',
      click: () => BrowserWindow.getFocusedWindow().toggleDevTools()
    }
]
//Criando menu com base no meu templete
const menu = Menu.buildFromTemplate(templateMenu)
//Adicionando o meu menu na aplicação
Menu.setApplicationMenu(menu)
//--------------------------------------------------------------------------------------------------------------------------





//Aqui estou exportando apenas o mainWindow pois ja estou executando a função createWindow()
//Para exportar a função teria que ser sem os parênteses: module.exports = createWindow
module.exports = createWindow()