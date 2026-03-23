// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMigrateTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  backupMode?: string;
  checkDBMode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  isOnlineDB?: string;
  migrateTaskId?: string;
  OSSUrls?: string;
  ossObjectPositions?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      backupMode: 'BackupMode',
      checkDBMode: 'CheckDBMode',
      DBInstanceId: 'DBInstanceId',
      DBName: 'DBName',
      isOnlineDB: 'IsOnlineDB',
      migrateTaskId: 'MigrateTaskId',
      OSSUrls: 'OSSUrls',
      ossObjectPositions: 'OssObjectPositions',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupMode: 'string',
      checkDBMode: 'string',
      DBInstanceId: 'string',
      DBName: 'string',
      isOnlineDB: 'string',
      migrateTaskId: 'string',
      OSSUrls: 'string',
      ossObjectPositions: 'string',
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

