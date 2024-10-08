import React from 'react'

interface Tprops {
    name: string;
    age: number;
    rollno: number;
    class: string;
}

// Define the Card component with props type

const Card = (props: Tprops) => {
  return (
    <>

    <div className='justify-items-center hover:bg-red-500 w-60 h-22 bg-purple-500 text-black-500 border border-blue-400 mt-2 p-2 ' >

        <h1>Name: {props.name}</h1>
        <h1>Age: {props.age}</h1>
        <h1>Roll No: {props.rollno}</h1>
        <h1>Class: {props.class}</h1>
        <h4 className='justify-end items-end flex pt-2'>Authorized Signature</h4>

    </div>
      
      </>
  )
}

export default Card;

