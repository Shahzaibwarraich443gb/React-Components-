import React, { Fragment } from "react";
import { FormGroup } from "react-bootstrap";
import { Label,Form,Input, Container, Button } from "reactstrap";
const AddCourse=()=>{
    return(
        <Fragment>
        <h1 className="text-center my-3">Please Fill Complete Course Detail</h1>
            <Form>
                <FormGroup>
                    <Label for="userid">Course id</Label>
                    <Input type="text" 
                    placeholder="Enter Here" 
                    name="userid" 
                    id="userid"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="title">
                    Course Title
                    </Label>
                    <Input type="text" 
                    placeholder="Enter Here" 
                    name="title" 
                    id="title"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="description">Course Description</Label>
                    <Input type="textarea" 
                    placeholder="Enter Description here...." 
                    name="description" 
                    id="description"
                    style={{height: 150}}
                    />
                </FormGroup>
                <Container className="text-center ">
                    <Button color="success">
                        Add Course
                    </Button>
                    <Button color="warning ml-3">
                        Clear
                    </Button>
                </Container>
            </Form>
        </Fragment>
    )
}

export default AddCourse;