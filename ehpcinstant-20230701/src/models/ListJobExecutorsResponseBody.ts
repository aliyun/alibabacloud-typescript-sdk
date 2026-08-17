// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobExecutorsResponseBodyExecutorStatus extends $dara.Model {
  /**
   * @remarks
   * The number of executors in the Deleted state.
   * 
   * @example
   * 1
   */
  deleted?: number;
  /**
   * @remarks
   * The number of executors in the Exception state.
   * 
   * @example
   * 1
   */
  exception?: number;
  /**
   * @remarks
   * The number of executors in the Failed state.
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * The number of executors in the Initing state.
   * 
   * @example
   * 1
   */
  initing?: number;
  /**
   * @remarks
   * The number of executors in the Pending state.
   * 
   * @example
   * 1
   */
  pending?: number;
  /**
   * @remarks
   * The number of executors in the Restarting state.
   * 
   * @example
   * 1
   */
  restarting?: number;
  /**
   * @remarks
   * The number of executors in the Running state.
   * 
   * @example
   * 1
   */
  running?: number;
  /**
   * @remarks
   * The number of executors in the Succeeded state.
   * 
   * @example
   * 1
   */
  succeeded?: number;
  /**
   * @remarks
   * The number of executors in the Suspended state.
   * 
   * @example
   * 1
   */
  suspended?: number;
  static names(): { [key: string]: string } {
    return {
      deleted: 'Deleted',
      exception: 'Exception',
      failed: 'Failed',
      initing: 'Initing',
      pending: 'Pending',
      restarting: 'Restarting',
      running: 'Running',
      succeeded: 'Succeeded',
      suspended: 'Suspended',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleted: 'number',
      exception: 'number',
      failed: 'number',
      initing: 'number',
      pending: 'number',
      restarting: 'number',
      running: 'number',
      succeeded: 'number',
      suspended: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobExecutorsResponseBodyExecutorsTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the executor.
   * 
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value of the executor.
   * 
   * @example
   * TestValue
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobExecutorsResponseBodyExecutors extends $dara.Model {
  /**
   * @remarks
   * The resource type.
   * 
   * - Standard: Standard.
   * 
   * - Dedicated: Dedicated. To use this resource type, you must be added to the whitelist.
   * 
   * - Economic: Economy. To use this resource type, you must be added to the whitelist.
   * 
   * @example
   * Standard
   */
  allocationSpec?: string;
  /**
   * @remarks
   * The index of the executor.
   * 
   * @example
   * 0
   */
  arrayIndex?: number;
  /**
   * @remarks
   * The retention period of the compute resources.
   * 
   * @example
   * 24
   */
  blockDuration?: number;
  /**
   * @remarks
   * The time when the executor was created.
   * 
   * @example
   * 2024-02-20 10:04:10
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the executor ended.
   * 
   * @example
   * 2024-02-20 10:04:18
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the executor. The format is \\`JobId-TaskName-ArrayIndex\\`.
   * 
   * @example
   * job-xxxx-Task0-1
   */
  executorId?: string;
  expirationTime?: string;
  /**
   * @remarks
   * A list of public IP addresses of the nodes.
   */
  externalIpAddress?: string[];
  /**
   * @remarks
   * An array of node hostnames.
   */
  hostName?: string[];
  /**
   * @remarks
   * A list of node IP addresses.
   */
  ipAddress?: string[];
  preemptible?: boolean;
  /**
   * @remarks
   * The time when the executor started.
   * 
   * @example
   * 2024-02-20 10:04:13
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the executor. Valid values:
   * 
   * - Pending: In queue
   * 
   * - Initing: Initializing
   * 
   * - Succeed: Succeeded
   * 
   * - Failed: Failed
   * 
   * - Running: Running
   * 
   * - Exception: Abnormal scheduling
   * 
   * - Retrying: Retrying
   * 
   * - Expired: Timed out
   * 
   * - Suspended: Job hibernating
   * 
   * - Restarting: Job restarting
   * 
   * - Deleted: Deleted
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The reason for the status.
   * 
   * @example
   * ExecutorReady
   */
  statusReason?: string;
  /**
   * @remarks
   * A list of executor tags.
   */
  tags?: ListJobExecutorsResponseBodyExecutorsTags[];
  static names(): { [key: string]: string } {
    return {
      allocationSpec: 'AllocationSpec',
      arrayIndex: 'ArrayIndex',
      blockDuration: 'BlockDuration',
      createTime: 'CreateTime',
      endTime: 'EndTime',
      executorId: 'ExecutorId',
      expirationTime: 'ExpirationTime',
      externalIpAddress: 'ExternalIpAddress',
      hostName: 'HostName',
      ipAddress: 'IpAddress',
      preemptible: 'Preemptible',
      startTime: 'StartTime',
      status: 'Status',
      statusReason: 'StatusReason',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationSpec: 'string',
      arrayIndex: 'number',
      blockDuration: 'number',
      createTime: 'string',
      endTime: 'string',
      executorId: 'string',
      expirationTime: 'string',
      externalIpAddress: { 'type': 'array', 'itemType': 'string' },
      hostName: { 'type': 'array', 'itemType': 'string' },
      ipAddress: { 'type': 'array', 'itemType': 'string' },
      preemptible: 'boolean',
      startTime: 'string',
      status: 'string',
      statusReason: 'string',
      tags: { 'type': 'array', 'itemType': ListJobExecutorsResponseBodyExecutorsTags },
    };
  }

  validate() {
    if(Array.isArray(this.externalIpAddress)) {
      $dara.Model.validateArray(this.externalIpAddress);
    }
    if(Array.isArray(this.hostName)) {
      $dara.Model.validateArray(this.hostName);
    }
    if(Array.isArray(this.ipAddress)) {
      $dara.Model.validateArray(this.ipAddress);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobExecutorsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Statistics about executor statuses.
   */
  executorStatus?: ListJobExecutorsResponseBodyExecutorStatus;
  /**
   * @remarks
   * A list of executors.
   */
  executors?: ListJobExecutorsResponseBodyExecutors[];
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * job-xxxx
   */
  jobId?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 896D338C-E4F4-41EC-A154-D605E5DE****
   */
  requestId?: string;
  /**
   * @remarks
   * The job name.
   * 
   * @example
   * Task0
   */
  taskName?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 50
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      executorStatus: 'ExecutorStatus',
      executors: 'Executors',
      jobId: 'JobId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      taskName: 'TaskName',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executorStatus: ListJobExecutorsResponseBodyExecutorStatus,
      executors: { 'type': 'array', 'itemType': ListJobExecutorsResponseBodyExecutors },
      jobId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      taskName: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(this.executorStatus && typeof (this.executorStatus as any).validate === 'function') {
      (this.executorStatus as any).validate();
    }
    if(Array.isArray(this.executors)) {
      $dara.Model.validateArray(this.executors);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

