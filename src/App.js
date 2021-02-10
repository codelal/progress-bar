import "./App.css";
import ProgressBar from "./ProgressBar";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <ProgressBar
                    percentage={42}
                    // maxValue={200}
                    // minValue={0}
                    // value={42}
                />
            </header>
        </div>
    );
}

export default App;
