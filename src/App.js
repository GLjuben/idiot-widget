import React, { useState } from "react";
// import Accordion from "./components/Accordion";
// import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
const api = {
  key: "c6c7fda339ddc24e4417b9304b433073",
  baseURL: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  // const options = [
  //   {
  //     label: "The color red",
  //     value: "red",
  //   },
  //   {
  //     label: "The color green",
  //     value: "green",
  //   },
  //   {
  //     label: "The color blue",
  //     value: "blue",
  //   },
  // ];
  // const [selected, setSelected] = useState(options[0]);

  // const items = [
  //   {
  //     title: "React",
  //     content:
  //       "React JS allows complete flexibility to the developer. You can use it for creating SPAs, mobile or hybrid apps, even a TV application. You can add as many external libraries and tools as required and build a massive, complicated web application. ReactJS will ensure your app performance is optimized.",
  //   },
  //   {
  //     title: "Angular",
  //     content:
  //       "Angular ensures easy development as it eliminates the need for unnecessary code. It has a simplified MVC architecture, which makes writing getters and setters needless. Directives can be managed by some other team as these are not part of the app code.",
  //   },
  //   {
  //     title: "Vue",
  //     content:
  //       "Vue is lightweight, easy to learn, and pleasant to write in. Because of its familiar templating syntax and use of components, integrating or migrating existing projects to Vue is faster and smoother. For that reason, Vue. js is great for startups but can be just as well used in large-scale applications.",
  //   },
  // ];
  return (
    <div className="App">
      <Translate />
    </div>
  );
}

export default App;
