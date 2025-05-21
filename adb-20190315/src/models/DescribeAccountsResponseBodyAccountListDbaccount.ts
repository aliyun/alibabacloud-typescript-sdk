// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAccountsResponseBodyAccountListDBAccountTags } from "./DescribeAccountsResponseBodyAccountListDbaccountTags";


export class DescribeAccountsResponseBodyAccountListDBAccount extends $dara.Model {
  /**
   * @remarks
   * The description of the database account.
   * 
   * @example
   * C@test
   */
  accountDescription?: string;
  /**
   * @remarks
   * The name of the database account.
   * 
   * @example
   * test1
   */
  accountName?: string;
  /**
   * @remarks
   * The state of the database account. Valid values:
   * 
   * *   **Creating**
   * *   **Available**
   * *   **Deleting**
   * 
   * @example
   * Available
   */
  accountStatus?: string;
  /**
   * @remarks
   * The type of the database account. Valid values:
   * 
   * *   **Normal**: standard account.
   * *   **Super**: privileged account.
   * 
   * @example
   * Normal
   */
  accountType?: string;
  tags?: DescribeAccountsResponseBodyAccountListDBAccountTags;
  static names(): { [key: string]: string } {
    return {
      accountDescription: 'AccountDescription',
      accountName: 'AccountName',
      accountStatus: 'AccountStatus',
      accountType: 'AccountType',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDescription: 'string',
      accountName: 'string',
      accountStatus: 'string',
      accountType: 'string',
      tags: DescribeAccountsResponseBodyAccountListDBAccountTags,
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

