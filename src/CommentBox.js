import React from 'react'
 
 class CommentBox extends React.Component {
   constructor(){
   	super();
   	this.handleSubmit = this.handleSubmit.bind(this)
   	this.state={
   		comments:[
   			'hello1',
   			'hello2'
   		]
   	}
   }
   handleSubmit(e){
   	e.preventDefault()
   
   	const content = this.textInput.value
   	console.log(content)
     // this.setState({ comments: [...this.state.comments, content] })
     this.refs.commentForm.reset()
     this.props.addComment(content)

   }
   render() {
   	let commentsList = this.props.comments.map((item) => (
       <div className="comment" key={Math.random()}>{item}</div>
     ))
     return(

       <div className="comment-box">
         {commentsList}
         <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
           <input type="text" className="input" ref={(value) => { this.textInput = value}}/>
           <button type="submit" className="submit-btn" >提交</button>
         </form>
         <div className="underline"></div>
       </div>
     )
   }
 }
 
export default CommentBox