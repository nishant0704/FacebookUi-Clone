import React, { Component } from 'react';
import Header from './js/component/Header/Header';
import Log from './js/component/Log/Log';
import Chat from './js/component/Chat/Chat';
import SideBar from './js/component/SideBar/SideBar';
import Feed from './js/component/Feed/Feed';
import Post from './js/component/Post/Post';
import './App.css';
import './js/component/Header/Header.css';
import './js/component/Chat/Chat.css';
import './js/component/SideBar/SideBar.css';
import './js/component/Feed/Feed.css';
import './js/component/Post/Post.css';

class App extends Component {
  render() {

    return (
      <div className="App">
        <Header/>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2 col-xs-2">
              <SideBar/>
            </div>
            <div className="middle-container col-md-5 col-xs-5">
              <div className="middle-container-top">
              </div>
              <div className="middle-container-bottom">
                <Post/>
                <Post/>
              </div>
            </div>
            <div className="layout-3 col-md-3">
              <Feed/>
              <Feed/>
              <Feed/>
              <Feed/>
              <Feed/>
            </div>
            <div className="Side-container col-md-2">
              <div className="side-top">
                <Log/>
              </div>
              <hr/>
              <span className='chat-header'>FRIENDS</span>
              <div className="side-bottom">
                <Chat/>
              </div>
            </div>
          </div>
        </div>

        
        {/*<div className="Side-container">
        	<div className="Side-container-top col-12">
        		<Log/>
 			    </div>
          <hr/>
 			    <div className="Side-container-bottom">
            <Chat/>
          </div>
 	      </div>
        <div className="Ads col-3">
          <Feed/>
          <Feed/>
          <Feed/>
          <Feed/>
        </div>*/}

      </div>
    );
  }
}

export default App;
