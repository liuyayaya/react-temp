import React, { Component } from 'react';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }
    componentDidMount() {
        var _self = this;
        fetch('//localhost:9090/profile', {
            method: 'GET',
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('数据',data);
            _self.setState({
                name: data.name
            });
        });;
    }
    render() {
        return (
          <div className="indexPage">
              <div>
                  <div className="tip">helllo,world</div>
                  <div className="tip">hi,{this.state.name} welcome to this project!</div>
              </div>
          </div>
        );
    }
}

export default Index;
