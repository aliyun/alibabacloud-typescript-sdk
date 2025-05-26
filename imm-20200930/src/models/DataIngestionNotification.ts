// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MNS } from "./Mns";
import { RocketMQ } from "./RocketMq";


export class DataIngestionNotification extends $dara.Model {
  endpoint?: string;
  MNS?: MNS;
  rocketMQ?: RocketMQ;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
      MNS: 'MNS',
      rocketMQ: 'RocketMQ',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      MNS: MNS,
      rocketMQ: RocketMQ,
      topic: 'string',
    };
  }

  validate() {
    if(this.MNS && typeof (this.MNS as any).validate === 'function') {
      (this.MNS as any).validate();
    }
    if(this.rocketMQ && typeof (this.rocketMQ as any).validate === 'function') {
      (this.rocketMQ as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

