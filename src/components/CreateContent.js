import React, { Component } from 'react';

class CreateContent extends Component {
    render() {
        return (
            <article>
                <h2>Create</h2>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    const title = e.target[0].value;
                    const desc = e.target[1].value;
                    this.props.getData(title, desc);
                }}>
                    <p><span>제목 : </span><input type="text" name="title" placeholder="title.."></input></p>
                    <p><span>본문 : </span><textarea name="desc" cols="30" rows="10" placeholder="desc.."></textarea></p>
                    <input type="submit"></input>
                </form>
            </article>
        );
    }
}

export default CreateContent;