import { useState, useCallback } from 'react';
import { Player, BoardState, GameStatus, WINNING_COMBINATIONS } from '../types/game';

export const useGameLogic = () => {
  const [boardState, setBoardState] = useState<BoardState>(Array(9).fill(''));
  const [currentPlayer, setCurrentPlayer] = useState<Player>('X');
  const [gameStatus, setGameStatus] = useState<GameStatus>({
    isActive: true,
    winner: null,
    isDraw: false,
  });

  const checkWin = useCallback((board: BoardState, player: Player): boolean => {
    return WINNING_COMBINATIONS.some(combination => 
      combination.every(index => board[index] === player)
    );
  }, []);

  const checkDraw = useCallback((board: BoardState): boolean => {
    return board.every(cell => cell !== '');
  }, []);

  const handleCellPress = useCallback((index: number) => {
    if (boardState[index] !== '' || !gameStatus.isActive) return;

    const newBoardState = [...boardState];
    newBoardState[index] = currentPlayer;

    const hasWon = checkWin(newBoardState, currentPlayer);
    const isDraw = !hasWon && checkDraw(newBoardState);

    setBoardState(newBoardState);
    setGameStatus({
      isActive: !hasWon && !isDraw,
      winner: hasWon ? currentPlayer : null,
      isDraw,
    });

    if (!hasWon && !isDraw) {
      setCurrentPlayer(prev => prev === 'X' ? 'O' : 'X');
    }
  }, [boardState, currentPlayer, gameStatus.isActive, checkWin, checkDraw]);

  const restartGame = useCallback(() => {
    setBoardState(Array(9).fill(''));
    setCurrentPlayer('X');
    setGameStatus({
      isActive: true,
      winner: null,
      isDraw: false,
    });
  }, []);

  const getStatusMessage = useCallback((): string => {
    if (gameStatus.winner) {
      return `Player ${gameStatus.winner} wins!`;
    }
    if (gameStatus.isDraw) {
      return "Game ended in a draw!";
    }
    return `Player ${currentPlayer}'s turn`;
  }, [gameStatus.winner, gameStatus.isDraw, currentPlayer]);

  return {
    boardState,
    currentPlayer,
    gameStatus,
    handleCellPress,
    restartGame,
    getStatusMessage,
  };
}; 