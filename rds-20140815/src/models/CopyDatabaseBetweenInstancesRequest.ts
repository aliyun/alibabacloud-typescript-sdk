// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopyDatabaseBetweenInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup set of the source instance. When you copy a database based on a backup set, you can call the DescribeBackups operation to query the backup set ID.
   * >When you call this operation, you must specify either **BackupId** or **RestoreTime**.
   * 
   * @example
   * 259321****
   */
  backupId?: string;
  /**
   * @remarks
   * The ID of the source instance. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-bp172446ys9cf****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The names of the databases to be copied. Specify the names in the following format: `{"Source database name":"Target database name"}`. Separate multiple databases with commas (,). Examples:
   * 
   * - Copy a single database: `{"zhttest":"zhttest"}`
   * - Copy multiple databases: `{"zhttest01":"zhttest01","zhttest02":"zhttest02"}`
   * 
   * > The name of the database in the target instance can be different from that in the source instance. However, before copying, make sure that the target instance does not contain a database with the same name.
   * 
   * This parameter is required.
   * 
   * @example
   * {"zhttest":"zhttest"}
   */
  dbNames?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The point in time to which you want to restore the database. You can select any point in time within the backup retention period. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time must be in UTC.
   * >When you call this operation, you must specify either **BackupId** or **RestoreTime**.
   * 
   * @example
   * 2025-06-08T17:41:14Z
   */
  restoreTime?: string;
  /**
   * @remarks
   * Specifies whether to enable the replication of users and permissions. Valid values:
   * * **YES**: Enables the replication of users and permissions. If the target instance contains a user with the same name as a user in the source instance, the permissions of the source user are added to the target user.
   * * **NO**: Disables the replication of users and permissions. This is the default value.
   * 
   * @example
   * NO
   */
  syncUserPrivilege?: string;
  /**
   * @remarks
   * The ID of the target instance. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-bp1m71wvzfiq7****
   */
  targetDBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      DBInstanceId: 'DBInstanceId',
      dbNames: 'DbNames',
      resourceOwnerId: 'ResourceOwnerId',
      restoreTime: 'RestoreTime',
      syncUserPrivilege: 'SyncUserPrivilege',
      targetDBInstanceId: 'TargetDBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      DBInstanceId: 'string',
      dbNames: 'string',
      resourceOwnerId: 'number',
      restoreTime: 'string',
      syncUserPrivilege: 'string',
      targetDBInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

