// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccountsResponseBodyDataAccounts extends $dara.Model {
  /**
   * @remarks
   * The username of the database account.
   * 
   * @example
   * test
   */
  account?: string;
  /**
   * @remarks
   * The type of the database account. Valid values:
   * 
   * *   **1**: standard account
   * *   **6**: privileged account
   * 
   * @example
   * NormalAccount
   */
  accountType?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Used for test
   */
  description?: string;
  /**
   * @remarks
   * The state of the database account. Valid values:
   * 
   * *   **0**: The database account is being created.
   * *   **1**: The database account is in use.
   * *   **3**: The database account is being deleted.
   * 
   * @example
   * 1
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      accountType: 'AccountType',
      description: 'Description',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      accountType: 'string',
      description: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

