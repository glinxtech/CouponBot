'use strict';

const stringcase = require('knex-stringcase');

module.exports = stringcase({
	development: {
		client: 'sqlite3',
		connection: { filename: 'db.dev.sqlite3' },
	},
	production: {
		client: 'sqlite3',
		connection: { filename: 'db.sqlite3' },
	},
	test: {
		client: 'sqlite3',
		connection: { filename: 'db.test.sqlite3' },
	},
});
