import React from "react";
import { Button } from "reactstrap";

const HOME=()=>{
    return(
        <div class="mt-0 p-5 bg-secondary text-white rounded text-center" >
            
        <h1>Learn Courses To Earn!</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
          <Button color="primary">Learn More</Button>
      
        </div>
        
    )
}

export default HOME;