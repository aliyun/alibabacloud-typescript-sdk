// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeImageSharePermissionResponseBodyAccountsAccount } from "./DescribeImageSharePermissionResponseBodyAccountsAccount";


export class DescribeImageSharePermissionResponseBodyAccounts extends $dara.Model {
  account?: DescribeImageSharePermissionResponseBodyAccountsAccount[];
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: { 'type': 'array', 'itemType': DescribeImageSharePermissionResponseBodyAccountsAccount },
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

