const testData = [
	{
		question: 'Схема трансляции ассемблерного модуля состоит из следующих этапов:',
		answers: [
			'исходный модуль на языке ассемблера – объектный модуль – подключение библиотек и других объектных модулей – исполняемый модуль',
			'исходный модуль на языке ассемблера - подключение библиотек и других объектных модулей – объектный модуль – исполняемый модуль',
			' подключение библиотек и других объектных модулей - исходный модуль на языке ассемблера – объектный модуль – исполняемый модуль',
			'нет правильного ответа',
		],
	},
	{ question: 'Шестнадцатеричное 96h в двоичной системе исчисления равно', answers: ['10010110', '01101001', '0000011000001001', '150'] },
	{
		question: 'Процессор – это:',
		answers: [
			'кремневая плата или подложка с логическими цепями, состоящими из транзисторов, скрытая в пластмассовом корпусе, снабжённом контактными ножками',
			'кремневая плата, обеспечивающая механизм страничной организации памяти, которая необходима для любой многозадачной операционной системы',
			'кремневая плата, хранящая инструкции и данные в виде двоичных сигналов в двоичной системе исчисления',
			'относительно быстрая энергозависимая память компьютера с произвольным доступом, в которой осуществляются большинство операций обмена данными',
		],
	},
	{
		question: 'Сегментные регистры в архитектуре x86_32 имеют:',
		answers: ['16 разрядов', '20 разрядов', '32 разряда', '64 разряда'],
	},
	{
		question: 'Сегментные регистры:',
		answers: [
			'хранят начальные адреса сегментов программы и обеспечивают возможность обращения к этим сегментам',
			'используются для хранения данных. В эти регистры может быть записан адрес возврата в основную программу после завершения работы процедуры',
			'хранят машинные коды команд после трансляции программы',
			'хранят адрес инструкции, которая должна быть выполнена следующей',
		],
	},
	{
		question: 'Имя метки – это:',
		answers: [
			'идентификатор, значением которого является адрес первого байта того предложения исходного текста программы, которое он обозначает',
			'идентификатор, отличающий данную директиву от других одноимённых директив',
			'мнемоническое обозначение соответствующей области памяти для хранения машинной команды или директивы транслятора',
			'идентификатор, который обозначает поименованную область памяти для хранения адреса следующей выполняемой команды',
		],
	},
	{
		question: 'Когда асемблер встречает в программе команду jmp $+3 то:',
		answers: [
			'к текущему смещению прибавляет 3 и переходит к команде, имеющей полученный адрес',
			' прибавляет к переменной $ цифру 3',
			'прибавляет к машинному коду операции цифру 3',
			'прибавляет к содержимому регистра AX цифру 3 и переходит к команде, имеющей полученный адрес',
		],
	},
	{
		question: 'Адрес очередной исполняемой команды определяется парой регистров:',
		answers: ['(e)cs:(e)ip', '(e)cs:(e)ds;', '(e)ip:(e)cs', '(e)ds:(e)ip'],
	},
	{
		question: 'Когда асемблер встречает в программе команду jmp $+3 то:',
		answers: [
			'к текущему смещению прибавляет 3 и переходит к команде, имеющей полученный адрес',
			' прибавляет к переменной $ цифру 3',
			'прибавляет к машинному коду операции цифру 3',
			'прибавляет к содержимому регистра AX цифру 3 и переходит к команде, имеющей полученный адрес',
		],
	},
	{
		question: 'Атрибут выравнивания сегмента может принимать следующие значения:',
		answers: ['DWORD', 'PRIVATE', 'PUBLIC', 'COMMON'],
	},
	{
		question: 'Атрибут размера сегмента для процессоров 80386 может быть равен:',
		answers: [' use16', 'use8', 'use10', 'COMMON'],
	},
	{
		question: 'Тип данных dq резервирует в памяти:',
		answers: ['8 байтов', '2 байта', '4 байта', '16 байт'],
	},
	{
		question: 'К командам пересылки данных относятся:',
		answers: ['mov', 'shr', 'shi', 'in, out'],
	},
	{
		question: 'Команда in AX,DX',
		answers: ['загружает в АХ слово из порта с номером из DX', 'загружает в АХ байт из порта с номером из DX', 'загружает слово в порт, адресуемый регистром DX', 'загружает в АХ содержимое порта DX'],
	},
	{
		question: 'Алгоритм команды PUSH <источник> сводится к следующему:',
		answers: [
			'(sp=sp-2) – (значение из источника записывается по адресу, указываемому парой ss:sp)',
			'(sp=sp+2) – (значение из источника записывается по адресу, указываемому парой ss:sp)',
			'(sp=sp-2) – (значение из источника записывается по адресу, указываемому парой ss:bp)',
			'(sp=sp+2) – (значение из источника записывается по адресу, указываемому парой ss:bp)',
		],
	},
	{
		question: 'При выполнении команды POPA:',
		answers: [
			'загружаются из стека регистры DI, SI, BP, BX, DX, CX, AX',
			'загружаются из стека регистры EDI, ESI, EBP, EBX, EDX, ECX, EAX',
			'помещает значение регистра FLAGS в стек',
			'загружает регистр FLAGS из стека',
		],
	},
	{
		question: 'Укажите какое условие команда jne проверяет для операндов следующей команды: cmp операнд_1, операнд_2',
		answers: [' операнд_1<>операнд_2', 'операнд_1<=операнд_2', 'операнд_1>=операнд_2', 'операнд_1!=операнд_2'],
	},
	{
		question: 'Общий вид команды shld следующий:',
		answers: ['shld операнд_1, операнд_2, счётчик_сдвигов', 'shld операнд_1, операнд_2', 'shld операнд', 'shld операнд_1, счётчик_сдвигов'],
	},
	{
		question: 'По умолчанию ассемблер формирует для команды jmp машинную команду длинной:',
		answers: ['3 байта', '2 байта', '4 байта', '16 байт'],
	},
	{
		question: 'Чем обусловлен объём сегмента в MS DOS в 64 kb:',
		answers: ['16-ти битной адресацией', '8-ми битной адресацией', '32-ух битной адресацией', 'объёмом памяти, отводимой под сегмент кода'],
	},
];
const colors = ['blueviolet', 'cadetblue', 'aqua', 'cornflowerblue', 'darkblue', 'blue', 'midnightblue', 'purple', 'violet'];

