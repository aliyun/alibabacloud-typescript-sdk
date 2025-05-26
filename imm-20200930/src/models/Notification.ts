// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MNS } from "./Mns";
import { RocketMQ } from "./RocketMq";


export class Notification extends $dara.Model {
  extendedMessageURI?: string;
  MNS?: MNS;
  rocketMQ?: RocketMQ;
  static names(): { [key: string]: string } {
    return {
      extendedMessageURI: 'ExtendedMessageURI',
      MNS: 'MNS',
      rocketMQ: 'RocketMQ',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extendedMessageURI: 'string',
      MNS: MNS,
      rocketMQ: RocketMQ,
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

