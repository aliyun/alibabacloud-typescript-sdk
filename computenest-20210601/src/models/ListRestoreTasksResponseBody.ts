// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRestoreTasksResponseBodyRestoreTasks extends $dara.Model {
  /**
   * @remarks
   * The backup ID.
   * 
   * @example
   * backup-728f128bf92c4e3da970
   */
  backupId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2023-09-07T11:37:37Z
   */
  createTime?: string;
  /**
   * @remarks
   * The expiration time of the service instance.
   * 
   * @example
   * 2025-01-27T18:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2025-05-07T12:16:16Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The ID of the restore task.
   * 
   * @example
   * restore-xxxxxx
   */
  restoreTaskId?: string;
  /**
   * @remarks
   * The ID of the service instance.
   * 
   * @example
   * si-8c367c27c84e44a79d36
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The time when the update started.
   * 
   * @example
   * 2025-01-27T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the service instance. Valid values:
   * 
   * *   Restoring
   * *   Restored
   * *   RestoreFailed
   * 
   * @example
   * Restoring
   */
  status?: string;
  /**
   * @remarks
   * The description of the service instance deployment information.
   * 
   * @example
   * i-xxxx  failed, error message: error
   */
  statusDetail?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      createTime: 'CreateTime',
      endTime: 'EndTime',
      modifiedTime: 'ModifiedTime',
      restoreTaskId: 'RestoreTaskId',
      serviceInstanceId: 'ServiceInstanceId',
      startTime: 'StartTime',
      status: 'Status',
      statusDetail: 'StatusDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      createTime: 'string',
      endTime: 'string',
      modifiedTime: 'string',
      restoreTaskId: 'string',
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

export class ListRestoreTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of records returned in this request.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * Indicates the read position returned by the current call. An empty value means all data has been read.
   * 
   * This parameter is required.
   * 
   * @example
   * BBBAAfu+XtuBE55iRLHEYYuojI4=
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 464C8CB6-A548-5206-B83C-D32A8E43EC21
   */
  requestId?: string;
  /**
   * @remarks
   * The list of restore tasks.
   */
  restoreTasks?: ListRestoreTasksResponseBodyRestoreTasks[];
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
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      restoreTasks: 'RestoreTasks',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      restoreTasks: { 'type': 'array', 'itemType': ListRestoreTasksResponseBodyRestoreTasks },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.restoreTasks)) {
      $dara.Model.validateArray(this.restoreTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

