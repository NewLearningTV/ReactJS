{/* 챗지피티와 만든 코드입니다 */}

import React from 'react';
import PropTypes from 'prop-types';

function Building({ price, address, available_to_buy}) {
	return (
		<div>
			<h2>Building Details</h2>
			<p>Price: ${price}</p>
			<p>Address: {address}</p>
			<p>{available_to_buy ? 'Available to Buy' : 'Not Available to Buy'}</p>
		</div>
		);
};

Building.propTypes = {
	price: PropTypes.number.isRequired,
	address: PropTypes.string.isRequired,
	available_to_buy: PropTypes.bool.isRequired
};

export default Building;



