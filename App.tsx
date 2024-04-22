import { useState } from 'react';
import { WelcomeMenu } from './components/ui/WelcomeMenu';
import { View } from 'react-native';
import { CreateTodo } from './components/ui/CreateTodo';
import { Todo } from './components/data/Todo';
import { TodoList } from './components/ui/TodoList';


export default function App() {
  const [selectedView, setSelectedView] = useState('');
  const [todoList, setTodoList] = useState<Array<Todo>>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState("");
  const [isTimed, setIsTimed] = useState(false);
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState(0);
  const [date, setDate] = useState(Todo.nodate);

  const SelectedView = () => {
    switch (selectedView) {
      case 'Create':
        return <CreateTodo setTitle={setTitle} title={title} setDescription={setDescription} description={description} isTimed={isTimed} setIsTimed={setIsTimed}
          category={category} setCategory={setCategory} priority={priority} setPriority={setPriority} date={date} setDate={setDate} todoList={todoList} todoListCallback={setTodoList}
          navigationCallback={setSelectedView} />
      case 'List':
        return <TodoList todoList={todoList} todoListCallback={setTodoList} navigationCallback={setSelectedView} />
      default:
        return <WelcomeMenu navigationCallback={setSelectedView} />
    }
  }
  return (
    <View style={{ flex: 1, alignSelf: 'stretch', backgroundColor: 'white' }}>
      {SelectedView()}
    </View>
  );
}
