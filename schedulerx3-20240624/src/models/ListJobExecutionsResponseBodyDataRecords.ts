// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobExecutionsResponseBodyDataRecords extends $dara.Model {
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
  /**
   * @example
   * 2024-11-12 14:52:42
   */
  dataTime?: string;
  /**
   * @example
   * 10
   */
  duration?: number;
  /**
   * @example
   * 2024-11-12 14:52:42
   */
  endTime?: string;
  /**
   * @example
   * 1827811800526000
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
  /**
   * @example
   * test-job
   */
  jobName?: string;
  /**
   * @example
   * xxljob
   */
  jobType?: string;
  /**
   * @example
   * name=zhangsan
   */
  parameters?: string;
  /**
   * @example
   * success
   */
  result?: string;
  /**
   * @example
   * 1
   */
  routeStrategy?: number;
  /**
   * @example
   * 2024-11-12 14:52:42
   */
  scheduleTime?: string;
  /**
   * @example
   * 28.0.168.46
   */
  serverIp?: string;
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
  totalTokens?: number;
  /**
   * @example
   * 1
   */
  triggerType?: number;
  /**
   * @example
   * http://192.168.1.9:9999/
   */
  workAddr?: string;
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
      status: 'Status',
      timeType: 'TimeType',
      totalTokens: 'TotalTokens',
      triggerType: 'TriggerType',
      workAddr: 'WorkAddr',
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
      status: 'number',
      timeType: 'number',
      totalTokens: 'number',
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

