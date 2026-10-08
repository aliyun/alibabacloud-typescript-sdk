// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteBackupFileRequest extends $dara.Model {
  /**
   * @remarks
   * The backup set IDs. Only backup set IDs of individual database backup policies are supported. You can specify up to 100 backup set IDs at a time. Separate multiple IDs with commas (,). You can call DescribeBackups to obtain the backup set IDs.
   * 
   * @example
   * 29304****
   */
  backupId?: string;
  /**
   * @remarks
   * Deletes backup files that were created before the specified point in time. Specify the time in the yyyy-MM-ddTHH:mm:ssZ format (UTC).
   * 
   * @example
   * 2024-06-11T16:00:00Z
   */
  backupTime?: string;
  /**
   * @remarks
   * The instance ID. You can call DescribeDBInstances to obtain the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-bp6wjk5****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * testdb
   */
  DBName?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call DescribeDBInstanceAttribute to obtain the region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      backupTime: 'BackupTime',
      DBInstanceId: 'DBInstanceId',
      DBName: 'DBName',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      backupTime: 'string',
      DBInstanceId: 'string',
      DBName: 'string',
      ownerId: 'number',
      regionId: 'string',
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

