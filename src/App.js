import "./App.css";
import Button from "./components/atoms/Button";
import { React, useState, useEffect } from "react";

function App() {
  const [resourceType, setResourceType] = useState("posts");
  const onClick = (e) => {
    let title = e.target.innerHTML;
    // console.log(title);
    setResourceType(title);
  };

  // useEffect(() => {
  //   console.log("Called Everry time when it renders");
  // });

  useEffect(() => {
    console.log(
      "Called only when Mouting an Element , i.e ComponentDidMount Functionality"
    );
    
  }, []);

  useEffect(() => {
    console.log("Changed resourceType");
    return () => {
      console.log("Clean-Up Called - This Method can be used for DidUnMount");
    }
  }, [resourceType]);



  return (
    <>
      <div className="buttonList">
        <Button onClick={onClick} title="posts" />
        <Button onClick={onClick} title="users" />
        <Button onClick={onClick} title="comments" />
      </div>
      <h1>{resourceType}</h1>
    </>
  );
}

export default App;
