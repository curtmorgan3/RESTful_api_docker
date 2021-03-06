const Sequelize = require('sequelize');
const DATABASE_NAME = "marvelDB";

// const sequelize = new Sequelize({
// 	database: DATABASE_NAME,
// 	dialect: 'postgres',
// 	operatorsAliases: false,
// 	define: {
// 		underscored: true
// 	},
// });
const sequelize = new Sequelize('postgres://postgres:password@db:5432/marvelDB', {
	dialect: 'postgres',
	protocol: 'postgres',
	operatorsAliases: false,
	define: {
		underscored: true
	},
	dialectOptions: {
		ssl: false
	}
});

const Character = sequelize.define('character', {
	name: Sequelize.STRING,
	type: Sequelize.STRING,
	abilities: Sequelize.STRING,
});

module.exports = {
	sequelize,
	Character
}
