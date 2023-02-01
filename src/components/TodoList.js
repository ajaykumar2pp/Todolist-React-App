import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import api from "../api/todolist";
import './Ajay.css'
import { IoTrashBin } from "react-icons/io5";
import { FaPen } from "react-icons/fa";
import Button from 'react-bootstrap/Button';



function TodoList() {
  const [post, setPost] = useState([]);

  function getAlbum() {
    api.get("/todos").then((response) => {
      // console.log(response.data)
      setPost(response.data);
    });
  }
  useEffect(() => {
    getAlbum();
  }, []);

  function handleUpdate(id, title) {
    localStorage.setItem("id", id);
    localStorage.setItem("title", title)

  }


  function handleDelete(id) {
    api.delete(`/todos/${id}`).then((response) => {
      console.log('Delete Todolist', response.data);
    });
  }
  return (
    <>

      <div className="App mt-3 mb-3" >
        <h1>Todo List</h1>
        <Link to="/add"><button className="btn btn-primary mx-auto" >Add Todolist</button></Link>
      </div>


      <div className="container mt-4">
        <div className="row justify-content-center" >
          <div className="col-md-6  j">
            {post.slice(0, 20).map((post, i) => {

              return (

                <div className=" shadow-sm border border-info rounded p-2 mt-3" key={i}>
                  <div className=''>
                    <span className=' card-header rounded h2 text-red'>{post.id}</span>
                    <div className='float-end shadow-sm me-2'>
                      <Link to="/update"> <Button variant='me-3'><FaPen className='icon' onClick={() => { handleUpdate(post.id, post.title) }} /></Button></Link>
                      <Button variant='me-3' > <IoTrashBin className='icon' onClick={() => { if (window.confirm(`Are you want to sure Todo delete ${post.id}`)) { handleDelete(post.id) } }} />  </Button>
                    </div>
                    <h5 className="mt-4 AddTask mb-3 ">{post.title}</h5>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

    </>

  );
}

export default TodoList;
