import { createSlice } from '@reduxjs/toolkit';

export const notesSlice = createSlice({
  name: 'notes',
  initialState: [
    {
      id: 1,
      book_id: 1,
      title:"Page 18 - On Nigeria Decline",
      text: "The famous giant of Africa and Agricultural giant is besieged by worms of corruption, daylight robbery, tribalism, greed, embezzelement, fruad and political quagmire."
    },
    {
      id: 2,
      book_id: 1,
      title:"Page 55 - The seed of corruption",
      text: "a seed sown in daylight certainly sprout at moonlight"
    },
    {
      id: 3,
      book_id: 2,
      title:"Page 61 - On The journey of Degradation",
      text: "From a rising Giant of A great Continent to A fallen Babylon in an archive of greed, war, dispute and lawlessness"
    }
    
    ],
  reducers: {
    addNote: (notes, action) => {
      let newNote = action.payload;
      newNote.id = notes.length ? Math.max(...notes.map(note=> note.id)) + 1 : 1;
      notes.push(newNote);
    },
    eraseNote: (notes, action) => {
        return notes.filter(note => note.id != action.payload);
    },
    eraseBookNotes: (notes, action) => {
        return notes.filter(note => note.book_id != action.payload);
    }
  }
})

export const { addNote, eraseNote, eraseBookNotes } = notesSlice.actions;

export const selectNotes = state => state.notes;

export default notesSlice.reducer;