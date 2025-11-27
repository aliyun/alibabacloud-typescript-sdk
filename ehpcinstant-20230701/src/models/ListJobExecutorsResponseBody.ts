// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobExecutorsResponseBodyExecutorStatus extends $dara.Model {
  /**
   * @remarks
   * The number of executers in the Deleted state.
   * 
   * @example
   * 1
   */
  deleted?: number;
  /**
   * @remarks
   * The number of executers in the abnormal state.
   * 
   * @example
   * 1
   */
  exception?: number;
  /**
   * @remarks
   * The number of executers in the Failed state.
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * The number of executers in the initialized state.
   * 
   * @example
   * 1
   */
  initing?: number;
  /**
   * @remarks
   * The number of executers in the queued state.
   * 
   * @example
   * 1
   */
  pending?: number;
  restarting?: number;
  /**
   * @remarks
   * The number of executers in the running state.
   * 
   * @example
   * 1
   */
  running?: number;
  /**
   * @remarks
   * The number of executoresin the Successful state.
   * 
   * @example
   * 1
   */
  succeeded?: number;
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
   * The key of the executor tag.
   * 
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the executor tag.
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
  allocationSpec?: string;
  /**
   * @remarks
   * The executor index number.
   * 
   * @example
   * 0
   */
  arrayIndex?: number;
  blockDuration?: number;
  /**
   * @remarks
   * The time when the storage resource was created.
   * 
   * @example
   * 2024-02-20 10:04:10
   */
  createTime?: string;
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 2024-02-20 10:04:18
   */
  endTime?: string;
  /**
   * @remarks
   * The executor ID. The format is JobId-TaskName-ArrayIndex.
   * 
   * @example
   * job-xxxx-Task0-1
   */
  executorId?: string;
  expirationTime?: string;
  /**
   * @remarks
   * The list of public IP addresses of the nodes.
   */
  externalIpAddress?: string[];
  /**
   * @remarks
   * An array of node hostnames.
   */
  hostName?: string[];
  /**
   * @remarks
   * The list of node IP addresses.
   */
  ipAddress?: string[];
  preemptible?: boolean;
  /**
   * @remarks
   * The create time.
   * 
   * @example
   * 2024-02-20 10:04:13
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the executor. Valid values:
   * 
   * *   Pending
   * *   Initing
   * *   Succeed
   * *   Failed
   * *   Running
   * *   Unknown
   * *   Exception
   * *   Retrying
   * *   Expired
   * *   Deleted
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The description of the status reason.
   * 
   * @example
   * Creating executor
   */
  statusReason?: string;
  /**
   * @remarks
   * The list of executor tags.
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
   * Executor status statistics.
   */
  executorStatus?: ListJobExecutorsResponseBodyExecutorStatus;
  /**
   * @remarks
   * The executor list.
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
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
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
   * task0
   */
  taskName?: string;
  /**
   * @remarks
   * The total number of list entries.
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

