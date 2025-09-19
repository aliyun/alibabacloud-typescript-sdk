// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRestoreJobsResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of restoration tasks returned on the current page.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of restoration tasks returned.
   * 
   * @example
   * 69
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreJobsResponseBodyRestoreJobs extends $dara.Model {
  /**
   * @remarks
   * The size of backup data. Unit: bytes.
   * 
   * @example
   * 20
   */
  actualBytes?: number;
  /**
   * @remarks
   * The total size of data that is restored. Unit: bytes.
   * 
   * @example
   * 20
   */
  bytesDone?: number;
  /**
   * @remarks
   * The total size of data that you want to restore. Unit: bytes.
   * 
   * @example
   * 20
   */
  bytesTotal?: number;
  /**
   * @remarks
   * The ID of the anti-ransomware agent that is used to perform the restoration task.
   * 
   * @example
   * c-000frxwusjauhp9ajpu6
   */
  clientId?: string;
  /**
   * @remarks
   * The timestamp when the restoration task is complete. Unit: milliseconds.
   * 
   * @example
   * 1583289054000
   */
  completeTime?: number;
  /**
   * @remarks
   * The timestamp when the restoration task is created. Unit: milliseconds.
   * 
   * @example
   * 1583289052000
   */
  createdTime?: number;
  /**
   * @remarks
   * The duration of the restoration task. Unit: seconds.
   * 
   * @example
   * 100
   */
  duration?: number;
  /**
   * @remarks
   * The number of the restoration tasks on which errors occur.
   * 
   * @example
   * 0
   */
  errorCount?: number;
  /**
   * @remarks
   * The name of the CSV file. The CSV file contains the files that fail to be restored.
   * 
   * @example
   * s-000f4wxm8f7gur6g2otm.csv
   */
  errorFile?: string;
  /**
   * @remarks
   * The URL to download the CSV file. The CSV file contains the files that fail to be restored.
   * 
   * @example
   * ["/home/user"]
   */
  errorFileUrl?: string;
  /**
   * @remarks
   * The error code that is returned for the restoration task.
   * 
   * @example
   * NONE
   */
  errorType?: string;
  /**
   * @remarks
   * The timestamp when the in-progress restoration task is expected to be complete. Unit: seconds.
   * 
   * @example
   * 1583299054
   */
  eta?: number;
  /**
   * @remarks
   * The directory excluded from the anti-ransomware policy. The value is the directory that you specify to skip protection when you create the anti-ransomware policy.
   * 
   * @example
   * ["/home/user"]
   */
  excludes?: string;
  /**
   * @remarks
   * The return value of the restoration task.
   * 
   * @example
   * 0
   */
  exitCode?: string;
  /**
   * @remarks
   * The time when the restoration task is created.
   * 
   * @example
   * 2021-04-25T19:11Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the restoration task is updated.
   * 
   * @example
   * 2021-04-25T19:11Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The directory in which the restored file is stored. The value is the directory that you specify for protection when you create the anti-ransomware policy
   * 
   * @example
   * ["/root/disk-uuid-test","/root/install.sh"]
   */
  includes?: string;
  /**
   * @remarks
   * The ID of the server whose data you want to restore.
   * 
   * @example
   * i-bp12xnvdax6307gw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the server whose data you want to restore.
   * 
   * @example
   * win2012-01
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address of the server whose data you want to restore.
   * 
   * @example
   * 1.1.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The internal IP address of the server whose data you want to restore.
   * 
   * @example
   * 2.1.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The number of files that are restored.
   * 
   * @example
   * 0
   */
  itemsDone?: number;
  /**
   * @remarks
   * The total number of files that need to be restored.
   * 
   * @example
   * 0
   */
  itemsTotal?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The progress of the restoration task in percentage.
   * 
   * @example
   * 100
   */
  percentage?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0ED92280-4363-57D3-A4D3-4D3FBC99B29F
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the restoration task.
   * 
   * @example
   * r-000gmcypy5dyf9ey3uv7
   */
  restoreId?: string;
  /**
   * @remarks
   * The name of the restoration task.
   * 
   * @example
   * Restore
   */
  restoreName?: string;
  /**
   * @remarks
   * The type of the file that is restored. Valid values:
   * 
   * *   **ECS_FILE**: files on Elastic Compute Service (ECS) instances
   * *   **FILE**: files on servers in data centers
   * 
   * @example
   * ECS_FILE
   */
  restoreType?: string;
  /**
   * @remarks
   * The hash value of the snapshot that stores backup data when the data is backed up.
   * 
   * @example
   * a3992de83f529b844135fe795d949181735a7d20e0ac8539485c61b7983e618f
   */
  snapshotHash?: string;
  /**
   * @remarks
   * The hash value ID of the snapshot that stores backup data when the data is backed up.
   * 
   * @example
   * s-000gmcypy5dy54e39yny
   */
  snapshotId?: string;
  /**
   * @remarks
   * The version of the backup data.
   * 
   * @example
   * 2020-03-03 18:00
   */
  snapshotVersion?: string;
  /**
   * @remarks
   * The restored content.
   * 
   * @example
   * ["/home/admin","\\\\\\\\servername\\\\sharename"]
   */
  source?: string;
  /**
   * @remarks
   * The ID of the anti-ransomware agent that is used to back up data.
   * 
   * @example
   * c-000gmcypy5dyf9ey3uv7
   */
  sourceClientId?: string;
  /**
   * @remarks
   * The speed at which data is restored. Unit: byte/s.
   * 
   * @example
   * 25766558
   */
  speed?: number;
  /**
   * @remarks
   * The status of the restoration task. Valid values:
   * 
   * *   **RUNNING**: The task is running.
   * *   **COMPLETE**: The task is complete.
   * *   **FAILED**: The task fails.
   * *   **CANCELING**: The task is being canceled.
   * *   **CANCELED**: The task is canceled.
   * *   **PARTIAL_COMPLETE**: The task is partially successful.
   * *   **CREATED**: The task was created but is not run.
   * *   **EXPIRED**: The task is not updated.
   * *   **QUEUED**: The task is waiting to be run.
   * *   **CLIENT_DELETED**: The task fails because the anti-ransomware agent is uninstalled.
   * 
   * @example
   * COMPLETE
   */
  status?: string;
  /**
   * @remarks
   * The folder to which the backup data is restored. After you create the restoration task, the backup data is restored to the specified folder.
   * 
   * @example
   * /home
   */
  target?: string;
  /**
   * @remarks
   * The timestamp when the restoration task was last updated. Unit: milliseconds.
   * 
   * @example
   * 1583289054000
   */
  updatedTime?: number;
  /**
   * @remarks
   * The UUID of the server whose data you want to restore.
   * 
   * @example
   * 6E3DABB6-3F6A-40DB-9492-2C8B59C****
   */
  uuid?: string;
  /**
   * @remarks
   * The ID of the backup vault in which the backup data is stored.
   * 
   * @example
   * v-000b0v0jqzmse2yz06zw
   */
  vaultId?: string;
  /**
   * @remarks
   * The ID of the region where the backup vault resides.
   * 
   * @example
   * cn-hangzhou
   */
  vaultRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      actualBytes: 'ActualBytes',
      bytesDone: 'BytesDone',
      bytesTotal: 'BytesTotal',
      clientId: 'ClientId',
      completeTime: 'CompleteTime',
      createdTime: 'CreatedTime',
      duration: 'Duration',
      errorCount: 'ErrorCount',
      errorFile: 'ErrorFile',
      errorFileUrl: 'ErrorFileUrl',
      errorType: 'ErrorType',
      eta: 'Eta',
      excludes: 'Excludes',
      exitCode: 'ExitCode',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      includes: 'Includes',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      itemsDone: 'ItemsDone',
      itemsTotal: 'ItemsTotal',
      message: 'Message',
      percentage: 'Percentage',
      requestId: 'RequestId',
      restoreId: 'RestoreId',
      restoreName: 'RestoreName',
      restoreType: 'RestoreType',
      snapshotHash: 'SnapshotHash',
      snapshotId: 'SnapshotId',
      snapshotVersion: 'SnapshotVersion',
      source: 'Source',
      sourceClientId: 'SourceClientId',
      speed: 'Speed',
      status: 'Status',
      target: 'Target',
      updatedTime: 'UpdatedTime',
      uuid: 'Uuid',
      vaultId: 'VaultId',
      vaultRegionId: 'VaultRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualBytes: 'number',
      bytesDone: 'number',
      bytesTotal: 'number',
      clientId: 'string',
      completeTime: 'number',
      createdTime: 'number',
      duration: 'number',
      errorCount: 'number',
      errorFile: 'string',
      errorFileUrl: 'string',
      errorType: 'string',
      eta: 'number',
      excludes: 'string',
      exitCode: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      includes: 'string',
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      itemsDone: 'number',
      itemsTotal: 'number',
      message: 'string',
      percentage: 'number',
      requestId: 'string',
      restoreId: 'string',
      restoreName: 'string',
      restoreType: 'string',
      snapshotHash: 'string',
      snapshotId: 'string',
      snapshotVersion: 'string',
      source: 'string',
      sourceClientId: 'string',
      speed: 'number',
      status: 'string',
      target: 'string',
      updatedTime: 'number',
      uuid: 'string',
      vaultId: 'string',
      vaultRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeRestoreJobsResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 0ED92280-4363-57D3-A4D3-4D3FBC99B29F
   */
  requestId?: string;
  /**
   * @remarks
   * The details about the restoration tasks.
   */
  restoreJobs?: DescribeRestoreJobsResponseBodyRestoreJobs[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      restoreJobs: 'RestoreJobs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribeRestoreJobsResponseBodyPageInfo,
      requestId: 'string',
      restoreJobs: { 'type': 'array', 'itemType': DescribeRestoreJobsResponseBodyRestoreJobs },
    };
  }

  validate() {
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    if(Array.isArray(this.restoreJobs)) {
      $dara.Model.validateArray(this.restoreJobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

