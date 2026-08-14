// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUdpReflectResponseBody extends $dara.Model {
  requestId?: string;
  udpSports?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      udpSports: 'UdpSports',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      udpSports: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.udpSports)) {
      $dara.Model.validateArray(this.udpSports);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

