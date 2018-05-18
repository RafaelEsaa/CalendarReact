import React from 'react';
import 'react-dropdown/style.css';

export default class EmptySearch extends React.Component {
	constructor(props){
		super(props);
	}

	render () {
		return (
			
			<div className="container">
				<div className="row justify-content-center padding-event-card">
					<div className="col-6 no-padding event-card">
	  					<h1 className="title-post text-center">Without results</h1>
	  				</div>
	      		</div>
			</div>
      		
		);
	}
}