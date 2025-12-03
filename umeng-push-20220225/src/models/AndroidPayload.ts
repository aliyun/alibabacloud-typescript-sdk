// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Body } from "./Body";
import { Message2ThirdChannel } from "./Message2thirdChannel";


export class AndroidPayload extends $dara.Model {
  body?: Body;
  displayType?: string;
  extra?: { [key: string]: any };
  message2ThirdChannel?: Message2ThirdChannel;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      displayType: 'displayType',
      extra: 'extra',
      message2ThirdChannel: 'message2ThirdChannel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: Body,
      displayType: 'string',
      extra: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message2ThirdChannel: Message2ThirdChannel,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    if(this.extra) {
      $dara.Model.validateMap(this.extra);
    }
    if(this.message2ThirdChannel && typeof (this.message2ThirdChannel as any).validate === 'function') {
      (this.message2ThirdChannel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

