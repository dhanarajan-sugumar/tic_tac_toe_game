import React, { memo } from 'react';
import { View, StyleSheet } from 'react-native';
import Cell from './Cell';
import { BoardState } from '../types/game';

interface BoardProps {
  gameState: BoardState;
  onCellPress: (index: number) => void;
}

const Board: React.FC<BoardProps> = ({ gameState, onCellPress }) => {
  return (
    <View 
      style={styles.board}
      accessibilityRole="grid"
      accessibilityLabel="Tic Tac Toe game board"
    >
      {gameState.map((value, index) => (
        <Cell
          key={index}
          value={value}
          onPress={() => onCellPress(index)}
          index={index}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 300,
    height: 300,
    backgroundColor: '#f7fafc',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default memo(Board); 