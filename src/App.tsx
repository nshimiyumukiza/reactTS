import Greeting from "./component/Greeting";
import Heading from "./component/Heading";

const App = () => {
  return (
    <div>
      <h1>hello</h1>

      <Heading name="freddy" age={20} addres="kigali" />
      <Greeting name="erneste" />
    </div>
  );
};

export default App;
