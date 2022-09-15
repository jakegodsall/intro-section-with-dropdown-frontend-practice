import React from 'react';

import './DropdownItem.css';

const DropdownItem = props => {
	return (
		<div className='navbar__dropdown-item'>
			<img
				src={props.image}
				alt={props.alt}
			/>{' '}
			{props.text}
		</div>
	);
};

export default DropdownItem;
