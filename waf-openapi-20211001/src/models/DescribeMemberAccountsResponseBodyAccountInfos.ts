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

