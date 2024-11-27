import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.centerText}>REZA IBNU HANIFA</Text>
        <Text style={styles.centerText}>223510059</Text>
      </View>
      <View style={styles.boxContainer}>
        <View style={[styles.box, { backgroundColor: 'magenta' }]} />
        <View style={[styles.box, { backgroundColor: 'pink' }]} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    alignItems: 'center', 
    marginBottom: 20, 
  },
  centerText: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 18,
    color: 'blue',
    marginTop: 5, 
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%', 
  },
  box: {
    width: 100,
    height: 100,
  },
});
export default App;