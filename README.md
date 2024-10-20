<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Тогуз Коргоол</title>
    <style>
       body {
        font-family: 'Arial', sans-serif;
        background: linear-gradient(to right, #6a11cb, #2575fc); /* Градиентный фон */
        color: #fff;
        margin: 0;
        padding: 0;
        text-align: center;
        }
h1 {
        color: #f4f4f4;
        font-size: 3em;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
        margin-bottom: 20px;
}
/* Доска для игры */
    .board {
        display: grid;
        grid-template-columns: repeat(9, 80px); /* Увеличение размера ячеек */
        gap: 10px;
        justify-content: center;
        margin-bottom: 30px;
        padding: 20px;
        background-color: rgba(255, 255, 255, 0.2); /* Полупрозрачный фон для доски */
        border-radius: 15px;
        box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3); /* Тень под доской */
    }
 .hole {
         width: 80px;
         height: 80px;
         background-color: #f1c40f; /* Жёлтый цвет лунок */
         display: flex;
         align-items: center;
         justify-content: center;
         border-radius: 50%;
         position: relative;
         transition: background-color 0.3s, transform 0.3s;
         cursor: pointer;
    }
 .hole:hover {
         background-color: #f39c12; /* Темнее при наведении */
         transform: scale(1.1); /* Лёгкое увеличение при наведении */
    }
.hole img {
          width: 50px;
          height: 50px;
          transition: transform 0.3s;
    }
 .hole:hover img {
         transform: rotate(360deg); /* Вращение коргоолов при наведении */
    }
  .hole .stones {
          position: absolute;
          bottom: 5px;
         right: 5px;
         font-size: 14px;
         background-color: #fff;
         color: #333;
         border-radius: 50%;
         padding: 3px 7px;
         border: 1px solid #ccc;
         box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
     }
/* Стиль кнопок */
    button {
         padding: 12px 25px;
         font-size: 18px;
         background-color: #2980b9;
         color: white;
         border: none;
         border-radius: 8px;
         cursor: pointer;
         transition: background-color 0.3s, transform 0.3s;
    }  
 button:hover {
           background-color: #3498db;
          transform: scale(1.05); /* Увеличение кнопки при наведении */
}/* Стиль очков */
    .scores {
          font-size: 20px;
          margin-bottom: 20px;
    }
 .scores span {
        display: inline-block;
        padding: 10px 20px;
        background-color: rgba(0, 0, 0, 0.2);
        border-radius: 8px;
        margin: 0 10px;
    }
/* Стиль истории и правил */
   .history-rules {
          width: 90%;
          margin: 0 auto;
          text-align: left;
          padding: 20px;
          background-color: rgba(255, 255, 255, 0.2);
          border-radius: 15px;
         box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
         color: #f4f4f4;
}
 .history-rules h2 {
          text-align: center;
          color: #ecf0f1;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
          margin-bottom: 20px;
}
 .history-rules p {
          line-height: 1.8;
          margin-bottom: 15px;
}
/* Стиль для создателя и новостей */
    .creator, .news {
         width: 90%;
         margin: 30px auto;
         padding: 20px;
         background-color: rgba(255, 255, 255, 0.2);
         border-radius: 15px;
         box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
         color: #f4f4f4;
    }
        .creator p, .news p {
         line-height: 1.8;
    }
/* Выбор сложности */
   .difficulty {
         margin: 20px 0;
         font-size: 18px;
        color: #fff;
    }
 .difficulty select {
          padding: 10px;
          font-size: 16px;
         border-radius: 5px;
          border: none;
    }
/* Анимация перемещения */
   @keyframes move {
        0% { transform: scale(1); }
       50% { transform: scale(1.2); }
       100% { transform: scale(1); }
}
        /* Добавление плавности для всех элементов */
* {
    transition: all 0.3s ease;
}
</style>
</head>
<body>
    <h1>Тогуз Коргоол</h1>
    <div class="scores">
        <span id="player1-score">1-Оюунчунун упайы: 0</span> | 
        <span id="player2-score">2-Оюунчунун упайы: 0</span>
    </div>
    <div id="board" class="board"></div>
    <div class="difficulty">
        <label for="difficulty">Оюундун татаалдыгын тандаңыз:</label>
        <select id="difficulty">
            <option value="easy">Жеңил</option>
            <option value="medium">Орточо</option>
            <option value="hard">Татаал</option>
        </select>
    </div>
    <div>
        <button onclick="restartGame()">Оюунду кайра баштоо</button>
    </div>
    <!-- Режимы игры -->
