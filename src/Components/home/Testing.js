import React from 'react';
import { useEffect} from 'react';
import { useState } from 'react';

/* function getUsers() {
  fetch(`https://iiitv-classroom.herokuapp.com/course/all`)
  .then((response) => response.json())
  .then(users => console.log(users));
} */


export function Testing() {


    const [userData, setUserData] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch("https://iiitv-classroom.herokuapp.com/course/CS301");
    const jsonData = await response.json();
    setUserData(jsonData);
  };
  console.log(userData);
  
  return (
    <div>
      This is a sample component
     {/* {userData} */}
      
    </div>
  );
}