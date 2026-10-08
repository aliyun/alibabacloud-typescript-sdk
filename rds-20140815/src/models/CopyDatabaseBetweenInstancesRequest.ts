// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopyDatabaseBetweenInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The backup set ID of the source instance. To copy a database from a backup set, call DescribeBackups to query the backup set ID.
   * >You must specify either **BackupId** or **RestoreTime**.
   * 
   * @example
   * 259321****
   */
  backupId?: string;
  /**
   * @remarks
   * The source instance ID. You can call DescribeDBInstances to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-bp172446ys9cf****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The list of database names to be copied. Format: `{"Source database name":"Destination database name"}`. Separate multiple databases with commas (,). Examples:
   * 
   * - Copy a single database: `{"zhttest":"zhttest"}`
   * - Copy multiple databases: `{"zhttest01":"zhttest01","zhttest02":"zhttest02"}`
   * 
   * > The database name on the target instance can be different from that on the source instance. However, make sure that the target instance does not contain a database with the same name before copying.
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
   * The point in time to which you want to copy the database. You can specify any point in time within the backup retention period. Format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * >You must specify either **BackupId** or **RestoreTime**.
   * 
   * @example
   * 2025-06-08T17:41:14Z
   */
  restoreTime?: string;
  /**
   * @remarks
   * Specifies whether to copy users and permissions. Valid values:
   * * **YES**: Users and permissions are copied. If the target instance contains a user with the same name, the permissions of the user on the source instance are merged with those of the user on the target instance.
   * * **NO** (default): Users and permissions are not copied.
   * 
   * @example
   * NO
   */
  syncUserPrivilege?: string;
  /**
   * @remarks
   * The target instance ID. You can invoke DescribeDBInstances to query the instance ID.
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

