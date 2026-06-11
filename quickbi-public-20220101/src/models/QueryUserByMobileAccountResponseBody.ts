// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryUserByMobileAccountResponseBodyResult extends $dara.Model {
  boundUserId?: string;
  thirdAccountName?: string;
  static names(): { [key: string]: string } {
    return {
      boundUserId: 'BoundUserId',
      thirdAccountName: 'ThirdAccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boundUserId: 'string',
      thirdAccountName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserByMobileAccountResponseBody extends $dara.Model {
  requestId?: string;
  result?: QueryUserByMobileAccountResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: QueryUserByMobileAccountResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

