"use server";
import {connect} from "mqtt";
import { IClientOptions } from "mqtt";
import {key, cert, ca} from '../secrets'
const opt: IClientOptions = {
    host: 'a20qde0bl0ime-ats.iot.eu-north-1.amazonaws.com',
    protocol: "mqtt",
    clientId: 'iot-fe',
    clean: false,
    key: key, 
    cert: cert, 
    ca: ca,
    reconnectPeriod: 0,
};

const client  = connect(opt);

client.on("error", (e) => {
    console.log("MQTT Error");
	console.log(e);
	process.exit(-1);
});

client.on("connect", () => {
	// connected
    console.log("Connected to AWS IoT");
});

export async function sendData (data: string)  {
    console.log("Sending Data: " + data);
    console.log(key);
    client.publish(
        "esp32/sub",
        JSON.stringify({message: data})
    );
}
