import React from "react";
import Note from "./note";
import { Container, Row } from "react-bootstrap";
import OnlyNote from "./note";
import "./notes.css";
import { connect } from "react-redux";
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
              {props.notesBook.map((item) => {
                return (
                  <OnlyNote
                    itemInfo={item}
                    key={item.id}
                    EditRow={props.EditRow}
                    DeleteRow={props.DeleteRow}
                  />
                );

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
const mapStateToProps = (state) => {
  return {
    notesBook: state.notesBook,
  };
};
export default connect(mapStateToProps)(Notes);
