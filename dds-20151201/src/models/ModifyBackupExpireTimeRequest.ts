// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBackupExpireTimeRequest extends $dara.Model {
  /**
   * @remarks
   * The time-to-live (TTL) of the backup. The time must be in the *yyyy-MM-dd*T*HH:mm:ss*Z format and in UTC.
   * 
   * > - *9999-01-01*T*00:00:00*&#x5A;*&#x20;indicates that the backup is retained permanently.*
   * >
   * >   *- You can only extend the retention period. You cannot shorten it.- If you do not set the time to *9999-01-01*T*00:00:00*Z, the new expiration time must be within 730 days after the end time of the backup set.*
   * >
   * > **
   * 
   * @example
   * 2025-03-29T03:47:12Z
   */
  backupExpireTime?: string;
  /**
   * @remarks
   * The backup ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 260032xxxx
   */
  backupId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
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

