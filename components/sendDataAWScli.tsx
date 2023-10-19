import { Amplify} from 'aws-amplify';

import awsconfig from '../app/aws-exports';
import { PubSub } from 'aws-amplify';
import { AWSIoTProvider } from '@aws-amplify/pubsub/lib/Providers';

Amplify.configure(awsconfig);

//var SUB_TOPIC = "esp32/pub";
var PUB_TOPIC = "esp32/sub";

// Apply plugin with configuration
Amplify.addPluggable(new AWSIoTProvider({
  aws_pubsub_region: 'eu-north-1',
  aws_pubsub_endpoint: 'a20qde0bl0ime-ats.iot.eu-north-1.amazonaws.com',
}));


export async function SendMessage(payload: string) {
  console.log(payload);
  await PubSub.publish(PUB_TOPIC, { msg: payload });

}