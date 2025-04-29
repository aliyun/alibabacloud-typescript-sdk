// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryPhoneNumberOnlineTimeResponseBodyData } from "./QueryPhoneNumberOnlineTimeResponseBodyData";


export class QueryPhoneNumberOnlineTimeResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  code?: string;
  data?: QueryPhoneNumberOnlineTimeResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: QueryPhoneNumberOnlineTimeResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

