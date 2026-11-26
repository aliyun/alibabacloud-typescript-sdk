// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataBackupsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The end time of the backup. The time is displayed in the yyyy-MM-ddTHH:mm:ssZ format and in UTC.
   * 
   * @example
   * 2021-12-22T12:01:43Z
   */
  backupEndTime?: string;
  /**
   * @remarks
   * The end time of the backup in local time.
   * 
   * @example
   * 2021-12-22 20:00:25
   */
  backupEndTimeLocal?: string;
  /**
   * @remarks
   * The backup method. Valid values:
   * 
   * * **Physical**: physical backup.
   * * **Snapshot**: snapshot backup.
   * 
   * @example
   * Physical
   */
  backupMethod?: string;
  /**
   * @remarks
   * The backup mode.
   * 
   * Valid values for full backups:
   * 
   * - **Automated**: automatic backup performed by the system.
   * - **Manual**: manual backup.
   * 
   * Valid values for restorable points:
   * 
   * - **Automated**: restorable point generated after a full backup.
   * - **Manual**: restorable point manually triggered by the user.
   * - **Period**: restorable point periodically triggered by the backup policy.
   * 
   * @example
   * Automated
   */
  backupMode?: string;
  /**
   * @remarks
   * The ID of the backup set.
   * 
   * @example
   * 1111111111
   */
  backupSetId?: string;
  /**
   * @remarks
   * The size of the backup file. Unit: bytes.
   * 
   * @example
   * 2167808
   */
  backupSize?: number;
  /**
   * @remarks
   * The start time of the backup. The time is displayed in the yyyy-MM-ddTHH:mm:ssZ format and in UTC.
   * 
   * @example
   * 2021-12-22T12:00:25Z
   */
  backupStartTime?: string;
  /**
   * @remarks
   * The start time of the backup in local time.
   * 
   * @example
   * 2011-05-30 03:29:00
   */
  backupStartTimeLocal?: string;
  /**
   * @remarks
   * The status of the backup set. Valid values:
   * 
   * - **Success**: successful.
   * - **Failure**: failed.
   * 
   * @example
   * Success
   */
  backupStatus?: string;
  /**
   * @remarks
   * The name of the restorable point or the full backup set.
   * 
   * @example
   * adbpgbackup_555*****_20211222200019
   */
  baksetName?: string;
  /**
   * @remarks
   * - Full backup: the timestamp of the consistency point in time.
   * - Restorable point: the timestamp of the restorable point in time.
   * 
   * @example
   * 1576506856
   */
  consistentTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * gp-bp**************-master
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The backup type. Valid values:
   * 
   * - **DATA**: full backup.
   * - **RESTOREPOI**: restorable point.
   * 
   * @example
   * DATA
   */
  dataType?: string;
  static names(): { [key: string]: string } {
    return {
      backupEndTime: 'BackupEndTime',
      backupEndTimeLocal: 'BackupEndTimeLocal',
      backupMethod: 'BackupMethod',
      backupMode: 'BackupMode',
      backupSetId: 'BackupSetId',
      backupSize: 'BackupSize',
      backupStartTime: 'BackupStartTime',
      backupStartTimeLocal: 'BackupStartTimeLocal',
      backupStatus: 'BackupStatus',
      baksetName: 'BaksetName',
      consistentTime: 'ConsistentTime',
      DBInstanceId: 'DBInstanceId',
      dataType: 'DataType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupEndTime: 'string',
      backupEndTimeLocal: 'string',
      backupMethod: 'string',
      backupMode: 'string',
      backupSetId: 'string',
      backupSize: 'number',
      backupStartTime: 'string',
      backupStartTimeLocal: 'string',
      backupStatus: 'string',
      baksetName: 'string',
      consistentTime: 'number',
      DBInstanceId: 'string',
      dataType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataBackupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of backup sets.
   */
  items?: DescribeDataBackupsResponseBodyItems[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of backup sets on the current page.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3E387971-33A5-5019-AD7F-DC**********
   */
  requestId?: string;
  /**
   * @remarks
   * The total size of the backup sets. Unit: bytes.
   * 
   * @example
   * 1111111111
   */
  totalBackupSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalBackupSize: 'TotalBackupSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeDataBackupsResponseBodyItems },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalBackupSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

