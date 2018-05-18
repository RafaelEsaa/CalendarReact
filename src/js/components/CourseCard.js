import React from 'react';
import 'react-dropdown/style.css';

export default class CourseCard extends React.Component {
	constructor(props){
		super(props);

		this.state = {
    		selectedOption: '',
		}
	}

	render () {
		return (
			
			<div className="container">
				<div className="row justify-content-center padding-event-card">
					<div className="col-6 no-padding event-card">
	  					<h1 className="title-post">{this.props.data.name}</h1>
	  					<p className="inline-div"><strong>Starts: {this.props.data.date}</strong> </p>
	  					<p className="inline-div">
	                      <strong>
							  at <span className="imoon icon-location"></span> 
	                        <a href="https://www.4geeksacademy.co/calendar/">{this.props.data.location}</a>
	                      </strong>
	                  	</p>
	                  	<p className="">
	                  		{this.props.data.short_description}
	                  	</p>
	  				</div>
	  				<div className="col-3 event-card ">
						<button type="button" className="btn btn-secondary learn-more">Learn More</button>
	  				</div>
	      		</div>
			</div>
      		
		);
	}
}