import React from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container,
} from "reactstrap";

const Course = ({ course }) => {
    return (
        <div >
            <Card body
    className="my-2 text-center" >
                <CardSubtitle className="text-center" tag="h5">
                    {course.title}
                </CardSubtitle>

                <CardText className="text-center">
                    {course.description}
                </CardText>
               
                <Container className="text-center">
                <Button color="danger">
                    Delete
                </Button>
                <Button color="warning ml-3">
                    Update
                </Button>
                </Container>
            </Card>
        </div>
    )

}

export default Course;