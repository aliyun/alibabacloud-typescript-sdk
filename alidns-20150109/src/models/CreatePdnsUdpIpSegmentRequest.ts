// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePdnsUdpIpSegmentRequest extends $dara.Model {
  ip?: string;
  ipToken?: string;
  lang?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      ipToken: 'IpToken',
      lang: 'Lang',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      ipToken: 'string',
      lang: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

