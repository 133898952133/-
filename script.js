// 题目数据 - 支持三种题型：选择题、媒体题(图片或音频)、判断题
const questions = [
    {
        id: 1,
        type: 'multiple-choice',
        typeText: '选择题',
        text: '以下群友哪些不在托马斯的人生黑名单中',
        options: [
            { id: 'a', text: 'nobu' },
            { id: 'b', text: '阳教主' },
            { id: 'c', text: '浮云散' },
            { id: 'd', text: '石小凡' },
            { id: 'f', text: 'sc' },
            { id: 'g', text: '艾特艾特' },

        ],
        correctAnswer: 'g'
    },

    {
        id: 2,
        type: 'multiple-choice',
        typeText: '选择题',
        text: '托马斯加入了哪个豆瓣小组',
        options: [
            { id: 'a', text: '青岛租房' },
            { id: 'b', text: '广州彩虹' },
            { id: 'c', text: '深圳租房' },
            { id: 'd', text: '广州二手交易' },

        ],
        correctAnswer: 'b'
    },

    {
        id: 3,
        type: 'multiple-choice',
        typeText: '选择题',
        text: '托马斯是以下哪个足球俱乐部的粉丝',
        options: [
            { id: 'a', text: '多特蒙德' },
            { id: 'b', text: '莱比锡' },
            { id: 'c', text: '阿森纳' },
            { id: 'd', text: '曼联' },

        ],
        correctAnswer: 'd'
    },

    {
        id: 4,
        type: 'multiple-choice',
        typeText: '选择题',
        text: '托马斯最爱穿的衣服是哪个品牌的',
        options: [
            { id: 'a', text: '美特斯邦威' },
            { id: 'b', text: '阿迪达斯' },
            { id: 'c', text: '耐克' },
            { id: 'd', text: 'lululemon' },

        ],
        correctAnswer: 'b'
    },

        {
        id: 5,
        type: 'multiple-choice',
        typeText: '选择题',
        text: '以下哪个角色是托马斯Cos过的？',
        options: [
            { id: 'a', text: '初音未来' },
            { id: 'b', text: '桐谷和人' },
            { id: 'c', text: '卡卡西' },
            { id: 'd', text: '妈妈' },

        ],
        correctAnswer: 'd'
    },

           {
        id: 6,
        type: 'multiple-choice',
        typeText: '选择题',
        text: '托马斯曾说过“男儿膝下有黄金”，他曾经为哪位群友献出了自己的黄金？',
        options: [
            { id: 'a', text: '鹦鹉' },
            { id: 'b', text: '鲸鱼' },
            { id: 'c', text: '黑猫' },
            { id: 'd', text: '狗' },

        ],
        correctAnswer: 'A'
    },

           {
        id: 7,
        type: 'multiple-choice',
        typeText: '选择题',
        text: '托马斯曾说过“别发你身上那一堆臭肉烂肉就行”，这里的"你"指的是？',
        options: [
            { id: 'a', text: '鹦鹉' },
            { id: 'b', text: '鲸鱼' },
            { id: 'c', text: '艾特艾特' },
            { id: 'd', text: 'sc' },

        ],
        correctAnswer: 'C'
    },


    {
        id: 8,
        type: 'media-question',
        typeText: '图片题',
        text: '这是托马斯在哪里拍摄的照片？',
        media: {
            type: 'image',
            src: 'tp/sygh.jpg'
        },
        options: [
            { id: 'a', text: '海珠湖畔' },
            { id: 'b', text: '疆近酒 '},
            { id: 'c', text: '声音共和' },
            { id: 'd', text: 'Bo live' }
        ],
        correctAnswer: 'A'
    },

        {
        id: 3,
        type: 'media-question',
        typeText: '图片题',
        text: '图中的托马斯正在？',
        media: {
            type: 'image',
            src: 'tp/fys.png'
        },
        options: [
            { id: 'a', text: '追艺人要签名' },
            { id: 'b', text: '练习室内足球'},
            { id: 'c', text: '躲起来被妈妈找' },
            { id: 'd', text: '惊动了浮云散后逃跑' }
        ],
        correctAnswer: 'B'
    },
        {
        id: 10,
        type: 'media-question',
        typeText: '图片题',
        text: '图示的茅台是托马斯在哪个城市喝的？',
        media: {
            type: 'image',
            src: 'tp/mt.jpg'
        },
        options: [
            { id: 'a', text: '珠海（海洋中心）' },
            { id: 'b', text: '广州（声共湖畔） '},
            { id: 'c', text: '深圳（B10隔壁）' },
            { id: 'd', text: '青岛（亲友聚会）' }
        ],
        correctAnswer: 'A'
    },

      {
        id: 11,
        type: 'media-question',
        typeText: '图片题',
        text: '图中的托马斯为何抽泣？',
        media: {
            type: 'image',
            src: 'tp/kq.png'
        },
        options: [
            { id: 'a', text: '装的别信' },
            { id: 'b', text: '没签到蹲的艺人 '},
            { id: 'c', text: '石小凡扣押了34.7元' },
            { id: 'd', text: '受委屈了' }
        ],
        correctAnswer: 'A'
    },

    {
        id: 12,
        type: 'true-false',
        typeText: '判断题',
        text: 'CSS只能用于设置网页的颜色。',
        options: [
            { id: 'a', text: '正确' },
            { id: 'b', text: '错误' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 13,
        type: 'multiple-choice',
        typeText: '选择题',
        text: 'React是什么类型的JavaScript库？',
        options: [
            { id: 'a', text: '服务器端渲染库' },
            { id: 'b', text: 'UI库' },
            { id: 'c', text: '全栈框架' },
            { id: 'd', text: '数据库管理库' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 14,
        type: 'media-question',
        typeText: '音频题',
        text: '请听以下音频，这是什么动物的叫声？',
        media: {
            type: 'audio',
            src: 'mp3/Love.mp3'
        },
        options: [
            { id: 'a', text: '猫' },
            { id: 'b', text: '狗' },
            { id: 'c', text: '鸟' },
            { id: 'd', text: '羊' }
        ],
        correctAnswer: 'c'
    },
    {
        id: 15,
        type: 'true-false',
        typeText: '判断题',
        text: 'JavaScript是一种编译型语言。',
        options: [
            { id: 'a', text: '正确' },
            { id: 'b', text: '错误' }
        ],
        correctAnswer: 'b'
    }
];

// DOM元素
const questionContainer = document.getElementById('question-container');
const questionTypeElement = document.getElementById('question-type');
const questionTextElement = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const mediaContainer = document.getElementById('media-container');
const questionImage = document.getElementById('question-image');
const questionAudio = document.getElementById('question-audio');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const resultsContainer = document.getElementById('results-container');
const finalScoreElement = document.getElementById('final-score');
const resultTotalQuestionsElement = document.getElementById('result-total-questions');
const scorePercentageElement = document.getElementById('score-percentage');
const feedbackDetailsElement = document.getElementById('feedback-details');
const restartBtn = document.getElementById('restart-btn');
const quizMain = document.querySelector('.quiz-main');
const currentQuestionElement = document.getElementById('current-question');
const totalQuestionsCountElement = document.getElementById('total-questions-count');
const progressPercentElement = document.getElementById('progress-percent');
const progressFillElement = document.getElementById('progress-fill');
const questionNavDots = document.getElementById('question-dots');
const questionCounter = document.getElementById('question-counter');
const progressPercentage = document.getElementById('progress-percentage');
const questionCategories = document.getElementById('question-categories');

// 题目分类
const questionTypes = {
    'all': { name: '全部题目', count: questions.length },
    'multiple-choice': { name: '选择题', count: questions.filter(q => q.type === 'multiple-choice').length },
    'media-question': { name: '媒体题', count: questions.filter(q => q.type === 'media-question').length },
    'true-false': { name: '判断题', count: questions.filter(q => q.type === 'true-false').length }
};

// 当前筛选的题目类型
let currentFilter = 'all';
// 筛选后的题目列表
let filteredQuestions = [...questions];

// 应用状态
let currentQuestionIndex = 0;
let userAnswers = {};
let answeredCount = 0;

// 初始化问答系统
function initQuestions() {
    // 重置状态
    currentQuestionIndex = 0;
    userAnswers = {};
    answeredCount = 0;
    currentFilter = 'all';
    filteredQuestions = [...questions];
    
    // 更新总题目数
    totalQuestionsCountElement.textContent = questions.length;
    
    // 生成题目分类标签
    generateQuestionCategories();
    
    // 生成导航点
    generateNavDots();
    
    // 显示第一题
    showCurrentQuestion();
    
    // 更新进度
    updateProgress();
    
    // 显示题目区域，隐藏结果区域
    quizMain.classList.remove('hidden');
    resultsContainer.classList.add('hidden');
}

// 生成题目分类标签
function generateQuestionCategories() {
    if (!questionCategories) return;
    
    questionCategories.innerHTML = '';
    
    Object.entries(questionTypes).forEach(([type, data]) => {
        const categoryBtn = document.createElement('button');
        categoryBtn.className = `category-btn ${type === currentFilter ? 'active' : ''}`;
        categoryBtn.textContent = `${data.name} (${data.count})`;
        categoryBtn.dataset.type = type;
        
        categoryBtn.addEventListener('click', () => {
            filterQuestions(type);
        });
        
        questionCategories.appendChild(categoryBtn);
    });
}

// 筛选题目
function filterQuestions(type) {
    if (type === currentFilter) return;
    
    currentFilter = type;
    
    if (type === 'all') {
        filteredQuestions = [...questions];
    } else {
        filteredQuestions = questions.filter(q => q.type === type);
    }
    
    // 重置当前题目索引
    currentQuestionIndex = 0;
    
    // 更新导航点
    generateNavDots();
    
    // 更新显示
    showCurrentQuestion();
    updateButtonStates();
    updateNavDots();
    updateProgress();
    
    // 更新分类按钮状态
    const categoryBtns = questionCategories.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.type === type);
    });
}

// 生成导航点
function generateNavDots() {
    questionNavDots.innerHTML = '';
    
    filteredQuestions.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = `dot ${index === currentQuestionIndex ? 'active' : ''}`;
        dot.dataset.index = index;
        
        // 添加点击事件
        dot.addEventListener('click', () => {
            goToQuestion(index);
        });
        
        questionNavDots.appendChild(dot);
    });
}

