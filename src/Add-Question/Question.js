import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import './Question.css'
import axios from 'axios'
// import { TagsInput } from 'react-tag-input-component'

function Question() {
  const [title,setTitle]=useState([])
  const [question,setQuestion]=useState([])
  const [tag,setTag]=useState([])
  const [body,setBody]=useState([])

  
  let toolbarOption =  [
    ["bold", "italic", "underline", "strike"], 
    ["blockquote", "code-block"],

    [{ header: 1 }, { header: 2 }], 
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }], 
    [{ indent: "-1" }, { indent: "+1" }], 
    [{ direction: "rtl" }], 

    [{ size: ["small", false, "large", "huge"] }], 
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], 
    [{ font: [] }],
    [{ align: [] }],

    ["clean"], 
  ];


  

  // const handleclick= async (env)=>{
  //   let question = await axios.get(`${env.api}`)
  //   console.log(question);


    const handleSubmit = async(e)=>{
      let env;
      e.preventDefault()
      console.log(e);
      
      if(title !== "" &&  body !== ""){
        const bodyJson = {
          title : title,
          body : body,
          tag : JSON.stringify(tag),
         
        };
        await  axios.post(`/${env.api}/question`,bodyJson).then((res)=>{
          alert("Question can be added successfully")
        })
        .catch((error)=>{
          console.log(error);
        })

      }
    
    }
  
  return (
    <div>
      <div className='add-question'>
        <div className='add-question-container'>
            <div className='head-title'>
                <h2>ASK A QUESTION</h2>
            </div>
            <div className='question-container'>
                <div className='question-option'>
                <div className='question-option'>
                <div className='title'>
                    <h3>Title</h3>
                    <small>Be specific amd imaging you are asking question for another person</small>
                    <input type="text" placeholder='Add question title' />
                    <ReactQuill  className='react-quill' theme='snow'/>
                </div>
                <div className='question-option'>
                <div className='title'>
                    <h3>Body</h3>
                    <small>Include all the information someone would need to answer your question</small>
                    <input  value={title} onChange={(e)=>setTitle(e.target.value)} type="text" placeholder='Add question title'>
                    
                    </input></div>
                </div>
                <div className='question-option'>
                    <div className='title'>
                        <h3>Tags</h3>
                        <p>Add up to 5 tags to describe what is you question about for</p>
                        {/* <TagsInput name='tags' placeHolder='Enter a new Tag' /> */}
                        <input type='text' placeholder='Enter a  Tag' />
                    </div>
                </div>
                </div>
                </div>
                <button onClick={(e)=>handleSubmit(e.target.value)}  className='button'>Add your question</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Question