import React, { useState, useEffect } from 'react'
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa'
const url = 'https://randomuser.me/api/'
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg'

function App() {
  const [loading,setLoading] = useState(true)
  const [title,setTitle] = useState('title')
  const [person,setPerson] =useState(null)
  const [value,setValue] = useState('random-person')

  const handleValue = (e) =>{
    console.log(e.target);

  }

  const fetchData = async() =>{
    try {
      setLoading(true)
      const response = await fetch(url);
      const data = await response.json();
      setLoading(false)
      setValue(data)

    } catch (error) {
      console.log(error) 
    }
  }
  
  useEffect(()=>{

  })
  
  return (
   <main>
    <div className='block bcg-black'></div>
    <div className='block'>
      <div className='container'>
        <img src={(person && person.image)|| defaultImage} alt='random-user' className='user-img' />
        <p className='user-title'>my {title} is</p>
        <h3 className='user-value'>helo</h3>
        <div className='values-list'>
          <button 
          className='icon' 
          data-label='name' 
          onMouseOver={handleValue}>
            <FaUser />
          </button>

          <button 
          className='icon' 
          data-label='email' 
          onMouseOver={handleValue}>
            <FaEnvelopeOpen />
          </button>

          <button 
          className='icon' 
          data-label='age' 
          onMouseOver={handleValue}>
            <FaCalendarTimes />
          </button>

          <button 
          className='icon' 
          data-label='street' 
          onMouseOver={handleValue}>
            <FaMap />
          </button>

          <button 
          className='icon' 
          data-label='phone' 
          onMouseOver={handleValue}>
            <FaPhone />
          </button>

          <button
          className='icon' 
          data-label='passwd' 
          onMouseOver={handleValue}>
            <FaLock />
          </button>
        </div>
        <button className='btn' type='button'>
          {loading ? 'loading...': 'random-user'}
        </button>
      </div>
    </div>
   </main>
  );
}

export default App
