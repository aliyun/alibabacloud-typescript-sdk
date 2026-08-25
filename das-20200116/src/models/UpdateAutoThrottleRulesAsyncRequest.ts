// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAutoThrottleRulesAsyncRequest extends $dara.Model {
  /**
   * @remarks
   * The duration threshold of the anomaly that triggers automatic SQL throttling. The value must be a positive integer greater than or equal to 2. Unit: minutes.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  abnormalDuration?: number;
  /**
   * @remarks
   * The active sessions threshold.	
   * 
   * - If the relationship with the CPU utilization threshold is **OR**, the value must be greater than or equal to 16.
   * - If the relationship with the CPU utilization threshold is **AND**, the value must be greater than or equal to 2.
   * 
   * This parameter is required.
   * 
   * @example
   * 16
   */
  activeSessions?: number;
  /**
   * @remarks
   * The end time of the throttling time window (UTC).
   * 
   * This parameter is required.
   * 
   * @example
   * 23:59Z
   */
  allowThrottleEndTime?: string;
  /**
   * @remarks
   * The start time of the throttling time window (UTC).
   * 
   * This parameter is required.
   * 
   * @example
   * 00:00Z
   */
  allowThrottleStartTime?: string;
  /**
   * @remarks
   * Specifies whether to simultaneously kill abnormal SQL statements that are being executed.
   * > Abnormal SQL statements are those that match the SQL templates to be throttled.
   * 
   * Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  autoKillSession?: boolean;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * None
   */
  consoleContext?: string;
  /**
   * @remarks
   * The logical relationship between the CPU utilization threshold and the active sessions threshold. Valid values:
   * - **AND**: both conditions must be met.
   * - **OR**: either condition must be met.
   * 
   * This parameter is required.
   * 
   * @example
   * OR
   */
  cpuSessionRelation?: string;
  /**
   * @remarks
   * The CPU utilization threshold. Valid values: 70% to 100%.
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
   * > The data format is JSONArray, such as `[\\"Instance ID 1\\",\\"Instance ID 2\\"]`. Separate instance IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * [\\"rm-2ze8g2am97624****\\",\\"rm-2ze9xrhze0709****\\"]
   */
  instanceIds?: string;
  /**
   * @remarks
   * The maximum throttling duration. The value must be a positive integer. Unit: minutes.
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
   * > An asynchronous call does not immediately return complete results. First, call this operation to obtain the **ResultId**. Then, use the returned **ResultId** to initiate the call again until **isFinish** is **true**, at which point the complete results are returned. This means that you must call this operation at least twice to obtain complete data.
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

