import { useState } from "react";
import Logo from "./logo.svg";
import { Form, Stats, PackingList } from "./components";
export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((currentItems) => [...currentItems, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirm = window.confirm("are you sure to clear the list?");
    if (confirm) setItems([]);
  }

  return (
    <main className="app">
      <section>
        <img src={Logo} alt="Logo" />
        <h1>Travel Note</h1>
        <img src={Logo} alt="Logo" />
      </section>
      <Form onAddItem={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </main>
  );
}
