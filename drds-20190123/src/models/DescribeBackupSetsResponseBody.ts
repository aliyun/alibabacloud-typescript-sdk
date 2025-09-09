// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupSetsResponseBodyBackupSetsBackupSetBackupDbs extends $dara.Model {
  backupDb?: string[];
  static names(): { [key: string]: string } {
    return {
      backupDb: 'backupDb',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupDb: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.backupDb)) {
      $dara.Model.validateArray(this.backupDb);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupSetsResponseBodyBackupSetsBackupSet extends $dara.Model {
  /**
   * @remarks
   * Backup Recovery duration.
   * 
   * @example
   * 2020-06-05 11:31:38
   */
  backupConsitentTime?: string;
  /**
   * @remarks
   * The list of backup databases.
   */
  backupDbs?: DescribeBackupSetsResponseBodyBackupSetsBackupSetBackupDbs;
  /**
   * @remarks
   * The end of the backup time which is in timestamp format (measured in millisecond).
   * 
   * >  0 indicates not finished.
   * 
   * @example
   * 1591327899000
   */
  backupEndTime?: number;
  /**
   * @remarks
   * The level of the backup. Valid values:
   * 
   * *   db: The database level.
   * *   instance: the instance level.
   * 
   * @example
   * instance
   */
  backupLevel?: string;
  /**
   * @remarks
   * The backup method. Valid values:
   * 
   * *   logic: the logical backup.
   * *   phy: fast backup
   * 
   * @example
   * logic
   */
  backupMode?: string;
  /**
   * @remarks
   * The beginning of the backup time which is in timestamp format (measured in millisecond).
   * 
   * @example
   * 1591327754000
   */
  backupStartTime?: number;
  /**
   * @remarks
   * The size of the backup set. Unit: MB.
   * 
   * @example
   * 93.24
   */
  backupTotalSize?: string;
  /**
   * @remarks
   * The type of the backup. Valid values:
   * 
   * *   manual: indicates a manual backup.
   * *   auto: indicates an automatic backup.
   * 
   * @example
   * manual
   */
  backupType?: string;
  /**
   * @remarks
   * Indicates whether the backup set can be restored. Valid values:
   * 
   * @example
   * false
   */
  enableRecovery?: boolean;
  /**
   * @remarks
   * The ID of the data backup file you want to use.
   * 
   * @example
   * ba30d5c4-a6dc-11ea-bd40-************
   */
  id?: string;
  /**
   * @remarks
   * The status of the backup instance. Valid values:
   * 
   * *   \\-1: Failed
   * *   0: Not started
   * *   1: The storage instance is running.
   * *   2: Success
   * 
   * @example
   * 2
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      backupConsitentTime: 'BackupConsitentTime',
      backupDbs: 'BackupDbs',
      backupEndTime: 'BackupEndTime',
      backupLevel: 'BackupLevel',
      backupMode: 'BackupMode',
      backupStartTime: 'BackupStartTime',
      backupTotalSize: 'BackupTotalSize',
      backupType: 'BackupType',
      enableRecovery: 'EnableRecovery',
      id: 'Id',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupConsitentTime: 'string',
      backupDbs: DescribeBackupSetsResponseBodyBackupSetsBackupSetBackupDbs,
      backupEndTime: 'number',
      backupLevel: 'string',
      backupMode: 'string',
      backupStartTime: 'number',
      backupTotalSize: 'string',
      backupType: 'string',
      enableRecovery: 'boolean',
      id: 'string',
      status: 'number',
    };
  }

  validate() {
    if(this.backupDbs && typeof (this.backupDbs as any).validate === 'function') {
      (this.backupDbs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupSetsResponseBodyBackupSets extends $dara.Model {
  backupSet?: DescribeBackupSetsResponseBodyBackupSetsBackupSet[];
  static names(): { [key: string]: string } {
    return {
      backupSet: 'backupSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSet: { 'type': 'array', 'itemType': DescribeBackupSetsResponseBodyBackupSetsBackupSet },
    };
  }

  validate() {
    if(Array.isArray(this.backupSet)) {
      $dara.Model.validateArray(this.backupSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupSetsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of backup sets.
   */
  backupSets?: DescribeBackupSetsResponseBodyBackupSets;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7103AEE3-9025-442F-B82B-BABD0A******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      backupSets: 'BackupSets',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSets: DescribeBackupSetsResponseBodyBackupSets,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.backupSets && typeof (this.backupSets as any).validate === 'function') {
      (this.backupSets as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

