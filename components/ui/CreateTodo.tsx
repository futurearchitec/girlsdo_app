import React, { FunctionComponent } from "react"
import { View, StyleSheet, Text, Pressable, TextInput, Switch } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';
import { Todo } from "../data/Todo";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';

type CreateTodoProps = {
  todoList: Todo[],
  todoListCallback: React.Dispatch<React.SetStateAction<Todo[]>>,
  navigationCallback: React.Dispatch<React.SetStateAction<string>>,
  title: string,
  setTitle: React.Dispatch<React.SetStateAction<string>>,
  description: string,
  setDescription: React.Dispatch<React.SetStateAction<string>>,
  isTimed: boolean,
  setIsTimed: React.Dispatch<React.SetStateAction<boolean>>,
  category: string,
  setCategory: React.Dispatch<React.SetStateAction<string>>,
  priority: number,
  setPriority: React.Dispatch<React.SetStateAction<number>>,
  date: Date,
  setDate: React.Dispatch<React.SetStateAction<Date>>,
}

export const CreateTodo: FunctionComponent<CreateTodoProps> = ({ todoList, todoListCallback, navigationCallback, title,
  setTitle, category, setCategory, }) =>
    <View style={styles.header}>
  <View style={{ flexDirection: 'row', backgroundColor: 'lightblue', alignSelf: 'stretch', }}>
    <Pressable style={styles.button} onPress={() => { navigationCallback(''); }}>
      <Icon name="rotate-left" color="red" size={28} style={{ paddingLeft: 20, paddingRight: 10 }} />
    </Pressable>
    <Text style={styles.text}>Neues ToDo anlegen</Text>
  </View>
  <View style={{ flexDirection: 'row', alignSelf: 'stretch', marginTop: 10, justifyContent:'flex-start' }}>
    <Text style={styles.label}>Titel:</Text>
    <TextInput style={styles.input} value={title} onChangeText={newText => setTitle(newText)} placeholder="Mein Titel" />
  </View>
  {/* TODO */}
  <View style={{ flexDirection: 'row', alignSelf: 'stretch', marginTop: 10 }}>
    <Text style={styles.label}>Kategorie:</Text>
    <Picker style={styles.input2} selectedValue={category} onValueChange={(itemValue) => setCategory(itemValue)}>
      <Picker.Item label="Arbeit" value={'Arbeit'} />
      {/* TODO */}
    </Picker>
  </View>
  
  <View style={{ flexDirection: 'row', backgroundColor: 'blue', alignSelf: 'center', borderRadius: 20, alignContent: 'center' }}>
    <Pressable style={styles.button} onPress={() => {
      createTodo(title, category, todoList, todoListCallback);
      //TODO
      navigationCallback('');
    }}>
      <Icon name="plus-circle" color="yellow" size={22} style={{ paddingLeft: 10, paddingRight: 10 }} />
      <Text style={styles.textRegular}>Neues ToDo anlegen</Text>
    </Pressable>
  </View>
</View>

const createTodo = (title: string, category: string, todoList: Todo[], todoListCallback: React.Dispatch<React.SetStateAction<Todo[]>>) => {
  let newTodo = new Todo();
  newTodo.title = title;
  newTodo.category = category;
  
  //TODO
  
  todoListCallback([...todoList, newTodo]);
}

const resetTodo = (setTitle: React.Dispatch<React.SetStateAction<string>>, setDescription: React.Dispatch<React.SetStateAction<string>>,
  setIsTimed: React.Dispatch<React.SetStateAction<boolean>>, setCategory: React.Dispatch<React.SetStateAction<string>>,
  setPriority: React.Dispatch<React.SetStateAction<number>>, setDate: React.Dispatch<React.SetStateAction<Date>>) => {
  setTitle('');
  setDescription('');
  setIsTimed(false);
  setCategory('');
  setPriority(-1);
  setDate(Todo.nodate);
}

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
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 20,
    elevation: 0,
  },
  buttonRegular: {
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
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
    fontSize: 10,
    color: 'red'
  },
  textRegular: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle',
    marginRight: 10,
    elevation: 0,
    fontSize: 10,
    color: 'yellow'
  },
  label: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    verticalAlign: 'middle',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 5,
    elevation: 0,
    fontSize: 12,
    color: 'pink',
    width: 100
  },
  input: {
    borderColor: 'pink',
    borderWidth: 1,
    marginTop: 10,
    marginRight: 10,
    paddingLeft: 5,
    alignSelf: 'stretch',
    flexGrow:1,
    textAlignVertical: "top"
  },
  input2: {
    borderColor: 'black',
    borderWidth: 1,
    marginTop: -8,
    paddingLeft: 5,
    alignSelf: 'stretch',
    flexGrow:1,
    textAlignVertical: "top"
  },
});

function adjustDate(newDate: Date | undefined, setDate: React.Dispatch<React.SetStateAction<Date>>, setIsTimed: React.Dispatch<React.SetStateAction<boolean>>): void {
  setDate(newDate === undefined ? Todo.nodate : newDate);
}