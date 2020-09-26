'use strict';

const createBot = require('..');
const commands = require('../commands');

jest.mock('../commands', () => ({
	mockCommand: jest.fn(),
}));

describe('message event', () => {
	let message = null;
	let client = null;

	beforeEach(() => {
		client = {
			on: jest.fn().mockImplementation((eventName, fn) => {
				if (eventName === 'message') message = fn;
			}),
			login: jest.fn(),
		};
	});

	afterEach(() => {
		message = null;
		client = null;
	});

	test('Runs a valid command', () => {
		createBot(client, {}, {
			commandPrefix: '~',
			token: 'MOCK_TOKEN',
		});

		expect(message).not.toBeNull();
		expect(commands.mockCommand).not.toHaveBeenCalled();
		const msg = { content: '~mockCommand ay yo im a bee' };
		message(msg);
		expect(commands.mockCommand).toHaveBeenCalledWith(msg, 'ay', 'yo', 'im', 'a', 'bee');
	});

	test.skip('do nothing if the message does not start with the command prefix', () => {
		createBot(client, {}, {
			commandPrefix: '~',
			token: 'MOCK_TOKEN',
		});

		expect(message).not.toBeNull();

		expect(commands.mockCommand).not.toHaveBeenCalled();
		message({ content: 'mockCommand ay yo im a bee' });
		expect(commands.mockCommand).not.toHaveBeenCalled();
	});
});
