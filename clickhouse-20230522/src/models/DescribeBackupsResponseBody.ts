// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The end time of the backup. The time is in UTC.
   * 
   * @example
   * 2021-11-22T18:28:41Z
   */
  backupEndTime?: string;
  /**
   * @remarks
   * The backup record ID.
   * 
   * @example
   * 117403****
   */
  backupId?: string;
  /**
   * @remarks
   * The backup method.
   * 
   * @example
   * Physical
   */
  backupMethod?: string;
  /**
   * @remarks
   * The information about the backup set.
   * 
   * @example
   * {"shard_count": 4}
   */
  backupSetInfo?: string;
  /**
   * @remarks
   * The size of the backup file in MB.
   * 
   * @example
   * 131072
   */
  backupSize?: number;
  /**
   * @remarks
   * The start time of the backup.
   * 
   * @example
   * 2021-11-22T18:28:22Z
   */
  backupStartTime?: string;
  /**
   * @remarks
   * The status of the backup set.
   * 
   * @example
   * Success
   */
  backupStatus?: string;
  /**
   * @remarks
   * The backup type.
   * Valid values:
   * 
   * - **FullBackup**: full backup.
   * 
   * - **IncrementalBackup**: incremental backup.
   * 
   * @example
   * IncrementalBackup
   */
  backupType?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cc-bp179i5956tih2m93
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The expiration time of the backup set.
   * 
   * @example
   * 2022-07-22T18:28:41Z
   */
  expireDate?: string;
  static names(): { [key: string]: string } {
    return {
      backupEndTime: 'BackupEndTime',
      backupId: 'BackupId',
      backupMethod: 'BackupMethod',
      backupSetInfo: 'BackupSetInfo',
      backupSize: 'BackupSize',
      backupStartTime: 'BackupStartTime',
      backupStatus: 'BackupStatus',
      backupType: 'BackupType',
      DBInstanceId: 'DBInstanceId',
      expireDate: 'ExpireDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupEndTime: 'string',
      backupId: 'string',
      backupMethod: 'string',
      backupSetInfo: 'string',
      backupSize: 'number',
      backupStartTime: 'string',
      backupStatus: 'string',
      backupType: 'string',
      DBInstanceId: 'string',
      expireDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of backup sets.
   */
  items?: DescribeBackupsResponseBodyItems[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 30
   */
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F5178C10-1407-4987-9133-DE4DC9119F75
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of backups.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeBackupsResponseBodyItems },
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'string',
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

