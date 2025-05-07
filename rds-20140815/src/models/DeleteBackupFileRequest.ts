// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteBackupFileRequest extends $dara.Model {
  /**
   * @remarks
   * The backup set ID. You can specify the IDs of up to 100 backup sets at a time. Separate the IDs with commas (,).
   * 
   * > *   If the instance runs SQL Server, only the ID of the backup set for an individual database is supported.
   * > *   You can call the DescribeBackups operation to query the backup set ID.
   * 
   * @example
   * 29304****
   */
  backupId?: string;
  /**
   * @remarks
   * Specifies whether to delete the backup sets that are generated before the specified point in time. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
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