// 显示当前题目
function showCurrentQuestion() {
    if (filteredQuestions.length === 0) {
        questionContainer.innerHTML = '<div class="no-questions">当前分类下没有题目</div>';
        return;
    }
    
    const question = filteredQuestions[currentQuestionIndex];
    
    // 更新当前题目索引显示
    currentQuestionElement.textContent = currentQuestionIndex + 1;
    
    // 更新题目类型
    questionTypeElement.className = `question-type ${question.type}`;
    questionTypeElement.textContent = question.typeText;
    
    // 更新题目文本
    questionTextElement.textContent = question.text;
    
    // 处理媒体内容
    if (question.media) {
        mediaContainer.classList.remove('hidden');
        
        if (question.media.type === 'image') {
            questionImage.src = question.media.src;
            questionImage.style.display = 'block';
            questionImage.style.margin = '0 auto';
            questionAudio.style.display = 'none';
        } else if (question.media.type === 'audio') {
            questionAudio.src = question.media.src;
            questionImage.style.display = 'none';
            questionAudio.style.display = 'block';
        }
    } else {
        mediaContainer.classList.add('hidden');
    }
    
    // 生成选项
    renderOptions(question);
    
    // 更新按钮状态
    updateButtonStates();
    
    // 更新导航点
    updateNavDots();
    
    // 添加动画效果
    questionContainer.classList.remove('fade-in');
    void questionContainer.offsetWidth; // 触发重绘
    questionContainer.classList.add('fade-in');
}

