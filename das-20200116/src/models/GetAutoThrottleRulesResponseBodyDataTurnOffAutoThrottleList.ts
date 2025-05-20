// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAutoThrottleRulesResponseBodyDataTurnOffAutoThrottleList extends $dara.Model {
  /**
   * @remarks
   * The maximum period of time during which the automatic SQL throttling feature is triggered. Unit: minutes.
   * 
   * @example
   * 2
   */
  abnormalDuration?: number;
  /**
   * @remarks
   * The maximum number of active sessions.
   * 
   * @example
   * 64
   */
  activeSessions?: number;
  /**
   * @remarks
   * The end time of the throttling window. The value of this parameter is in UTC.
   * 
   * @example
   * 23:59Z
   */
  allowThrottleEndTime?: string;
  /**
   * @remarks
   * The start time of the throttling window. The value of this parameter is in UTC.
   * 
   * @example
   * 00:00Z
   */
  allowThrottleStartTime?: string;
  /**
   * @remarks
   * Indicates whether abnormal SQL statements in execution are terminated at a time. Valid values:
   * 
   * > Abnormal SQL statements use the same template as the SQL statements that need to be throttled.
   * 
   * * **true**
   * * **false**
   * 
   * @example
   * true
   */
  autoKillSession?: boolean;
  /**
   * @remarks
   * The logical relationship between the CPU utilization threshold and the maximum number of active sessions. Valid values:
   * 
   * * **AND**
   * * **OR**
   * 
   * @example
   * OR
   */
  cpuSessionRelation?: string;
  /**
   * @remarks
   * The CPU utilization threshold.
   * 
   * @example
   * 80
   */
  cpuUsage?: number;
  /**
   * @remarks
   * The database instance ID.
   * 
   * @example
   * rm-2ze9xrhze0709****
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum throttling duration. Unit: minutes.
   * 
   * @example
   * 10
   */
  maxThrottleTime?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to create the database instance.
   * 
   * @example
   * 140692647406****
   */
  userId?: string;
  /**
   * @remarks
   * Indicates whether the automatic SQL throttling feature is enabled. Valid values:
   * 
   * * **true**
   * * **false**
   * 
   * @example
   * false
   */
  visible?: boolean;
  static names(): { [key: string]: string } {
    return {
      abnormalDuration: 'AbnormalDuration',
      activeSessions: 'ActiveSessions',
      allowThrottleEndTime: 'AllowThrottleEndTime',
      allowThrottleStartTime: 'AllowThrottleStartTime',
      autoKillSession: 'AutoKillSession',
      cpuSessionRelation: 'CpuSessionRelation',
      cpuUsage: 'CpuUsage',
      instanceId: 'InstanceId',
      maxThrottleTime: 'MaxThrottleTime',
      userId: 'UserId',
      visible: 'Visible',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abnormalDuration: 'number',
      activeSessions: 'number',
      allowThrottleEndTime: 'string',
      allowThrottleStartTime: 'string',
      autoKillSession: 'boolean',
      cpuSessionRelation: 'string',
      cpuUsage: 'number',
      instanceId: 'string',
      maxThrottleTime: 'number',
      userId: 'string',
      visible: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

