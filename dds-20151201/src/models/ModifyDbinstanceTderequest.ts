// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceTDERequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
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
   * Custom keys are supported only in the following regions. In other regions, the default key is used for encryption.
   * - Singapore (ap-southeast-1)
   * - Hangzhou (cn-hangzhou)
   * - Shanghai (cn-shanghai)
   * - Beijing (cn-beijing)
   * - Shenzhen (cn-shenzhen)
   * - Hong Kong (China) (cn-hongkong)
   * - Malaysia (ap-southeast-3)
   * 
   * @example
   * 749c1df7-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   */
  encryptionKey?: string;
  /**
   * @remarks
   * The encryption method. Valid values: **aes-256-cbc**.
   * 
   * > This parameter is available only when the **TDEStatus** parameter is set to **enabled**.
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
   * The ARN of the specified role. Format: `acs:ram::$accountID:role/$roleName`.
   * > - `$accountID`: the ID of the Alibaba Cloud account. You can view the ID by logging on to the Alibaba Cloud Management Console, moving the pointer over the profile picture in the upper-right corner, and clicking Security Settings.
   * > - `$roleName`: the name of the RAM role. You can view the name by logging on to the Resource Access Management (RAM) console, clicking RAM Roles in the left-side navigation pane, and viewing the RAM role name list.
   * 
   * @example
   * acs:ram::123456789012****:role/adminrole
   */
  roleARN?: string;
  /**
   * @remarks
   * The time to modify the Transparent Data Encryption (TDE) status of the MongoDB instance. Valid values:
   * 
   * - 0: immediately.
   * 
   * - 1: within the O&M window.
   * 
   * @example
   * 0
   */
  switchMode?: string;
  /**
   * @remarks
   * The TDE status. Valid values: **enabled**, which indicates that TDE is enabled.
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

