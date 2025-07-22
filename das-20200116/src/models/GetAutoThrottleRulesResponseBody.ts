// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAutoThrottleRulesResponseBodyDataEnableAutoThrottleList extends $dara.Model {
  /**
   * @remarks
   * The maximum period of time during which an exception occurs when automatic SQL throttling is triggered. Unit: minutes.
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
   * 32
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
   * AND
   */
  cpuSessionRelation?: string;
  /**
   * @remarks
   * The CPU utilization threshold.
   * 
   * @example
   * 70
   */
  cpuUsage?: number;
  /**
   * @remarks
   * The database instance ID.
   * 
   * @example
   * rm-2ze8g2am97624****
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
   * true
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

export class GetAutoThrottleRulesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of database instances for which the automatic SQL throttling feature is currently enabled.
   * 
   * @example
   * 1
   */
  enableAutoThrottleCount?: number;
  /**
   * @remarks
   * The database instances for which the automatic SQL throttling feature is currently enabled.
   */
  enableAutoThrottleList?: GetAutoThrottleRulesResponseBodyDataEnableAutoThrottleList[];
  /**
   * @remarks
   * The number of database instances that do not exist or for which the automatic SQL throttling feature has never been enabled.
   * 
   * >  If a database instance does not exist, the instance has been released or the specified instance ID is invalid.
   * 
   * @example
   * 1
   */
  neverEnableAutoThrottleOrReleasedInstanceCount?: number;
  /**
   * @remarks
   * The number of database instances that do not exist or for which the automatic SQL throttling feature has never been enabled.
   * 
   * >  If a database instance does not exist, the instance has been released or the specified instance ID is invalid.
   */
  neverEnableAutoThrottleOrReleasedInstanceIdList?: string[];
  /**
   * @remarks
   * The number of databases for which the automatic SQL throttling feature has been enabled.
   * 
   * @example
   * 3
   */
  totalAutoThrottleRulesCount?: number;
  /**
   * @remarks
   * The number of database instances for which the automatic SQL throttling feature was once enabled but is currently disabled.
   * 
   * @example
   * 1
   */
  turnOffAutoThrottleCount?: number;
  /**
   * @remarks
   * The database instances for which the automatic SQL throttling feature was once enabled but is currently disabled.
   */
  turnOffAutoThrottleList?: GetAutoThrottleRulesResponseBodyDataTurnOffAutoThrottleList[];
  static names(): { [key: string]: string } {
    return {
      enableAutoThrottleCount: 'EnableAutoThrottleCount',
      enableAutoThrottleList: 'EnableAutoThrottleList',
      neverEnableAutoThrottleOrReleasedInstanceCount: 'NeverEnableAutoThrottleOrReleasedInstanceCount',
      neverEnableAutoThrottleOrReleasedInstanceIdList: 'NeverEnableAutoThrottleOrReleasedInstanceIdList',
      totalAutoThrottleRulesCount: 'TotalAutoThrottleRulesCount',
      turnOffAutoThrottleCount: 'TurnOffAutoThrottleCount',
      turnOffAutoThrottleList: 'TurnOffAutoThrottleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableAutoThrottleCount: 'number',
      enableAutoThrottleList: { 'type': 'array', 'itemType': GetAutoThrottleRulesResponseBodyDataEnableAutoThrottleList },
      neverEnableAutoThrottleOrReleasedInstanceCount: 'number',
      neverEnableAutoThrottleOrReleasedInstanceIdList: { 'type': 'array', 'itemType': 'string' },
      totalAutoThrottleRulesCount: 'number',
      turnOffAutoThrottleCount: 'number',
      turnOffAutoThrottleList: { 'type': 'array', 'itemType': GetAutoThrottleRulesResponseBodyDataTurnOffAutoThrottleList },
    };
  }

  validate() {
    if(Array.isArray(this.enableAutoThrottleList)) {
      $dara.Model.validateArray(this.enableAutoThrottleList);
    }
    if(Array.isArray(this.neverEnableAutoThrottleOrReleasedInstanceIdList)) {
      $dara.Model.validateArray(this.neverEnableAutoThrottleOrReleasedInstanceIdList);
    }
    if(Array.isArray(this.turnOffAutoThrottleList)) {
      $dara.Model.validateArray(this.turnOffAutoThrottleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoThrottleRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetAutoThrottleRulesResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * >  If the request was successful, **Successful** is returned. If the request failed, an error message that contains information such as an error code is returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7172BECE-588A-5961-8126-C216E16B****
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
      data: GetAutoThrottleRulesResponseBodyData,
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

