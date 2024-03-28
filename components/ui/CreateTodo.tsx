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
  setTitle, description, setDescription, isTimed, setIsTimed, category, setCategory, priority, setPriority, date, setDate }) =>
  <View style={styles.header}>
    <View style={{ flexDirection: 'row', backgroundColor: 'purple', alignSelf: 'stretch', }}>
      <Pressable style={styles.button} onPress={() => { navigationCallback(''); }}>
        <Icon name="rotate-left" color="white" size={28} style={{ paddingLeft: 20, paddingRight: 10 }} />
      </Pressable>
      <Text style={styles.text}>Neues ToDo anlegen</Text>
    </View>
    <View style={{ flexDirection: 'row', alignSelf: 'stretch', marginTop: 10, justifyContent:'flex-start' }}>
      <Text style={styles.label}>Titel:</Text>
      <TextInput style={styles.input} value={title} onChangeText={newText => setTitle(newText)} placeholder="Mein Titel" />
    </View>
    <View style={{ flexDirection: 'row', alignSelf: 'stretch', marginTop: 10 }}>
      <Text style={styles.label}>Beschreibung:</Text>
      <TextInput style={styles.input} value={description} onChangeText={newText => setDescription(newText)} multiline numberOfLines={5}
        placeholder="Beschreibung einfügen" />
    </View>
    <View style={{ flexDirection: 'row', alignSelf: 'stretch', marginTop: 10 }}>
      <Text style={styles.label}>Datum relevant:</Text>
      <Switch value={isTimed} onValueChange={isTimed => { setIsTimed(isTimed); if (!isTimed) setDate(Todo.nodate); }} />
    </View>
    {isTimed ? (
      <View style={{ flexDirection: 'row', alignSelf: 'stretch', marginTop: 10 }}>
        <Text style={styles.label}>Datum:</Text>
        <Text style={styles.input}>{date === Todo.nodate ? '' : date.toLocaleDateString('de-DE')}</Text>
        {date === Todo.nodate ? (
          <DateTimePicker style={styles.input} maximumDate={new Date(2026, 11, 31, 23, 59, 59)} minimumDate={new Date()} value={date} onChange={
            (_event, newDate) => adjustDate(newDate, setDate, setIsTimed)} mode="date" />
        ) : null}
      </View>
    ) : null}
    <View style={{ flexDirection: 'row', alignSelf: 'stretch', marginTop: 10 }}>
      <Text style={styles.label}>Kategorie:</Text>
      <Picker style={styles.input2} selectedValue={category} onValueChange={(itemValue) => setCategory(itemValue)}>
        <Picker.Item label="Arbeit" value={'Arbeit'} />
        <Picker.Item label="Schule" value={'Schule'} />
        <Picker.Item label="Familie" value={'Familie'} />
        <Picker.Item label="Hobby" value={'Hobby'} />
        <Picker.Item label="Freizeit" value={'Freizeit'} />
      </Picker>
    </View>
    <View style={{ flexDirection: 'row', alignSelf: 'stretch', marginTop: 10 }}>
      <Text style={styles.label}>Priorität:</Text>
      <Picker style={styles.input2} selectedValue={priority} onValueChange={(itemValue) => setPriority(itemValue)}>
        <Picker.Item label="Normal" value={0} />
        <Picker.Item label="Medium" value={1} />
        <Picker.Item label="Hoch" value={2} />
        <Picker.Item label="Niedrig" value={-1} />
        <Picker.Item label="Sehr hoch" value={3} />
      </Picker>
    </View>
    <View style={{ flexDirection: 'row', backgroundColor: 'darkgreen', alignSelf: 'center', borderRadius: 20, alignContent: 'center' }}>
      <Pressable style={styles.button} onPress={() => {
        createTodo(title, description, isTimed, category, priority, date, todoList, todoListCallback);
        resetTodo(setTitle, setDescription, setIsTimed, setCategory, setPriority, setDate);
        navigationCallback('');
      }}>
        <Icon name="plus-circle" color="white" size={22} style={{ paddingLeft: 10, paddingRight: 10 }} />
        <Text style={styles.textRegular}>Neues ToDo anlegen</Text>
      </Pressable>
    </View>
  </View>

const createTodo = (title: string, description: string, isTimed: boolean, category: string, priority: number,
  date: Date, todoList: Todo[], todoListCallback: React.Dispatch<React.SetStateAction<Todo[]>>) => {
  let newTodo = new Todo();
  newTodo.category = category;
  newTodo.description = description;
  newTodo.isTimed = isTimed;
  if (newTodo.isTimed) newTodo.date = date;
  newTodo.priority = priority;
  newTodo.title = title;
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
    //paddingVertical: 12,
    //paddingHorizontal: 32,
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
    fontSize: 28,
    color: 'white'
  },
  textRegular: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle',
    marginRight: 10,
    elevation: 0,
    fontSize: 20,
    color: 'white'
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
    color: 'black',
    width: 100
  },
  input: {
    borderColor: 'black',
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