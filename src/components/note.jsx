import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Edit from "./edit";
import Moment from "react-moment";

const OnlyNote = (props) => {
  // the state------------------
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {/* the Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editing A Row</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Edit rowInfo={props.itemInfo} />
        </Modal.Body>
      </Modal>

      {/* end of the Modal*/}
      <tr>
        <td>{props.itemInfo.title}</td>
        <td>
          {/* <Moment format="YYYY/MM/DD">  </Moment> */}
          {props.itemInfo.date}
        </td>
        <td>{props.itemInfo.note}</td>
        <td>
          <button onClick={handleShow}>edit</button>
          <button>delete</button>
        </td>
      </tr>
    </>
  );
};
export default OnlyNote;
