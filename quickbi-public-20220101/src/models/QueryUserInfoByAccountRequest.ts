// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryUserInfoByAccountRequest extends $dara.Model {
  /**
   * @remarks
   * Enter the name or ID of the Alibaba Cloud account that you want to query.
   * 
   * *   When you enter an account name:
   * 
   *     *   If the organization user is a master account, such as main_account, the query account format is master account. That is, the main account main_account to be entered.
   *     *   If the organization user is a RAM user, such as a <zhangsan@test.onaliyun.com>, the query account format is the head of the RAM user, that is, the RAM user to be entered is zhangsan.
   * 
   * *   ID:
   * 
   *     *   Enter the UID of the account to query the account information.
   * 
   * This parameter is required.
   * 
   * @example
   * 1386587****@163.com
   */
  account?: string;
  /**
   * @remarks
   * When a duplicate error occurs while querying the sub-account, enter the primary account\\"s username, for example, zhangsan@test.onaliyun.com.
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

