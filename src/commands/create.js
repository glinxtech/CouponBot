'use strict';

/**
 * 1. Check if name is valid
 * 2. Check that no duplicate coupon exists for that specific user (can be duplicates between users)
 * 3. Add coupon into database
 * 4. Let user know coupon was created
 * Example: ~create kiss
 */
module.exports = async function createCommand({ msg, db }, name) {
	if (!name) {
        // Required, string is empty or full of empty space
    }
    const users = await db('users').where('name', name);
	/* const couponName = JSON.stringify({ ...name }); */

	msg.channel.send(`Coupon with name ${name} created.`);
};
