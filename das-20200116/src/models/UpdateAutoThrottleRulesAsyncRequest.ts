// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAutoThrottleRulesAsyncRequest extends $dara.Model {
  /**
   * @remarks
   * The duration threshold for triggering automatic SQL throttling. Set this parameter to an integer that is greater than or equal to 2. Unit: minutes.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  abnormalDuration?: number;
  /**
   * @remarks
   * The threshold for the number of active sessions.
   * 
   * *   If this parameter and CpuUsage are in the **OR** relationship, set this parameter to an integer that is greater than or equal to 16.
   * *   If this parameter and CpuUsage are in the **AND** relationship, set this parameter to an integer that is greater than or equal to 2.
   * 
   * This parameter is required.
   * 
   * @example
   * 16
   */
  activeSessions?: number;
  /**
   * @remarks
   * The end time of the throttling window. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 23:59Z
   */
  allowThrottleEndTime?: string;
  /**
   * @remarks
   * The start time of the throttling window. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 00:00Z
   */
  allowThrottleStartTime?: string;
  /**
   * @remarks
   * Specifies whether to terminate abnormal SQL statements in execution at the same time. Valid values:
   * 
   * >  Abnormal SQL statements use the same template as the SQL statements to be throttled.
   * 
   * *   **true**
   * *   **false**
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  autoKillSession?: boolean;
  /**
   * @remarks
   * The reserved parameter.
   * 
   * @example
   * None
   */
  consoleContext?: string;
  /**
   * @remarks
   * The logical relationship between the CPU utilization threshold and the maximum number of active sessions. Valid values:
   * 
   * *   **AND**
   * *   **OR**
   * 
   * This parameter is required.
   * 
   * @example
   * OR
   */
  cpuSessionRelation?: string;
  /**
   * @remarks
   * The threshold for CPU utilization. Valid values: 70% to 100%.
   * 
   * This parameter is required.
   * 
   * @example
   * 70
   */
  cpuUsage?: number;
  /**
   * @remarks
   * The database instance IDs.
   * 
   * >  Set this parameter to a JSON array that consists of multiple instance IDs. Separate instance IDs with commas (,). Example: `[\\"Instance ID1\\", \\"Instance ID2\\"]`.
   * 
   * This parameter is required.
   * 
   * @example
   * [\\"rm-2ze8g2am97624****\\",\\"rm-2ze9xrhze0709****\\"]
   */
  instanceIds?: string;
  /**
   * @remarks
   * The maximum throttling duration. Set this parameter to a positive integer. Unit: minutes.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  maxThrottleTime?: number;
  /**
   * @remarks
   * The ID of the asynchronous request.
   * 
   * >  You can leave this parameter empty when you call the operation to initiate the request for the first time, and use the value of this parameter contained in the response to the first request for subsequent requests.
   * 
   * @example
   * async__507044db6c4eadfa2dab9b084e80****
   */
  resultId?: string;
  static names(): { [key: string]: string } {
    return {
      abnormalDuration: 'AbnormalDuration',
      activeSessions: 'ActiveSessions',
      allowThrottleEndTime: 'AllowThrottleEndTime',
      allowThrottleStartTime: 'AllowThrottleStartTime',
      autoKillSession: 'AutoKillSession',
      consoleContext: 'ConsoleContext',
      cpuSessionRelation: 'CpuSessionRelation',
      cpuUsage: 'CpuUsage',
      instanceIds: 'InstanceIds',
      maxThrottleTime: 'MaxThrottleTime',
      resultId: 'ResultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abnormalDuration: 'number',
      activeSessions: 'number',
      allowThrottleEndTime: 'string',
      allowThrottleStartTime: 'string',
      autoKillSession: 'boolean',
      consoleContext: 'string',
      cpuSessionRelation: 'string',
      cpuUsage: 'number',
      instanceIds: 'string',
      maxThrottleTime: 'number',
      resultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

