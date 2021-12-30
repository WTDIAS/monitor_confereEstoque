/*
    Autor: Waldir Tiago Dias
    Data: 29/12/2021
    Descrição: Aplicação que ficará executando na TRAY(Próximo ao relógio). 
    Será responsável por fazer a leitura do Firebase do App Confere Estoque
    ao fazer backup das leituras (codigos/quantidade) irá gerar um arquivo 
    na pasta para que o software da Contech possa importar.
*/

//Controle do click na tray que estará perto do relógio do windows
function ControlWindow(win,tray){
    function toggle(){
        //se ela estiver visível então esconde
        if(win.isVisible()){
            win.hide()
        //se ela não está visivel então mostra
        }else{
            show()
        }
    }

    //mostrar a janela ao clicar na tray perto do relógio
    function show(){
        const { x, y } = getPosition()
        win.setPosition( x, y, false )
        win.show()
        win.focus()
    }


    
    function getPosition(){
        const winBounds = win.getBounds()
        const trayBounds = tray.getBounds()

        const x = Math.round( trayBounds.x + (trayBounds.width / 2) - (winBounds.width / 2))
        const y = Math.round(trayBounds.y < 100 ? trayBounds.y + trayBounds.height + 3 : trayBounds.y - winBounds.height - 3)
        //const y = Math.round( trayBounds.y + trayBounds.height + 3)

        return{ x, y }
    }
    
    return{toggle}

}

module.exports = ControlWindow


