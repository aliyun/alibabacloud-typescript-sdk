// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLogRequest extends $dara.Model {
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
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The end time. This value is a UNIX timestamp.
   * 
   * @example
   * 1721636220
   */
  endTime?: number;
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
   * The keyword to search for.
   * 
   * @example
   * hello word
   */
  keyword?: string;
  /**
   * @remarks
   * The log level.
   * 
   * @example
   * INFO
   */
  level?: string;
  /**
   * @remarks
   * The number of log entries to return.
   * 
   * @example
   * 2
   */
  lineNum?: number;
  /**
   * @remarks
   * The log ID.
   * 
   * @example
   * 344008
   */
  logId?: number;
  /**
   * @remarks
   * The offset.
   * 
   * @example
   * 0
   */
  offset?: number;
  /**
   * @remarks
   * Specifies whether to sort the results in descending order.
   * 
   * - **true**: sorts the results in descending order.
   * 
   * - **false**: sorts the results in ascending order.
   * 
   * @example
   * true
   */
  reverse?: boolean;
  /**
   * @remarks
   * The time when the job was scheduled. This value is a UNIX timestamp.
   * 
   * @example
   * 2023-10-01 12:00:00
   */
  scheduleTime?: number;
  /**
   * @remarks
   * The start time. This value is a UNIX timestamp.
   * 
   * @example
   * 1721636220
   */
  startTime?: number;
  /**
   * @remarks
   * The worker address.
   * 
   * @example
   * 192.168.1.100
   */
  workerAddr?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clusterId: 'ClusterId',
      endTime: 'EndTime',
      jobExecutionId: 'JobExecutionId',
      keyword: 'Keyword',
      level: 'Level',
      lineNum: 'LineNum',
      logId: 'LogId',
      offset: 'Offset',
      reverse: 'Reverse',
      scheduleTime: 'ScheduleTime',
      startTime: 'StartTime',
      workerAddr: 'WorkerAddr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
      endTime: 'number',
      jobExecutionId: 'string',
      keyword: 'string',
      level: 'string',
      lineNum: 'number',
      logId: 'number',
      offset: 'number',
      reverse: 'boolean',
      scheduleTime: 'number',
      startTime: 'number',
      workerAddr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

