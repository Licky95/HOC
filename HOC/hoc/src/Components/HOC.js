import React, { Fragment } from 'react';

const HOC = (WrappedComponent) => {
    class NewComponent extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                count: 0
            }
        }
        incrementCount = () => {
            this.setState((prevState) => {
                return { count: prevState.count + 1 }
            })
        }
        render() {
            return (
                <Fragment>
                    <WrappedComponent count={this.state.count} handleClick={this.incrementCount} {...this.props} />
                    
                </Fragment>
            )

        }
    }
    return NewComponent;
}




export default HOC;