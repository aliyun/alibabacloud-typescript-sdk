// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClientSourceIpResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  clientIp?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      clientIp: 'ClientIp',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      clientIp: 'string',
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

