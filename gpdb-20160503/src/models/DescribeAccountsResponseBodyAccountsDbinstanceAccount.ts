// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccountsResponseBodyAccountsDBInstanceAccount extends $dara.Model {
  /**
   * @remarks
   * The description of the account.
   * 
   * @example
   * testuser
   */
  accountDescription?: string;
  /**
   * @remarks
   * The name of the account.
   * 
   * @example
   * testuser
   */
  accountName?: string;
  /**
   * @remarks
   * The state of the account.
   * 
   * *   **0**: The account is being created.
   * *   **1**: The account is in use.
   * *   **3**: The account is being deleted.
   * 
   * @example
   * 1
   */
  accountStatus?: string;
  /**
   * @remarks
   * The type of the database account. Valid values: Super and Normal. Super indicates a privileged account and Normal indicates a standard account.
   * 
   * @example
   * Super
   */
  accountType?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * gp-bp***************
   */
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountDescription: 'AccountDescription',
      accountName: 'AccountName',
      accountStatus: 'AccountStatus',
      accountType: 'AccountType',
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDescription: 'string',
      accountName: 'string',
      accountStatus: 'string',
      accountType: 'string',
      DBInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

