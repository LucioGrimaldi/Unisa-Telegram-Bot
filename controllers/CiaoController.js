'use strict'

const Telegram = require('telegram-node-bot');

class CiaoController extends Telegram.TelegramBaseController{
    handler($){
        $.sendMessage('ciao a te ;)');
    }

    get routes(){
        return{
            'rispostaCiaoCommand':'handler'
        };
    }
}

module.exports = CiaoController;