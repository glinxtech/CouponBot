'use strict';

/**
 * 1. Check if name is valid
 * 2. Check that no duplicate coupon exists for that specific user (can be duplicates between users)
 * 3. Add coupon into database
 * 4. Let user know coupon was created
 * Example: ~create kiss
 */
module.exports = function createCommand({ msg, db }, name) {

	/* const couponName = JSON.stringify({ ...name }); */

	msg.channel.send(`Coupon with name ${name} created.`);
};
