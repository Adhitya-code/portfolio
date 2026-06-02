
const cardContainer = document.querySelector(".card-container")

const quizzes = [
    {
        id: "science",
        title: "Science Technology",
        icon: "fa-solid fa-flask",
        desc: "Test your knowledge of science and technology.",
        duration: 15,
        completed: 0
    },

    {
        id: "math",
        title: "Mathematics Quiz",
        icon: "fa-solid fa-square-root-variable",
        desc: "Challenge your logic and math skills.",
        duration: 25,
        completed: 0
    },

    {
        id: "history",
        title: "History Quiz",
        icon: "fa-solid fa-landmark",
        desc: "Learn historical events and civilizations.",
        duration: 12, 
        completed: 0
    },

    {
        id: "geography",
        title: "Geography Quiz",
        icon: "fa-solid fa-earth-americas",
        desc: "Explore countries, capitals, and world landmarks.",
        duration: 15,
        completed: 0
    },

    {
        id: "health",
        title: "Health Quiz",
        icon: "fa-solid fa-heart-pulse",
        desc: "Test your knowledge about health and healthy living.",
        duration: 10,
        completed: 0
    }
];

const quizData = {
    science: [
        {
            question: "Apa simbol kimia untuk air?",
            answers: {
                A: "H2O",
                B: "CO2",
                C: "O2",
                D: "NaCl"
            },
            correct: "A"
        },
        {
            question: "Planet manakah yang dikenal sebagai Planet Merah?",
            answers: {
                A: "Bumi",
                B: "Mars",
                C: "Venus",
                D: "Jupiter"
            },
            correct: "B"
        },
        {
            question: "Gas apa yang diserap tumbuhan saat fotosintesis?",
            answers: {
                A: "Oksigen",
                B: "Hidrogen",
                C: "Karbon Dioksida",
                D: "Nitrogen"
            },
            correct: "C"
        },
        {
            question: "Organ tubuh yang berfungsi memompa darah adalah?",
            answers: {
                A: "Paru-paru",
                B: "Jantung",
                C: "Ginjal",
                D: "Hati"
            },
            correct: "B"
        },
        {
            question: "Satuan dasar arus listrik adalah?",
            answers: {
                A: "Volt",
                B: "Watt",
                C: "Ampere",
                D: "Ohm"
            },
            correct: "C"
        }
    ],

    math: [
        {
            question: "2 + 2 = ?",
            answers: {
                A: "3",
                B: "4",
                C: "5",
                D: "6"
            },
            correct: "B"
        },
        {
            question: "10 × 5 = ?",
            answers: {
                A: "40",
                B: "45",
                C: "50",
                D: "55"
            },
            correct: "C"
        },
        {
            question: "Akar kuadrat dari 81 adalah?",
            answers: {
                A: "7",
                B: "8",
                C: "9",
                D: "10"
            },
            correct: "C"
        },
        {
            question: "15 - 7 = ?",
            answers: {
                A: "6",
                B: "7",
                C: "8",
                D: "9"
            },
            correct: "C"
        },
        {
            question: "12 ÷ 3 = ?",
            answers: {
                A: "2",
                B: "3",
                C: "4",
                D: "5"
            },
            correct: "C"
        }
    ],

    history: [
        {
            question: "Siapa yang menemukan benua Amerika?",
            answers: {
                A: "Christopher Columbus",
                B: "Isaac Newton",
                C: "Albert Einstein",
                D: "Nikola Tesla"
            },
            correct: "A"
        },
        {
            question: "Perang Dunia II berakhir pada tahun?",
            answers: {
                A: "1943",
                B: "1944",
                C: "1945",
                D: "1946"
            },
            correct: "C"
        },
        {
            question: "Siapa presiden pertama Amerika Serikat?",
            answers: {
                A: "George Washington",
                B: "Abraham Lincoln",
                C: "Thomas Jefferson",
                D: "John Adams"
            },
            correct: "A"
        },
        {
            question: "Siapa proklamator kemerdekaan Indonesia?",
            answers: {
                A: "Soeharto",
                B: "Soekarno",
                C: "Habibie",
                D: "Megawati"
            },
            correct: "B"
        },
        {
            question: "Indonesia merdeka pada tanggal?",
            answers: {
                A: "17 Agustus 1945",
                B: "18 Agustus 1945",
                C: "20 Mei 1908",
                D: "28 Oktober 1928"
            },
            correct: "A"
        }
    ],

    geography: [
        {
            question: "Apa ibu kota Prancis?",
            answers: {
                A: "Berlin",
                B: "Madrid",
                C: "Paris",
                D: "Roma"
            },
            correct: "C"
        },
        {
            question: "Samudra terbesar di dunia adalah?",
            answers: {
                A: "Atlantik",
                B: "Hindia",
                C: "Arktik",
                D: "Pasifik"
            },
            correct: "D"
        },
        {
            question: "Mesir berada di benua?",
            answers: {
                A: "Asia",
                B: "Eropa",
                C: "Afrika",
                D: "Australia"
            },
            correct: "C"
        },
        {
            question: "Gunung tertinggi di dunia adalah?",
            answers: {
                A: "Kilimanjaro",
                B: "Everest",
                C: "Fuji",
                D: "Elbrus"
            },
            correct: "B"
        },
        {
            question: "Ibu kota Indonesia adalah?",
            answers: {
                A: "Bandung",
                B: "Surabaya",
                C: "Jakarta",
                D: "Medan"
            },
            correct: "C"
        }
    ],

    health: [
        {
            question: "Vitamin yang diperoleh dari sinar matahari adalah?",
            answers: {
                A: "Vitamin A",
                B: "Vitamin C",
                C: "Vitamin D",
                D: "Vitamin K"
            },
            correct: "C"
        },
        {
            question: "Jam tidur yang disarankan untuk orang dewasa adalah?",
            answers: {
                A: "3-4 jam",
                B: "5-6 jam",
                C: "7-9 jam",
                D: "10-12 jam"
            },
            correct: "C"
        },
        {
            question: "Organ yang memompa darah ke seluruh tubuh adalah?",
            answers: {
                A: "Hati",
                B: "Paru-paru",
                C: "Ginjal",
                D: "Jantung"
            },
            correct: "D"
        },
        {
            question: "Minuman terbaik untuk menjaga hidrasi tubuh adalah?",
            answers: {
                A: "Kopi",
                B: "Teh",
                C: "Air Putih",
                D: "Soda"
            },
            correct: "C"
        },
        {
            question: "Olahraga secara rutin bermanfaat untuk?",
            answers: {
                A: "Menurunkan kesehatan",
                B: "Meningkatkan kebugaran",
                C: "Mengurangi energi",
                D: "Membuat cepat lelah"
            },
            correct: "B"
        }
    ]
};


