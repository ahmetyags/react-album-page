import Card from "./componenet/card/Card";
import Header from "./componenet/header/Header";
import data from "./helper/data";
import "./app.css";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="cards">
        {data.map((item, index) => {
          console.log(item);
          const {
            photographer,
            src: { large },
          } = item;
          return <Card key={index} photographer={photographer} large={large} />;
        })}
      </div>
    </div>
  );
}

export default App;
