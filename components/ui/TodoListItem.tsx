import { Dispatch, FunctionComponent, SetStateAction } from "react"
import { View, StyleSheet, Text, Pressable } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';
import { Todo } from "../data/Todo";

type TodoListItemProps = {
  todoList: Todo[],
  todo: Todo,
  todoListCallback: React.Dispatch<React.SetStateAction<Todo[]>>,
}

export const TodoListItem: FunctionComponent<TodoListItemProps> = ({ todoList, todo, todoListCallback }) =>
  <View style={styles.baseContainer}>
    <Text style={{ fontSize: 20 }}>{todo.title}</Text>
    <View style={{ flexDirection:'row' }}>
      {todo.isTimed ? (
        <Pressable style={{ backgroundColor: 'white' }}>
          <Icon name="calendar" color="black" size={30} style={{ paddingTop: 5, paddingBottom: 5, paddingLeft: 5, paddingRight: 5 }} />
        </Pressable>
      ) : null}
      <Pressable style={{ backgroundColor: 'red' }} onPress={() => { removeTodo(todoList, todo, todoListCallback); }}>
        <Icon name="minus-circle" color="white" size={30} style={{ paddingTop: 5, paddingBottom: 5, paddingLeft: 5, paddingRight: 5 }} />
      </Pressable>
    </View>
  </View>

const styles = StyleSheet.create({
  baseContainer: {
    alignItems: 'center',
    marginVertical: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    padding: 4
  },
});

function removeTodo(todoList: Todo[], todo: Todo, todoListCallback: Dispatch<SetStateAction<Todo[]>>) {
  let newArray = todoList.filter((e) => e !== todo);
  todoListCallback(newArray);
}
