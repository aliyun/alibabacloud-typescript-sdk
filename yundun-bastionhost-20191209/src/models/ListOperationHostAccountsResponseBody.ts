// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOperationHostAccountsResponseBodyHostAccountsSSHConfig extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the SFTP channel is enabled for the account.
   */
  enableSFTPChannel?: boolean;
  /**
   * @remarks
   * Indicates whether the SSH channel is enabled for the account.
   */
  enableSSHChannel?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableSFTPChannel: 'EnableSFTPChannel',
      enableSSHChannel: 'EnableSSHChannel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableSFTPChannel: 'boolean',
      enableSSHChannel: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOperationHostAccountsResponseBodyHostAccounts extends $dara.Model {
  /**
   * @remarks
   * Indicates whether a password is set for the host account.
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
   * root
   */
  hostAccountName?: string;
  /**
   * @remarks
   * The ID of the host.
   * 
   * @example
   * １
   */
  hostId?: string;
  /**
   * @remarks
   * The ID of the host shared key.
   * 
   * @example
   * 3
   */
  hostShareKeyId?: string;
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
   * The protocol name of the host account.
   * - **SSH**
   * - **RDP**
   * 
   * @example
   * SSH
   */
  protocolName?: string;
  /**
   * @remarks
   * The O&M permissions of the SSH account.
   */
  SSHConfig?: ListOperationHostAccountsResponseBodyHostAccountsSSHConfig;
  static names(): { [key: string]: string } {
    return {
      hasPassword: 'HasPassword',
      hostAccountId: 'HostAccountId',
      hostAccountName: 'HostAccountName',
      hostId: 'HostId',
      hostShareKeyId: 'HostShareKeyId',
      privateKeyFingerprint: 'PrivateKeyFingerprint',
      protocolName: 'ProtocolName',
      SSHConfig: 'SSHConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasPassword: 'boolean',
      hostAccountId: 'string',
      hostAccountName: 'string',
      hostId: 'string',
      hostShareKeyId: 'string',
      privateKeyFingerprint: 'string',
      protocolName: 'string',
      SSHConfig: ListOperationHostAccountsResponseBodyHostAccountsSSHConfig,
    };
  }

  validate() {
    if(this.SSHConfig && typeof (this.SSHConfig as any).validate === 'function') {
      (this.SSHConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOperationHostAccountsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The host accounts.
   */
  hostAccounts?: ListOperationHostAccountsResponseBodyHostAccounts[];
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
   * The total number of host accounts.
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

