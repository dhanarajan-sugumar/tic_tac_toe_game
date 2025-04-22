import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';
import Board from './src/components/Board';
import { useGameLogic } from './src/hooks/useGameLogic';

const App = () => {
  const {
    boardState,
    handleCellPress,
    restartGame,
    getStatusMessage,
  } = useGameLogic();

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#667eea" />
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Text 
            style={styles.title}
            accessibilityRole="header"
          >
            Tic Tac Toe
          </Text>
          <Text 
            style={styles.status}
            accessibilityLiveRegion="polite"
          >
            {getStatusMessage()}
          </Text>
          <Board 
            gameState={boardState} 
            onCellPress={handleCellPress} 
          />
          <TouchableOpacity 
            style={styles.restartButton} 
            onPress={restartGame}
            accessibilityRole="button"
            accessibilityLabel="Restart game"
            accessibilityHint="Starts a new game"
          >
            <Text style={styles.restartButtonText}>Restart Game</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#667eea',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  status: {
    fontSize: 18,
    color: '#ffffff',
    marginBottom: 20,
    fontWeight: '600',
  },
  restartButton: {
    marginTop: 20,
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: '#4299e1',
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  restartButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App; 