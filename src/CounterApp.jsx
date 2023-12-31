import { useState } from 'react'
import  PropTypes from 'prop-types';
import React from 'react'

export const CounterApp = ({ value }) => {

    const [counter, setCounter ] = useState( value );

  
    const handleAdd = ( event ) => {
        // console.log(event)
        setCounter( counter + 1 );
        //setCounter( (c) => c + 1  )
    }

    const handleSubs = ( event ) => {

        setCounter( counter - 1);
    }

    const handleReset = ( event ) => {

        setCounter( value )
    }
  
  
  
    return (
    <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>
        <button onClick={  handleAdd }> +1 </button>
        <button onClick={ handleSubs }> -1 </button>
        <button onClick={ handleReset }> Reset</button>

    </>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}