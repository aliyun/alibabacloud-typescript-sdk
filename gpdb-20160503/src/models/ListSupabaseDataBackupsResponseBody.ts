// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSupabaseDataBackupsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The end time of the backup. Format: yyyy-MM-ddTHH:mm:ssZ (UTC).
   * 
   * @example
   * 2026-10-09T01:24:44Z
   */
  backupEndTime?: string;
  /**
   * @remarks
   * The local time representation of the backup end time. Format: yyyy-MM-ddTHH:mm:ssZ. The current return value is in Beijing time (UTC+8). The trailing Z is a fixed character in the compatibility format and does not indicate the zero time zone. To parse the time in a standard format, use BackupEndTime.
   * 
   * @example
   * 2026-10-09T09:24:44Z
   */
  backupEndTimeLocal?: string;
  /**
   * @remarks
   * The backup method. Valid values: Physical: physical backup; Snapshot: snapshot backup.
   * 
   * @example
   * Snapshot
   */
  backupMethod?: string;
  /**
   * @remarks
   * The backup mode.
   * 
   * Valid values for automatic backups:
   * 
   * - **Automated**: automatic system backup.
   * - **Manual**: manual backup.
   * 
   * Valid values for restorable points:
   * 
   * - **Automated**: the restorable point after a automatic backup.
   * - **Manual**: the restorable point manually triggered by the user.
   * - **Period**: the restorable point triggered periodically based on the backup policy.
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
   * 10737418240
   */
  backupSize?: number;
  /**
   * @remarks
   * The start time of the backup. Format: yyyy-MM-ddTHH:mm:ssZ (UTC).
   * 
   * @example
   * 2026-10-09T01:23:02Z
   */
  backupStartTime?: string;
  /**
   * @remarks
   * The local time representation of the backup start time. Format: yyyy-MM-ddTHH:mm:ssZ. The current return value is in Beijing time (UTC+8). The trailing Z is a fixed character in the compatibility format and does not indicate the zero time zone. To parse the time in a standard format, use BackupStartTime.
   * 
   * @example
   * 2026-10-09T09:23:02Z
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
   * logic_backup
   */
  baksetName?: string;
  /**
   * @remarks
   * The consistency point in time. The value is a UNIX timestamp in seconds. For a full backup, this parameter indicates the consistency point in time of the backup. For a restorable point, this parameter indicates the point in time to which data can be restored.
   * 
   * @example
   * 1791508983
   */
  consistentTime?: number;
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

export class ListSupabaseDataBackupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of backup sets.
   */
  items?: ListSupabaseDataBackupsResponseBodyItems[];
  /**
   * @remarks
   * The maximum number of entries to return for the current request.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next page. You can use this value as the NextToken parameter in the next request.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
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
   * The request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D****
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
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalBackupSize: 'TotalBackupSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListSupabaseDataBackupsResponseBodyItems },
      maxResults: 'number',
      nextToken: 'string',
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

