// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopyDatabaseBetweenInstancesRequest extends $dara.Model {
  backupId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  dbNames?: string;
  resourceOwnerId?: number;
  restoreTime?: string;
  syncUserPrivilege?: string;
  /**
   * @remarks
   * This parameter is required.
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

