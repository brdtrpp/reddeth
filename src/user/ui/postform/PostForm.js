import React, { Component } from 'react'

class PostForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: ''
    }
  }

  onInputChange(event) {
    this.setState({ title: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()

    if ( this.state.title.length < 2 )
    {
      return alert('Please fill in your title.')
    }

    this.props.onCreatePostFormSubmit(this.state.title)
  }

  render(){
    return (
      <form className="pure-form pure-form-stacked" onSubmit={this.handleSubmit.bind(this)}>
        <fieldset>
          <label htmlFor="title">Title of Post:</label>

          <input id="title" type="text" value={this.state.title}  placeholder="Title" onChange={this.onInputChange.bind(this)} />

          <input type="submit" value="Submit" />
        </fieldset>
      </form>
    )
  }
}

export default PostForm
