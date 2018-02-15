import React, { Component } from 'react';

class SeachBar extends Component {

    constructor(props) {
        super(props)
        this.state = { term: ''}
    }

    render() {
        return (
            <div className="search-bar">
                <input value={this.state.term} onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term: term})
        this.props.onSearchTermChange(term);
    }

}

const searchBar = () => {
    return <input />
}

export default SeachBar;