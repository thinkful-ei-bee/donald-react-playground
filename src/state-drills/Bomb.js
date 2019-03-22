import React from 'react';

export default class Bomb extends React.Component{

	state ={
		count:0,
		tickTockOrBoom:'tick'
	}
	componentDidMount() {
		this.interval = setInterval(() => {
			let newCount = this.state.count +1;
			let bombStatus = (newCount%2 === 0) ? 'tick' : 'tock';
			if(newCount>=8) {bombStatus = 'BOOM!!!'}
    	this.setState({
      	count: newCount,
      	tickTockOrBoom:bombStatus
    	})
  	}, 1000)
	}

  componentWillUnmount() {
    clearInterval(this.interval)
  }

	render() {
		return (<div>
			<p>{this.state.tickTockOrBoom}</p>
		</div>
		)
	}
}