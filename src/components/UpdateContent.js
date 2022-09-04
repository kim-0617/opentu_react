import React, { Component } from 'react';

class UpdateContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            id : this.props.data[0].id,
            title : this.props.data[0].title,
            desc : this.props.data[0].desc,
        }
    }

    inputFormHandler = (e)  => {
        e.preventDefault();
        this.setState({[e.target.name] : e.target.value});
    }

    render() {
        return (
            <article>
                <h2>Update</h2>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    const id = e.target[0].value
                    const title = e.target[1].value;
                    const desc = e.target[2].value;
                    this.props.getData(id,title, desc);
                }}>
                    <input type="hidden" name = "id" value = {this.state.id}></input>
                    <p>
                        <span>제목 : </span>
                        <input type="text" 
                        name="title" 
                        placeholder="title.." 
                        value={this.state.title}
                        onChange = {this.inputFormHandler}
                        >
                        </input>
                    </p>
                    <p>
                        <span>본문 : </span>
                        <textarea name="desc" cols="30" rows="10" 
                        placeholder="desc.." 
                        value={this.state.desc}
                        onChange = {this.inputFormHandler}
                        >
                        </textarea>
                    </p>
                    <input type="submit"></input>
                </form>
            </article>
        );
    }
}

export default UpdateContent;