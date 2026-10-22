// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHostAccountsResponseBodyHostAccounts extends $dara.Model {
  /**
   * @remarks
   * Indicates whether a password is set for the host account. <br>Valid values:
   * 
   * - **true**: A password is set.
   * - **false**: No password is set.
   * 
   * @example
   * true
   */
  hasPassword?: boolean;
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
   * abc
   */
  hostAccountName?: string;
  /**
   * @remarks
   * The ID of the host.
   * 
   * @example
   * 1
   */
  hostId?: string;
  /**
   * @remarks
   * The ID of the shared key for the host.
   * 
   * @example
   * 1
   */
  hostShareKeyId?: string;
  /**
   * @remarks
   * The name of the shared key for the host.
   * 
   * @example
   * name
   */
  hostShareKeyName?: string;
  /**
   * @remarks
   * The fingerprint of the private key for the host account.
   * 
   * @example
   * fe:ca:37:42:30:00:9d:95:e6:73:e5:b0:32:0a:**:**
   */
  privateKeyFingerprint?: string;
  /**
   * @remarks
   * The permission type of the account. Valid values:
   * - **Privileged**: Privileged account.
   * - **Normal**: Regular account.
   * > This parameter is supported only in V3.2.47 and later.
   * 
   * @example
   * Normal
   */
  privilegeType?: string;
  /**
   * @remarks
   * The protocol name of the host account. <br>Valid values:
   * 
   * - SSH
   * - RDP
   * 
   * @example
   * SSH
   */
  protocolName?: string;
  /**
   * @remarks
   * The password rotation mode of the account. Valid values:
   * - **Privileged**: Uses a privileged account to rotate the password.
   * - **Self**: Does not use a privileged account to rotate the password.
   * > This parameter is supported only in V3.2.47 and later.
   * 
   * @example
   * Privileged
   */
  rotationMode?: string;
  static names(): { [key: string]: string } {
    return {
      hasPassword: 'HasPassword',
      hostAccountId: 'HostAccountId',
      hostAccountName: 'HostAccountName',
      hostId: 'HostId',
      hostShareKeyId: 'HostShareKeyId',
      hostShareKeyName: 'HostShareKeyName',
      privateKeyFingerprint: 'PrivateKeyFingerprint',
      privilegeType: 'PrivilegeType',
      protocolName: 'ProtocolName',
      rotationMode: 'RotationMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasPassword: 'boolean',
      hostAccountId: 'string',
      hostAccountName: 'string',
      hostId: 'string',
      hostShareKeyId: 'string',
      hostShareKeyName: 'string',
      privateKeyFingerprint: 'string',
      privilegeType: 'string',
      protocolName: 'string',
      rotationMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostAccountsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The host accounts returned.
   */
  hostAccounts?: ListHostAccountsResponseBodyHostAccounts[];
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
      hostAccounts: { 'type': 'array', 'itemType': ListHostAccountsResponseBodyHostAccounts },
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

