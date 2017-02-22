'use strict'

const Telegram = require('telegram-node-bot');

class MenuMensaController extends Telegram.TelegramBaseController{

    inviaMenu($){

        console.log('-----------');

        var fs      = require('fs');
        var pdf2img = require('pdf2img');
        var gm = require('gm');
        var input   = __dirname + '/pdf.pdf';

        pdf2img.setOptions({
            type: 'jpeg',                      // png or jpeg, default png
            size: 1024,                       // default 1024
            density: 300,                     // default 600
            outputdir: __dirname + '/output', // mandatory, outputdir must be absolute path
            targetname: 'test'                // the prefix for the generated files, optional
        });


        pdf2img.convert(input, function(err, info) {
            if (err) {
                //console.log('File di input non trovato');
                console.log(err)
            }
            else console.log(info);
        });

//        $.sendPhoto({ path: 'test_1.jpg'});
        $.sendMessage('Sta per arrivare..');
        $.sendPhoto({ path: __dirname + '/JPG.jpg'});
    }

    get routes(){
        return{
            'menuMensaCommand':'inviaMenu'
        }
    }
}

module.exports = MenuMensaController;