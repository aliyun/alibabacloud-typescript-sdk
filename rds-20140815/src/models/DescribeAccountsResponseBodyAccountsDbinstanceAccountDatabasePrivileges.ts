// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAccountsResponseBodyAccountsDBInstanceAccountDatabasePrivilegesDatabasePrivilege } from "./DescribeAccountsResponseBodyAccountsDbinstanceAccountDatabasePrivilegesDatabasePrivilege";


export class DescribeAccountsResponseBodyAccountsDBInstanceAccountDatabasePrivileges extends $dara.Model {
  databasePrivilege?: DescribeAccountsResponseBodyAccountsDBInstanceAccountDatabasePrivilegesDatabasePrivilege[];
  static names(): { [key: string]: string } {
    return {
      databasePrivilege: 'DatabasePrivilege',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databasePrivilege: { 'type': 'array', 'itemType': DescribeAccountsResponseBodyAccountsDBInstanceAccountDatabasePrivilegesDatabasePrivilege },
    };
  }

  validate() {
    if(Array.isArray(this.databasePrivilege)) {
      $dara.Model.validateArray(this.databasePrivilege);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

