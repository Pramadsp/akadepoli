import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import { loginStatus } from './redux/actions/loginstatus'
import { sessionToken } from './redux/actions/session'


export default class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: null,
      password: null
    }
  }

  onChanges(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  Submit = async () => {
    try {
      var respon = await axios.post(process.env.REACT_APP_BACKEND + 'login', {
        email: this.state.email,
        password: this.state.password
      })
      console.log(respon)
      this.props.store.dispatch(loginStatus(true))
      this.props.store.dispatch(sessionToken(respon.data.sessionToken))
    } catch (e) {
      console.log(e)
      alert('salah')
    }
  }


  render() {
    return (
      <React.Fragment>
        <div className="container vh-100 d-flex justify-content-center align-items-center">
          <div className="card">
            <div className="card-header">
              <h2>Login</h2>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label>E-mail</label>
                <input type="text" className="form-control" name="email" value={this.state.email} onChange={this.onChanges.bind(this)} />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.onChanges.bind(this)} />
              </div>
              <button type="button" className="btn btn-primary" onClick={this.Submit.bind(this)}>Login</button>

            </div>
          </div>
        </div>
      </React.Fragment >
    )
  }
}


