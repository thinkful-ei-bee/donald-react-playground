import React from 'react';

class TheDate extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = { datetime: new Date() };
	  console.log('constructor');
	}
  componentDidMount() {
  	console.log('componentDidMount');
  	this.interval = setInterval(() => {
  		console.log('setInterval');
    	this.setState({
      	datetime: new Date()
    	})
  	}, 1000)
  	// // incorrect way of accessing state; directly mutating state
  	// does not let React know that it's being updated
	  // this.interval = setInterval(() => {
   	//  	this.state.datetime = new Date()
  	// }, 1000)
  	// // prints to console
    // setInterval(() => {
    //   console.log('tick')
    // }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
	render() {
		console.log('render');
	  return (
	    <div>{this.state.datetime.toLocaleString()}</div>
	  )
	}

	// constructor(props) {
	// 	super(props)
	//   	this.state = {
	// 	    foo: 'foo',
	// 	    hello: 'Hello, world!',
	// 	    list: [1, 2, 3],
	// 	    obj: { nested: 'object', yes: true },
	// 	  }
	// }

	// render() {
	// console.log(this.state)
	// 	return (
 //    <div>{this.state.hello}</div>
 //  	)
	// }
}

export default TheDate;