import { createSlice } from '@reduxjs/toolkit';
import Acountry from "../assets/acountry.jpg"
import FallApart from "../assets/achebe.jpg"
import climate from "../assets/climate.jpg"
import interpreters from "../assets/soyinka.jpg"


export const booksSlice = createSlice({
  name: 'books',
  initialState: [
    {
      id: 1,
      title: "There Was A Country",
      cover:Acountry,
      isRead: true,
      author: "Chinua Achebe",
      synopsis: "In this dazzling new history, bestselling author Chinua Achebe grippingly tells the story of its evolution from colonialism, tribal dispute and freedom - a story that twists and turns from Africa and Nigeria, through the Colonial era, the Reformation and the Biarfra Revolution, to the Nigeria/Biafra Civil War, corruption, injustice, human right abuse, drug abuse, police harrasment and up to the present day."
    },
    {
      id: 2,
      title: "Things Fall Apart",
      cover: FallApart,
      isRead: false,
      author: "Chinua Achebe",
      synopsis: "The book Things Fall Apart covers all the greatest works of fiction, poetry, drama, history, and philosophy in between, Narrates the tragedy, consequencies and results of corruption, greed and tribalism."
    },
    {
      id: 3,
      title: " Climate Of Fear",
      cover:climate ,
      isRead: false,
      author: "Wole Soyinka",
      synopsis: "“Climate Of Fear” is a great work of art featuring fiction, peotry, drama, history and tragedy, Describes the quest for Dignity in a Dehumanized World."
    },
    {
      id: 4,
      title: "The Interpreters",
      cover: interpreters,
      isRead: false,
      author: "Wole Soyinka",
      synopsis: "Wole Soyinka Nobel Prize winner in he wrote many books and Novels capturing  time, mortality, love, beauty, infidelity, and jealousy. The Interpreters is one of the greatest work of art."
    }
  ],
  reducers: {
    addBook: (books, action) => {
      let newBook = action.payload;
      newBook.id = books.length ? Math.max(...books.map(book => book.id)) + 1 : 1;
      books.push(newBook);
    },
    eraseBook: (books, action) => {
        return books.filter(book => book.id != action.payload);
    },
    toggleRead: (books, action) => {
        books.map(book => {
          if (book.id == action.payload) {
            book.isRead = !book.isRead;
          }
        });
    }
  }
})

export const { addBook, eraseBook, toggleRead } = booksSlice.actions;

export const selectBooks = state => state.books;

export default booksSlice.reducer;