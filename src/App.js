import AppUser from "./components/AppUser";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <DataProvider> 
    <div className="App">
      <header className="App-header">
      <AppUser />
      </header>
    </div>
    </DataProvider> 
  );
}

export default App;
