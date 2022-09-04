import React, { Component } from 'react';

class TOC extends Component {
    render() {
        const data = this.props.data;
        const list = [];
        for(let i = 0; i < data.length; i++){
            list.push(<li key = {data[i].id}>
                <a href={'content/' + data[i].id} onClick = {(e) => {
                    e.preventDefault();
                    this.props.onPageChange(data[i].id);
                }}>
                    {data[i].title}
                </a></li>
            );
        }
        return (
            <ul>
                {list}
            </ul>
        );
    }
}

export default TOC;