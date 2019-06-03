import React, { Component } from 'react';

class Cases extends Component {
    render() {
        fetch(`https://api.github.com/`).then(response => {
            response.json().then(data => {
                console.log(data);
            });
        })

        return (
            <div>
                <h2>Cases</h2>
            </div>
        );
    }
}

export default Cases;