import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import CustomButton from './components/CustomButton';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);
    
  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      { id: Math.random().toString(), text: enteredGoalText}
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.appContainer}>
        <CustomButton 
          title="Add New Goal" 
          color="#5e0acc"
          onPress={startAddGoalHandler}
        />
        <GoalInput 
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
          visible={modalIsVisible}
        />
        <View style={styles.goalsContainer}>
          <FlatList 
            keyExtractor={(itemData) => itemData.id} 
            data={courseGoals} 
            renderItem={itemData => (
              <GoalItem 
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}  
              />
            )} 
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 6,
  }
});