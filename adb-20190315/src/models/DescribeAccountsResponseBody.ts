// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAccountsResponseBodyAccountList } from "./DescribeAccountsResponseBodyAccountList";


export class DescribeAccountsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried database accounts.
   */
  accountList?: DescribeAccountsResponseBodyAccountList;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 64E37E6F-C363-41F3-867A-70EF5DC60EA4
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
      accountList: DescribeAccountsResponseBodyAccountList,
      requestId: 'string',
    };
  }

  validate() {
    if(this.accountList && typeof (this.accountList as any).validate === 'function') {
      (this.accountList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

