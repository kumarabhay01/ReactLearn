import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    //if (step > 1) setStep(step - 1);
    if (step > 1) setStep((currStep) => currStep - 1);
  }

  function handleNext() {
    if (step < 3)
      //setStep(step + 1);
      setStep((s) => s + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((isO) => !isO)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}:{messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>

            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext /*() => alert("Next")*/}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}