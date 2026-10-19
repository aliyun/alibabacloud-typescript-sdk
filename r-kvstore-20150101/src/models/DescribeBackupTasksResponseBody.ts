// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupTasksResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @remarks
   * Same as above.
   * 
   * @example
   * -
   */
  authAction?: string;
  /**
   * @remarks
   * Same as above.
   * 
   * @example
   * -
   */
  authPrincipalDisplayName?: string;
  /**
   * @remarks
   * Same as above.
   * 
   * @example
   * -
   */
  authPrincipalOwnerId?: string;
  /**
   * @remarks
   * Same as above.
   * 
   * @example
   * -
   */
  authPrincipalType?: string;
  /**
   * @remarks
   * Same as above.
   * 
   * @example
   * -
   */
  encodedDiagnosticMessage?: string;
  /**
   * @remarks
   * Same as above.
   * 
   * @example
   * -
   */
  noPermissionType?: string;
  /**
   * @remarks
   * Same as above.
   * 
   * @example
   * -
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
   * 29****10
   */
  backupJobID?: number;
  /**
   * @remarks
   * The status of the backup task. Valid values:
   * * **NoStart**: not started
   * * **Preparing**: preparing
   * * **Waiting**: waiting
   * * **Uploading**: uploading
   * * **Checking**: checking
   * * **Finished**: completed
   * 
   * @example
   * NoStart
   */
  backupProgressStatus?: string;
  /**
   * @remarks
   * The backup mode. Valid values:
   * * **Automated**: automatic backup.
   * * **Manual**: manual backup.
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
   * The progress percentage of the backup task. This parameter is not recommended. Refer to the **Progress** parameter.
   * 
   * @example
   * 0
   */
  process?: string;
  /**
   * @remarks
   * The progress percentage of the backup. Valid values: 0 to 100.
   * 
   * @example
   * 27
   */
  progress?: string;
  /**
   * @remarks
   * The start time of the backup task. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time is displayed in UTC.
   * 
   * @example
   * 2021-01-05T19:24:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The type of the backup task. Valid values:
   * * **TempBackupTask**: temporary backup task, which indicates a manual backup.
   * * **NormalBackupTask**: normal backup task, which indicates an automatic backup.
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
   * **[Deprecated]** This group of parameters is deprecated. Ignore these parameters.
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
   * The ID of the request.
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

