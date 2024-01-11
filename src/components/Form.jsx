export default function Form() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num, i) => (
          <option value={num} key={i}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Item..." />
      <button>Add</button>
    </div>
  );
}
