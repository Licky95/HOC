import React, { PureComponent,Fragment } from 'react';
import HOC from './HOC';

class ButtonClick extends PureComponent{
constructor(props){
    super(props);
}
    render(){
        
       const {count, handleClick} = this.props
        return(
            <Fragment>
        <button name="CalculateClick" onClick={handleClick}>{this.props.name}</button>
        <h1>clicked {count} times</h1>
        </Fragment>
        )
    }
}
    export default HOC(ButtonClick);
