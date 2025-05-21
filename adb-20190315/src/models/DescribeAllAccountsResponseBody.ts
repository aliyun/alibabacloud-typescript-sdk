// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAllAccountsResponseBodyAccountList } from "./DescribeAllAccountsResponseBodyAccountList";


export class DescribeAllAccountsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried database accounts.
   */
  accountList?: DescribeAllAccountsResponseBodyAccountList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accountList: 'AccountList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountList: { 'type': 'array', 'itemType': DescribeAllAccountsResponseBodyAccountList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accountList)) {
      $dara.Model.validateArray(this.accountList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

