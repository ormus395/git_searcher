import React, { Component } from 'react';
import { connect } from 'react-redux';

//Dev componenets
import Button from '../components/button/Button';
import SearchBar from '../components/search/Search';
import UserProfile from '../components/user_profile/UserProfile';

//CSS
import CSS from './App.css';

class App extends Component {

  handleChange = (e) => {
    let {dispatch} = this.props;
    dispatch({ type:'UPDATE_USERNAME', username: e.target.value });
  }

  onUserSearch = () => {
    let {username} = this.props;
    let {dispatch} = this.props;
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => dispatch({
        type: 'UPDATE_USERPROFILE',
        userProfile: data
      }));
  }

  onRepoFetch = () => {
    let {username} = this.props;
    let {dispatch} = this.props;
    fetch(`https://api.github.com/users/${username}/repos`)
      .then(response => response.json())
      .then(data => dispatch({
        type:'UPDATE_REPOS',
        repos: data
      }));
  }

  render() {
    let {userProfile} = this.props;
    let repos = this.props.repos.map((repo, i) => (<li key={i}> <a href={repo.html_url}>{repo.name}</a> </li>))
    return (
      <div className='app'>
        <h1>Search Github User by username:</h1>
        <SearchBar handleChange={this.handleChange} userName={this.props.username} />
        <Button onAction={this.onUserSearch} btnText={'Search'} />
        <hr/>
        {Object.keys(userProfile).length < 1 ? 'Loading...': <UserProfile userProfile={userProfile} />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.username,
    userProfile: state.userProfile,
    repos: state.repos
  }
}

export default connect(mapStateToProps)(App);
