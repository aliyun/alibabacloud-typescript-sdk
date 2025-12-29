// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBackupExpireTimeRequest extends $dara.Model {
  /**
   * @example
   * 2025-03-29T03:47:12Z
   */
  backupExpireTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 260032xxxx
   */
  backupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dds-bp16cb162771****
   */
  DBInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      backupExpireTime: 'BackupExpireTime',
      backupId: 'BackupId',
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupExpireTime: 'string',
      backupId: 'string',
      DBInstanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

