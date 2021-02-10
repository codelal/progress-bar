import { useState, useEffect } from "react";
import "./App.css";

export default function ProgressBar({ percentage, value, maxValue, minValue }) {
    console.log(percentage, value, maxValue, minValue);
    const [error, setError] = useState(false);
    const [progress, setProgress] = useState(0);
    const [max, setMax] = useState();

    useEffect(() => {
        if (percentage <= 100 && percentage >= 0) {
            console.log(percentage);
            setProgress(percentage);
            setMax(100);
        } else if (
            (value >= 0 && value <= 200 && maxValue && minValue) ||
            minValue === 0
        ) {
            percentage = (value / maxValue) * maxValue;
            console.log(percentage);
            setProgress(percentage);
            setMax(maxValue);
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

    return (
        <div>
            <p>This is a progress bar</p>
            <progress
                className="progress-bar"
                value={progress}
                max={max}
            ></progress>
            {error && (
                <progress>⚠️</progress>
            )}
        </div>
    );
}
