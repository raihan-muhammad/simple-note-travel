import Logo from "./logo.svg";
import { Form, Stats, PackingList } from "./components";
export default function App() {
  return (
    <main className="app">
      <section>
        <img src={Logo} alt="Logo" />
        <h1>Travel Note</h1>
      </section>
      <Form />
      <PackingList />
      <Stats />
    </main>
  );
}