// 渲染选项
function renderOptions(question) {
    optionsContainer.innerHTML = '';
    
    question.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.dataset.questionId = question.id;
        optionElement.dataset.optionId = option.id;
        
        // 根据题型选择输入类型
        const input = document.createElement('input');
        if (question.type === 'true-false') {
            input.type = 'checkbox';
            input.id = `option-${question.id}-${option.id}`;
            input.value = option.id;
            // 单选行为
            input.addEventListener('change', (e) => {
                if (e.target.checked) {
                    // 取消其他选项的选中状态
                    const otherOptions = optionsContainer.querySelectorAll('input[type="checkbox"]');
                    otherOptions.forEach(opt => {
                        if (opt !== input) opt.checked = false;
                    });
                }
                selectOption(question.id, e.target.checked ? option.id : null);
            });
        } else {
            input.type = 'radio';
            input.name = `question-${question.id}`;
            input.id = `option-${question.id}-${option.id}`;
            input.value = option.id;
        }
        
        const label = document.createElement('label');
        label.htmlFor = `option-${question.id}-${option.id}`;
        label.textContent = option.text;
        
        optionElement.appendChild(input);
        optionElement.appendChild(label);
        
        // 添加点击事件
        optionElement.addEventListener('click', () => {
            selectOption(question.id, option.id);
        });
        
        optionsContainer.appendChild(optionElement);
    });
    
    // 恢复用户之前的选择
    const savedAnswer = userAnswers[question.id];
    if (savedAnswer) {
        const savedOption = optionsContainer.querySelector(`.option[data-option-id="${savedAnswer}"]`);
        if (savedOption) {
            savedOption.classList.add('selected');
            const input = savedOption.querySelector('input');
            input.checked = true;
        }
    }
}

