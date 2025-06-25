// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListOperationHostAccountsResponseBodyHostAccountsSSHConfig } from "./ListOperationHostAccountsResponseBodyHostAccountsSshconfig";


export class ListOperationHostAccountsResponseBodyHostAccounts extends $dara.Model {
  /**
   * @remarks
   * Indicates whether a password is configured for the host account.
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  hasPassword?: boolean;
  /**
   * @remarks
   * The host account ID.
   * 
   * @example
   * 1
   */
  hostAccountId?: string;
  /**
   * @remarks
   * The host account name.
   * 
   * @example
   * root
   */
  hostAccountName?: string;
  /**
   * @remarks
   * The host ID.
   * 
   * @example
   * １
   */
  hostId?: string;
  /**
   * @remarks
   * The ID of the shared key that is associated with the host.
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
   * The protocol that is used by the host account.
   * 
   * *   **SSH**
   * *   **RDP**
   * 
   * @example
   * SSH
   */
  protocolName?: string;
  /**
   * @remarks
   * Indicates whether the Secure File Transfer Protocol (SFTP) channels or the SSH channels are enabled for the host account that uses the SSH protocol.
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

