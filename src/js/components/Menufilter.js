import React from 'react';
import DropdownSelect from './DropdownSelect';
import 'react-dropdown/style.css';
import EventCard from './EventCard';
import CourseCard from './CourseCard';
import WorkshopCard from './WorkshopCard';
import EmptySearch from './EmptySearch';

export default class MenuFilter extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			lang : 'en',
			resourceType : 'event',
			courses: [],
			workshops: [],
			events: []
		}
	}

	componentWillMount(){
		console.log('get results API');
		
		const urlCourses = 'https://www.4geeksacademy.co/wp-json/4g/v1/courses?';
		fetch(urlCourses, {mode: 'cors'})
		.then(function(response) {
			return response.json();
		})
		.then((data) => {
			this.setState({
				courses: data
			});
		})
		.catch(function(error){
			console.log('error', error);
		})

		const urlEvents = 'https://www.4geeksacademy.co/wp-json/4g/v1/events?';
		fetch(urlEvents, {mode: 'cors'})
		.then(function(response) {
			return response.json();
		})
		.then((data) => {
			this.setState({
				events: data
			});
		})
		.catch(function(error){
			console.log('error', error);
		})

		const urlWorkshops = 'https://www.4geeksacademy.co/wp-json/4g/v1/workshops?';
		fetch(urlWorkshops, {mode: 'cors'})
		.then(function(response) {
			return response.json();
		})
		.then((data) => {
			this.setState({
				workshops: data
			});
		})
		.catch(function(error){
			console.log('error', error);
		})
	}

	updateResourcesFilter(data){
		console.log(data);
		this.setState({
			resourceType: data.slug
		})
	}

	updateLanguageFilter(data){
		this.setState({
			lang: data.slug
		})
	}

	render () {
		
		/*const objectToCourse = this.state.courses.map(function(data) {
			let courseObjectMap = {};
			courseObjectMap['location'] = data.location;
			   
			return courseObjectMap;
		});*/

		let optionsSelectedEvents = []
        for (let i = 0; i < this.state.events.length; i++) {
            if ('location' in this.state.events[i] && this.state.events[i].location === this.props.sendLocationSelected) {
				optionsSelectedEvents.push(this.state.events[i]);
            }
        }

		let optionsSelectedCourses = []
        for (let i = 0; i < this.state.courses.length; i++) {
            if ('location' in this.state.courses[i] && this.state.courses[i].location === this.props.sendLocationSelected) {
				optionsSelectedCourses.push(this.state.courses[i]);
            }
        }
console.log(optionsSelectedCourses);
		
		let optionsSelectedWorkshop = []
        for (let i = 0; i < this.state.workshops.length; i++) {
            if ('location' in this.state.workshops[i] && this.state.workshops[i].location === this.props.sendLocationSelected) {
				optionsSelectedWorkshop.push(this.state.workshops[i]);
            }
        }

		const resources = [
			{name: 'event', href:'', slug: 'event'},
			{name: 'courses', href:'', slug: 'course'},
			{name: 'workshops', href:'', slug: 'workshop'},
		];
		const language = [
			{name: 'english', href:'', slug: 'en'},
			{name: 'spanish', href:'', slug: 'es'},
		];

		const addressFromHeader = this.props.slugOfLocations.map(function(data) {
			let addressObject = {};
			addressObject['name'] = data.name;
			addressObject['slug'] = data.slug;
			   
			return addressObject;
		});

		let results = null;
		/*if(this.state.resourceType === 'event'){
			 results = this.state.events.map((item, key)=> <EventCard data={item} key={key} lang={this.state.lang}/>);
		}else if(this.state.resourceType === 'event' && this.props.sendLocationSelected === 'Miami Downtown, USA'){
			results = this.state.events.map((item, key)=> <EventCard data={item} key={key} lang={this.state.lang}/>);
		}else if(this.state.resourceType === 'course'){
		 	results = this.state.courses.map((item, key)=> <CourseCard data={item} key={key} lang={this.state.lang}/>);
		}else if(this.state.resourceType === 'workshop'){
		 	results = this.state.workshops.map((item, key)=> <WorkshopCard data={item} key={key} lang={this.state.lang}/>);
		}*/

		if(this.state.resourceType === 'event' && this.state.lang == 'en'){
			results = this.state.events.map((item, key)=> <EventCard data={item} key={key} lang={this.state.lang}/>);
		}else if(this.state.resourceType === 'event' && typeof optionsSelectedEvents !== 'undefined' && optionsSelectedEvents.length > 0){
			results = this.state.events.map((item, key)=> <EventCard data={item} key={key} lang={this.state.lang}/>);
		}else if(this.state.resourceType === 'course' && typeof optionsSelectedCourses !== 'undefined' && optionsSelectedCourses.length > 0){
			results = optionsSelectedCourses.map((item, key)=> <CourseCard data={item} key={key} lang={this.state.lang}/>);
		}else if(this.state.resourceType === 'course'){
			results = this.state.courses.map((item, key)=> <CourseCard data={item} key={key} lang={this.state.lang}/>);
		}else if(this.state.resourceType === 'workshop' && typeof optionsSelectedWorkshop !== 'undefined' && optionsSelectedWorkshop.length > 0){
			results = this.state.workshops.map((item, key)=> <WorkshopCard data={item} key={key} lang={this.state.lang}/>);
		}else if(this.state.resourceType === 'workshop'){
			results = this.state.workshops.map((item, key)=> <WorkshopCard data={item} key={key} lang={this.state.lang}/>);
		}else{
			<EmptySearch/>
		}

		return (
			<div>
				<div className="row row-filter justify-content-md-center">
					<div className="col-md-5 padding-row-filter">
						<p className="no-margin text-row-filter inline-div">Showing</p>
						<DropdownSelect 
						className="dropdownMenu"
						options={resources}
						valueDefault="events"
						onSelect={this.updateResourcesFilter.bind(this)}/>
						<DropdownSelect 
						className="dropdownMenu"
						options={language}
						valueDefault="in all languages"
						onSelect={this.updateLanguageFilter.bind(this)}/>
					</div>
				</div>
				{results}
			</div>
		);
	}
}