import React from 'react';

export default class FetchRandomUser extends React.Component {

    state = {
        loading: true,
        user: null
    }

    async componentDidMount() {
        const url = "https://api.randomuser.me/";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState({loading: false, user: data.results[0]})
    }

    render() {
        return ( 
        <div>
            { this.state.loading ? <div>loading ...</div> : <div>{this.state.user.name.first}</div> }
        </div>
        )
    }
}