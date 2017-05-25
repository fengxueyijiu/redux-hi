import React from 'react';
import CommentBox from './CommentBox'
import PostBody from './PostBody';
import './App.css'
 
 class App extends React.Component {
   render() {
     return(

       <div className="App">
        <div className="top  clearfix">
         <PostBody />
        </div>
        <div className="bottom  clearfix">
         <CommentBox />
        </div>
       </div>
     )
   }
 }
 
export default App