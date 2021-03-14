import { useEffect, useState } from "react";

export default function Timer() {
    const [time, setTime] = useState(0);
    const [timerOn, setTimerOn] = useState(false);

    useEffect(() => {
        if (timerOn) {
            const intervalId = setInterval(() => {
                setTime((prevTime) => prevTime + 1000);
            }, 1000);
            return () => clearInterval(intervalId);
        }
    }, [timerOn, time]);

    return (
        <>
            {time / 1000} Seconds
            <button onClick={() => setTimerOn(true)}>play</button>
            <button onClick={() => setTimerOn(false)}>pause</button>
        </>
    );
}
