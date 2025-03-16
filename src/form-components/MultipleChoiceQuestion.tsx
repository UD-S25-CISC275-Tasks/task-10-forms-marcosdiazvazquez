import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [selectedAnswer, setSelectedAnswer] = useState<string>(options[0]);

    const handleAnswerChange = (
        event: React.ChangeEvent<HTMLSelectElement>,
    ) => {
        setSelectedAnswer(event.target.value);
    };

    const isCorrect = selectedAnswer === expectedAnswer;

    return (
        <div className="question-container">
            <h3 className="question-title">Multiple Choice Question</h3>

            <Form.Group className="answer-selection-group">
                <Form.Label className="answer-label">
                    Select your answer:
                </Form.Label>
                <Form.Select
                    value={selectedAnswer}
                    onChange={handleAnswerChange}
                    className="answer-dropdown"
                >
                    {options.map((option, index) => (
                        <option
                            key={index}
                            value={option}
                            className="answer-option"
                        >
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>

            <div className="result-container">
                <h4 className="result-text">
                    Result: {isCorrect ? "✔️" : "❌"}
                </h4>
            </div>
        </div>
    );
}
