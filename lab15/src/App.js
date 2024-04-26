import "./app.css";
import Head from "./components/head/head";
import {Main} from "./components/main/main";
import {Footer} from "./components/footer/footer";
export function App() {
  return (
    <div className="App">
        <Head/>
        <Main/>
        <Footer/>
    </div>
  );
}

export default App;
