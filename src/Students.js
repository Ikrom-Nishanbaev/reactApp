import React, { Component } from 'react';

class StudentDetails extends Component{
    render(){
    //console.log(this.props);
    const {name, occupation, age  } = this.props;
        return(
            <div className='StudentDetails'>
                <div>Name: {name}</div>
                <div>Age: {age}</div>
                <div>Occupation: {occupation}</div>
            </div>

        )
    }   
}
export default StudentDetails;