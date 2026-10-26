// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryUserInfoByAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account name or Alibaba Cloud ID to query.
   * - When you enter an account name:
   *     - If the organization user is a primary account (for example, main_account), the query account format is the primary account. That is, enter the primary account main_account. 
   *     - If the organization user is a RAM user (for example, zhangsan@test.onaliyun.com), the query account format is the prefix of the RAM user. That is, enter zhangsan.
   * - When you enter an Alibaba Cloud ID:
   *     - Enter the complete account UID to query the corresponding account information.
   * 
   * This parameter is required.
   * 
   * @example
   * 1386587****@163.com
   */
  account?: string;
  /**
   * @remarks
   * The account name of the primary account when a duplicate error occurs during RAM user query. For example, zhangsan@test.onaliyun.com.
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

