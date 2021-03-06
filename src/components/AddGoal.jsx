import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalRef } from '../firebase';

class AddGoal extends Component {
  constructor (props) {
    super(props);
    this.state ={
      title: '',
    }
  }
  AddGoal () {
    console.log('this', this);
    const { title } = this.state;
    const { email } =  this.props.user;
    goalRef.push({email, title});
  }
render() {
  return(
<div className="form-inline">
  <div className="form-group">
    <input 
    type="text"
    placeholder="Add a Goal"
    className="form-control"
    style={{marginRight:'5px'}}
    onChange={event => this.setState({title:event.target.value})}
    />
    <button
    style={{margin: '5px'}}
    className="btn btn-success"
    type="button"
    onClick = {() => this.AddGoal()}
    > Submit
      </button>


  </div>


</div>

  )
}
}
function mapStateToProps(state) {
  const { user } = state;
  console.log('state in AddGoal.jsx', state);
  return {
    user
  }
}
export default connect(mapStateToProps, null) (AddGoal);