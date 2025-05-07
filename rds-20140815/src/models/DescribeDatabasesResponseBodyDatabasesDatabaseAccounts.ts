// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDatabasesResponseBodyDatabasesDatabaseAccountsAccountPrivilegeInfo } from "./DescribeDatabasesResponseBodyDatabasesDatabaseAccountsAccountPrivilegeInfo";


export class DescribeDatabasesResponseBodyDatabasesDatabaseAccounts extends $dara.Model {
  accountPrivilegeInfo?: DescribeDatabasesResponseBodyDatabasesDatabaseAccountsAccountPrivilegeInfo[];
  static names(): { [key: string]: string } {
    return {
      accountPrivilegeInfo: 'AccountPrivilegeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountPrivilegeInfo: { 'type': 'array', 'itemType': DescribeDatabasesResponseBodyDatabasesDatabaseAccountsAccountPrivilegeInfo },
    };
  }

  validate() {
    if(Array.isArray(this.accountPrivilegeInfo)) {
      $dara.Model.validateArray(this.accountPrivilegeInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

