// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccountsResponseBodyAccountsAccount extends $dara.Model {
  /**
   * @remarks
   * The description of the database account.
   * 
   * @example
   * test
   */
  accountDescription?: string;
  /**
   * @remarks
   * The name of the database account.
   * 
   * @example
   * test
   */
  accountName?: string;
  /**
   * @remarks
   * The state of the database account. Valid values:
   * 
   * *   **Creating**
   * *   **Available**
   * *   **AuthorityModifying**
   * *   **Deleting**
   * 
   * >  Only XML-configured database accounts can be in the **AuthorityModifying** state.
   * 
   * @example
   * Creating
   */
  accountStatus?: string;
  /**
   * @remarks
   * The type of the database account. Valid values:
   * 
   * *   **Super**: privileged account
   * *   **Normal**: standard account
   * 
   * @example
   * Super
   */
  accountType?: string;
  /**
   * @remarks
   * The configuration mode of the database account.
   * 
   * @example
   * SQL
   */
  configType?: string;
  static names(): { [key: string]: string } {
    return {
      accountDescription: 'AccountDescription',
      accountName: 'AccountName',
      accountStatus: 'AccountStatus',
      accountType: 'AccountType',
      configType: 'ConfigType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDescription: 'string',
      accountName: 'string',
      accountStatus: 'string',
      accountType: 'string',
      configType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

