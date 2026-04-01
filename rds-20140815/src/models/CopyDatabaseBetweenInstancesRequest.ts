// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopyDatabaseBetweenInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup set based on which you want to restore databases of the source instance. When you replicate databases by backup set, you can call the DescribeBackups operation to obtain the ID of the backup set.
   * 
   * >  You must specify one of the **BackupId** and **RestoreTime** parameters.
   * 
   * @example
   * 106523874****
   */
  backupId?: string;
  /**
   * @remarks
   * The source instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5xxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The names of the databases that you want to copy. Format: `Source database name 1,Source database name 2`.
   * 
   * This parameter is required.
   * 
   * @example
   * {"test1":"newtest1","test2":"newtest2"}
   */
  dbNames?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The point in time when the system replicates databases. You can select a point in time within the backup retention period. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * > You must specify one of the **BackupId** and **RestoreTime** parameters.
   * 
   * @example
   * 2011-06-11T16:00:00Z
   */
  restoreTime?: string;
  /**
   * @remarks
   * Specifies whether to copy users and permissions.
   * 
   * *   **YES**: copies users and permissions. If the destination instance has a user whose name is the same as a user in the source instance, the permissions of the user in the source instance will also be granted to the user in the destination instance after you copy user permissions.
   * *   **NO**: does not copy users and permissions.
   * 
   * Default value: **NO**.
   * 
   * @example
   * NO
   */
  syncUserPrivilege?: string;
  /**
   * @remarks
   * The destination instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-ut5ajk3xxxxxxx
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

