import React, { useState } from "react";

const Calculator: React.FC = () => {
  // State variables for name, age, and calculated days lived
  const [name, setName] = useState("");
  const [age, setAge] = useState<number | string | undefined>(undefined);
  const [daysLived, setDaysLived] = useState<number | undefined>(undefined);

  // Handle change for the age input field
  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setAge(event.target.valueAsNumber);
  };

  // Handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (typeof age === "number") {
      const days = age * 365;
      setDaysLived(days);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            value={name}
            placeholder="Jared Hall"
            onChange={(event: React.ChangeEvent<HTMLInputElement>): void => setName(event.target.value)}
          />
          <label htmlFor="age">Age: </label>
          <input
            type="number"
            id="age"
            value={age !== undefined ? age : ""}
            placeholder="24"
            onChange={handleAgeChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {daysLived !== undefined && (
        <div>
          <p>{name} has lived for approximately {daysLived} days.</p>
        </div>
      )}
    </>
  );
};

export default Calculator;
