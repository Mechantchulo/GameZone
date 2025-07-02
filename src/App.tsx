import "./App.css";
//import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
function App() {
  //const items = ["Nairobi", "Mombasa", "Emali", "Makueni", "Kisumu"];
  /*   const handleSelectedItem = (item: string) => {
    console.log(item);
  }; */

  return (
    <div>
      {/*       <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectedItem}
      /> */}

      <Alert>
        hey there <span> ERICK </span>
      </Alert>

      <Button onClick={() => console.log("clicked")}> Click Me</Button>
    </div>
  );
}

export default App;
