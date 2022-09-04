import React, { Component } from 'react';

class Subject extends Component {
    render() {
        return (
            <header>
                <h1><a href='/' onClick={(e) => {
                    e.preventDefault();
                    this.props.onPageChange();
                }}>{this.props.title}</a></h1>
                {this.props.desc}
            </header>
        );
    }
}

export default Subject;