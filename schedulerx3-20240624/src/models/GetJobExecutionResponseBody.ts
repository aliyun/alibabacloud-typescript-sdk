// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobExecutionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * The number of failed attempts.
   * 
   * @example
   * 1
   */
  attempt?: number;
  /**
   * @remarks
   * The node data timestamp. The format is YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2025-03-11 00:06:10
   */
  dataTime?: string;
  /**
   * @remarks
   * The total running duration.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * The expiration time. The format is YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2024-10-29 15:56:36
   */
  endTime?: string;
  /**
   * @remarks
   * The executor ID.
   * 
   * @example
   * {\\"Status\\": \\"NORMAL\\", \\"ActiveCount\\": 4, \\"UnavailableCount\\": 0, \\"ExpectedCount\\": 4, \\"RiskCount\\": 0}
   */
  executor?: string;
  /**
   * @remarks
   * The job execution ID.
   * 
   * @example
   * 1310630367761285120
   */
  jobExecutionId?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 74
   */
  jobId?: number;
  /**
   * @remarks
   * The job name.
   * 
   * @example
   * Tmall-AutoOrderReview
   */
  jobName?: string;
  /**
   * @remarks
   * The job type.
   * 
   * @example
   * xxljob
   */
  jobType?: string;
  /**
   * @remarks
   * The job parameters.
   * 
   * @example
   * /home/avatar/system/services/biz/payment/crontab/monitorpayment.php
   */
  parameters?: string;
  /**
   * @remarks
   * The returned result.
   * 
   * @example
   * []
   */
  result?: string;
  /**
   * @remarks
   * The routing strategy. Valid values:
   * - 1: round-robin
   * - 2: random
   * - 3: first
   * - 4: last
   * - 5: least frequently used
   * - 6: least recently used
   * - 7: consistent hashing
   * - 8: sharding broadcast
   * 
   * @example
   * 1
   */
  routeStrategy?: number;
  /**
   * @remarks
   * The job scheduling time. The format is YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2025-03-11 00:06:10
   */
  scheduleTime?: string;
  /**
   * @remarks
   * The scheduling node.
   * 
   * @example
   * 172.3.27.76
   */
  serverIp?: string;
  /**
   * @remarks
   * The start time of the job execution. The value is a timestamp in seconds.
   * 
   * @example
   * 2025-03-11 00:06:10
   */
  startTime?: string;
  /**
   * @remarks
   * The job execution status. Valid values:
   * - 0: UNKNOWN.
   * - 1: WAITING.
   * - 2: READY.
   * - 3: RUNNING.
   * - 4: SUCCESS.
   * - 5: FAILED.
   * 
   * @example
   * 4
   */
  status?: number;
  /**
   * @remarks
   * The time type. Valid values:
   * - -1: none
   * - 1: cron
   * - 2: fixed_delay
   * - 3: fixed_rate
   * - 5: one_time
   * - 100: api
   * 
   * @example
   * 1
   */
  timeType?: number;
  /**
   * @remarks
   * The job trigger type. Valid values:
   * - 0: unknown
   * - 1: timer_schedule
   * - 2: rerun
   * - 3: api_run
   * - 4: user_retry
   * - 5: system_retry
   * - 6: manual
   * 
   * @example
   * 1
   */
  triggerType?: number;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      attempt: 'Attempt',
      dataTime: 'DataTime',
      duration: 'Duration',
      endTime: 'EndTime',
      executor: 'Executor',
      jobExecutionId: 'JobExecutionId',
      jobId: 'JobId',
      jobName: 'JobName',
      jobType: 'JobType',
      parameters: 'Parameters',
      result: 'Result',
      routeStrategy: 'RouteStrategy',
      scheduleTime: 'ScheduleTime',
      serverIp: 'ServerIp',
      startTime: 'StartTime',
      status: 'Status',
      timeType: 'TimeType',
      triggerType: 'TriggerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      attempt: 'number',
      dataTime: 'string',
      duration: 'number',
      endTime: 'string',
      executor: 'string',
      jobExecutionId: 'string',
      jobId: 'number',
      jobName: 'string',
      jobType: 'string',
      parameters: 'string',
      result: 'string',
      routeStrategy: 'number',
      scheduleTime: 'string',
      serverIp: 'string',
      startTime: 'string',
      status: 'number',
      timeType: 'number',
      triggerType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobExecutionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The details of the job execution.
   */
  data?: GetJobExecutionResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Parameter error: content is null.
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 39938688-0BAB-5AD8-BF02-F4910FAC7589
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * - true: The call is successful.
   * - false: The call fails.
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
      data: GetJobExecutionResponseBodyData,
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

