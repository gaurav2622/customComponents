import React, { useState } from "react";

const Questions = ({
  question,
  options,
  handleAnswerClick,
  selectedAnswer
}) => {
  return (
    <div>
      <p className="mb-2">{question}</p>
      {options.map((option, index) => (
        <button
          type="button"
          className={`btn btn-primary my-1 mx-1 ${
            selectedAnswer === index ? "selected" : ""
          }`}
          key={index}
          onClick={() => handleAnswerClick(index)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

const QuizHeader = () => {
  return (
    <div>
      <h4 className="mb-0">Quiz App</h4>
    </div>
  );
};

const QuizResult = ({ score, totalQuestions, restartQuiz }) => {
  return (
    <div>
      <div className="text-center">
        <h2>Quiz Result</h2>
        <p>
          Your score: {score} out of {totalQuestions}
        </p>
        <button type="button" className="btn btn-primary" onClick={restartQuiz}>
          Restart Quiz
        </button>
      </div>
    </div>
  );
};

const QuizApp = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [error, setError] = useState(false);

  const questions = [
    {
      question: "1. Javascript is an _______ language?",
      options: [
        "Object-Oriented",
        "Object-Based",
        "Procedural",
        "None of above"
      ],
      correctAnswer: "Object-Oriented"
    },
    {
      question:
        "Which of the following keywords is used to define a variable in Javascript?",
      options: ["var", "let", "Both A and B", "None of above"],
      correctAnswer: "Both A and B"
    },
    {
      question:
        "Which of the following methods is used to access HTML elements using Javascript?",
      options: [
        "getElementbyId()",
        "getElementsByClassName()",
        "Both A and B",
        "None of the above"
      ],
      correctAnswer: "Both A and B"
    },
    {
      question: "How can a datatype be declared to be a constant type?",
      options: ["const", "var", "let", "constant"],
      correctAnswer: "const"
    }
  ];

  const startQuiz = () => {
    setQuizStarted(true);
  };

  const handleAnswerClick = (selectedAnswerIndex) => {
    setSelectedAnswer(selectedAnswerIndex);
  };

  const moveToNextQuestion = () => {
    if (selectedAnswer === null) {
      setError(true);
      return;
    }

    const currentAnswer = questions[currentQuestion].correctAnswer;
    if (questions[currentQuestion].options[selectedAnswer] === currentAnswer) {
      setScore(score + 1);
    }

    setSelectedAnswer(null);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const moveToPreviousQuestion = () => {
    const previousQuestion = currentQuestion - 1;
    if (previousQuestion >= 0) {
      setCurrentQuestion(previousQuestion);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };
  return (
    <div>
      {showResult ? (
        <QuizResult
          score={score}
          totalQuestions={questions.length}
          restartQuiz={restartQuiz}
        />
      ) : (
        <div>
          {!quizStarted ? (
            <div>
              <h2>Welcome to the Quiz!</h2>
              <button
                type="button"
                className="btn btn-primary"
                onClick={startQuiz}
              >
                Start Quiz
              </button>
            </div>
          ) : (
            <div className="quiz-app-wrapper">
              <div className="quiz-wrapper-header">
                <div className="d-flex align-items-center justify-content-between">
                  <QuizHeader />
                </div>
              </div>
              <div className="quiz-wrapper-body">
                <h4 className="mb-4">
                  Question {currentQuestion + 1}/{questions.length}
                </h4>
                <Questions
                  question={questions[currentQuestion].question}
                  options={questions[currentQuestion].options}
                  handleAnswerClick={handleAnswerClick}
                  selectedAnswer={selectedAnswer}
                />
                {error && <p className="error-msg">Please select an answer.</p>}
              </div>
              <div className="quiz-wrapper-btns">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    {currentQuestion > 0 && (
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={moveToPreviousQuestion}
                      >
                        Previous Question
                      </button>
                    )}
                  </div>
                  <div>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={moveToNextQuestion}
                      disabled={selectedAnswer === null}
                    >
                      Next Question
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default QuizApp;
