import React, { useState } from "react";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");

    const handleRequestChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setRequestedAttempts(event.target.value);
    };

    const useAttempt = () => {
        if (attemptsLeft > 0) {
            setAttemptsLeft(attemptsLeft - 1);
        }
    };

    const gainAttempts = () => {
        const attemptsToAdd = parseInt(requestedAttempts);
        if (!isNaN(attemptsToAdd)) {
            setAttemptsLeft(attemptsLeft + attemptsToAdd);
        }
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts Left: {attemptsLeft}</div>
            <input
                type="number"
                value={requestedAttempts}
                onChange={handleRequestChange}
                placeholder="Enter number of attempts"
            />
            <button onClick={useAttempt} disabled={attemptsLeft === 0}>
                Use
            </button>
            <button onClick={gainAttempts}>Gain</button>
        </div>
    );
}
