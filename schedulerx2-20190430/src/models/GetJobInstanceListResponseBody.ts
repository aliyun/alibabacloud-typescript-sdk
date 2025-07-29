// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobInstanceListResponseBodyDataJobInstanceDetails extends $dara.Model {
  /**
   * @remarks
   * The data timestamp of the job instance.
   * 
   * @example
   * 2020-07-27 11:52:10
   */
  dataTime?: string;
  /**
   * @remarks
   * The end time of the job execution.
   * 
   * @example
   * 2020-07-27 11:52:10
   */
  endTime?: string;
  /**
   * @remarks
   * The user who executes the job.
   * 
   * @example
   * A
   */
  executor?: string;
  /**
   * @remarks
   * The job instance ID.
   * 
   * @example
   * 11111111
   */
  instanceId?: number;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 92583
   */
  jobId?: number;
  /**
   * @remarks
   * The progress of the job instance.
   * 
   * @example
   * complete
   */
  progress?: string;
  /**
   * @remarks
   * The execution results of the job instance.
   * 
   * @example
   * success
   */
  result?: string;
  /**
   * @remarks
   * The time when the job was scheduled to run.
   * 
   * @example
   * 2020-07-27 11:52:10
   */
  scheduleTime?: string;
  /**
   * @remarks
   * The start time of the job execution.
   * 
   * @example
   * 2020-07-27 11:52:10
   */
  startTime?: string;
  /**
   * @remarks
   * The state of the job instance. Valid values:
   * 
   * *   **1**: The job instance is waiting for execution.
   * *   **3**: The job instance is running.
   * *   **4**: The job instance is successful.
   * *   **5**: The job instance failed.
   * *   **9**: The job instance is rejected.
   * 
   * Enumeration class: com.alibaba.schedulerx.common.domain.InstanceStatus
   * 
   * @example
   * 4
   */
  status?: number;
  /**
   * @remarks
   * The method that is used to specify the time when to schedule the job instance. Valid values:
   * 
   * *   **1**: cron
   * *   **3**: fix_rate
   * *   **4**: second_delay
   * *   **100**: api
   * 
   * Enumeration class: com.alibaba.schedulerx.common.domain.TimeType
   * 
   * @example
   * 1
   */
  timeType?: number;
  /**
   * @remarks
   * The trigger type of the job instance. Valid values:
   * 
   * *   **1**: The job instance was triggered at the scheduled time.
   * *   **2**: The job instance was triggered due to data updates.
   * *   **3**: The job instance was triggered by an API call.
   * *   **4**: The job instance was triggered because it is manually rerun.
   * *   **5**: The job instance was triggered because the system automatically reruns the job instance upon a system exception, such as a database exception.
   * 
   * Enumeration class: com.alibaba.schedulerx.common.domain.TriggerType
   * 
   * @example
   * 3
   */
  triggerType?: number;
  /**
   * @remarks
   * The endpoint of the triggered client. The value is in the IP address:Port number format.
   * 
   * @example
   * 192.168.0.0:16
   */
  workAddr?: string;
  static names(): { [key: string]: string } {
    return {
      dataTime: 'DataTime',
      endTime: 'EndTime',
      executor: 'Executor',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      progress: 'Progress',
      result: 'Result',
      scheduleTime: 'ScheduleTime',
      startTime: 'StartTime',
      status: 'Status',
      timeType: 'TimeType',
      triggerType: 'TriggerType',
      workAddr: 'WorkAddr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataTime: 'string',
      endTime: 'string',
      executor: 'string',
      instanceId: 'number',
      jobId: 'number',
      progress: 'string',
      result: 'string',
      scheduleTime: 'string',
      startTime: 'string',
      status: 'number',
      timeType: 'number',
      triggerType: 'number',
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

export class GetJobInstanceListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The details of the job instance.
   */
  jobInstanceDetails?: GetJobInstanceListResponseBodyDataJobInstanceDetails[];
  static names(): { [key: string]: string } {
    return {
      jobInstanceDetails: 'JobInstanceDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobInstanceDetails: { 'type': 'array', 'itemType': GetJobInstanceListResponseBodyDataJobInstanceDetails },
    };
  }

  validate() {
    if(Array.isArray(this.jobInstanceDetails)) {
      $dara.Model.validateArray(this.jobInstanceDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobInstanceListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The information about the job instances.
   */
  data?: GetJobInstanceListResponseBodyData;
  /**
   * @remarks
   * The error message that is returned only if the corresponding error occurs.
   * 
   * @example
   * jobid: 92583 not match groupId: testSchedulerx.defaultGroup
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4F68ABED-AC31-4412-9297-D9A8F0401108
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetJobInstanceListResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

