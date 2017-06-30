import React, { Component } from 'react';

class StatusForm extends Component {
    render() {
        return (
            <div>
                Name: <input type="text"
                            value={this.props.newName}
                            onChange={e=> {this.props.handleChange('newName',e.target.value)}}/>
                <br/>   
                Status: <input type="text"
                                value={this.props.newStatus}
                                onChange={e=> {this.props.handleChange('newStatus',e.target.value)}}/>
                <button onClick={(e) => {this.props.handleSubmit(e)}}>Update Status</button>
            </div>
        );
    }
}

export default StatusForm;