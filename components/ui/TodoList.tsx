import { FunctionComponent } from "react"
import { View, StyleSheet, Text, Pressable } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';
import { Todo } from "../data/Todo";
import { TodoListItem } from "./TodoListItem";

type TodoListProps = {
  navigationCallback: React.Dispatch<React.SetStateAction<string>>,
  todoList: Todo[],
  todoListCallback: React.Dispatch<React.SetStateAction<Todo[]>>,
}

export const TodoList: FunctionComponent<TodoListProps> = ({ navigationCallback, todoList, todoListCallback }) =>
  <View style={styles.header}>
    <View style={{ flexDirection: 'row', backgroundColor: 'purple', alignSelf: 'stretch', }}>
      <Pressable style={styles.button} onPress={() => { navigationCallback(''); }}>
        <Icon name="rotate-left" color="white" size={28} style={{ paddingLeft: 20, paddingRight: 10 }} />
      </Pressable>
      <Text style={styles.text}>Deine ToDos</Text>
    </View>
    {todoList.map((todo, index) => {
      return <TodoListItem key={index} todoList={todoList} todo={todo} todoListCallback={todoListCallback} />
    })}
  </View>

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 80,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    //paddingVertical: 12,
    //paddingHorizontal: 32,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 20,
    elevation: 0,
  },
  text: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle',
    marginTop: 10,
    marginBottom: 10,
    elevation: 0,
    fontSize: 28,
    color: 'white'
  },
  baseContainer: {
    alignItems: 'center',
    marginVertical: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 4
  },
});