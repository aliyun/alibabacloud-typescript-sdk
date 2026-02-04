// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupTasksResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @remarks
   * This parameter is no longer used. Ignore this parameter.
   * 
   * @example
   * _
   */
  authAction?: string;
  /**
   * @remarks
   * This parameter is no longer used. Ignore this parameter.
   * 
   * @example
   * _
   */
  authPrincipalDisplayName?: string;
  /**
   * @remarks
   * This parameter is no longer used. Ignore this parameter.
   * 
   * @example
   * _
   */
  authPrincipalOwnerId?: string;
  /**
   * @remarks
   * This parameter is no longer used. Ignore this parameter.
   * 
   * @example
   * _
   */
  authPrincipalType?: string;
  /**
   * @remarks
   * This parameter is no longer used. Ignore this parameter.
   * 
   * @example
   * _
   */
  encodedDiagnosticMessage?: string;
  /**
   * @remarks
   * This parameter is no longer used. Ignore this parameter.
   * 
   * @example
   * _
   */
  noPermissionType?: string;
  /**
   * @remarks
   * This parameter is no longer used. Ignore this parameter.
   * 
   * @example
   * _
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      authAction: 'AuthAction',
      authPrincipalDisplayName: 'AuthPrincipalDisplayName',
      authPrincipalOwnerId: 'AuthPrincipalOwnerId',
      authPrincipalType: 'AuthPrincipalType',
      encodedDiagnosticMessage: 'EncodedDiagnosticMessage',
      noPermissionType: 'NoPermissionType',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authAction: 'string',
      authPrincipalDisplayName: 'string',
      authPrincipalOwnerId: 'string',
      authPrincipalType: 'string',
      encodedDiagnosticMessage: 'string',
      noPermissionType: 'string',
      policyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupTasksResponseBodyBackupJobs extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup task.
   * 
   * @example
   * 8491111
   */
  backupJobID?: number;
  /**
   * @remarks
   * The state of the backup task. Valid values:
   * 
   * *   **NoStart**: The backup task is not started.
   * *   **Preparing**: The backup task is being prepared.
   * *   **Waiting**: The backup task is pending.
   * *   **Uploading**: The system is uploading the backup file.
   * *   **Checking**: The system is checking the uploaded backup file.
   * *   **Finished**: The backup task is completed.
   * 
   * @example
   * Automated
   */
  backupProgressStatus?: string;
  /**
   * @remarks
   * The backup mode. Valid values:
   * 
   * *   **Automated**: automatic backup
   * *   **Manual**: manual backup
   * 
   * @example
   * Manual
   */
  jobMode?: string;
  /**
   * @remarks
   * The ID of the data node.
   * 
   * @example
   * ****
   */
  nodeId?: string;
  /**
   * @remarks
   * The progress of the backup task in percentage.
   * 
   * @example
   * 0
   */
  process?: string;
  /**
   * @remarks
   * The backup progress.
   * 
   * @example
   * 27
   */
  progress?: string;
  /**
   * @remarks
   * The start time of the backup task. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2021-01-05T19:24:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The type of the backup task. Valid values:
   * 
   * *   **TempBackupTask**: The backup task was manually performed.
   * *   **NormalBackupTask**: The backup task was automatically performed.
   * 
   * @example
   * NormalBackupTask
   */
  taskAction?: string;
  static names(): { [key: string]: string } {
    return {
      backupJobID: 'BackupJobID',
      backupProgressStatus: 'BackupProgressStatus',
      jobMode: 'JobMode',
      nodeId: 'NodeId',
      process: 'Process',
      progress: 'Progress',
      startTime: 'StartTime',
      taskAction: 'TaskAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupJobID: 'number',
      backupProgressStatus: 'string',
      jobMode: 'string',
      nodeId: 'string',
      process: 'string',
      progress: 'string',
      startTime: 'string',
      taskAction: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The following parameters are no longer used. Ignore the parameters.
   */
  accessDeniedDetail?: DescribeBackupTasksResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The details of the backup tasks.
   */
  backupJobs?: DescribeBackupTasksResponseBodyBackupJobs[];
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BB73740C-23E2-4392-9DA4-2660C74C****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      backupJobs: 'BackupJobs',
      instanceId: 'InstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: DescribeBackupTasksResponseBodyAccessDeniedDetail,
      backupJobs: { 'type': 'array', 'itemType': DescribeBackupTasksResponseBodyBackupJobs },
      instanceId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.accessDeniedDetail && typeof (this.accessDeniedDetail as any).validate === 'function') {
      (this.accessDeniedDetail as any).validate();
    }
    if(Array.isArray(this.backupJobs)) {
      $dara.Model.validateArray(this.backupJobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

