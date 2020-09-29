import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Navbar from './components/headerComponents/navbar'
import Login from './login.js'

class App extends Component {

  render() {
    return (
      < div className = "App" >

      <Provider store={this.props.store}>
        <Router>
          <Navbar />
          <Route
            exact path='/login'
            component={
              (props) => <Login {...props} store={this.props.store} />
            }
          />
        </Router>
      </Provider>

    </div >
    )
  }
}

export default App;
