import * as React from 'react';
import { Text, View, StyleSheet, FlatList, TextInput, TouchableOpacity, Alert } from 'react-native';
import Constants from 'expo-constants';

import Header from '../components/Header';
import ButtonIcon from '../components/ButtonIcon';

import { connect } from 'react-redux';
import { addTodo, deleteTodo } from '../redux/actions';

const TodoApp = ({ todo_list, addTodo, deleteTodo }) => {
  const [task, setTask] = React.useState('');

  const handleAddTodo = () => {
    addTodo(task)
    setTask('')
  }

  const showAlert = (id) => {
    Alert.alert(  
      'Alert',  
      'Are you sure you want to delete?',  
      [  
          {  
              text: 'Cancel',    
              style: 'cancel',  
          },  
          {text: 'OK', onPress: () => deleteTodo(id)},  
      ]  
  );  
  }
  const handleDeleteTodo = (id) => {
    showAlert(id);
  }

  return (
    <View style={styles.container}>
      <Header heading="ToDo List" />
      <View style= {styles.inputContainer}>
        <TextInput
          placeholder= "Enter a todo item"
          value={task}
          onChangeText={task => setTask(task)}
          style={styles.inputStyle}
          />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTodo}>
          <Text style= {styles.buttonText}>ADD</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={todo_list}
        keyExtractor={(item) => item.id}
        renderItem={({item, index}) => {
          return (
            <>
              <View style= {styles.itemCard}>
                <Text>
                    {item.task}
                </Text>
                <ButtonIcon iconName="close" color="red" onPress={() => handleDeleteTodo(item.id)} />
              </View>
            </>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
  itemCard: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    borderRadius: 5,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputStyle: {
    borderColor: 'gray',
    borderWidth: 1,
    height: 40,
    width: '80%',
    borderRadius: 5,
    padding: 12,
    fontSize: 16,
    backgroundColor: 'white'
  },
  inputContainer: {
    margin: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  addButton: {
    backgroundColor: '#2196F3',
    width: '15%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white'
  }
});

const mapStateToProps = (state) => {
  return {
    todo_list: state.todos.todo_list,
  }
}

const mapDispatchToProps = { addTodo, deleteTodo }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp)
