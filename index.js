'use strict';

const Discord = require('discord.js');
const knex = require('knex');
const knexConfig = require('./knexfile');
const config = require('./config');
const createBot = require('./src');

const client = new Discord.Client();
const db = knex(knexConfig);

createBot(client, db, config);
