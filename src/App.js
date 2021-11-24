import logo from "./logo.svg";
import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";
import Add from "./components/Add";
import Notes from "./components/notes";

class App extends React.Component {
  render() {
    return (
      <>
        {/* the nav bar componet */}
        {/* all----------------------------------------------------- about the App-------------------- */}
        <Container>
          <Row>
            <Col md="4">
              <Add />
            </Col>
            <Col md="6">
              <Notes />
            </Col>
          </Row>
        </Container>

        {/* --------------------------------------------end of the app------------------------------- */}
      </>
    );
  }
}

export default App;
