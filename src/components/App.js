import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/VisibleTodoList';
import visibleTodoList from '../containers/AddTodo';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
