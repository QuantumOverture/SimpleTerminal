import { useEffect,useState } from 'react'
import './App.css';
import CoreTerminal from './components/CoreTerminal';
// Import filesystem namespace
//import { os } from "@neutralinojs/lib"

function App() {

  /*
  const [pythonVersion,setPythonVersion] = useState("0.0")
  // Log current directory or error after component is mounted
  useEffect(() => {
    os.execCommand("python3 --version").then((data) => {
      if(data.stdOut){
        setPythonVersion(data.stdOut.replace("Python ",""));
      }
    }).catch((err) => {
      console.log(err)
    })
  }, [])
  */

  return (
    <CoreTerminal/>
  );
}

export default App;