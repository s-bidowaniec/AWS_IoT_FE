'use client';
import { SendMessage } from "./sendDataAWScli";
import { sendData } from "./sendDataMQTT";

export default function TestAwsIoT() {

  return (
        <div>
          <button onClick={() => sendData("Hello World!")}>Send Data</button>
          <button onClick={() => SendMessage("Hello AWS IoT Core!")}>Send Message</button>
        </div>
  );
}

