import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {

    static propTypes = {

        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired
    
    };

    state = {
        text: ''
    };

    onChange = event => this.setState({text: event.target.value});

    onSubmit = event => {

        event.preventDefault();

        if(this.state.text === ''){

            this.props.setAlert('Please enter something', 'light');

        }
        else{
            
            this.props.searchUsers(this.state.text);
            this.setState({ text: '' });

        }

    }

    render() {

        const showClear = this.props.showClear;
        const clearUsers = this.props.clearUsers;

        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input type="text" name="text" placeholder="Search users..." value={this.state.text} onChange={this.onChange}/>
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                </form>

                {showClear && <button className="btn btn-light btn-block" onClick= {clearUsers}>Clear</button>}

                
            </div>
        )
    }
}




export default Search
