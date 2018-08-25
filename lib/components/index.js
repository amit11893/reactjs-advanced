import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    state = {
        value: 42,
    }
    asyncFunc(){
        return Promise.resolve(37);
    }
    async componentDidMount(){
        this.setState({
            value: await this.asyncFunc(),
        })
    }

    render(){
        return (
            <div>{this.state.value}</div>
        )
    } 
}
ReactDOM.render(<App />, document.getElementById('root'));