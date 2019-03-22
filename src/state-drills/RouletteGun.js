import React from 'react';

export default class RouletteGun extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			...props,
			spinClickorBang:'text',
			chamber:null,
			spinningTheChamber:false,
    }
	}

  componentWillUnmount() {
    clearTimeout(this.timeout)
	}

	pullTrigger = () => {
		console.log(this.state);
		this.setState({
			spinningTheChamber: true
		})
		this.timeout = setTimeout(() => {
			this.setState({
				chamber:Math.ceil(Math.random() * 8),
				spinningTheChamber:false,
			})
		}, 2000)
	}

	gunStatus = () => {
		const { chamber, spinningTheChamber } = this.state
		const { bulletInChamber } = this.props
		if(spinningTheChamber) {
			return 'spinning the chamber and pulling the trigger! ...'
		}
		if(bulletInChamber === chamber) {
			return 'BANG!!!!'
		} else {
			return 'you\'re safe!'
		}

	}

	render() {
		return(
			<div>
				<p>{this.gunStatus()}</p>
				<button onClick={() => this.pullTrigger()}>Pull the trigger!</button>
			</div>
		)
	}
}