#!/usr/bin/env node

var config = require('./config.json');

var express = require('express')
var request = require('request')
var multer  = require('multer');

var app = express();
var upload = multer({ dest: '/tmp/' });

//LEGACY use Config file moving foward
//User Settings
//Your IFTTT Webhook Key
//var iftttKey = '';
//var deviceuuid = '';

var iftttKey = '/with/key/'+config.yourKey;
var deviceuuid = config.yourDevice;

var iftttLink = 'https://maker.ifttt.com/trigger/';

app.post('/', upload.single('thumb'), function (req, res, next) {
    var payload = JSON.parse(req.body.payload);
    var play = 'media.play';
    var stop = 'media.stop';
    var pause = 'media.pause';
    var resume = 'media.resume';
    var timeStamp = new Date();
  
    console.log(" TimeStamp:  "+timeStamp);
    console.log("    Device:  "+payload.Player.uuid);
    console.log("Media Type:  "+payload.Metadata.type);
    console.log("     Event:  "+payload.event);

//Shield TV Theater Control
  if (payload.Player.uuid == deviceuuid && payload.Metadata.type != 'track') {
        if (payload.event == play || payload.event == resume) {
            request.post(iftttLink+play+iftttKey);
        //Log Action
            console.log(iftttLink+play+iftttKey+'\n')}

        else if (payload.event == stop || payload.event == pause) {
            request.post(iftttLink+stop+iftttKey);
        //Log Action
            console.log(iftttLink+stop+iftttKey+'\n')}

        else {
            console.log('Unsupported Event \n');
        }
}
    else {
        console.log('Unsupported Device \n');
    }
    res.sendStatus(200);
});

app.listen(3000);
