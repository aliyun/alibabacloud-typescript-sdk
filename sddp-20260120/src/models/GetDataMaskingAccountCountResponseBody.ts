// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataMaskingAccountCountResponseBodyAccountCount extends $dara.Model {
  /**
   * @remarks
   * The number of fullAccess accounts that have plaintext access.
   * 
   * @example
   * 2
   */
  fullAccessCount?: number;
  /**
   * @remarks
   * The number of noneAccess accounts that are prohibited from decryption.
   * 
   * @example
   * 1
   */
  noneAccessCount?: number;
  /**
   * @remarks
   * The number of restrictedAccess accounts that have restricted access.
   * 
   * @example
   * 3
   */
  restrictedAccessCount?: number;
  /**
   * @remarks
   * The total number of database accounts.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      fullAccessCount: 'FullAccessCount',
      noneAccessCount: 'NoneAccessCount',
      restrictedAccessCount: 'RestrictedAccessCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fullAccessCount: 'number',
      noneAccessCount: 'number',
      restrictedAccessCount: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataMaskingAccountCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The permission statistics of column encryption accounts.
   */
  accountCount?: GetDataMaskingAccountCountResponseBodyAccountCount;
  /**
   * @remarks
   * The request ID, which can be used to locate this API call.
   * 
   * @example
   * 7C6D8E9F-1234-5678-ABCD-0123456789AB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accountCount: 'AccountCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountCount: GetDataMaskingAccountCountResponseBodyAccountCount,
      requestId: 'string',
    };
  }

  validate() {
    if(this.accountCount && typeof (this.accountCount as any).validate === 'function') {
      (this.accountCount as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