const testQuestion = document.querySelector('.test__ask');
const testAnswers = document.querySelectorAll('.test__answer');
const testBg = document.querySelector('.test');
let correctAnswersCount = 0;

const setStage = (stageId) => {
	const stageCount = parseInt(testQuestion.dataset['count']);
	const randomNum = Math.floor(Math.random() * testData.length);
	testQuestion.innerHTML = `${stageId}. ${testData[randomNum].question}`;
	const rightAnswer = testData[randomNum].answers[0];

	console.log(`---Вопрос ${stageId}---`);
	console.log(`Правильный ответ:\n${rightAnswer}`);

	let answerNums = [0, 1, 2, 3];
	for (const [id, answer] of testAnswers.entries()) {
		const answerInput = answer.children[0];
		const answerText = answer.children[1];

		const randomAnwserNum = answerNums[Math.floor(Math.random() * answerNums.length)];
		answerText.innerHTML = testData[randomNum].answers[randomAnwserNum];
		answerNums = answerNums.filter((a) => a !== randomAnwserNum);
		answer.children[0].oninput = () => {
			if (testQuestion.innerText[testQuestion.innerText.length - 1] === '✖' || testQuestion.innerText[testQuestion.innerText.length - 1] === '✔') {
				testQuestion.innerText = testQuestion.innerText
					.replace(/\\t/g, '')
					.replace(/\\n/g, '')
					.split('')
					.filter((q) => q !== '✖')
					.filter((q) => q !== '✔')
					.join('');
			}
			if (stageId === testData.length || stageId === stageCount) {
				const testBox = document.querySelector('.test__box');
				const testTitle = document.querySelector('.test__title');
				let mark;
				if (stageCount) {
					if (correctAnswersCount <= 2) {
						mark = 2;
					} else if (correctAnswersCount === 3) {
						mark = 3;
					} else if (correctAnswersCount === 4) {
						mark = 4;
					} else if (correctAnswersCount === 5) {
						mark = 5;
					}
				} else {
					if (correctAnswersCount < 12) {
						mark = 2;
					} else if (12 < correctAnswersCount < 16) {
						mark = 3;
					} else if (18 > correctAnswersCount >= 16) {
						mark = 4;
					} else if (correctAnswersCount >= 18) {
						mark = 5;
					}
				}
				testBox.style.opacity = '0';
				testTitle.innerHTML = `Тест пройден ${correctAnswersCount} правильных ответов из ${stageCount || testData.length} вопросов. Оценка ${mark}`;
				testTitle.style.textAlign = 'center';
			} else if (answerText.innerText.trim() === rightAnswer.trim()) {
				testQuestion.innerHTML += '<div class="test-success"> ✔</div> ';
				correctAnswersCount++;
			} else {
				testQuestion.innerHTML += '<div class="test-success"> ✖</div> ';
			}
			setTimeout(() => {
				setStage(stageId + 1);
				testBg.style.background = colors[Math.floor(Math.random() * colors.length)];
				answerInput.checked = false;
			}, 400);
		};
	}
};

const test = () => {
	let stage = 1;
	setStage(stage);
};

test();
