module.exports = function(sequelize, DataTypes) {
     return sequelize.define('contact', {
        name: DataTypes.STRING,
        address: DataTypes.STRING, 
        owner: DataTypes.INTEGER,
        email: DataTypes.STRING
      
    },{
});
};

