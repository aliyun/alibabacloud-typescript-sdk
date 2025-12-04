// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The end time of the backup task. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time is displayed in UTC.
   * 
   * @example
   * 2021-11-22T18:28:41Z
   */
  backupEndTime?: string;
  /**
   * @remarks
   * The backup task ID.
   * 
   * @example
   * 117403****
   */
  backupId?: string;
  /**
   * @remarks
   * The backup method. Valid values: Only **Physical** is returned. This value indicates that a physical backup was performed.
   * 
   * @example
   * Physical
   */
  backupMethod?: string;
  /**
   * @remarks
   * The number of nodes in the cluster.
   * 
   * *   If the cluster is of Single-replica Edition, the value ranges from 1 to 48.
   * *   If the cluster is of Double-replica Edition, the value ranges from 1 to 24.
   * 
   * @example
   * {"shard_count":4}
   */
  backupSetInfo?: string;
  /**
   * @remarks
   * The size of the backup set. Unit: MB.
   * 
   * @example
   * 131072
   */
  backupSize?: number;
  /**
   * @remarks
   * The start time of the backup task. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time is displayed in UTC.
   * 
   * @example
   * 2021-11-22T18:28:22Z
   */
  backupStartTime?: string;
  /**
   * @remarks
   * The backup status. Valid values:
   * 
   * *   **Success**
   * *   **Failure**
   * 
   * @example
   * Success
   */
  backupStatus?: string;
  /**
   * @remarks
   * The backup type. Valid values:
   * 
   * *   **FullBackup**
   * *   **IncrementalBackup**
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
   * cc-bp1qx68m06981****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The time when the backup set expired. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time is displayed in UTC.
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
      DBClusterId: 'DBClusterId',
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
      DBClusterId: 'string',
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
   * The backup sets.
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
   * The number of entries per page. Valid values: Valid values:
   * 
   * *   **30** (default)
   * *   **50**
   * *   **100**
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
   * The total number of entries returned.
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

