export default function PackingList({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item, i) => (
          <Item item={item} key={i} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.description} {item.quantity}
      </span>
      <button>❌</button>
    </li>
  );
}
