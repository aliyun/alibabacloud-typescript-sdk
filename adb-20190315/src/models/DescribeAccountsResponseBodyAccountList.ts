// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAccountsResponseBodyAccountListDBAccount } from "./DescribeAccountsResponseBodyAccountListDbaccount";


export class DescribeAccountsResponseBodyAccountList extends $dara.Model {
  DBAccount?: DescribeAccountsResponseBodyAccountListDBAccount[];
  static names(): { [key: string]: string } {
    return {
      DBAccount: 'DBAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBAccount: { 'type': 'array', 'itemType': DescribeAccountsResponseBodyAccountListDBAccount },
    };
  }

  validate() {
    if(Array.isArray(this.DBAccount)) {
      $dara.Model.validateArray(this.DBAccount);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

