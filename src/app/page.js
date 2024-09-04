"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import ASCIIArtBackground from './ASCIIArtBackground';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
const questions = [
  {
    "type": "text",
    "text": "How often do you reflect on the long-term impact of your decisions beyond immediate results?",
    "options": [
      { "text": "Never", "score": 0 },
      { "text": "Rarely", "score": 1 },
      { "text": "Sometimes", "score": 2 },
      { "text": "Often", "score": 3 },
      { "text": "Always", "score": 4 }
    ]
  },
    {
      type: 'image',
      text: "This shows up in your mail, fear or success?",
      image: "./images/letter.png",
      options: [
        { text: "Success", score: 2 },
        { text: "Fear", score: 0 }
      ]
    },
    {
      "type": "text",
      "text": "Do you believe you should adapt to market trends or create entirely new trends?",
      "options": [
        { "text": "Always adapt to trends", "score": 0 },
        { "text": "Mostly follow trends", "score": 1 },
        { "text": "Balance of both", "score": 2 },
        { "text": "Mostly create new trends", "score": 3 },
        { "text": "Always strive to create new trends", "score": 4 }
      ]
    },
    {
      type: 'image',
      text: "Do you talk to users?",
      image: "./images/paul.png",
      options: [
        { text: "I ignore them all", score: 0 },
        { text: "Once a month", score: 1 },
        { text: "Once a week", score: 2 },
        { text: "Everyday", score: 4 },
        { text: "I live with my users", score: 5 }
      ]
    },
    {
      type: 'image',
      text: "Do you feel Locked Up? or Locked In?",
      image: "./images/inspo.png",
      options: [
        { text: "Locked In", score: 2 },
        { text: "Locked Up", score: 0 }
      ]
    },
    {
      type: 'image',
      text: "Do you know a startup founder in the bay?",
      image: "./images/bay.png",
      options: [
        { text: "i have no friends", score: 2 },
        { text: "0", score: 0 },
        { text: "1", score: 1 },
      ]
    },
  {
    "type": "image",
    "text": "What command do you use to stage changes in Git?",
    "image": "./images/git.png",
    "options": [
      { "text": "git add .", "score": 2 },
      { "text": "git commit -a", "score": 0 },
      { "text": "git stage", "score": 0 },
      { "text": "git prepare", "score": 0 }
    ]
  },
  {
    type: 'image',
    text: "What is this cat from?",
    image: "./images/cat.png",
    options: [
      { text: "Toy Story", score: 0 },
      { text: "Product Hunt", score: 2 },
      { text: "Just a normal cat", score: 0 },
    ]
  },
  {
    type: 'text',
    text: "Do you often think about leadership in your startup?",
    options: [
      { text: "Never", score: 0 },
      { text: "Rarely", score: 1 },
      { text: "Sometimes", score: 2 },
      { text: "Often", score: 3 },
      { text: "Always", score: 4 }
    ]
  },
  {
    type: 'image',
    text: "What does this represent to you?",
    image: "./images/y.png",
    options: [
      { text: "YCombinator", score: 2 },
      { text: "An Emoji", score: 1 },
      { text: "The letter Y", score: 0 },
      { text: "YComnbinete", score: 0 }

    ]
  },
  {
    "type": "image",
    "text": "How do you feel about breaking the rules?",
    "image": "./images/rules.png",
    "options": [
      { "text": "Very uncomfortable", "score": 0 },
      { "text": "Neutral", "score": 2 },
      { "text": "Comfortable", "score": 3 },
      { "text": "I love breaking the rules!", "score": 4 }
    ]
  },
  {
    "type": "image",
    "text": "Is learning a never-ending quest for you, or are you done collecting XP?",
    "image": "./images/ai.png",
    "options": [
      { "text": "I've leveled up enough", "score": 0 },
      { "text": "I try to level up when possible", "score": 2 },
      { "text": "Learning is my endless game", "score": 4 }
    ]
  },
  {
    "type": "image",
    "text": "What’s more important: happy team or fast work? (Choose wisely!)",
    "image": "./images/sad.jpeg",
    "options": [
      { "text": "Productivity above all", "score": 1 },
      { "text": "Depends", "score": 4 },
      { "text": "Happiness often comes first", "score": 2 }
    ]
  },
  {
    "type": "image",
    "text": "How often do you stare into the void and question your mission?",
    "image": "./images/wojac.png",
    "options": [
      { "text": "Never..", "score": 0 },
      { "text": "Sometimes", "score": 2 },
      { "text": "Always!!", "score": 4 }
    ]
  },
  {
    "type": "image",
    "text": "Do you believe your company’s success relies more on innovation or execution?",
    "image": "./images/tsart.png",
    "options": [
      { "text": "Mostly innovation with some execution", "score": 1 },
      { "text": "Both.. and like 99 other things", "score": 3 },
      { "text": "Execution is key. Innovation can follow", "score": 4 }
    ]
  },  
  {
    type: 'image',
    text: "What command do you use to create a new branch in Git?",
    image: "./images/git.png",
    options: [
      { text: "git -b", score: 0 },
      { text: "git b", score: 0 },
      { text: "git branch ", score: 2 },
      { text: "git new-branch", score: 0 }
    ]
  },
  {
    type: 'image',
    text: "Do you use X more than Insta?",
    image: "./images/x.png",
    options: [
      { text: "instagram", score: 1 },
      { text: "both for marketing", score: 3 },
      { text: "x", score: 2 }
    ]
  },
];

