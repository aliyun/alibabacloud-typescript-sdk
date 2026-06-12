// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBackupsResponseBodyBackups extends $dara.Model {
  /**
   * @remarks
   * The backup ID.
   * 
   * @example
   * backup-4e13aa8ca6a34150addd
   */
  backupId?: string;
  /**
   * @remarks
   * The backup mode. The return value is:
   * 
   * - **Manual**: The backup is created manually.
   * 
   * @example
   * Manual
   */
  backupMode?: string;
  /**
   * @remarks
   * The time when the backup was created.
   * 
   * @example
   * 2024-09-03T19:54:38+08:00
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the backup.
   * 
   * @example
   * No description
   */
  description?: string;
  /**
   * @remarks
   * The time when the backup ended.
   * 
   * @example
   * 2024-08-15T02:24:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The time when the backup was last updated.
   * 
   * @example
   * 2024-09-03T19:54:38+08:00
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The retention period in days. Backups are deleted after the retention period expires. By default, this parameter is empty, which means that the backups do not expire.
   * 
   * @example
   * 1
   */
  retentionDays?: number;
  /**
   * @remarks
   * The service instance ID.
   * 
   * @example
   * si-7b6138dfce1e4c41ab71
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The time when the backup started.
   * 
   * @example
   * 2025-06-30T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status.
   * 
   * - Creating: The backup is being created.
   * 
   * - Created: The backup is created.
   * 
   * - CreateFailed: The backup failed to be created.
   * 
   * - Deleting: The backup is being deleted.
   * 
   * - Deleted: The backup is deleted.
   * 
   * - DeleteFailed: The backup failed to be deleted.
   * 
   * @example
   * Creating
   */
  status?: string;
  /**
   * @remarks
   * The details of the status.
   * 
   * @example
   * Disk i-xxxx backup failed, error message: error
   */
  statusDetail?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      backupMode: 'BackupMode',
      createTime: 'CreateTime',
      description: 'Description',
      endTime: 'EndTime',
      modifiedTime: 'ModifiedTime',
      retentionDays: 'RetentionDays',
      serviceInstanceId: 'ServiceInstanceId',
      startTime: 'StartTime',
      status: 'Status',
      statusDetail: 'StatusDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      backupMode: 'string',
      createTime: 'string',
      description: 'string',
      endTime: 'string',
      modifiedTime: 'string',
      retentionDays: 'number',
      serviceInstanceId: 'string',
      startTime: 'string',
      status: 'string',
      statusDetail: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBackupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backups.
   */
  backups?: ListBackupsResponseBodyBackups[];
  /**
   * @remarks
   * The maximum number of entries returned on the current page.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results. If this parameter is empty, all results have been returned.
   * 
   * This parameter is required.
   * 
   * @example
   * AAAAAc3HCuYhJi/wvpk4xOr0VLYoaeZA6xVdkCrmG9EmGshtmECUGpq9Qm7x5vQkpz9NXH0XzUc9t4Kxaf3UtuPY4a0=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BB58FE53-ED8F-5D12-9746-CD3A5F463D95
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries that meet the query conditions.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      backups: 'Backups',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backups: { 'type': 'array', 'itemType': ListBackupsResponseBodyBackups },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.backups)) {
      $dara.Model.validateArray(this.backups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

