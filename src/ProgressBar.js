import { useState, useEffect } from "react";

export default function ProgressBar({ percentage, value, maxValue, minValue }) {
    const [error, setError] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (
            typeof percentage === "number" &&
            percentage <= 100 &&
            percentage >= 0
        ) {
            setProgress(percentage);
        } else if (isNaN(value) || isNaN(maxValue) || isNaN(minValue)) {
            setError(true);
            console.log("make sure the type of you values are numbers");
        } else if (value >= minValue && value <= maxValue) {
            setProgress((value / (maxValue - minValue)) * 100);
        } else if (isNaN(percentage) || percentage < 0 || percentage > 100) {
            setError(true);
            console.log(
                "you provided an invalid percentage, it has to be typeof number higher 0 and lower 100"
            );
        } else {
            setError(true);
            console.log("you provided an invalid value");
        }
    }, [percentage, value, maxValue, minValue]);

    const progressWidth = `${progress}%`;

    return (
        <>
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
