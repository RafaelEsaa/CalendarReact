/*import React from 'react';
import DropdownSelect from './DropdownSelect';

export default class SelectLocation extends React.Component {
	constructor(){
		super();
		this.state={
			dataPokemon: [],
			address: []
		}
	}

	componentWillMount(){
		const urlCourses = 'https://www.4geeksacademy.co/wp-json/4g/v1/locations?';
		fetch(urlCourses, {mode: 'cors'})
		.then(function(response) {
			return response.json();
		})
		.then((data) => {
			this.setState({
				address: data
			});
		})
		.catch(function(error){
			console.log('error', error);
		})
	}

	handleSendLocations(data){
		
	}

	render () {
		const addressObjectInArray = this.state.address.map(function(data) {
			let addressObject = {};
			addressObject['name'] = data.bc_location_slug;
			   
			return addressObject;
		});

		this.handleSendLocations(addressObjectInArray);
		return (
      		<div className="input-select inline-div">
      			<DropdownSelect
				options={addressObjectInArray}
				valueDefault="all locations"
				className="dropdownSelect"
				onSelect={this.handleSendLocations.bind(this)}/>
      		</div>
		);
	}
}*/







import React from 'react';
import DropdownSelect from './DropdownSelect';

export default class SelectLocation extends React.Component {
	constructor(){
		super();
		this.state={
			dataPokemon: [],
		}
	}

	handleSendLocations(data){
		this.props.onSelect(data);
	}

	render () {
		
		return (
      		<div className="input-select inline-div">
      			<DropdownSelect
				options={this.props.locations}
				valueDefault="all locations"
				className="dropdownSelect"
				onSelect={this.handleSendLocations.bind(this)}/>
      		</div>
		);
	}
}