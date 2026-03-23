// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIpProtectionResponseBody extends $dara.Model {
  ipProtection?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ipProtection: 'IpProtection',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipProtection: 'string',
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

