import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Headline = () => {
  return <h1>Hello World!</h1>
}

const Gretting = (props) => {
  const {name, age} = props;
  return <p>Your name is {name} and your age is {age}</p>
}

Gretting.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number
}

export default class App extends Component {
  render () {
    return (
      <div>
        <Headline />
        <Gretting name={'Marcos'} age={28} />
      </div>
    )
  }
}