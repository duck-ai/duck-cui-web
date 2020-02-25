import React from 'react'

import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: '' } // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this)
  }

  render () {
    return <ReactQuill value={this.state.text}
      onChange={this.handleChange} />
  }

  handleChange(value) {
    this.setState({ text: value })
  }
}