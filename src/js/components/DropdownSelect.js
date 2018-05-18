import React from 'react';

export default class DropdownSelect extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
    	isToggleOn: false,
		select: this.props.valueDefault,
		hover: false
    };

    	// This binding is necessary to make `this` work in the callback
    	
	}

	toggleCollapse() {
		this.setState(prevState => ({
			isToggleOn: !prevState.isToggleOn,
		}));

		if(!this.state.isToggleOn){
			this.mouseOut();
		}
	}

	handleOptionsSelect(data) {
		this.setState(prevState => ({
			select: data.name,
			isToggleOn: !prevState.isToggleOn
		}));
		this.props.onSelect(data);
	}

	hoverMouse(){
		this.setState({
			hovered: true
		})
	}

	mouseOut(){
		this.setState({
			hovered: false
		});
		if(this.state.isToggleOn) setTimeout(() =>{
			if(!this.state.hovered){
				this.setState({
					isToggleOn: false
				});
			}
		}, 1300)
	}

	render() {
	
	const options = this.props.options;
	const dropdownEvents = options.map((data) =>
		
			<p onClick={(e) => this.handleOptionsSelect(data)} className="title">
				{data.name}
			</p>
		
	);

    return (
			<div className="inline-div">
				<div className={this.props.className}>
					<button type="button" 
							onClick={this.toggleCollapse.bind(this)}>
						{this.state.select}
					</button>
					<div className={this.state.isToggleOn ? 'show' : 'hidden'} 
						onMouseOut={this.mouseOut.bind(this)}
						onMouseOver={this.hoverMouse.bind(this)}
						>
						{dropdownEvents}
					</div>
  				</div>
			</div>
    );
  }
}