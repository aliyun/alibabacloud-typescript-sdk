// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListOperationHostAccountsResponseBodyHostAccounts } from "./ListOperationHostAccountsResponseBodyHostAccounts";


export class ListOperationHostAccountsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The host accounts returned.
   */
  hostAccounts?: ListOperationHostAccountsResponseBodyHostAccounts[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EC9BF0F4-8983-491A-BC8C-1B4DD94976DE
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of host accounts returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      hostAccounts: 'HostAccounts',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAccounts: { 'type': 'array', 'itemType': ListOperationHostAccountsResponseBodyHostAccounts },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.hostAccounts)) {
      $dara.Model.validateArray(this.hostAccounts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

