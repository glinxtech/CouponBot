'use strict';

exports.up = async function up(knex) {
	return knex.schema.createTable('coupons', table => {
		table.increments('id').notNullable().primary();
		table.text('name').notNullable();
		table.timestamp('expires');
	});
};

exports.down = async function down(knex) {
	return knex.schema.dropTableIfExists('coupons');
};
