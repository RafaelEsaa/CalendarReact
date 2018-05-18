/*import React from 'react';
import SelectLocation from './SelectLocation';
import MenuFilter from './MenuFilter';
import Calendar from './Calendar';

export default class HeaderBanner extends React.Component {
	constructor(){
		super();
		this.state = {
			locationSelected: [],
		}
	}


	getLocationsFromSelectLocations(data){
		
	}

	render () {
		return (
			<div className="scroll-horiz">
				<div className="background-header">
				  	<div className="row justify-content-md-center">
				    	<div className="col-md-8">
				      		<div className="inline-div">
				      			<h3 className="white title-banner-header">Select a Location: </h3>
				      		</div>
			      			<SelectLocation onSelectOptions={this.getLocationsFromSelectLocations.bind(this)}/>
			      			<h3 className="white title-banner-header">to discover our available courses, workshops and events.</h3>
				    	</div>
				  	</div>
				</div>
				<MenuFilter selectLocationSelected={this.state.locationSelected}/>
				<Calendar/>
			</div>			
		);
	}
}*/

import React from 'react';
import SelectLocation from './SelectLocation';
import MenuFilter from './MenuFilter';
import Calendar from './Calendar';

export default class HeaderBanner extends React.Component {
	constructor(){
		super();
		this.state = {
			address: [],
			locationsForComparation: ''
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

	getLocationSelected(data){
		console.log(data.name);
		this.setState({
			locationsForComparation: data.name,
		})
	}

	render () {

		const addressObjectInArray = this.state.address.map(function(data) {
			let addressObject = {};
			addressObject['name'] = data.post_title;
			addressObject['slug'] = data.bc_location_slug;
			   
			return addressObject;
		});

		return (
			<div className="scroll-horiz">
				<div className="background-header">
				  	<div className="row justify-content-md-center">
				    	<div className="col-md-8">
				      		<div className="inline-div">
				      			<h3 className="white title-banner-header">Select a Location: </h3>
				      		</div>
							  <SelectLocation 
							  onSelect={this.getLocationSelected.bind(this)}
							  locations={addressObjectInArray}/>
			      			<h3 className="white title-banner-header">to discover our available courses, workshops and events.</h3>
				    	</div>
				  	</div>
				</div>
				<MenuFilter 
				slugOfLocations={addressObjectInArray} 
				sendLocationSelected={this.state.locationsForComparation}/>
				<Calendar/>
			</div>			
		);
	}
}