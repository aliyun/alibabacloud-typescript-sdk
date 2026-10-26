// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHostAccountsForUserResponseBodyHostAccounts extends $dara.Model {
  /**
   * @remarks
   * The ID of the host account.
   * 
   * @example
   * 1
   */
  hostAccountId?: string;
  /**
   * @remarks
   * The name of the host account.
   * 
   * @example
   * root
   */
  hostAccountName?: string;
  /**
   * @remarks
   * The type of the host account.
   * 
   * @example
   * "Normal"
   */
  hostAccountType?: string;
  /**
   * @remarks
   * The ID of the host to which the host account belongs.
   * 
   * @example
   * 1
   */
  hostId?: string;
  /**
   * @remarks
   * Indicates whether the host account is authorized for the current user. Valid values:
   * - **true**: authorized
   * - **false**: unauthorized
   * 
   * @example
   * true
   */
  isAuthorized?: boolean;
  /**
   * @remarks
   * The protocol of the host account. Valid values:
   * - **SSH**
   * - **RDP**
   * 
   * @example
   * SSH
   */
  protocolName?: string;
  static names(): { [key: string]: string } {
    return {
      hostAccountId: 'HostAccountId',
      hostAccountName: 'HostAccountName',
      hostAccountType: 'HostAccountType',
      hostId: 'HostId',
      isAuthorized: 'IsAuthorized',
      protocolName: 'ProtocolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAccountId: 'string',
      hostAccountName: 'string',
      hostAccountType: 'string',
      hostId: 'string',
      isAuthorized: 'boolean',
      protocolName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostAccountsForUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The host accounts returned.
   */
  hostAccounts?: ListHostAccountsForUserResponseBodyHostAccounts[];
  /**
   * @remarks
   * The ID of the request.
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
      hostAccounts: { 'type': 'array', 'itemType': ListHostAccountsForUserResponseBodyHostAccounts },
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

