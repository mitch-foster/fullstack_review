import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

import logo from './logo.svg';
import StatusForm from './components/StatusForm';
import StatusList from './components/StatusList';
import {getStatuses} from './ducks/reducer';
import {submitStatus} from './ducks/reducer';

import './App.css';

class App extends Component {
  constructor(props) {
        super(props);
        this.state = {
            newName: '',
            newStatus: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
      // axios.get('/api/getstatus')
      // .then(
      //         response => {
      //                       this.setState({
      //                         statuses: response.data
      //                       })
      //                     }
      //     )
      this.props.getStatuses();
    }

    handleSubmit(event){
      // this.setState({
      //   statuses: [...this.state.statuses, {name: this.state.newName, status: this.state.newStatus} ],
      //   newName: '',
      //   newStatus: '',
      // })
      this.props.submitStatus(this.state.newName, this.state.newStatus);

    }
    handleChange(property, value){
      console.log(`Add the value ${value} to ${property}`)
      this.setState({
        [property]: value,
      })
    }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Leave your message</h2>
        </div>
        <p className="App-intro">
          <StatusForm handleSubmit={this.handleSubmit}
                      handleChange={this.handleChange}
                      name={this.state.newName}
                      status={this.state.newStatus}
                      />

          <StatusList data={this.props.statuses}/>
        </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state)
  return state
}

export default connect(mapStateToProps, {getStatuses, submitStatus})(App);
