import React, { useState } from "react";
import InputFields from "./components/InputFields";
import ListUsers from "./components/ListUsers";

const App = () => {
  const [pageHandle, setPageHandle] = useState(true);
  const forwardValue = [];
  return (
    <div>
      {pageHandle ? (
        <InputFields setPageHandle={setPageHandle} />
      ) : (
        <ListUsers forwardValue={forwardValue} setPageHandle={setPageHandle} />
      )}
    </div>
  );
};

export default App;
