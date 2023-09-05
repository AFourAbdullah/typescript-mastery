import React from "react";
import Box from "./components/Box";

const App = () => {
  return (
    <>
      <div>
        <Box heading="hello" func1={(a: string) => alert(a)}>
          {"woww"}
        </Box>
      </div>
    </>
  );
};

export default App;
