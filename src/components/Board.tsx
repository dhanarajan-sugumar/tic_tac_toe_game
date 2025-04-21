import React from 'react';
import { View, StyleSheet } from 'react-native';
import Cell from './Cell';

interface BoardProps {
  gameState: string[];
  onCellPress: (index: number) => void;
}

const Board: React.FC<BoardProps> = ({ gameState, onCellPress }) => {
  return (
    <View style={styles.board}>
      {gameState.map((value, index) => (
        <Cell
          key={index}
          value={value}
          onPress={() => onCellPress(index)}
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
  },
});

export default Board; 