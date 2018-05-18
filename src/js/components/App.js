import React from 'react';
import HeaderBanner from './HeaderBanner';

import 'jquery';

export default class App extends React.Component {
	constructor(){
		super();
	}

	render () {
		return (
			<div>
				<HeaderBanner/>
			</div>
		);
	}
}