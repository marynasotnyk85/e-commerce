// ChildComponent.tsx

import { Button } from "@/components/ui/button";
import React from "react";

interface ChildProps {
  // Define the type for the callback function
  sendDataToParent: (data: string) => void;
}

const ChildComponent: React.FC<ChildProps> = (props) => {
  const sendDataToParent = () => {
    const dataToSend = "Hello from child!";
    // Call the callback function to send data to the parent
    props.sendDataToParent(dataToSend);
  };

  return (
    <div>
      <Button onClick={sendDataToParent}>Send Data to Parent</Button>
    </div>
  );
};

export default ChildComponent;
