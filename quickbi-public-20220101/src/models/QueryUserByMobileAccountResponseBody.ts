// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryUserByMobileAccountResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The Quick BI user ID of the bound account.
   * 
   * @example
   * test
   */
  boundUserId?: string;
  /**
   * @remarks
   * The mobile account name.
   * 
   * @example
   * test
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 46e53***********270
   */
  requestId?: string;
  /**
   * @remarks
   * The user information bound to the third-party account.
   */
  result?: QueryUserByMobileAccountResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - true: The request was successful.
   * - false: The request failed.
   * 
   * @example
   * true
   */
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

