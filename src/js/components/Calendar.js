import React from 'react';
import 'react-dropdown/style.css';
import EventCard from './EventCard';

export default class Calendar extends React.Component {
	constructor(props){
		super(props);

		this.state = {
    		selectedOption: '',
		}
	}

	render () {
		return (
			<div></div>
		);
	}
}