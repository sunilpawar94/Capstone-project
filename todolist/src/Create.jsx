import React, { useState } from 'react'
import axios from 'axios'


function Create() {
    const [task, setTask] = useState()
    const handleadd = () => {
        axios.post('https://capstone-project-gs6w.onrender.com/add', {task: task})
        .then(result => {
          location.reload()
        })
        .catch(err => console.log(err))
    }
  return (
    <div className='create_form'>
      <input type="text" name="" id="" placeholder='Enter Task' onChange={(e) =>  setTask(e.target.value)}/>
      <button type="button" onClick={handleadd}>Add</button>
    </div>
  )
}

export default Create
