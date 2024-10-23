<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Тогуз коргоол</title>
    <style>
  body {
            font-family: 'Arial', sans-serif;
            text-align: center;
            background: url('photo_2024-09-02_09-27-54.jpg') no-repeat center center fixed;
            background-size: cover;
            color: #333;
            transition: background 0.3s, color 0.3s;
        }
        h1 {
            font-family: 'Tajawal', sans-serif;
            color: #8B0000; /* Кыргыздын кызыл түсү */
            font-size: 48px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
            margin-bottom: 20px;
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
            background-color: #C19A6B; /* Кыргыз боз үйүнүн ички кооздоосундагы түс */
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            font-size: 20px;
            cursor: pointer;
            position: relative;
            border: 3px solid #8B0000; /* Кыргыз кызыл түсү */
            transition: background-color 0.3s, transform 0.3s;
        }
        .hole:hover {
            background-color: #FFD700; /* Алтын түскө жакын */
            transform: scale(1.1);
        }
        .hole img {
            width: 45px;
            height: 45px;
        }
        .scores {
            margin-bottom: 20px;
            font-size: 18px;
            color: #8B0000;
        }.hole .stones {
            position: absolute;
            bottom: 5px;
            right: 5px;
            font-size: 14px;
            background-color: white;
            border-radius: 50%;
            padding: 3px 7px;
            border: 1px solid #ccc;
        }button {
            padding: 10px 20px;
            font-size: 16px;
            background-color: #8B0000; /* Кыргыз кызылы */
            color: white;
            border: 2px solid #FFD700; /* Алтын чек */
            border-radius: 8px;
            cursor: pointer;
            transition: background-color 0.3s, transform 0.3s;
        }
        button:hover {
            background-color: #A52A2A; /* Карамелдүү күрөң түс */
            transform: scale(1.05);
        }
        .history-rules, .creator, .news {
            width: 80%;
            margin: 30px auto;
            text-align: left;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
            font-family: 'Tajawal', sans-serif;
        }
        .history-rules h2, .creator h2, .news h2 {
            text-align: center;
            color: #8B0000;
            font-family: 'Tajawal', sans-serif;
        }
        .difficulty {
            margin: 20px 0;
            color: #8B0000;
        }
        .container img {
            margin-top: 15px;
            width: 100%;
            border-radius: 10px;
        }
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translate(-50%, -60%);
            }
            to {
                opacity: 1;
                transform: translate(-50%, -50%);
            }
        }#win-message {
            display: none;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: rgba(0, 128, 0, 0.8);
            color: white;
            padding: 20px;
            border-radius: 10px;
            font-size: 24px;
            z-index: 10;
            animation: fadeIn 1s;
        }
</style>
</head>
<body>
    <h1>Тогуз коргоол</h1>
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
            <h2>Тогуз коргоолдун тарыхы</h2>
            <p>
                Тогуз коргоол — бул Борбор Азияда миң жылдан ашуун убакыттан бери белгилүү болгон байыркы акыл-эс оюндардын бири. 
                Бул оюн көчмөн элдердин маданиятына кирип, казактар, кыргыздар жана башка түрк элдери арасында кеңири тараган. Оюн "манкала" тибиндеги оюндардын бири болуп эсептелет.
            </p>
            <p>
                Илгери Тогуз коргоол акыл-эс оюн катары гана колдонулбастан, стратегиялык ой жүгүртүүнү, логиканы жана көңүлдү топтоо үчүн колдонулган. 
                Бул Борбор Азия элдеринин маданий символу болуп, азыр да ар кандай курактагы оюнчулар арасында кеңири жайылган.
            </p>
   <h2>Тогуз коргоолдун эрежелери</h2>
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
            [9, 9, 9, 9, 9, 9, 9, 9, 9],  // Лунки игрока
            [9, 9, 9, 9, 9, 9, 9, 9, 9]   // Лунки бота
        ];
        let scores = [0, 0];
        let currentPlayer = 0;  // Игрок начинает
        function createBoard() {
            const boardElement = document.getElementById('board');
            boardElement.innerHTML = '';  // Очистить доску
            for (let i = 0; i < 9; i++) {
                // Лунки бота (в верхней строке)
                const hole2 = document.createElement('div');
                hole2.className = 'hole';
                hole2.innerHTML = `<img src="photo_2024-09-02_09-27-54.jpg" alt="marble"><div class="stones">${board[1][i]}</div>`;
                boardElement.appendChild(hole2);
            }
            for (let i = 0; i < 9; i++) {
                // Лунки игрока (в нижней строке)
                const hole1 = document.createElement('div');
                hole1.className = 'hole';
                hole1.innerHTML = `<img src="photo_2024-09-02_09-27-54.jpg" alt="marble"><div class="stones">${board[0][i]}</div>`;
                hole1.onclick = () => makeMove(0, i);
                boardElement.appendChild(hole1);
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
            }  // Проверка на захват камней
            if (board[side][hole] % 2 === 0 && side !== currentPlayer) {
                scores[currentPlayer] += board[side][hole];
                board[side][hole] = 0;
            } currentPlayer = 1 - currentPlayer;
            updateBoard();
        if (currentPlayer === 1) {
                setTimeout(botMove, 1000);  // Ход бота с небольшой задержкой
            }
            checkGameOver();
        }
function botMove() {
            let validMoves = board[1].map((stones, index) => stones > 0 ? index : -1).filter(index => index !== -1);
            let randomMove = validMoves[Math.floor(Math.random() * validMoves.length)];
            makeMove(1, randomMove);
        }
    function updateBoard() {
            createBoard();
            document.getElementById('player1-score').textContent = `Очки Игрока: ${scores[0]}`;
            document.getElementById('player2-score').textContent = `Очки Бота: ${scores[1]}`;
        }
    function checkGameOver() {
            if (board[0].every(hole => hole === 0) || board[1].every(hole => hole === 0)) {
                let winner = scores[0] > scores[1] ? 'Игрок' : 'Бот';
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
        }// Инициализация игры
        createBoard();
</script>
</body>
</html>