// 选择选项
function selectOption(questionId, optionId) {
    // 检查是否是新的答案
    const wasAnswered = questionId in userAnswers;
    const isChanged = userAnswers[questionId] !== optionId;
    
    // 保存用户答案
    userAnswers[questionId] = optionId;
    
    // 如果是新的答案，增加已答题计数
    if (optionId && !wasAnswered) {
        answeredCount++;
    } 
    // 如果取消了答案，减少已答题计数
    else if (!optionId && wasAnswered) {
        answeredCount--;
    }
    
    // 更新选项状态
    const questionOptions = optionsContainer.querySelectorAll('.option');
    questionOptions.forEach(option => {
        option.classList.remove('selected');
        const input = option.querySelector('input');
        input.checked = false;
    });
    
    // 设置当前选中状态
    if (optionId) {
        const selectedOption = optionsContainer.querySelector(`.option[data-option-id="${optionId}"]`);
        if (selectedOption) {
            selectedOption.classList.add('selected');
            const input = selectedOption.querySelector('input');
            input.checked = true;
        }
    }
    
    // 更新导航点
    updateNavDots();
    
    // 更新进度
    updateProgress();
}

// 更新按钮状态
function updateButtonStates() {
    if (filteredQuestions.length === 0) {
        prevBtn.disabled = true;
        nextBtn.disabled = true;
        submitBtn.classList.add('hidden');
        return;
    }
    
    // 更新上一题按钮
    prevBtn.disabled = currentQuestionIndex === 0;
    
    // 更新下一题按钮
    nextBtn.disabled = currentQuestionIndex === filteredQuestions.length - 1;
    
    // 更新下一题/提交按钮显示
    if (currentQuestionIndex === filteredQuestions.length - 1) {
        nextBtn.classList.add('hidden');
        submitBtn.classList.remove('hidden');
    } else {
        nextBtn.classList.remove('hidden');
        submitBtn.classList.add('hidden');
    }
}

// 更新导航点
function updateNavDots() {
    const dots = questionNavDots.querySelectorAll('.dot');
    
    dots.forEach((dot, index) => {
        // 移除所有状态类
        dot.classList.remove('active', 'answered');
        
        // 设置当前激活状态
        if (index === currentQuestionIndex) {
            dot.classList.add('active');
        }
        
        // 设置已回答状态
        const question = filteredQuestions[index];
        if (question.id in userAnswers && userAnswers[question.id]) {
            dot.classList.add('answered');
        }
    });
}

// 更新进度
function updateProgress() {
    // 计算已答题目的数量（包括所有类型）
    const progressPercentage = Math.round((answeredCount / questions.length) * 100);
    progressPercentElement.textContent = progressPercentage;
    progressFillElement.style.width = `${progressPercentage}%`;
    
    // 更新进度信息文本
    if (progressPercentageElement) {
        progressPercentageElement.textContent = `${progressPercentage}%`;
    }
    
    // 更新题目计数
    if (questionCounter) {
        questionCounter.textContent = `题目 ${currentQuestionIndex + 1}/${filteredQuestions.length}`;
    }
}

// 上一题
function goToPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showCurrentQuestion();
    }
}

// 下一题
function goToNextQuestion() {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
        currentQuestionIndex++;
        showCurrentQuestion();
    }
}

// 跳转到指定题目
function goToQuestion(index) {
    if (index >= 0 && index < filteredQuestions.length) {
        currentQuestionIndex = index;
        showCurrentQuestion();
    }
}

