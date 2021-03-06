var config = {};

config.twilio = {};
config.firebase = {};

config.twilio.uid = "YOUR TWILIO ID";
config.twilio.auth = "YOUR TWILIO AUTH";
config.twilio.phone = "A TWILIO PHONE # THAT YOU OWN" // $1 per month

config.firebase.apiKey = "YOUR FIREBASE API KEY";
config.firebase.authDomain = "YOUR FIREBASE AUTH DOMAIN";
config.firebase.databaseURL = "YOUR FIREBASE DATABASE";
config.firebase.storageBucket = "YOUR FIREBASE STORAGE BUCKET";
config.firebase.messagingSenderId = "YOUR FIREBASE MESSAGING SENDER ID";


config.verification = "BCRYPT HASH WITH 0 SALT ROUNDS OF YOUR PASSCODE" 

config.pubUrl = "http://campusdining.vanderbilt.edu/?action=cmi_yoir&request=orderqueue_ajax&location_id=752";
module.exports = config;    