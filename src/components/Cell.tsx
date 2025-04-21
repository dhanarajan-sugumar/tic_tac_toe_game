import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface CellProps {
  value: string;
  onPress: () => void;
}

const Cell: React.FC<CellProps> = ({ value, onPress }) => {
  return (
    <TouchableOpacity style={styles.cell} onPress={onPress}>
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

export default Cell; 