// 计算得分并显示结果
function calculateScore() {
    let score = 0;
    const answers = {};
    
    // 计算得分 - 只计算已筛选且已回答的题目
    filteredQuestions.forEach(question => {
        const userAnswer = userAnswers[question.id];
        const isCorrect = userAnswer === question.correctAnswer;
        
        if (isCorrect) {
            score++;
        }
        
        answers[question.id] = {
            question: question.text,
            userAnswer: userAnswer,
            correctAnswer: question.correctAnswer,
            isCorrect: isCorrect,
            type: question.type,
            typeText: question.typeText,
            options: question.options
        };
    });
    
    // 更新结果显示
    finalScoreElement.textContent = score;
    resultTotalQuestionsElement.textContent = filteredQuestions.length;
    
    // 计算百分比得分
    const percentage = filteredQuestions.length > 0 ? Math.round((score / filteredQuestions.length) * 100) : 0;
    scorePercentageElement.textContent = `${percentage}%`;
    
    // 显示答题详情
    renderFeedbackDetails(answers);
    
    // 显示结果容器，隐藏题目容器
    quizMain.classList.add('hidden');
    resultsContainer.classList.remove('hidden');
    
    // 添加动画效果
    resultsContainer.classList.add('fade-in');
}

// 渲染答题详情
function renderFeedbackDetails(answers) {
    feedbackDetailsElement.innerHTML = '';
    
    questions.forEach((question, index) => {
        const answer = answers[question.id];
        const feedbackItem = document.createElement('div');
        feedbackItem.className = `feedback-item ${answer.isCorrect ? 'correct' : 'incorrect'} slide-in`;
        feedbackItem.style.animationDelay = `${index * 0.1}s`;
        
        // 题目类型和编号
        const feedbackHeader = document.createElement('div');
        feedbackHeader.className = 'feedback-question';
        feedbackHeader.textContent = `${answer.typeText} ${question.id}: ${answer.question}`;
        
        const feedbackContent = document.createElement('div');
        feedbackContent.className = 'feedback-answer';
        
        // 找到用户选择的选项文本和正确选项文本
        const userOption = answer.options.find(opt => opt.id === answer.userAnswer);
        const correctOption = answer.options.find(opt => opt.id === answer.correctAnswer);
        
        feedbackContent.innerHTML = `
            你的答案: ${userOption ? userOption.text : '未作答'}<br>
            正确答案: ${correctOption.text}
        `;
        
        feedbackItem.appendChild(feedbackHeader);
        feedbackItem.appendChild(feedbackContent);
        
        feedbackDetailsElement.appendChild(feedbackItem);
    });
}

// 提交答案
function submitAnswers() {
    // 检查是否所有筛选后的题目都已回答
    const unansweredQuestions = filteredQuestions.filter(q => !(q.id in userAnswers) || !userAnswers[q.id]);
    
    if (unansweredQuestions.length > 0) {
        if (confirm(`您还有 ${unansweredQuestions.length} 道题目未回答，确定要提交吗？`)) {
            calculateScore();
        }
    } else {
        calculateScore();
    }
}

// 重新开始
function restartQuiz() {
    // 重置UI状态
    resultsContainer.classList.add('hidden');
    resultsContainer.classList.remove('fade-in');
    
    // 重新初始化
    initQuestions();
}

// 事件监听器
prevBtn.addEventListener('click', goToPreviousQuestion);
nextBtn.addEventListener('click', goToNextQuestion);
submitBtn.addEventListener('click', submitAnswers);
restartBtn.addEventListener('click', restartQuiz);

// 键盘导航支持
document.addEventListener('keydown', (e) => {
    if (quizMain.classList.contains('hidden')) return;
    
    if (e.key === 'ArrowLeft') {
        goToPreviousQuestion();
    } else if (e.key === 'ArrowRight') {
        goToNextQuestion();
    }
});

// 为图片添加加载失败处理
if (questionImage) {
    questionImage.addEventListener('error', function() {
        console.log('图片加载失败');
        this.src = '';
        mediaContainer.classList.add('hidden');
    });
}

// 为音频添加加载失败处理
if (questionAudio) {
    questionAudio.addEventListener('error', function() {
        console.log('音频加载失败');
        this.src = '';
        mediaContainer.classList.add('hidden');
    });
}

// 初始化页面
window.addEventListener('DOMContentLoaded', initQuestions);