// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMemberAccountsResponseBodyAccountInfos extends $dara.Model {
  /**
   * @remarks
   * The ID of the member.
   * 
   * @example
   * 169************21
   */
  accountId?: string;
  /**
   * @remarks
   * The name of the member.
   * 
   * @example
   * ipflgmqqnbjg
   */
  accountName?: string;
  /**
   * @remarks
   * The status of the member.
   * 
   * *   **enabled**: managed.
   * *   **disabled**: not managed.
   * *   **disabling**: being deleted.
   * 
   * @example
   * enabled
   */
  accountStatus?: string;
  /**
   * @remarks
   * The description of the member.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The time when the member was added.
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
   * The information about the member.
   */
  accountInfos?: DescribeMemberAccountsResponseBodyAccountInfos[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 50C4A80D-D46C-57E0-9A7D-03C0****4852
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

