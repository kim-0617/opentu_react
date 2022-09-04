import React, { Component } from 'react';

class Control extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><a href="/create" onClick={(e) => {
                        e.preventDefault();
                        this.props.onChangeMode('create');
                    }}>create</a></li>
                    <li><a href="/update" onClick={(e) => {
                        e.preventDefault();
                        this.props.onChangeMode('update');
                    }}>update</a></li>
                    <li><span onClick={(e) => {
                        e.preventDefault();
                        this.props.onChangeMode('delete');
                    }}>delete</span></li>
                </ul>
            </div>
        );
    }
}

export default Control;