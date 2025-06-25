// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHostAccountResponseBodyHostAccount extends $dara.Model {
  /**
   * @remarks
   * Indicates whether a password is configured for the host account. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
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
   * The ID of the host to which the host account belongs.
   * 
   * @example
   * 1
   */
  hostId?: string;
  /**
   * @remarks
   * The ID of the shared key.
   * 
   * @example
   * 1
   */
  hostShareKeyId?: string;
  /**
   * @remarks
   * The name of the shared key.
   * 
   * @example
   * name
   */
  hostShareKeyName?: string;
  /**
   * @remarks
   * The fingerprint of the private key.
   * 
   * @example
   * fe:ca:37:42:30:00:9d:95:e6:73:e5:b0:32:0a:**:**
   */
  privateKeyFingerprint?: string;
  privilegeType?: string;
  /**
   * @remarks
   * The protocol that is used by the host. Valid values:
   * 
   * *   **SSH**
   * *   **RDP**
   * 
   * @example
   * SSH
   */
  protocolName?: string;
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

