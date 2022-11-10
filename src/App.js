import Screen from "./components/Screen.";
import Inputbox from "./components/Inputbox";
import React,{ useState } from "react";

function App() {
  const [markuplang, setMarkuplang] = useState("");
  return (
    < div  style={{display : "flex"
    }}>
      <Inputbox setdatafn={setMarkuplang}></Inputbox>
      <Screen markupdata={markuplang}></Screen>
    </div>
  );
}

export default App;
