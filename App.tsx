import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Board from './src/components/Board';

const App = () => {
  const [gameState, setGameState] = useState<string[]>(Array(9).fill(''));
  const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X');
  const [gameActive, setGameActive] = useState(true);

  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];

  const checkWin = () => {
    return winningCombinations.some(combination => {
      return combination.every(index => {
        return gameState[index] === currentPlayer;
      });
    });
  };

  const checkDraw = () => {
    return gameState.every(cell => cell !== '');
  };

  const handleCellPress = (index: number) => {
    if (gameState[index] !== '' || !gameActive) return;

    const newGameState = [...gameState];
    newGameState[index] = currentPlayer;
    setGameState(newGameState);

    if (checkWin()) {
      setGameActive(false);
      return;
    }

    if (checkDraw()) {
      setGameActive(false);
      return;
    }

    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  const restartGame = () => {
    setGameState(Array(9).fill(''));
    setCurrentPlayer('X');
    setGameActive(true);
  };

  const getStatusMessage = () => {
    if (!gameActive) {
      if (checkWin()) {
        return `Player ${currentPlayer} wins!`;
      }
      return "Game ended in a draw!";
    }
    return `Player ${currentPlayer}'s turn`;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Tic Tac Toe</Text>
        <Text style={styles.status}>{getStatusMessage()}</Text>
        <Board gameState={gameState} onCellPress={handleCellPress} />
        <TouchableOpacity style={styles.restartButton} onPress={restartGame}>
          <Text style={styles.restartButtonText}>Restart Game</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
    color: '#2d3748',
    marginBottom: 20,
  },
  status: {
    fontSize: 18,
    color: '#4a5568',
    marginBottom: 20,
  },
  restartButton: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#4299e1',
    borderRadius: 5,
  },
  restartButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App; 