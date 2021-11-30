import React, { Component } from "react";
import { Navbar, Container } from "react-bootstrap";

class NavBar extends Component {
  render() {
    return (
      <>
        {/* <Navbar bg="dark" variant="dark"> */}
        <Container style={{ backgroundColor: " #04aa6d" }} fluid>
          <Navbar.Brand href="#home">
            {/* <img
              alt=""
              src="https://www.imore.com/sites/imore.com/files/styles/large_wm_blw/public/field/image/2020/06/ipad-pro-notes-lines-grids-hero.jpg"
              width="130"
              height="100"
              className="d-inline-block align-top"
            />{" "} */}
            <h1
              style={{
                marginLeft: "29rem",
                marginBottom: "2rem",
                color: "#ddd",
              }}
            >
              App For Students Notes
            </h1>
          </Navbar.Brand>
        </Container>
        {/* </Navbar> */}
      </>
    );
  }
}
export default NavBar;
