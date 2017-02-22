'use strict'

const Telegram = require('telegram-node-bot');

class OtherwiseController extends Telegram.TelegramBaseController{
    handler($){
        $.sendMessage('Scrivere /ping oppure /ciao per avere una risposta dal bot ;).');
    }

    get routes(){
        return{
            handler
        }
    }
}

 module.exports = OtherwiseController;