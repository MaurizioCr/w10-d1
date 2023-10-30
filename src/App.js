import './App.css';
import Nav from './Components/Nav';

import Alert from './Components/Welcome';
import FooterUno from './Components/footer';
import SingleBook from './Components/SingleBook';
import Library from '../src/books/romance.json'
import BookList from './Components/Booklist';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <header>
        <Nav/>
        <Alert/>
      </header>
      <main>
        {/* <Books/> */}
      <BookList books={Library}  book="The Last Wish: Introducing the Witcher"/>
      </main>
      <article>

      <SingleBook book="The Last Wish: Introducing the Witcher" />

      </article>
      <footer>
        <FooterUno/>
      </footer>
    </>
    
      
  );
}

export default App;
