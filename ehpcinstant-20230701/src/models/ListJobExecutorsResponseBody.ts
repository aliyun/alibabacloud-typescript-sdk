// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobExecutorsResponseBodyExecutorStatus extends $dara.Model {
  /**
   * @remarks
   * The number of executors in the deleted state.
   * 
   * @example
   * 1
   */
  deleted?: number;
  /**
   * @remarks
   * The number of executors in the exception state.
   * 
   * @example
   * 1
   */
  exception?: number;
  /**
   * @remarks
   * The number of executors in the failed state.
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * The number of executors in the initializing state.
   * 
   * @example
   * 1
   */
  initing?: number;
  /**
   * @remarks
   * The number of executors in the queued state.
   * 
   * @example
   * 1
   */
  pending?: number;
  /**
   * @remarks
   * The number of executors in the restarting state.
   * 
   * @example
   * 1
   */
  restarting?: number;
  /**
   * @remarks
   * The number of executors in the running state.
   * 
   * @example
   * 1
   */
  running?: number;
  /**
   * @remarks
   * The number of executors in the succeeded state.
   * 
   * @example
   * 1
   */
  succeeded?: number;
  /**
   * @remarks
   * The number of executors in the hibernation state.
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
   * The executor tag key.
   * 
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The executor tag value.
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
   * The resource type. Valid values:
   * 
   * - Standard: standard.
   * - Dedicated: dedicated. You must be added to the whitelist to use this type.
   * - Economic: economy. You must be added to the whitelist to use this type.
   * 
   * @example
   * Standard
   */
  allocationSpec?: string;
  /**
   * @remarks
   * The array index of the executor.
   * 
   * @example
   * 0
   */
  arrayIndex?: number;
  /**
   * @remarks
   * The retention duration of compute resources.
   * 
   * @example
   * 24
   */
  blockDuration?: number;
  /**
   * @remarks
   * The creation time.
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
   * The list of node public IP addresses.
   */
  externalIpAddress?: string[];
  /**
   * @remarks
   * The array of node hostnames.
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
   * The start time.
   * 
   * @example
   * 2024-02-20 10:04:13
   */
  startTime?: string;
  /**
   * @remarks
   * The executor status. Valid values:
   * 
   * - Pending: queued.
   * - Initing: initializing.
   * - Succeed: succeeded.
   * - Failed: failed.
   * - Running: running.
   * - Exception: scheduling exception.
   * - Retrying: retrying.
   * - Expired: timed out.
   * - Suspended: in hibernation.
   * - Restarting: restarting.
   * - Deleted: deleted.
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
   * ExecutorReady
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
   * The executor status statistics.
   */
  executorStatus?: ListJobExecutorsResponseBodyExecutorStatus;
  /**
   * @remarks
   * The list of executors.
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
   * Task0
   */
  taskName?: string;
  /**
   * @remarks
   * The total number of entries in the list.
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

