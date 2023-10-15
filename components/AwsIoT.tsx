'use client';
import { sendData } from "./opt";

export default function TestAwsIoT() {

  return (
        <div>
          <button onClick={() => sendData("Hello World!")}>Send Data</button>
        </div>
  );
}

