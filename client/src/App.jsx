import './App.css';
import InputTodo from './components/InputTodo';
import ListTodos from './components/ListTodos';

//components

function App() {
  return (
    <>
      <div className='container'>
        <InputTodo />
        <ListTodos />
      </div>
    </>
  );
}

export default App;
