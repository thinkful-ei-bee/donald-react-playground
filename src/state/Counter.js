import React from 'react';


class Counter extends React.Component {

  // // option 1

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     count: 0
  //   }
  //   this.handleButtonClick = this.handleButtonClick.bind(this)
  // }
  // handleButtonClick() {
  //   console.log('clicked!')
  //   console.log(this.state.count)
  //   // // this wont work
  //   // console.log(this.state.count)
  // }
  // render() {
  //   return (
  //     <div>
  //       <p>The current count: {this.state.count}</p>
  //       {/*onClick={function() {console.log('clicked!')}}*/}
  //       <button
  //         onClick={this.handleButtonClick}
  //       >
  //         Add 1
  //       </button>
  //     </div>
  //   )
  // }

  // // option 2

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     count: 0
  //   }
  // }
  // handleButtonClick() {
  //   console.log('clicked!')
  //   console.log(this.state.count)
  // }
  // render() {
  //   return (
  //     <div>
  //       <p>The current count: {this.state.count}</p>
  //       <button onClick= {() => this.handleButtonClick()} >
  //         Add 1
  //       </button>
  //     </div>
  //   )
  // }

  // option 3

  constructor(props) {
    console.log('props in constructor', props)
    super(props)
    this.state = {
      ...props,
      count: 0
    }
  }
  handleButtonClick = () => {
    // console.log('clicked!')
    // console.log(this.state.count)
    console.log('props in handleButtonClick', this.props)
    console.log('state in handleButtonClick', this.state)
    const newCount = this.state.count + 1* this.state.step
    this.setState({
      count: newCount
    })
  }
  render() {
    return (
      <div>
        <p>The current count: {this.state.count}</p>
        <button onClick={this.handleButtonClick} >
          Add {this.state.step}
        </button>
      </div>
    )
  }

}

export default Counter;