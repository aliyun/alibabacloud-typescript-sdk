// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobSnapshotInfosResponseBodyDataJobInfoList extends $dara.Model {
  /**
   * @remarks
   * The requested CPU resources of the job at the snapshot time. Unit: Core.
   * 
   * @example
   * 200
   */
  cpuRequest?: number;
  /**
   * @remarks
   * The CPU usage of the job at the snapshot time. Unit: Core.
   * 
   * @example
   * 100
   */
  cpuUsage?: number;
  /**
   * @remarks
   * The CPU fulfillment rate of the job at the snapshot time, which is calculated as CPU usage divided by requested CPU resources.
   * 
   * @example
   * 0.5
   */
  cpuUsageToRequestRatio?: number;
  /**
   * @remarks
   * The upstream node IDs.
   * 
   * @example
   * 76358164
   */
  extNodeId?: string;
  /**
   * @remarks
   * The account ID of the task owner.
   * 
   * @example
   * duty_2
   */
  extNodeOnDuty?: string;
  /**
   * @remarks
   * The upstream platform.
   * 
   * @example
   * Dataworks
   */
  extPlantFrom?: string;
  extPlatformId?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 20241028****jkl
   */
  instanceId?: string;
  /**
   * @remarks
   * The job owner.
   * 
   * @example
   * ALIYUN$7632***@aliyun.com
   */
  jobOwner?: string;
  /**
   * @remarks
   * The job types.
   * 
   * @example
   * SQL
   */
  jobType?: string;
  /**
   * @remarks
   * Ignore this parameter.
   * 
   * @example
   * -1
   */
  maxCpuPct?: number;
  /**
   * @remarks
   * Ignore this parameter.
   * 
   * @example
   * -1
   */
  maxMemoryPct?: number;
  /**
   * @remarks
   * The requested memory resources of the job at the snapshot time. Unit: MB.
   * 
   * @example
   * 409600
   */
  memoryRequest?: number;
  /**
   * @remarks
   * The memory usage of the job at the snapshot time. Unit: MB.
   * 
   * @example
   * 409600
   */
  memoryUsage?: number;
  /**
   * @remarks
   * The memory fulfillment rate of the job at the snapshot time, which is calculated as memory usage divided by requested memory resources.
   * 
   * @example
   * 1
   */
  memoryUsageToRequestRatio?: number;
  /**
   * @remarks
   * The CPU usage ratio of a subscription job at the snapshot time, which is calculated as CPU usage divided by the sum of reserved CPU and elastic reserved CPU. This parameter is not returned for pay-as-you-go jobs.
   * 
   * @example
   * 0.6
   */
  minCpuPct?: number;
  /**
   * @remarks
   * The memory usage ratio of a subscription job at the observation time, which is calculated as memory usage divided by the sum of reserved memory and elastic reserved memory. This parameter is not returned for pay-as-you-go jobs.
   * 
   * @example
   * 0.6
   */
  minMemoryPct?: number;
  /**
   * @remarks
   * The job priorities.
   * 
   * @example
   * 9
   */
  priority?: number;
  /**
   * @remarks
   * The project names.
   * 
   * @example
   * projectA
   */
  project?: string;
  /**
   * @remarks
   * The nickname of the compute quota used by the job.
   * 
   * @example
   * quota_A
   */
  quotaNickname?: string;
  /**
   * @remarks
   * The quota type.
   * 
   * @example
   * subscription
   */
  quotaType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-chengdu
   */
  region?: string;
  /**
   * @remarks
   * The time when the job started running.
   * > The time when the job obtained the first compute resource. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1736821805
   */
  runningAtTime?: number;
  /**
   * @remarks
   * The running duration, which is the time from when the job started running to the snapshot time. If the job has not started running, this parameter is empty. Unit: s.
   * 
   * @example
   * 43
   */
  runningTime?: number;
  /**
   * @remarks
   * The SQL job signatures.
   * 
   * @example
   * signatureabc
   */
  signature?: string;
  /**
   * @remarks
   * The snapshot time. The value is a UNIX timestamp, Unit: s.
   * 
   * @example
   * 1736821848
   */
  snapshotTime?: number;
  /**
   * @remarks
   * The job status.
   * 
   * > The status of a job in a snapshot is always running.
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The time when the job was submitted. The value is a UNIX timestamp, Unit: s.
   * 
   * @example
   * 1736821785
   */
  submittedAtTime?: number;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 213065738244354
   */
  tenantId?: string;
  /**
   * @remarks
   * The total duration, which is the time from when the job was submitted to the snapshot time. Unit: s.
   * 
   * @example
   * 63
   */
  totalTime?: number;
  /**
   * @remarks
   * The waiting duration, which is the time from when the job was submitted to when it started running. If the job has not started running, the value is the time from when the job was submitted to the snapshot time. Unit: s.
   * 
   * @example
   * 20
   */
  waitingTime?: number;
  static names(): { [key: string]: string } {
    return {
      cpuRequest: 'cpuRequest',
      cpuUsage: 'cpuUsage',
      cpuUsageToRequestRatio: 'cpuUsageToRequestRatio',
      extNodeId: 'extNodeId',
      extNodeOnDuty: 'extNodeOnDuty',
      extPlantFrom: 'extPlantFrom',
      extPlatformId: 'extPlatformId',
      instanceId: 'instanceId',
      jobOwner: 'jobOwner',
      jobType: 'jobType',
      maxCpuPct: 'maxCpuPct',
      maxMemoryPct: 'maxMemoryPct',
      memoryRequest: 'memoryRequest',
      memoryUsage: 'memoryUsage',
      memoryUsageToRequestRatio: 'memoryUsageToRequestRatio',
      minCpuPct: 'minCpuPct',
      minMemoryPct: 'minMemoryPct',
      priority: 'priority',
      project: 'project',
      quotaNickname: 'quotaNickname',
      quotaType: 'quotaType',
      region: 'region',
      runningAtTime: 'runningAtTime',
      runningTime: 'runningTime',
      signature: 'signature',
      snapshotTime: 'snapshotTime',
      status: 'status',
      submittedAtTime: 'submittedAtTime',
      tenantId: 'tenantId',
      totalTime: 'totalTime',
      waitingTime: 'waitingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuRequest: 'number',
      cpuUsage: 'number',
      cpuUsageToRequestRatio: 'number',
      extNodeId: 'string',
      extNodeOnDuty: 'string',
      extPlantFrom: 'string',
      extPlatformId: 'string',
      instanceId: 'string',
      jobOwner: 'string',
      jobType: 'string',
      maxCpuPct: 'number',
      maxMemoryPct: 'number',
      memoryRequest: 'number',
      memoryUsage: 'number',
      memoryUsageToRequestRatio: 'number',
      minCpuPct: 'number',
      minMemoryPct: 'number',
      priority: 'number',
      project: 'string',
      quotaNickname: 'string',
      quotaType: 'string',
      region: 'string',
      runningAtTime: 'number',
      runningTime: 'number',
      signature: 'string',
      snapshotTime: 'number',
      status: 'string',
      submittedAtTime: 'number',
      tenantId: 'string',
      totalTime: 'number',
      waitingTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobSnapshotInfosResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of job snapshots.
   */
  jobInfoList?: ListJobSnapshotInfosResponseBodyDataJobInfoList[];
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
   * The total number of returned entries.
   * 
   * @example
   * 123
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      jobInfoList: 'jobInfoList',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobInfoList: { 'type': 'array', 'itemType': ListJobSnapshotInfosResponseBodyDataJobInfoList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.jobInfoList)) {
      $dara.Model.validateArray(this.jobInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobSnapshotInfosResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response data.
   */
  data?: ListJobSnapshotInfosResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * OBJECT_NOT_EXIST
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Error message
   */
  errorMsg?: string;
  /**
   * @remarks
   * The HTTP status code.
   * - 1xx: Informational. The request was received and is being processed.
   * - 2xx: Success. The request was successfully received, understood, and accepted by the server.
   * - 3xx: Redirection. The request was redirected, and further action is required to complete it.
   * - 4xx: Client error. The request contains invalid parameters, bad syntax, or specific request conditions cannot be met.
   * - 5xx: Server error. The server failed to fulfill the request due to other reasons.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0b87b7e716665825896565060e87a4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListJobSnapshotInfosResponseBodyData,
      errorCode: 'string',
      errorMsg: 'string',
      httpCode: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

