'use strict';

const Telegram = require('telegram-node-bot'),
    tg = new Telegram.Telegram('343519634:AAFGqqUtnAqq_GyAFnkgWb035MIrJDHxgS8',{
        //workers setta il numero di core usati dal bot se non specificato li usa tutti
        workers: 1
    });

const PingController = require('./controllers/ping');
const CiaoController = require('./controllers/CiaoController');
const MenuMensaController = require('./controllers/menuMensa');
const OtherwiseController = require('./controllers/otherwise');

tg.router.when(new Telegram.TextCommand('/ping', 'pingCommand'), new PingController())
    .when(new Telegram.TextCommand('/ciao', 'rispostaCiaoCommand'), new CiaoController())
    .when(new Telegram.TextCommand('/menu', 'menuMensaCommand'), new MenuMensaController())
    .otherwise(new OtherwiseController());