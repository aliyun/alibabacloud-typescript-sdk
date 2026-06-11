// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryUserInfoByAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account name or Alibaba Cloud ID of the user.
   * 
   * - If you enter an account name:
   * 
   *   - If the organization member is a root account, such as `main_account`, enter the root account name. For example, `main_account`.
   * 
   *   - If the organization member is a RAM user, such as `zhangsan@test.onaliyun.com`, enter the prefix of the username before the at sign (@). For example, `zhangsan`.
   * 
   * - If you enter an Alibaba Cloud ID:
   * 
   *   - Enter the complete user ID (UID) of the account.
   * 
   * This parameter is required.
   * 
   * @example
   * 1386587****@163.com
   */
  account?: string;
  /**
   * @remarks
   * To resolve a "duplicate user" error when querying a RAM user, specify the name of the root account to which the user belongs.
   * 
   * @example
   * zhangsan@test.onaliyun.com
   */
  parentAccountName?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      parentAccountName: 'ParentAccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      parentAccountName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

