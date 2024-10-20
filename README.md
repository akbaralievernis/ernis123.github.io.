
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Тогуз Коргоол</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            text-align: center;
            background-color: blueviolet; /* Светлый фон */
            color: #dark;
        }
        h1 {
            color: dark; /* Заголовок */
        }
        .board {
            display: grid;
            grid-template-columns: repeat(9, 70px);
            gap: 10px;
            justify-content: center;
            margin-bottom: 20px;
        }
        .hole {
            width: 70px;
            height: 70px;
            background-color: #add8e6; /* Голубой цвет */
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            font-size: 20px;
            cursor: pointer;
            position: relative;
            transition: background-color 0.3s;
        }
        .hole:hover {
            background-color: #87cefa; /* Более темный голубой при наведении */
        }
        .hole img {
            width: 45px;
            height: 45px;
        }
        .scores {
            margin-bottom: 20px;
            font-size: 18px;
        }
        .hole .stones {
            position: absolute;
            bottom: 5px;
            right: 5px;
            font-size: 14px;
            background-color: white;
            border-radius: 50%;
            padding: 3px 7px;
            border: 1px solid #ccc;
        }
        button {
            padding: 10px 20px;
            font-size: 16px;
            background-color: #0056b3;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        button:hover {
            background-color: #004494; /* Темнее при наведении */
        }
          .history-rules {
            width: 80%;
            margin: 0 auto;
            text-align: left;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .history-rules p {
            line-height: 1.6;
            margin-bottom: 15px;
        }
        .history-rules h2 {
            text-align: center;
            color: #0056b3;
        }
        .container {
            padding: 20px;
        }
         .creator, .news {
            width: 80%;
            margin: 30px auto;
            text-align: left;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .creator p, .news p {
            line-height: 1.6;
        }
        .difficulty {
            margin: 20px 0;
        }
    </style>
</head>
<body>
<h1>Тогуз Коргоол</h1>
    <div class="scores">
        <span id="player1-score">1-Оюучунун упайы: 0</span> | 
        <span id="player2-score">2-Оюучунун упайы: 0</span>
    </div>
    <div id="board" class="board"></div>
    <div class="difficulty">
        <label for="difficulty">Оюунун татаалдыгын тандаңыз:</label>
        <select id="difficulty">
            <option value="easy">Жеңил</option>
            <option value="medium">Орточо</option>
            <option value="hard">Татаал</option>
        </select>
    </div>
    <!-- Режимы игры -->
<div class="mode">
    <label for="gameMode">Оюунун режимин тандаңыз:</label>
    <select id="gameMode" onchange="setGameMode(this.value)">
        <option value="local">Эки адам</option>
        <option value="bot">Бот менен</option>
    </select>
</div>

    <div>
        <button onclick="restartGame()">Оюуну кайра баштоо</button>
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
        function setGameMode(mode) {
    gameMode = mode;
    if (mode === 'bot') {
        document.getElementById('difficulty-container').style.display = 'block';
    } else {
        document.getElementById('difficulty-container').style.display = 'none';
    }
}
    if (player === 0 && gameMode === 'local' || currentPlayer === player) {
    hole.onclick = () => makeMove(currentPlayer, i);
}

        function createBoard() {
            const boardElement = document.getElementById('board');
            boardElement.innerHTML = '';  // Очистить доску
            for (let player = 0; player < 2; player++) {
                for (let i = 0; i < 9; i++) {
                    const hole = document.createElement('div');
                    hole.className = 'hole';
                    hole.innerHTML = `<img src="photo_2024-09-16_21-46-27.jpg" alt="marble"><div class="stones">${board[player][i]}</div>`;
                    
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

Онлайн игра тогуз коргоол 
