import React, { useEffect, useState } from 'react'
import axios from "axios";

function Course() {
  const [book, setBook] = useState([]);

  const getAllBooks = async() =>{
    try {
      const respons = await axios.get('http://localhost:8080/book');
      console.log(respons);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllBooks();
  }, [])
  return (
    <div>
      Course page
    </div>
  )
}

export default Course
