import React, { useState } from 'react';

export const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e)=>{
       e.preventDefault();
       if(!title || !desc){
           alert('Title and desc cannot be blank');
           return;
       }
        addTodo(title,desc);
        setTitle("");
        setDesc("");
    }
    return (
        <div className="container">
            <h3>Add Todo</h3>
        <form onSubmit ={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" value={title} onChange ={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">Desc</label>
          <input type="text" value={desc} onChange ={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc"/>
        </div>
        <button type="submit" className="btn btn-success btn-sm">Submit</button>
      </form>
      </div>
    )
}
