import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <p>hello</p>
      <Interpolationbasics></Interpolationbasics>
    </div>
  );
}

function Interpolationbasics() {
  let title = "hello universe";
  let name = "Pranay";
  let para = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam libero,
  aut iusto quam quasi earum corrupti dicta quis tempore eligendi,
  repudiandae eum sit quae! Cum animi ratione architecto exercitationem
  quam.`;
  return (
    <div>
      <h1>{title}</h1>
      <p>{para}</p>
      <p>{name}</p>
    </div>
  );
}

export default App;
