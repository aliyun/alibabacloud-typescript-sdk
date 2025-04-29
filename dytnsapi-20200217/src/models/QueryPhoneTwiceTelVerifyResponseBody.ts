// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryPhoneTwiceTelVerifyResponseBodyData } from "./QueryPhoneTwiceTelVerifyResponseBodyData";


export class QueryPhoneTwiceTelVerifyResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  code?: string;
  data?: QueryPhoneTwiceTelVerifyResponseBodyData;
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
      data: QueryPhoneTwiceTelVerifyResponseBodyData,
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

