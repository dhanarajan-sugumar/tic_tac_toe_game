import React, { memo } from 'react';
import { TouchableOpacity, Text, StyleSheet, AccessibilityRole } from 'react-native';
import { GameState } from '../types/game';

interface CellProps {
  value: GameState;
  onPress: () => void;
  index: number;
}

const Cell: React.FC<CellProps> = ({ value, onPress, index }) => {
  const accessibilityLabel = value 
    ? `Cell ${index + 1}, marked as ${value}`
    : `Cell ${index + 1}, empty`;

  return (
    <TouchableOpacity 
      style={styles.cell} 
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      accessibilityHint="Press to mark this cell"
      disabled={!!value}
    >
      <Text style={[styles.text, value === 'X' ? styles.xText : styles.oText]}>
        {value}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cell: {
    width: '33.33%',
    height: '33.33%',
    borderWidth: 2,
    borderColor: '#e2e8f0',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  xText: {
    color: '#e53e3e',
  },
  oText: {
    color: '#3182ce',
  },
});

export default memo(Cell); 