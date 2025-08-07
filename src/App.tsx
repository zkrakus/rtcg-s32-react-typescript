import Todos from "./components/ToDos";

function App() {
  const items: string[] = ['React','Typescript']
  
  return (
    <div>
      <Todos items={items} />
    </div>
  );
}

export default App;
