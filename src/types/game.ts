export type Player = 'X' | 'O';
export type GameState = Player | '';
export type BoardState = GameState[];

export interface GameStatus {
  isActive: boolean;
  winner: Player | null;
  isDraw: boolean;
}

export const WINNING_COMBINATIONS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6] // Diagonals
] as const; 