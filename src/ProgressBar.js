import { useState, useEffect } from "react";
import "./App.css";
let progressWidth;

export default function ProgressBar({ percentage, value, maxValue, minValue }) {
    const [error, setError] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (percentage <= 100 && percentage >= 0) {
            setProgress(percentage);
        } else if (value >= 0 && value <= 200 && maxValue && minValue === 0) {
            percentage = (value / maxValue) * 100;
            setProgress(percentage);
        } else if (percentage < 0) {
            setError(true);
            console.log("you provided a negative percentage");
        } else if (percentage > 100) {
            setError(true);
            console.log("you provided a percentage higher than 100");
        } else {
            setError(true);
            console.log("you provided an invalid value");
        }
    }, [percentage, value, maxValue, minValue]);

    if (percentage === 0 || value === 0) {
        progressWidth = "1%";
    } else {
        progressWidth = `${progress}%`;
    }

    return (
        <>
            <p>Progressbar</p>
            <div className="progress-bar">
                {!error && (
                    <div
                        className="loading-progress"
                        style={{ width: progressWidth }}
                    >
                        {progress}%
                    </div>
                )}
                {error && <div className="error">⚠️</div>}
            </div>
        </>
    );
}
