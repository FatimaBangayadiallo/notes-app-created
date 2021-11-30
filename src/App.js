import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";
import Add from "./components/Add";
import Notes from "./components/notes";
import NavBar from "./components/navbar";
import moment from "moment";

class App extends React.Component {
  constructor(props) {
    super(props);
    // const date = new Date().toISOString();
    const date = moment(new Date()).format("DD/MM/YYYY");
    this.state = {
      notesBook: [
        {
          id: "12233shghdfjksdjsjas098",
          title: "Router",
          date: date,

          note: " react router help us to moove one page to another inside react app",
        },
        {
          id: "456789hdfthvjjh0987675",
          title: "hooks",
          date: date,
          note: " react router help us to moove one page to another inside react app",
        },
        {
          id: "458734732sgdfdjk132423",
          title: "redux",
          date: date,
          note: " react router help us to moove one page to another inside react app",
        },
      ],
    };
    console.log(this.state);
    console.log(this.state.notesBook.title);
  }
  // -------------------------------------------add form data---------------------
  AddFormData = (noteObjec) => {
    noteObjec.id = Math.random().toString();
    this.setState({
      notesBook: [...this.state.notesBook, noteObjec],
    });
  };

  render() {
    return (
      <>
        {/* the nav bar componet */}
        <NavBar />
        {/* all----------------------------------------------------- about the App-------------------- */}
        <Container style={{ marginTop: "3rem" }} fluid>
          <Row>
            <Col md="4">
              <Add AddFormData={this.AddFormData} />
            </Col>
            <Col md="6">
              <Notes data={this.state.notesBook} />
            </Col>
          </Row>
        </Container>

        {/* --------------------------------------------end of the app------------------------------- */}
      </>
    );
  }
}

export default App;
