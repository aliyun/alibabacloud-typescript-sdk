// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListHostAccountsForHostShareKeyResponseBodyHostAccounts } from "./ListHostAccountsForHostShareKeyResponseBodyHostAccounts";


export class ListHostAccountsForHostShareKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the host accounts that are associated with the shared key.
   */
  hostAccounts?: ListHostAccountsForHostShareKeyResponseBodyHostAccounts[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * EC9BF0F4-8983-491A-BC8C-1B4DD94976DE
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of the host accounts that are associated with the shared key.
   * 
   * @example
   * 5
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
      hostAccounts: { 'type': 'array', 'itemType': ListHostAccountsForHostShareKeyResponseBodyHostAccounts },
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

