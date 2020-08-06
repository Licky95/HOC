import React from 'react';
import HOC from './HOC';

class DivHover extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log(this.props)
        const {count, handleClick}=this.props
        return(
        <div onMouseOver={handleClick}>clicked {count} times</div>
        )
    }
}

export default HOC(DivHover);