<div class="mode">
    <label for="gameMode">Оюундун режимин тандаңыз:</label>
    <select id="gameMode" onchange="setGameMode(this.value)">
        <option value="local">Эки адам</option>
        <option value="bot">Бот менен</option>
    </select>
</div>
 <div class="container">
        <div class="history-rules">
            <h2>Тогуз Коргоолдун тарыхы</h2>
            <p>
                Тогуз Коргоол — бул Борбор Азияда миң жылдан ашуун убакыттан бери белгилүү болгон байыркы акыл-эс оюндардын бири. 
                Бул оюн көчмөн элдердин маданиятына кирип, казактар, кыргыздар жана башка түрк элдери арасында кеңири тараган. Оюн "манкала" тибиндеги оюндардын бири болуп эсептелет.
            </p>
            <p>
                Илгери Тогуз Коргоол акыл-эс оюн катары гана колдонулбастан, стратегиялык ой жүгүртүүнү, логиканы жана көңүлдү топтоо үчүн колдонулган. 
                Бул Борбор Азия элдеринин маданий символу болуп, азыр да ар кандай курактагы оюнчулар арасында кеңири жайылган.
            </p>
   <h2>Тогуз Коргоолдун эрежелери</h2>
            <p>
                Оюн тактада жүргүзүлөт, анда ар бир оюнчу үчүн 9дан уя жана эки чоң уя (казан) бар. 
                Башында ар бир уяга 9 коргоол салынып, оюнчулар 81 коргоол чогултууга аракет кылышат.
            </p>
            <p>
                Оюнчулар кезек менен өздөрүнүн уяларынан коргоолдорду алып, ар бир кийинки уяга бирден коргоол коюшат. 
                Эгерде акыркы коргоол атаандаштын уясына түшүп, ал жердеги коргоолдордун саны жуп болсо, оюнчу ошол уядан бардык коргоолдорду өзүнө алат.
            </p>
            <p>
                Оюндун максаты — биринчи болуп 81 коргоол чогултуу.
            </p>
            <div class="creator">
            <h2>Оюндун жаратуучусу</h2>
            <p>
                Бул версияны Акбаралиев Эрнис түзгөн. Ал 17 жашта жана ОшГУда "Автоматташтырылган бизнес-процесстер жана финансы башкаруу" боюнча биринчи курста окуйт. Эрнистин программалоого болгон кызыгуусу жана логикалык оюндарга болгон сүйүүсү бул оюнду иштеп чыгууга түрткү болду.
            </p>
        </div>
  <!-- Секция менен кызыктуу жаңылыктар -->
        <div class="news">
            <h2>Кызыктуу жаңылыктар</h2>
            <p>
                Жакында дүйнө жүзүндөгү интеллектуалдык оюндар боюнча эл аралык турнир өтүп, Тогуз Коргоол боюнча мыкты оюнчулар Казакстан, Кыргызстан жана Өзбекстандан катышты. 
                Мындан тышкары, Тогуз Коргоол айрым Борбор Азия мектептеринде милдеттүү предмет катары киргизилүүсү пландалууда.
            </p>
        </div>
    </div>
    </div>
    </div>

<script>
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
            for (let i = 0; i < 9; i++) {
                // Лунки бота (в верхней строке)
                const hole2 = document.createElement('div');
                hole2.className = 'hole';
                hole2.innerHTML = `<img src="photo_2024-09-16_21-46-27.jpg" alt="marble"><div class="stones">${board[1][i]}</div>`;
                boardElement.appendChild(hole2);
            }
            for (let i = 0; i < 9; i++) {
                // Лунки игрока (в нижней строке)
                const hole1 = document.createElement('div');
                hole1.className = 'hole';
                hole1.innerHTML = `<img src="photo_2024-09-02_09-27-54.jpg" alt="marble"><div class="stones">${board[0][i]}</div>`;
                hole1.onclick = () => makeMove(0, i);
                boardElement.appendChild(hole1);
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
    </script>
</body>
</html>