if (cardContainer) {
    quizzes.forEach((quiz) => {
    cardContainer.innerHTML += `
        <div class="card" data-category="${quiz.id}">
            <div class="card-image">
                <span class="card-icon">
                    <i class="${quiz.icon}"></i>
                </span>
            </div>

            <h3>${quiz.title}</h3>

            <p class="hidden">${quiz.desc}</p>

            <div class="quiz-info">
                <span>${quizData[quiz.id].length} QUESTIONS</span>
                <span>${quiz.duration} MINUTES</span>
            </div>
        </div>
    `;
})
}



const cards = document.querySelectorAll(".card") 
const menuContainer = document.querySelector(".menu-container");
const navLinks = document.querySelectorAll(".nav-link");
const exitBtn = document.getElementById("exit-quiz");
const progressFill = document.querySelector(".progress-fill");
const progressPercent = document.querySelector(".progress-percent");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("previous");
const submitBtn = document.getElementById("submit-btn");
const quizLists = document.querySelector(".quiz-lists");
const quizTitle = document.querySelector(".quiz-title-right");
const questionText = document.querySelector(".question-text")
const currentNum = 0;
let currentQuestion = 0;
let userAnswers = JSON.parse(localStorage.getItem("answer")) || [];
const resultTitle = document.getElementById("result-title");
const resultScore = document.getElementById("score-number");
const correctCount = document.getElementById("correct-count");
const incorrectCount = document.getElementById("incorrect-count");


