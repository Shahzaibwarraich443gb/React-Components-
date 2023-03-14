import React, { useState } from "react";
import Course from "./course";

const Allcourses=()=>{


    const [courses,setcourses]=useState([
        {title:"Django Course", description:"This is just a testing."},
        {title:"Java Course", description:"This is just a testing."},
        {title:"Reactjs Course", description:"This is just a testing."},
        {title:"Nodejs Course", description:"This is just a testing."}
    ])
    return(
            <div className="text-center">
                <h1>All Courses</h1>
                <p>List of Courses are as Follows </p>
               
                {
                    courses.length>0
                    ? courses.map((item)  => <Course course={item} />)
                    : "No Courses Available Now...!"
                }
                
            </div>
    )
}
export default Allcourses;