import React from 'react';
import CommentBox from './CommentBox'
import PostBody from './PostBody';
import './App.css'
 
 class App extends React.Component {
  constructor() {
     super()
     this.addComment = this.addComment.bind(this)
   }
   state = {
     comments: ['hello1', 'hello2']
   }
   addComment(newComment) {
     this.setState({
     comments: [...this.state.comments, newComment]
     })
   }
   render() {
     return(

       <div className="App">
        <div className="top  clearfix">
         <PostBody comments={this.state.comments}/>
        </div>
        <div className="bottom  clearfix">
         <CommentBox comments={this.state.comments} addComment={this.addComment} />
        </div>
       </div>
     )
   }
 }
 
export default App