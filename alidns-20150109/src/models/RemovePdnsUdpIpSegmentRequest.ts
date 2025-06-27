// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemovePdnsUdpIpSegmentRequest extends $dara.Model {
  ip?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      lang: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

