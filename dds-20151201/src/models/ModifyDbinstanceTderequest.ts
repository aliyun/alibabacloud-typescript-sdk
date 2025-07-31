// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceTDERequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bpxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The ID of the custom key.
   * 
   * @example
   * 749c1df7-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   */
  encryptionKey?: string;
  /**
   * @remarks
   * The encryption method. Set the value to **aes-256-cbc**.
   * 
   * > This parameter is valid only when the **TEDStatus** parameter is set to **enabled**.
   * 
   * @example
   * aes-256-cbc
   */
  encryptorName?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the specified Resource Access Management (RAM) role. The ARN is displayed in the `acs:ram::$accountID:role/$roleName` format.
   * 
   * > *   `$accountID`: specifies the ID of the Alibaba Cloud account. To view the account ID, log on to the Alibaba Cloud Management Console, move your pointer over your profile picture in the upper-right corner, and then click Security Settings.
   * 
   * > *   `$roleName`: specifies the name of the RAM role. To view the RAM role name, log on to the RAM console. In the left-side navigation pane, choose Identities > Roles. On the Roles page, view the name of the RAM role.
   * 
   * @example
   * acs:ram::123456789012****:role/adminrole
   */
  roleARN?: string;
  switchMode?: string;
  /**
   * @remarks
   * The TDE status. When the value of this parameter is set to **Enabled**, TDE is enabled.
   * 
   * > You cannot disable TDE after it is enabled. Proceed with caution.
   * 
   * This parameter is required.
   * 
   * @example
   * enabled
   */
  TDEStatus?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      encryptionKey: 'EncryptionKey',
      encryptorName: 'EncryptorName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      roleARN: 'RoleARN',
      switchMode: 'SwitchMode',
      TDEStatus: 'TDEStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      encryptionKey: 'string',
      encryptorName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      roleARN: 'string',
      switchMode: 'string',
      TDEStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

