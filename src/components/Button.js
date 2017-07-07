import React, { Component } from 'react';
import './Button.scss';
class Button extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let cls = 'btn ' + (this.props.class?this.props.class:'');
        console.log(cls);
        return (
            <a className={cls} href={this.props.value}>
                <span>{this.props.txt}</span>
            </a>
        )
    }
}
export default Button;