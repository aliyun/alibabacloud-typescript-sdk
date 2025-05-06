// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDatabasesResponseBodyDatabasesDatabaseAccountsAccount } from "./DescribeDatabasesResponseBodyDatabasesDatabaseAccountsAccount";


export class DescribeDatabasesResponseBodyDatabasesDatabaseAccounts extends $dara.Model {
  account?: DescribeDatabasesResponseBodyDatabasesDatabaseAccountsAccount[];
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: { 'type': 'array', 'itemType': DescribeDatabasesResponseBodyDatabasesDatabaseAccountsAccount },
    };
  }

  validate() {
    if(Array.isArray(this.account)) {
      $dara.Model.validateArray(this.account);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

