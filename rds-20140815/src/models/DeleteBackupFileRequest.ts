// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteBackupFileRequest extends $dara.Model {
  /**
   * @remarks
   * You can specify only the ID of a backup file whose backup policy is Single-database Backup. You can specify the IDs of up to 100 backup files at a time. Separate the IDs with commas (,). You can call the DescribeBackups operation to query the IDs of data backup files.
   * 
   * @example
   * 29304****
   */
  backupId?: string;
  /**
   * @remarks
   * The time before which the backup files you want to delete are generated. Specify the time in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2011-06-11T16:00:00Z
   */
  backupTime?: string;
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-bp6wjk5******
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * testdb
   */
  DBName?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call the DescribeDBInstanceAttribute operation to query the region ID.
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

