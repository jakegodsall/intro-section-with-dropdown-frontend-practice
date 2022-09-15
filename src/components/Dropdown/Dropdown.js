import React from 'react';

import './Dropdown.css';

const Dropdown = props => {
	return <div className='navbar__dropdown'>{props.children}</div>;
};

export default Dropdown;
