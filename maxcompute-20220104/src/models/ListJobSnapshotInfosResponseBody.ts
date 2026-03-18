// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobSnapshotInfosResponseBodyDataJobInfoList extends $dara.Model {
  /**
   * @remarks
   * The amount of CPU cores requested by the job at the snapshot time.
   * 
   * @example
   * 200
   */
  cpuRequest?: number;
  /**
   * @remarks
   * The CPU usage of the job at the snapshot time. Unit: cores.
   * 
   * @example
   * 100
   */
  cpuUsage?: number;
  /**
   * @remarks
   * The CPU fulfillment ratio of the job at the snapshot time. This is calculated by dividing the CPU usage by the CPU request.
   * 
   * @example
   * 0.5
   */
  cpuUsageToRequestRatio?: number;
  /**
   * @remarks
   * The upstream node ID.
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
   * The job type.
   * 
   * @example
   * SQL
   */
  jobType?: string;
  /**
   * @remarks
   * This parameter is not used.
   * 
   * @example
   * -1
   */
  maxCpuPct?: number;
  /**
   * @remarks
   * This parameter is not used.
   * 
   * @example
   * -1
   */
  maxMemoryPct?: number;
  /**
   * @remarks
   * The amount of memory requested by the job at the snapshot time, in MB.
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
   * The memory fulfillment ratio of the job at the snapshot time. This is calculated by dividing the memory usage by the memory request.
   * 
   * @example
   * 1
   */
  memoryUsageToRequestRatio?: number;
  /**
   * @remarks
   * The CPU usage percentage of a subscription job at the snapshot time. This value is calculated by dividing the CPU usage by the sum of the reserved CPU guarantee and the elastic reserved CPU. This parameter is not available for pay-as-you-go jobs.
   * 
   * @example
   * 0.6
   */
  minCpuPct?: number;
  /**
   * @remarks
   * The memory usage percentage of a subscription job at the observation time. This value is calculated by dividing the memory usage by the sum of the reserved memory guarantee and the elastic reserved memory. This parameter is not available for pay-as-you-go jobs.
   * 
   * @example
   * 0.6
   */
  minMemoryPct?: number;
  /**
   * @remarks
   * The job priority.
   * 
   * @example
   * 9
   */
  priority?: number;
  /**
   * @remarks
   * The project name.
   * 
   * @example
   * projectA
   */
  project?: string;
  /**
   * @remarks
   * The nickname of the computing quota that the job uses.
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
   * 
   * > The time when the job acquired its first computing resource.
   * 
   * @example
   * 1736821805
   */
  runningAtTime?: number;
  /**
   * @remarks
   * The runtime duration, in seconds. This is the duration from when the job started running to the snapshot time. If the job has not started, this parameter is empty.
   * 
   * @example
   * 43
   */
  runningTime?: number;
  /**
   * @remarks
   * The signature of the SQL job.
   * 
   * @example
   * signatureabc
   */
  signature?: string;
  /**
   * @remarks
   * The snapshot time.
   * 
   * @example
   * 1736821848
   */
  snapshotTime?: number;
  /**
   * @remarks
   * The job status.
   * 
   * > The status of a snapshot job can only be \\`running\\`.
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The time when the job was submitted.
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
   * The total duration, in seconds. This is the duration from when the job was submitted to the snapshot time.
   * 
   * @example
   * 63
   */
  totalTime?: number;
  /**
   * @remarks
   * The waiting duration, in seconds. This is the duration from when the job was submitted to when it started running. If the job has not started, this is the duration from the submission time to the snapshot time.
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
   * The total number of entries returned.
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
   * The returned data.
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
   * 异常信息
   */
  errorMsg?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * - 1xx: Informational - The request has been received and the process is continuing.
   * 
   * - 2xx: Success - The request was successfully received, understood, and accepted.
   * 
   * - 3xx: Redirection - Further action must be taken to complete the request.
   * 
   * - 4xx: Client Error - The request contains bad syntax or cannot be fulfilled.
   * 
   * - 5xx: Server Error - The server failed to fulfill an apparently valid request.
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

