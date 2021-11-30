import React from "react";
import { Form, Button } from "react-bootstrap";
class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.rowInfo.title,
      date: props.rowInfo.date,
      note: props.rowInfo.note,
      id: props.rowInfo.id,
    };
  }
  // -------------------------------------handle change function---------------------
  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log("je suis ", this.state);
  };
  // ---------------------------------------------hndle submit---------------------

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.AddFormData(this.state);
    this.setState({
      title: "",
      date: "",
      note: "",
    });
    console.log("je suis soumit");
  };
  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          {/* title */}

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>

            <Form.Control
              type="txt"
              placeholder="enter title"
              name="title"
              onChange={this.handleChange}
              value={this.state.title}
            />
          </Form.Group>

          {/* date */}

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="enter date"
              name="date"
              onChange={this.handleChange}
              value={this.state.date}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>note</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              type="txt"
              placeholder="enter text"
              name="note"
              onChange={this.handleChange}
              value={this.state.note}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </>
    );
  }
}
export default Edit;
