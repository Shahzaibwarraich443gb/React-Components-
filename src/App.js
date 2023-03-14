import React from 'react';
import './App.css';
import { toast, ToastContainer } from 'react-toastify';
import Home from './components/Home';
import { Button, Container, Row,Col } from 'reactstrap';
import Course from "./components/course";
import Allcourses from "./components/Allcourses"
import AddCourse from './components/Addcourse';
import Header from './components/Header';
import Menus from './components/Menus';
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
function Shah() {

  const btnhandle = () => {
    toast("this is my first message");
  }

  return (
    <div>
    <Router>
    <ToastContainer /> 
   
    
    <Container>
      <Header/>
      <Row>
        <Col md = {4}> <Menus/></Col>
        <Col md ={8}>
          {/* <Home/> */}
         
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-course" element={<AddCourse  />} />
            <Route path="/view-courses" element={<Allcourses/>} />
            
          </Routes>
          
          </Col>
      </Row>
    </Container>
    </Router>
    </div>
  );
}

export default Shah;
