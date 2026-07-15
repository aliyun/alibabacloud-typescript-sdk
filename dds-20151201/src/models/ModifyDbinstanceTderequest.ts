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
   * Custom keys are supported only in the following regions. In other regions, the default key is used.
   * 
   * - Singapore (ap-southeast-1)
   * 
   * - Hangzhou (cn-hangzhou)
   * 
   * - Shanghai (cn-shanghai)
   * 
   * - Beijing (cn-beijing)
   * 
   * - Shenzhen (cn-shenzhen)
   * 
   * - Hong Kong (cn-hongkong)
   * 
   * - Malaysia (ap-southeast-3)
   * 
   * @example
   * 749c1df7-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   */
  encryptionKey?: string;
  /**
   * @remarks
   * The encryption method. Set the value to **aes-256-cbc**.
   * 
   * > This parameter is available only when **TDEStatus** is set to **enabled**.
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
   * The Alibaba Cloud Resource Name (ARN) of the RAM role. The format is `acs:ram::$accountID:role/$roleName `.
   * 
   * > - `$accountID`: The ID of your Alibaba Cloud account. To view the ID, log on to the Alibaba Cloud Management Console, move the pointer over your profile picture in the upper-right corner, and then click Security Settings.
   * >
   * > - `$roleName`: The name of the RAM role. To view the name, log on to the RAM console, click RAM Role Management in the navigation pane on the left, and then view the role name in the RAM Role Name list.
   * 
   * @example
   * acs:ram::123456789012****:role/adminrole
   */
  roleARN?: string;
  /**
   * @remarks
   * Specifies when to enable TDE. Valid values:
   * 
   * - 0: Enables TDE immediately.
   * 
   * - 1: Enables TDE during the maintenance window.
   * 
   * @example
   * 0
   */
  switchMode?: string;
  /**
   * @remarks
   * The TDE status. Set the value to **enabled** to enable TDE.
   * 
   * > You cannot disable TDE after you enable it. Enable this feature with caution.
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

