import "./App.css";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
function App() {
  const items = ["Nairobi", "Mombasa", "Emali", "Makueni", "Kisumu"];
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

      <Alert />
    </div>
  );
}

export default App;
