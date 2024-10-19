 let board = [
            [9, 9, 9, 9, 9, 9, 9, 9, 9],  // Лунки игрока 1
            [9, 9, 9, 9, 9, 9, 9, 9, 9]   // Лунки игрока 2
        ];
        let scores = [0, 0];
        let currentPlayer = 0;  // Игрок 1 начинает
        let gameMode = 'bot';  // Режим игры (bot или two-players)
        let difficulty = 'easy';  // Уровень сложности

        function createBoard() {
            const boardElement = document.getElementById('board');
            boardElement.innerHTML = '';  // Очистить доску
            for (let player = 0; player < 2; player++) {
                for (let i = 0; i < 9; i++) {
                    const hole = document.createElement('div');
                    hole.className = 'hole';
                    hole.innerHTML = `<img src="photo_2024-09-16_21-46-27.png" alt="marble"><div class="stones">${board[player][i]}</div>`;
                    
                    // Обработчик клика только для игрока 1
                    if (player === 0) {
                        hole.onclick = () => makeMove(currentPlayer, i);
                    }

                    boardElement.appendChild(hole);
                }
            }
        }

        function makeMove(player, holeIndex) {
            if (player !== currentPlayer) {
                alert("Сейчас не ваш ход!");
                return;
            }

            let stones = board[player][holeIndex];
            if (stones === 0) {
                alert("Эта лунка пуста!");
                return;
            }

            board[player][holeIndex] = 0;
            let side = player;
            let hole = holeIndex;

            while (stones > 0) {
                hole++;
                if (hole > 8) {
                    hole = 0;
                    side = 1 - side;  // Переключение на противоположную сторону
                }
                board[side][hole]++;
                stones--;
            }

            // Проверка на захват камней
            if (board[side][hole] % 2 === 0 && side !== currentPlayer) {
                scores[currentPlayer] += board[side][hole];
                board[side][hole] = 0;
            }

            // Проверка на победу по 81 очку
            if (scores[currentPlayer] >= 81) {
                alert(`Игрок ${currentPlayer + 1} победил!`);
                restartGame();
                return;
            }

            currentPlayer = 1 - currentPlayer;
            updateBoard();

            if (gameMode === 'bot' && currentPlayer === 1) {
                setTimeout(botMove, 1000);  // Ход бота с небольшой задержкой
            }

            checkGameOver();
        }

        function botMove() {
            let bestMove = -1;

            if (difficulty === 'easy') {
                // Случайный ход
                do {
                    bestMove = Math.floor(Math.random() * 9);
                } while (board[1][bestMove] === 0);
            } else if (difficulty === 'medium') {
                // Лунка с максимальным количеством камней
                let maxStones = -1;
                for (let i = 0; i < 9; i++) {
                    if (board[1][i] > maxStones) {
                        maxStones = board[1][i];
                        bestMove = i;
                    }
                }
            } else if (difficulty === 'hard') {
                // Сложная стратегия (можно дополнить)
                bestMove = complexStrategy();
            }

            makeMove(1, bestMove);
        }

        function complexStrategy() {
            // Сложная логика выбора лунки для бота
            // Здесь можно реализовать более сложный алгоритм
            let maxStones = -1;
            let bestMove = -1;
            for (let i = 0; i < 9; i++) {
                if (board[1][i] > maxStones) {
                    maxStones = board[1][i];
                    bestMove = i;
                }
            }
            return bestMove;
        }

        function updateBoard() {
            createBoard();
            document.getElementById('player1-score').textContent = `Очки Игрока 1: ${scores[0]}`;
            document.getElementById('player2-score').textContent = `Очки Игрока 2: ${scores[1]}`;
        }

        function checkGameOver() {
            if (board[0].every(hole => hole === 0) || board[1].every(hole => hole === 0)) {
                let winner = scores[0] > scores[1] ? 'Игрок 1' : 'Игрок 2';
                if (scores[0] === scores[1]) {
                    winner = 'Ничья';
                }
                alert(`Игра окончена! Победитель: ${winner}`);
                restartGame();
            }
        }

        function restartGame() {
            board = [
                [9, 9, 9, 9, 9, 9, 9, 9, 9],
                [9, 9, 9, 9, 9, 9, 9, 9, 9]
            ];
            scores = [0, 0];
            currentPlayer = 0;
            updateBoard();
        }

        // Инициализация игры
        createBoard();

        // Слушатель для изменения уровня сложности
        document.getElementById('difficulty').addEventListener('change', function() {
            difficulty = this.value;
        });