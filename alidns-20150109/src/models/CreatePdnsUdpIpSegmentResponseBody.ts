// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePdnsUdpIpSegmentResponseBody extends $dara.Model {
  requestId?: string;
  validMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      validMessage: 'ValidMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      validMessage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

