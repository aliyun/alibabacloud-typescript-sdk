// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobExecutionResponseBodyData extends $dara.Model {
  /**
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @example
   * 1
   */
  attempt?: number;
  dataTime?: string;
  /**
   * @example
   * 1
   */
  duration?: number;
  /**
   * @example
   * 2024-10-29 15:56:36
   */
  endTime?: string;
  /**
   * @example
   * {\\"Status\\": \\"NORMAL\\", \\"ActiveCount\\": 4, \\"UnavailableCount\\": 0, \\"ExpectedCount\\": 4, \\"RiskCount\\": 0}
   */
  executor?: string;
  /**
   * @example
   * 1310630367761285120
   */
  jobExecutionId?: string;
  /**
   * @example
   * 74
   */
  jobId?: number;
  jobName?: string;
  /**
   * @example
   * xxljob
   */
  jobType?: string;
  /**
   * @example
   * /home/avatar/system/services/biz/payment/crontab/monitorpayment.php
   */
  parameters?: string;
  /**
   * @example
   * []
   */
  result?: string;
  /**
   * @example
   * 1
   */
  routeStrategy?: number;
  scheduleTime?: string;
  /**
   * @example
   * 172.3.27.76
   */
  serverIp?: string;
  /**
   * @example
   * 2025-03-11T00:06:10Z
   */
  startTime?: string;
  /**
   * @example
   * 4
   */
  status?: number;
  /**
   * @example
   * 1
   */
  timeType?: number;
  /**
   * @example
   * timer_schedule
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

