// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SimpleUser extends $dara.Model {
  /**
   * @remarks
   * Account ID
   * 
   * @example
   * 166***9980757310
   */
  accountNo?: string;
  /**
   * @remarks
   * Account Type
   * 
   * @example
   * ALIYUN
   */
  accountType?: string;
  /**
   * @remarks
   * Role
   * 
   * @example
   * ADMIN
   * 
   * **if can be null:**
   * true
   */
  role?: string;
  /**
   * @remarks
   * User ID
   * 
   * @example
   * 166***9980757311
   */
  userId?: number;
  /**
   * @remarks
   * Username
   * 
   * @example
   * txdemo@test.aliyunid.com
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      accountNo: 'AccountNo',
      accountType: 'AccountType',
      role: 'Role',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountNo: 'string',
      accountType: 'string',
      role: 'string',
      userId: 'number',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

