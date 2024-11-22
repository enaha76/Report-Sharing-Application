import React,{useState} from 'react';
import './App.css';
import {Card, CardFooter,Button} from "@nextui-org/react";
import { NextUIProvider } from '@nextui-org/react';

function App() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  const handleReset = () => {
    setCounter(0);
  }

  return (
    <NextUIProvider>
      <div className="container">
     
 <Card
      isFooterBlurred
      radius="lg"
      className="border-none"
    >
      <div className='body'>
          <h2>{counter}</h2>
      </div>
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <Button onPress={handleReset} className="text-tiny text-white" isDisabled={counter===0}  color="danger" radius="lg" size="sm">
          reset
        </Button>
        <Button onPress={handleClick}  color="primary" radius="lg" size="sm">
          count
        </Button>
      </CardFooter>
    </Card>

      </div>
  </NextUIProvider>
  );
}

export default App;

