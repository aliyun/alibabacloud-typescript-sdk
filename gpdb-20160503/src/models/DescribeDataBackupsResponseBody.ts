// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataBackupsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The UTC time when the backup ended. The time is in the yyyy-MM-ddTHH:mmZ format. The time is displayed in UTC.
   * 
   * @example
   * 2021-12-22T12:01:43Z
   */
  backupEndTime?: string;
  /**
   * @remarks
   * The local time when the backup ended. The time is in the yyyy-MM-dd HH:mm:ss format. The time is your local time.
   * 
   * @example
   * 2021-12-22 20:00:25
   */
  backupEndTimeLocal?: string;
  /**
   * @remarks
   * The method that is used to generate the backup set. Valid values:
   * 
   * *   **Logical**: logical backup
   * *   **Physical**: physical backup
   * *   **Snapshot**: snapshot backup
   * 
   * @example
   * Physical
   */
  backupMethod?: string;
  /**
   * @remarks
   * The backup mode.
   * 
   * Valid values for full backup:
   * 
   * *   Automated: automatic backup
   * *   Manual: manual backup
   * 
   * Valid values for point-in-time backup:
   * 
   * *   Automated: point-in-time backup after full backup
   * *   Manual: manual point-in-time backup
   * *   Period: point-in-time backup that is triggered by a backup policy
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
   * The UTC time when the backup started. The time is in the yyyy-MM-ddTHH:mmZ format. The time is displayed in UTC.
   * 
   * @example
   * 2021-12-22T12:00:25Z
   */
  backupStartTime?: string;
  /**
   * @remarks
   * The local time when the backup started. The time is in the yyyy-MM-dd HH:mm:ss format. The time is your local time.
   * 
   * @example
   * 2011-05-30 03:29:00
   */
  backupStartTimeLocal?: string;
  /**
   * @remarks
   * The status of the backup set. Valid values:
   * 
   * *   Success
   * *   Failure
   * 
   * @example
   * Success
   */
  backupStatus?: string;
  /**
   * @remarks
   * The name of a point-in-time backup set or the full backup set.
   * 
   * @example
   * adbpgbackup_555*****_20211222200019
   */
  baksetName?: string;
  /**
   * @remarks
   * *   For full backup, this parameter indicates the point in time at which the data in the data backup file is consistent.
   * *   For point-in-time backup, this parameter indicates that the returned point in time is a timestamp.
   * 
   * @example
   * 1576506856
   */
  consistentTime?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * gp-bp**************-master
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The type of the backup. Valid values:
   * 
   * *   DATA: full backup
   * *   RESTOREPOI: point-in-time backup
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
   * The instance ID.
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
   * The number of entries per page.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3E387971-33A5-5019-AD7F-DC**********
   */
  requestId?: string;
  /**
   * @remarks
   * The total backup set size. Unit: Byte.
   * 
   * @example
   * 1111111111
   */
  totalBackupSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
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

