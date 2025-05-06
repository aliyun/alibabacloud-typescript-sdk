// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccountsResponseBodyAccountsDatabasePrivileges extends $dara.Model {
  /**
   * @remarks
   * The permissions that the account is granted on the database. Valid values:
   * 
   * @example
   * ReadOnly
   */
  accountPrivilege?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * DBtest
   */
  DBName?: string;
  static names(): { [key: string]: string } {
    return {
      accountPrivilege: 'AccountPrivilege',
      DBName: 'DBName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountPrivilege: 'string',
      DBName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

