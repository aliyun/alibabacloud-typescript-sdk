// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeMemberAccountsResponseBodyAccountInfos } from "./DescribeMemberAccountsResponseBodyAccountInfos";


export class DescribeMemberAccountsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the member.
   */
  accountInfos?: DescribeMemberAccountsResponseBodyAccountInfos[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 50C4A80D-D46C-57E0-9A7D-03C0****4852
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accountInfos: 'AccountInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountInfos: { 'type': 'array', 'itemType': DescribeMemberAccountsResponseBodyAccountInfos },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accountInfos)) {
      $dara.Model.validateArray(this.accountInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

