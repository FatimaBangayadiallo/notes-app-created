import React from "react";
import Note from "./note";
import { Container, Row } from "react-bootstrap";
import OnlyNote from "./note";
import "./notes.css";
const Notes = (props) => {
  console.log(props.data);
  return (
    <>
      <Container>
        <Row>
          <table id="custum">
            <thead>
              <tr>
                <th>title</th>
                <th>date</th>
                <th>note</th>
                <th>actions</th>
              </tr>
            </thead>
            <tbody>
              {props.data.map((item, index) => {
                return <OnlyNote itemInfo={item} key={index} />;

                // return (
                //   // <tr key={index}>
                //   //   <td>{item.title}</td>
                //   //   <td>{item.date}</td>
                //   //   <td>{item.note}</td>
                //   // </tr>
                // );
              })}
            </tbody>
          </table>
        </Row>
      </Container>
    </>
  );
};
export default Notes;
