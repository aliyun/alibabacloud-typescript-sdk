// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobSnapshotInfosResponseBodyDataJobInfoList extends $dara.Model {
  /**
   * @remarks
   * The CPU request amount of the job at the snapshot time point. Unit: Core.
   * 
   * @example
   * 200
   */
  cpuRequest?: number;
  /**
   * @remarks
   * CPU usage of the job at the snapshot time. Unit: Core.
   * 
   * @example
   * 100
   */
  cpuUsage?: number;
  /**
   * @remarks
   * The CPU satisfaction ratio of the job at the snapshot time point (cpuUsage/cpuRequest).
   * 
   * @example
   * 0.5
   */
  cpuUsageToRequestRatio?: number;
  /**
   * @remarks
   * The ID of the upstream node.
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
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 20241028****jkl
   */
  instanceId?: string;
  /**
   * @remarks
   * The account that commits the job.
   * 
   * @example
   * ALIYUN$7632***@aliyun.com
   */
  jobOwner?: string;
  /**
   * @remarks
   * The type of the job.
   * 
   * @example
   * SQL
   */
  jobType?: string;
  /**
   * @remarks
   * Not applicable.
   * 
   * @example
   * -1
   */
  maxCpuPct?: number;
  /**
   * @remarks
   * Not applicable.
   * 
   * @example
   * -1
   */
  maxMemoryPct?: number;
  /**
   * @remarks
   * The Memory request amount of the job at the snapshot time point. Unit: MB.
   * 
   * @example
   * 409600
   */
  memoryRequest?: number;
  /**
   * @remarks
   * Memory usage of the job at the snapshot time. Unit: MB.
   * 
   * @example
   * 409600
   */
  memoryUsage?: number;
  /**
   * @remarks
   * The Memory satisfaction ratio of the job at the snapshot time point (memoryUsage/memoryRequest).
   * 
   * @example
   * 1
   */
  memoryUsageToRequestRatio?: number;
  /**
   * @remarks
   * The CPU usage ratio of the annual or monthly subscription job at the snapshot time (CPU usage / (reserved CPU guarantee + elastic reserved CPU)). This parameter is not available for pay-as-you-go jobs.
   * 
   * @example
   * 0.6
   */
  minCpuPct?: number;
  /**
   * @remarks
   * The memory usage ratio of the annual or monthly subscription job at the observation time (memory usage / (reserved memory guarantee + elastic reserved memory)). This parameter is not available for pay-as-you-go jobs.
   * 
   * @example
   * 0.6
   */
  minMemoryPct?: number;
  /**
   * @remarks
   * The priority of the job.
   * 
   * @example
   * 9
   */
  priority?: number;
  /**
   * @remarks
   * The name of the MaxCompute project.
   * 
   * @example
   * projectA
   */
  project?: string;
  /**
   * @remarks
   * The nickname of the computing Quota used by the job.
   * 
   * @example
   * quota_A
   */
  quotaNickname?: string;
  /**
   * @remarks
   * The type of the quota.
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
   * The start time of the job.
   * > The time when the job received the first batch of computing resources.
   * 
   * @example
   * 1736821805
   */
  runningAtTime?: number;
  /**
   * @remarks
   * The running duration, which is the duration from the runningAtTime to the snapshotTime of the job.  Unit: seconds (s).
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
   * The snapshot status of the job.
   * 
   * > The snapshot status is only running.
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The time when the job was committed.
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
   * The interval from the time when the job was submitted to the snapshotTime .Unit: seconds (s).
   * 
   * @example
   * 63
   */
  totalTime?: number;
  /**
   * @remarks
   * The duration from the time the job is submitted to the time the job starts to run. Unit: seconds (s).
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

