// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMemberAccountsResponseBodyAccountInfos extends $dara.Model {
  /**
   * @remarks
   * The ID of the member account.
   * 
   * @example
   * 169************21
   */
  accountId?: string;
  /**
   * @remarks
   * The name of the member account.
   * 
   * @example
   * ipflgmqqnbjg
   */
  accountName?: string;
  /**
   * @remarks
   * The status of the member account. Valid values:
   * 
   * - **enabled**: The member account is being managed.
   * 
   * - **disabled**: The member account is not being managed.
   * 
   * - **disabling**: The member account is being removed from management.
   * 
   * @example
   * enabled
   */
  accountStatus?: string;
  /**
   * @remarks
   * The description of the member account.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The time when the member account was added. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1683367751000
   */
  gmtCreate?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountName: 'AccountName',
      accountStatus: 'AccountStatus',
      description: 'Description',
      gmtCreate: 'GmtCreate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountName: 'string',
      accountStatus: 'string',
      description: 'string',
      gmtCreate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMemberAccountsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the member accounts.
   */
  accountInfos?: DescribeMemberAccountsResponseBodyAccountInfos[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 50C4A80D-D46C-57E0-9A7D-03C078474852
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accountInfos: 'AccountInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountInfos: { 'type': 'array', 'itemType': DescribeMemberAccountsResponseBodyAccountInfos },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accountInfos)) {
      $dara.Model.validateArray(this.accountInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