navLinks.forEach((nav) => {
    nav.addEventListener("click", (e) => {
        e.preventDefault()
    })
})


if (cards.length > 0) {
    cards.forEach((card) => {
        card.addEventListener("click", () => {
           const category = card.dataset.category

           const selectedData = quizzes.find(quiz => quiz.id === category);

           

           localStorage.setItem("selectedQuiz", selectedData.id);
           localStorage.setItem("selectedQuizTitle", selectedData.title)
           

           window.location.href = "dashboard.html";
    })
})
}

if (menuContainer) {
    const selectedQuiz = localStorage.getItem("selectedQuiz");
    const selectedData = quizzes.find(quiz => quiz.id === selectedQuiz);

    menuContainer.innerHTML = `
            <div class="menu-card" dataset="${selectedData.id}">
                <div class="card-image">
                    <span class="card-icon"><i class="${selectedData.icon}"></i></span>
                </div>
                <h3>${selectedData.title}</h3>
                <p>${selectedData.desc}</p>
                <div class="quiz-info">
                    <span>${quizData[selectedQuiz].length} QUESTIONS</span>
                    <span>${selectedData.duration} MINUTES</span>
                </div>  
                <button class="start">Begin</button>
            </div>
            `
}



if (quizLists) {
    /* Display */
    const selectedQuiz = localStorage.getItem("selectedQuiz");
    const selectedData = quizzes.find(quiz => quiz.id === selectedQuiz);
    const quiz = quizData[selectedQuiz];


    for (let i = 0; i < quiz.length; i++) {
        quizLists.innerHTML += `<div class="quiz-number">${i+1}</div>`
    }

    const firstQuestion = document.querySelector(".quiz-number").classList.add("current");

    quizTitle.innerHTML += `
    <div class="quiz-image">
        <span class="quiz-icon"><i class="${selectedData.icon}"></i></span> 
    </div>
    <p>${selectedData.title}</p>
    `

    questionText.innerHTML += `Question ${currentNum + 1} of ${quizData[selectedQuiz].length}`

    
    questionClick()
    saveAnswer()
    loadQuestion()
    checkAllAnswered()
    updateQuestionStatus()
    updateProgress()
    /* Display */


}

function loadQuestion () {
    const selectedQuiz = localStorage.getItem("selectedQuiz");
    const quiz = quizData[selectedQuiz];

    document.querySelector(".quiz-question").textContent = quiz[currentQuestion].question;

    document.querySelector("#ansA + label .answer-text").textContent = `A. ${quiz[currentQuestion].answers.A}`;
    document.querySelector("#ansB + label .answer-text").textContent = `B. ${quiz[currentQuestion].answers.B}`;
    document.querySelector("#ansC + label .answer-text").textContent = `C. ${quiz[currentQuestion].answers.C}`;
    document.querySelector("#ansD + label .answer-text").textContent = `D. ${quiz[currentQuestion].answers.D}`;

    const radios = document.querySelectorAll('input[name="quiz-answer"]');

    // reset dulu
    radios.forEach(radio => {
        radio.checked = false;
    });

    // tampilkan jawaban yang sudah tersimpan
    const savedAnswer = userAnswers[currentQuestion];

    if (savedAnswer) {
        document.querySelector(
            `input[name="quiz-answer"][value="${savedAnswer}"]`
        ).checked = true;
    }
}



function questionClick() {
    const answers = document.querySelectorAll(".quiz-number");
    

    answers.forEach((ans , index) => {
        ans.addEventListener("click", () => {
            answers.forEach((item) => {
                item.classList.remove("current")
            })

            ans.classList.add("current")

            currentQuestion = index;

            loadQuestion()
        })
    })
}

