// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReleasePublicIpAddressResponseBody extends $dara.Model {
  remainTimes?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      remainTimes: 'RemainTimes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remainTimes: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

