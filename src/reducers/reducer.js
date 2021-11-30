const initialState = {
  notesBook: [],
};

const reducer = (state = initialState, action) => {
  // action to add a new Row
  if (action.type === "ADD_ROW") {
    console.log(action.payload);
    return { ...state, notesBook: [...state.notesBook, action.payload] };
  }
  // action to edit a specific Row
  if (action.type === "EDIT_ROW") {
    console.log(action.payload);
    const updatedRows = state.notesBook.map((noteObjec) => {
      if (noteObjec.id === action.payload.id) {
        return action.payload.updatedRow;
      }
      return noteObjec;
    });
    return { ...state, notesBook: updatedRows };
  }
  // action to delete a specific row
  if (action.type === "DELETE_ROW") {
    const undeletedRows = state.notesBook.filter(
      (noteObjec) => noteObjec.id !== action.payload
    );
    return { ...state, notesBook: undeletedRows };
  } else return state;
};
export default reducer;