export default function FounderModeQuiz() {
  const [stage, setStage] = useState('intro');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState('');
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const handleStartQuiz = () => setStage('quiz');
  const handleAnswer = (index) => {
    const currentQ = questions[currentQuestion];
    const scoreToAdd = currentQ.options[index].score;
    setAnswers([...answers, scoreToAdd]);
    setSelectedAnswer(null);
    setScore(score + scoreToAdd);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResults();
    }
  };



  const calculateResults = () => {
    const finalScore = score / questions.length;
    if (finalScore < 2) {
      setResult('Manager Mode');
    } else if (finalScore > 3) {
      setResult('Founder Mode');
    } else {
      setResult('Balanced Mode');
    }
    setStage('result');
  };

  const resetQuiz = () => {
    setStage('intro');
    setCurrentQuestion(0);
    setAnswers([]);
    setResult('');
    setScore(0);
  };

  const containerStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(to bottom right, #050823, #150324)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
    position: 'relative',
  };

  const titleStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    background: 'linear-gradient(to right, #a78bfa, #ec4899)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textAlign: 'center',
  };

  const subtitleStyle = {
    fontSize: '1.25rem',
    marginBottom: '2rem',
    textAlign: 'center',
  };

  const buttonStyle = {
    padding: '0.75rem 2rem',
    background: 'linear-gradient(to right, #8b5cf6, #ec4899)',
    color: 'white',
    fontSize: '1.125rem',
    fontWeight: 'bold',
    borderRadius: '9999px',
    border: 'none',
    cursor: 'pointer',
    transition: 'opacity 0.3s',
  };

  const questionStyle = {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    textAlign: 'center',
  };

  const answerButtonStyle = (index) => ({
    width: '100%',
    padding: '0.75rem',
    marginBottom: '0.5rem',
    background: '#4a5568',
    color: 'white',
    fontSize: '1rem',
    fontWeight: 'bold',
    borderRadius: '9999px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s',
    textAlign: 'center',
    transform: selectedAnswer === index ? 'translateX(10px)' : 'none',
  });

  const progressBarStyle = {
    width: '100%',
    height: '8px',
    backgroundColor: '#4a5568',
    borderRadius: '4px',
    marginBottom: '1rem',
  };

  const progressStyle = {
    width: `${((currentQuestion + 1) / questions.length) * 100}%`,
    height: '100%',
    backgroundColor: '#8b5cf6',
    borderRadius: '4px',
    transition: 'width 0.3s ease-in-out',
  };

  const attributionStyle = {
    position: 'absolute',
    bottom: '10px',
    right: '10px',
    fontSize: '0.75rem',
    color: '#a0aec0',
  };

  const chartData = {
    labels: questions.map((_, index) => `Q${index + 1}`),
    datasets: [
      {
        label: 'Your Answers',
        data: answers,
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        max: 4,
        ticks: {
          stepSize: 1,
          callback: function(value, index, values) {
            return ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'][value];
          }
        }
      }
    }
  };

  return (
    <>
      <ASCIIArtBackground />
      <div style={containerStyle}>
        {stage === 'intro' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ textAlign: 'center' }}
          >
            <h1 style={titleStyle}>FoundTheMode</h1>
            <p style={subtitleStyle}>Think you're in Founder Mode? Find out</p>
            <button onClick={handleStartQuiz} style={buttonStyle}>
              Start Quiz
            </button>
          </motion.div>
        )}
  {stage === 'quiz' && (
          <div style={{ width: '100%', maxWidth: '500px' }}>
            <div style={progressBarStyle}>
              <div style={progressStyle}></div>
            </div>
            <h2 style={questionStyle}>{questions[currentQuestion].text}</h2>
            {questions[currentQuestion].type === 'image' && (
              <img 
                src={questions[currentQuestion].image} 
                alt="Question Image" 
                style={{
                  width: '75px',
                  height: '75px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  margin: '1rem auto',
                  display: 'block'
                }}
              />
            )}
            <div>
              {questions[currentQuestion].type === 'image' 
                ? questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectedAnswer(index);
                        setTimeout(() => handleAnswer(index), 300);
                      }}
                      style={answerButtonStyle(index)}
                    >
                      {option.text}
                    </button>
                  ))
                : ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'].map((option, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectedAnswer(index);
                        setTimeout(() => handleAnswer(index), 300);
                      }}
                      style={answerButtonStyle(index)}
                    >
                      {option}
                    </button>
                  ))
              }
            </div>
          </div>
        )}

        {stage === 'result' && (
          <div style={{ textAlign: 'center', maxWidth: '800px' }}>
            <h2 style={titleStyle}>Your Result: {result}</h2>
            <div style={{ marginBottom: '2rem' }}>
              <Line data={chartData} options={chartOptions} />
            </div>
            <p style={subtitleStyle}>
              {result === 'Manager Mode' && "You tend to favor traditional management practices. While this approach can lead to stability and efficiency, it might limit innovation and adaptability in rapidly changing environments."}
              {result === 'Founder Mode' && "You embody the entrepreneurial spirit, often challenging conventional wisdom and embracing risk. This approach can drive innovation but may sometimes lead to instability if not balanced with some traditional practices."}
              {result === 'Balanced Mode' && "You've struck a balance between traditional management and entrepreneurial thinking. This balanced approach allows you to leverage both stability and innovation, adapting your style as needed."}
            </p>
            <p style={{...subtitleStyle, fontSize: '1rem', marginTop: '1rem'}}>
              For more insights on founder vs manager modes, check out this{' '}
              <a href="https://paulgraham.com/foundermode.html" target="_blank" rel="noopener noreferrer" style={{color: '#a78bfa'}}>
                article by Paul Graham
              </a>.
            </p>
            <button onClick={resetQuiz} style={buttonStyle}>
              Retake Quiz
            </button>
          </div>
        )}

        <div style={attributionStyle}>
          This quiz is just for fun by{' '}
          <a href="https://twitter.com/deetschoe" target="_blank" rel="noopener noreferrer" style={{color: '#a0aec0'}}>
            deet
          </a>
        </div>
      </div>
    </>
  );
}