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
   * The backup mode. Valid values:
   * 
   * *   **Manual**: manual backup
   * 
   * @example
   * Manual
   */
  backupMode?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-09-03T19:54:38+08:00
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the backup task.
   * 
   * @example
   * No description
   */
  description?: string;
  /**
   * @remarks
   * The end time of the backup task.
   * 
   * @example
   * 2024-08-15T02:24:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2024-09-03T19:54:38+08:00
   */
  modifiedTime?: string;
  /**
   * @remarks
   * Retention Days. Resources will be cleared upon expiration. Defaults to no expiration if left blank.
   * 
   * @example
   * 1
   */
  retentionDays?: number;
  /**
   * @remarks
   * The ID of the service instance.
   * 
   * @example
   * si-7b6138dfce1e4c41ab71
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The start time of the backup task.
   * 
   * @example
   * 2025-06-30T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the backup task. Valid values:
   * 
   * *   Creating
   * *   Created
   * *   CreateFailed
   * *   Deleting
   * *   Deleted
   * *   DeleteFailed
   * 
   * @example
   * Creating
   */
  status?: string;
  /**
   * @remarks
   * The description of the service instance deployment information.
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
   * The details of the backup.
   */
  backups?: ListBackupsResponseBodyBackups[];
  /**
   * @remarks
   * The maximum number of records returned in this request.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * Indicates the read position returned by the current call. An empty value means all data has been read.
   * 
   * This parameter is required.
   * 
   * @example
   * AAAAAc3HCuYhJi/wvpk4xOr0VLYoaeZA6xVdkCrmG9EmGshtmECUGpq9Qm7x5vQkpz9NXH0XzUc9t4Kxaf3UtuPY4a0=
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * BB58FE53-ED8F-5D12-9746-CD3A5F463D95
   */
  requestId?: string;
  /**
   * @remarks
   * Total data count under the current request conditions (optional; not returned by default).
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

