var Sequelize = require('sequelize');
var sequelize = new Sequelize(process.env.DATABASE_URL, {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432

});

sequelize.authenticate().then(
    function() {
        console.log('connected to Addresss postgres db');
    },
    function(err){
        console.log(err);
    }
);

var User = sequelize.import('./models/user');  
var Log = sequelize.import('./models/log');
// var Definition = sequelize.import('./models/definition');
var Contact = sequelize.import('./models/contact');


sequelize.sync()
module.exports = sequelize;