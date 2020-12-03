import React, { useState } from 'react';


const Form = ({createNewPerson}) => {
    const initialState = {
        name:'',
        email:'',
        role: ''
    }
    const [inputValue, setInputValue ] = useState({
        name:'',
        email:'',
        role: ''
    })
    // console.log(inputValue)

    const changehandler = (event) => {
       setInputValue(
            {...inputValue, [event.target.name]: event.target.value }
            )
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        createNewPerson(inputValue);
        setInputValue(initialState)
    }

    return (
        <>
        <form onSubmit={handleSubmit}>

                <label htmlFor='name'>Name:</label>
                <input id='name' 
                type='text'
                name='name'
                value={inputValue.name}
                onChange={changehandler}
                />


         
                <label htmlFor='email'>Email:</label>
                <input 
                id='email'
                type='text'
                name='email'
                value={inputValue.email}
                onChange={changehandler}
                />
   
            
      
                <label htmlFor='role'>Role:</label>
                <input 
                id='role'
                type='text'
                name='role'
                value={inputValue.role}
                onChange={changehandler}
                />
     
            <button>Submit</button>
        </form>
        </>
    )

}

export default Form;