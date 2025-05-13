// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkflowInstanceResponseBodyDataWfInstanceDagNodes extends $dara.Model {
  /**
   * @remarks
   * The number of retries when the job failed.
   * 
   * @example
   * 0
   */
  attempt?: number;
  /**
   * @remarks
   * The data timestamp of the job.
   * 
   * @example
   * 2023-01-03 18:00:00
   */
  dataTime?: string;
  /**
   * @remarks
   * The time when the job stopped running.
   * 
   * @example
   * 2023-01-03 18:00:21
   */
  endTime?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 1472
   */
  jobId?: number;
  /**
   * @remarks
   * The ID of the job instance.
   * 
   * @example
   * 24058796
   */
  jobInstanceId?: number;
  /**
   * @remarks
   * The job name.
   * 
   * @example
   * TestJob
   */
  jobName?: string;
  /**
   * @remarks
   * The execution result of the job.
   * 
   * @example
   * code=200
   */
  result?: string;
  /**
   * @remarks
   * The time when the job was scheduled.
   * 
   * @example
   * 2023-01-03 18:00:03
   */
  scheduleTime?: string;
  /**
   * @remarks
   * The time when the job started to run.
   * 
   * @example
   * 2023-01-03 18:00:03
   */
  startTime?: string;
  /**
   * @remarks
   * The state of the job instance. Valid values: 1: The job instance is waiting for execution. 3: The job instance is running. 4: The job instance is run. 5: The job instance failed to run. 9: The job instance is rejected. Enumeration class: com.alibaba.schedulerx.common.domain.InstanceStatus.
   * 
   * @example
   * 4
   */
  status?: number;
  /**
   * @remarks
   * The worker on which the job instance run.
   * 
   * @example
   * 10.163.0.101:34027
   */
  workAddr?: string;
  static names(): { [key: string]: string } {
    return {
      attempt: 'Attempt',
      dataTime: 'DataTime',
      endTime: 'EndTime',
      jobId: 'JobId',
      jobInstanceId: 'JobInstanceId',
      jobName: 'JobName',
      result: 'Result',
      scheduleTime: 'ScheduleTime',
      startTime: 'StartTime',
      status: 'Status',
      workAddr: 'WorkAddr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attempt: 'number',
      dataTime: 'string',
      endTime: 'string',
      jobId: 'number',
      jobInstanceId: 'number',
      jobName: 'string',
      result: 'string',
      scheduleTime: 'string',
      startTime: 'string',
      status: 'number',
      workAddr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