function saveAnswer() {
    const radioAnswers = document.querySelectorAll(`input[name="quiz-answer"]`);

    radioAnswers.forEach((radio) => {
        radio.addEventListener("change", () => {
            userAnswers[currentQuestion] = radio.value;

            localStorage.setItem("answer", JSON.stringify(userAnswers))
            updateQuestionStatus()
            checkAllAnswered()
            updateProgress();
        })
    })
}

function updateQuestionStatus() {
    const questionNumbers = document.querySelectorAll(".quiz-number");

    userAnswers = JSON.parse(localStorage.getItem("answer")) || [];


    questionNumbers.forEach((item, index) => {

        item.classList.remove("answered");

        if (userAnswers[index]) {
            item.classList.add("answered");
        }
    })
}

function updateCurrentQuestion() {
    const questionNumbers = document.querySelectorAll(".quiz-number");

    questionNumbers.forEach(item => {
        item.classList.remove("current");
    });

    questionNumbers[currentQuestion].classList.add("current");
}

const startBtn = document.querySelector(".start");

if (startBtn) {
    startBtn.addEventListener("click", () => {
        window.location.href = "quiz.html"
    })
}

if (exitBtn) {
    exitBtn.addEventListener("click", () => {
        localStorage.removeItem("answer");
        window.location.href = "index.html" 
    })
}

if (resultTitle) {
    const result = JSON.parse(localStorage.getItem("result"));
    const title = localStorage.getItem("selectedQuizTitle");




    if (result) {

    resultTitle.textContent = title;
    resultScore.textContent = result.score
    correctCount.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${result.correct}`
    incorrectCount.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> ${result.incorrect}`
 }

  localStorage.removeItem("answer");
}




if (nextBtn) {
    nextBtn.addEventListener("click", () => {
        const selectedQuiz = localStorage.getItem("selectedQuiz");
        const quiz = quizData[selectedQuiz];

        if (currentQuestion < quiz.length - 1) {
            currentQuestion++;
            updateCurrentQuestion();
        }
        loadQuestion();
    });
}

if (prevBtn) {
    prevBtn.addEventListener("click", () => {
        const selectedQuiz = localStorage.getItem("selectedQuiz");
        const quiz = quizData[selectedQuiz];

        if (currentQuestion > 0) {
            currentQuestion--;
            updateCurrentQuestion();
        }
        loadQuestion();
    });
}

function checkAllAnswered() {
    const selectedQuiz = localStorage.getItem("selectedQuiz");
    const quiz = quizData[selectedQuiz];

    const allAnswered = quiz.every((_, index) => {
        return userAnswers[index];
    });

    if (allAnswered) {
        submitBtn.classList.add("next");
    } else {
        submitBtn.classList.remove("next");
    }
    return allAnswered
}



function updateProgress() {
    const selectedQuiz = localStorage.getItem("selectedQuiz");
    const totalQuestions = quizData[selectedQuiz].length;

    const answeredCount = userAnswers.filter(answer => answer).length;

    const percentage = (answeredCount / totalQuestions) * 100

    questionText.textContent = `${answeredCount} of ${totalQuestions} answered`

    progressFill.style.width = `${percentage}%`
    progressPercent.textContent = `${Math.round(percentage)}%`
}

if (submitBtn) {
    submitBtn.addEventListener("click", () => {
        if (!checkAllAnswered()) {
            alert("Soal belum selesai semua!");
            return;
        }

        const selectedQuiz = localStorage.getItem("selectedQuiz");
        const quiz = quizData[selectedQuiz];

        let correct = 0;
        let incorrect = 0;

        quiz.forEach((quiz, index) => {
            if (userAnswers[index] === quiz.correct) {
                correct++;
            } else {
                incorrect++;
            }
        });

        const score = Math.round((correct / quiz.length) * 100);

        // Simpan hasil ke localStorage
        localStorage.setItem("result", JSON.stringify({
            correct: correct,
            incorrect: incorrect,
            score: score
        }));

        

        // Pindah ke halaman hasil
        window.location.href = "result.html";
    });
}






