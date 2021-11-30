// ----------------------------------------action to add a new Row--------------------------
export const AddFormData = (noteObjec) => {
  noteObjec.id = Math.random().toString(36).slice(2);
  return {
    type: "ADD_ROW",
    payload: noteObjec,
  };
};
// -----------------------------------------------action to edit a partucular Row---------------
export const EditRow = (id, updatedRow) => {
  return {
    type: "EDIT_ROW",
    payload: { id, updatedRow },
  };
};
// ------------------------------------------------action to delelte a particular users-----------

export const DeleteRow = (id) => {
  return {
    type: "DELETE_ROW",
    payload: id,
  };
};
