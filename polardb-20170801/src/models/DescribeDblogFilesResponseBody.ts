// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBLogFilesResponseBodyHaLogItems extends $dara.Model {
  /**
   * @remarks
   * The number of affected sessions during the failover.
   * 
   * @example
   * 100
   */
  affectedSessions?: number;
  /**
   * @remarks
   * The instance type before the failover. Valid values:
   * 
   * - **polardb_mysql_rw**: read-write instance.
   * 
   * - **polardb_mysql_ro**: read-only instance.
   * 
   * - **polardb_mysql_standby**: standby instance.
   * 
   * @example
   * polardb_mysql_rw
   */
  fromDBType?: string;
  /**
   * @remarks
   * The error code for the failover cause.
   * 
   * @example
   * Platform.Ha.AuroraService.ManualOperations
   */
  switchCauseCode?: string;
  /**
   * @remarks
   * Details about the failover cause.
   * 
   * @example
   * Platform.Ha.ManuallyTriggered
   */
  switchCauseDetail?: string;
  /**
   * @remarks
   * The time when the failover was complete. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format and is displayed in UTC.
   * 
   * @example
   * 2025-05-20T03:09:56Z
   */
  switchFinishTime?: string;
  /**
   * @remarks
   * The failover log ID.
   * 
   * @example
   * e571f897-9b3c-4012-9470-88333832dec4
   */
  switchId?: string;
  /**
   * @remarks
   * The time when the failover started. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format and is displayed in UTC.
   * 
   * @example
   * 2025-05-20T03:09:45Z
   */
  switchStartTime?: string;
  /**
   * @remarks
   * The failover type.
   * 
   * @example
   * 0
   */
  switchType?: number;
  /**
   * @remarks
   * The total number of sessions during the failover.
   * 
   * @example
   * 10000
   */
  totalSessions?: number;
  static names(): { [key: string]: string } {
    return {
      affectedSessions: 'AffectedSessions',
      fromDBType: 'FromDBType',
      switchCauseCode: 'SwitchCauseCode',
      switchCauseDetail: 'SwitchCauseDetail',
      switchFinishTime: 'SwitchFinishTime',
      switchId: 'SwitchId',
      switchStartTime: 'SwitchStartTime',
      switchType: 'SwitchType',
      totalSessions: 'TotalSessions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectedSessions: 'number',
      fromDBType: 'string',
      switchCauseCode: 'string',
      switchCauseDetail: 'string',
      switchFinishTime: 'string',
      switchId: 'string',
      switchStartTime: 'string',
      switchType: 'number',
      totalSessions: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBLogFilesResponseBodySwitchListItemsSwitchLogItemsSwitchStepItems extends $dara.Model {
  /**
   * @remarks
   * The time when the step was complete. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format and is displayed in UTC.
   * 
   * @example
   * 2025-08-14T02:07:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * Indicates whether the step was successful. Valid values:
   * 
   * - `true`: The step was successful.
   * 
   * - `false`: The step failed.
   * 
   * @example
   * true
   */
  isSuccess?: string;
  /**
   * @remarks
   * The fault simulation phase. Valid values:
   * 
   * - **PolarDB.MySQL.FaultSimulate.Phase.FAULT_INJECTION**: The fault injection phase.
   * 
   * - **PolarDB.MySQL.FaultSimulate.Phase.RECOVERY**: The recovery phase.
   * 
   * - **PolarDB.MySQL.FaultSimulate.Phase.POST_PROCESS**: The post-processing phase.
   * 
   * @example
   * PolarDB.MySQL.FaultSimulate.Phase.FAULT_INJECTION
   */
  simulatePhase?: string;
  /**
   * @remarks
   * The time when the step started. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format and is displayed in UTC.
   * 
   * @example
   * 2025-04-19T02:12:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The name of the current step. You can call the [DescribeHistoryTasks](https://help.aliyun.com/document_detail/2400077.html) operation to query the current step of a specified task. A common value is **do_pause**, which indicates that the system waits for a specified period of time.
   * 
   * @example
   * init_task_info
   */
  stepName?: string;
  /**
   * @remarks
   * The duration of the step in milliseconds.
   * 
   * @example
   * 1000
   */
  timeCost?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      isSuccess: 'IsSuccess',
      simulatePhase: 'SimulatePhase',
      startTime: 'StartTime',
      stepName: 'StepName',
      timeCost: 'TimeCost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      isSuccess: 'string',
      simulatePhase: 'string',
      startTime: 'string',
      stepName: 'string',
      timeCost: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBLogFilesResponseBodySwitchListItemsSwitchLogItems extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to query the details of your clusters, including the cluster IDs.
   * 
   * @example
   * pc-*************
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The destination database type. Valid values:
   * 
   * - **PolarDBMySQL**: A major version upgrade of PolarDB for MySQL.
   * 
   * - **RDS**: A migration from RDS to PolarDB for MySQL.
   * 
   * @example
   * PolarDBMySQL
   */
  dstDbType?: string;
  /**
   * @remarks
   * The time when the system event was complete. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format and is displayed in UTC.
   * 
   * @example
   * 2025-04-19T02:12:00Z
   */
  eventFinishTime?: string;
  /**
   * @remarks
   * The time when the system event started. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format and is displayed in UTC.
   * 
   * @example
   * 2025-04-19T01:12:00Z
   */
  eventStartTime?: string;
  /**
   * @remarks
   * The simulation list ID.
   * 
   * @example
   * 96
   */
  simulateListId?: string;
  /**
   * @remarks
   * The simulation log ID.
   * 
   * @example
   * 23
   */
  simulateLogId?: string;
  /**
   * @remarks
   * The fault simulation status. Valid values:
   * 
   * - **0**: Pending
   * 
   * - **1**: Success
   * 
   * - **2**: Running
   * 
   * - **3**: Failed
   * 
   * - **4**: Aborted
   * 
   * - **5**: Awaiting rollback
   * 
   * @example
   * 1
   */
  simulateStatus?: string;
  /**
   * @remarks
   * The source database type. Valid values:
   * 
   * - **PolarDBMySQL**: A major version upgrade of PolarDB for MySQL.
   * 
   * - **RDS**: A migration from RDS to PolarDB for MySQL.
   * 
   * @example
   * PolarDBMySQL
   */
  srcDbType?: string;
  /**
   * @remarks
   * A list of fault simulation steps.
   */
  switchStepItems?: DescribeDBLogFilesResponseBodySwitchListItemsSwitchLogItemsSwitchStepItems[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      dstDbType: 'DstDbType',
      eventFinishTime: 'EventFinishTime',
      eventStartTime: 'EventStartTime',
      simulateListId: 'SimulateListId',
      simulateLogId: 'SimulateLogId',
      simulateStatus: 'SimulateStatus',
      srcDbType: 'SrcDbType',
      switchStepItems: 'SwitchStepItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      dstDbType: 'string',
      eventFinishTime: 'string',
      eventStartTime: 'string',
      simulateListId: 'string',
      simulateLogId: 'string',
      simulateStatus: 'string',
      srcDbType: 'string',
      switchStepItems: { 'type': 'array', 'itemType': DescribeDBLogFilesResponseBodySwitchListItemsSwitchLogItemsSwitchStepItems },
    };
  }

  validate() {
    if(Array.isArray(this.switchStepItems)) {
      $dara.Model.validateArray(this.switchStepItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBLogFilesResponseBodySwitchListItemsSwitchStepItems extends $dara.Model {
  /**
   * @remarks
   * The cluster node ID.
   * 
   * > This parameter is returned only when the `Key` parameter in the request is not set to `PolarDBDiskUsage`.
   * 
   * @example
   * pi-*************
   */
  DBNodeId?: string;
  /**
   * @remarks
   * The time when the step was complete. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format and is displayed in UTC.
   * 
   * @example
   * 2025-07-23T02:30:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * Indicates whether the step was successful. Valid values:
   * 
   * - `true`: The step was successful.
   * 
   * - `false`: The step failed.
   * 
   * @example
   * true
   */
  isSuccess?: string;
  /**
   * @remarks
   * The fault simulation phase. Valid values:
   * 
   * - **PolarDB.MySQL.FaultSimulate.Phase.FAULT_INJECTION**: The fault injection phase.
   * 
   * - **PolarDB.MySQL.FaultSimulate.Phase.RECOVERY**: The recovery phase.
   * 
   * - **PolarDB.MySQL.FaultSimulate.Phase.POST_PROCESS**: The post-processing phase.
   * 
   * @example
   * PolarDB.MySQL.FaultSimulate.Phase.FAULT_INJECTION
   */
  simulatePhase?: string;
  /**
   * @remarks
   * The time when the step started. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format and is displayed in UTC.
   * 
   * @example
   * 2025-07-16T02:12:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The name of the current step. You can call the [DescribeHistoryTasks](https://help.aliyun.com/document_detail/2400077.html) operation to query the current step of a specified task. A common value is **do_pause**, which indicates that the system waits for a specified period of time.
   * 
   * @example
   * init_task_info
   */
  stepName?: string;
  /**
   * @remarks
   * The duration of the step in milliseconds.
   * 
   * @example
   * 1000
   */
  timeCost?: string;
  static names(): { [key: string]: string } {
    return {
      DBNodeId: 'DBNodeId',
      endTime: 'EndTime',
      isSuccess: 'IsSuccess',
      simulatePhase: 'SimulatePhase',
      startTime: 'StartTime',
      stepName: 'StepName',
      timeCost: 'TimeCost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBNodeId: 'string',
      endTime: 'string',
      isSuccess: 'string',
      simulatePhase: 'string',
      startTime: 'string',
      stepName: 'string',
      timeCost: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBLogFilesResponseBodySwitchListItems extends $dara.Model {
  /**
   * @remarks
   * The IDs of nodes on which to simulate a fault.
   * 
   * > For a node-level fault simulation, specify the ID of a single node. For an availability zone-level fault simulation, you can either omit this parameter or specify the IDs of all nodes in the zone.
   */
  DBNodeCrashList?: string[];
  /**
   * @remarks
   * The time when the fault simulation was complete. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format and is displayed in UTC.
   * 
   * @example
   * 2025-02-10T02:25:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The time when the system event was complete. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format and is displayed in UTC.
   * 
   * @example
   * 2025-04-19T02:12:00Z
   */
  eventFinishTime?: string;
  /**
   * @remarks
   * The time when the system event started. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format and is displayed in UTC.
   * 
   * @example
   * 2025-04-19T01:12:00Z
   */
  eventStartTime?: string;
  /**
   * @remarks
   * The fault injection method. Valid values:
   * 
   * - CrashSQLInjection: Injects a fault into the instance by using `Crash SQL`.
   * 
   * @example
   * CrashSQLInjection
   */
  faultInjectionType?: string;
  /**
   * @remarks
   * The fault simulation record ID.
   * 
   * @example
   * 23
   */
  simulateListId?: string;
  /**
   * @remarks
   * The fault simulation mode.
   * 
   * @example
   * 0
   */
  simulateMode?: string;
  /**
   * @remarks
   * The fault simulation status. Valid values:
   * 
   * - **0**: Pending
   * 
   * - **1**: Success
   * 
   * - **2**: Running
   * 
   * - **3**: Failed
   * 
   * - **4**: Aborted
   * 
   * - **5**: Awaiting rollback
   * 
   * @example
   * 2
   */
  simulateStatus?: string;
  /**
   * @remarks
   * The fault simulation task ID.
   * 
   * @example
   * 23
   */
  simulateTaskId?: string;
  /**
   * @remarks
   * The time when the fault simulation started. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format and is displayed in UTC.
   * 
   * @example
   * 2025-02-25T01:05:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * A list of fault simulation logs.
   */
  switchLogItems?: DescribeDBLogFilesResponseBodySwitchListItemsSwitchLogItems[];
  /**
   * @remarks
   * A list of failover steps.
   */
  switchStepItems?: DescribeDBLogFilesResponseBodySwitchListItemsSwitchStepItems[];
  static names(): { [key: string]: string } {
    return {
      DBNodeCrashList: 'DBNodeCrashList',
      endTime: 'EndTime',
      eventFinishTime: 'EventFinishTime',
      eventStartTime: 'EventStartTime',
      faultInjectionType: 'FaultInjectionType',
      simulateListId: 'SimulateListId',
      simulateMode: 'SimulateMode',
      simulateStatus: 'SimulateStatus',
      simulateTaskId: 'SimulateTaskId',
      startTime: 'StartTime',
      switchLogItems: 'SwitchLogItems',
      switchStepItems: 'SwitchStepItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBNodeCrashList: { 'type': 'array', 'itemType': 'string' },
      endTime: 'string',
      eventFinishTime: 'string',
      eventStartTime: 'string',
      faultInjectionType: 'string',
      simulateListId: 'string',
      simulateMode: 'string',
      simulateStatus: 'string',
      simulateTaskId: 'string',
      startTime: 'string',
      switchLogItems: { 'type': 'array', 'itemType': DescribeDBLogFilesResponseBodySwitchListItemsSwitchLogItems },
      switchStepItems: { 'type': 'array', 'itemType': DescribeDBLogFilesResponseBodySwitchListItemsSwitchStepItems },
    };
  }

  validate() {
    if(Array.isArray(this.DBNodeCrashList)) {
      $dara.Model.validateArray(this.DBNodeCrashList);
    }
    if(Array.isArray(this.switchLogItems)) {
      $dara.Model.validateArray(this.switchLogItems);
    }
    if(Array.isArray(this.switchStepItems)) {
      $dara.Model.validateArray(this.switchStepItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBLogFilesResponseBodySwitchLogItemsSwitchStepItems extends $dara.Model {
  /**
   * @remarks
   * The node ID.
   * 
   * > You must specify either the `DBNodeId` or `DBClusterId` parameter. You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to query the details of your clusters, including the node IDs.
   * 
   * @example
   * pi-*************
   */
  DBNodeId?: string;
  /**
   * @remarks
   * The time when the step was complete. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format and is displayed in UTC.
   * 
   * @example
   * 2025-03-27T02:27:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * Indicates whether the step was successful. Valid values:
   * 
   * - `true`: The step was successful.
   * 
   * - `false`: The step failed.
   * 
   * @example
   * true
   */
  isSuccess?: string;
  /**
   * @remarks
   * The fault simulation phase. Valid values:
   * 
   * - **PolarDB.MySQL.FaultSimulate.Phase.FAULT_INJECTION**: The fault injection phase.
   * 
   * - **PolarDB.MySQL.FaultSimulate.Phase.RECOVERY**: The recovery phase.
   * 
   * - **PolarDB.MySQL.FaultSimulate.Phase.POST_PROCESS**: The post-processing phase.
   * 
   * @example
   * PolarDB.MySQL.FaultSimulate.Phase.FAULT_INJECTION
   */
  simulatePhase?: string;
  /**
   * @remarks
   * The time when the step started. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format and is displayed in UTC.
   * 
   * @example
   * 2024-10-21T02:12:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * A message about the execution status of the step.
   * 
   * @example
   * This step exec success
   */
  stepMsg?: string;
  /**
   * @remarks
   * The name of the step.
   * 
   * @example
   * init_task_info
   */
  stepName?: string;
  /**
   * @remarks
   * The duration of the step in milliseconds.
   * 
   * @example
   * 1000
   */
  timeCost?: string;
  static names(): { [key: string]: string } {
    return {
      DBNodeId: 'DBNodeId',
      endTime: 'EndTime',
      isSuccess: 'IsSuccess',
      simulatePhase: 'SimulatePhase',
      startTime: 'StartTime',
      stepMsg: 'StepMsg',
      stepName: 'StepName',
      timeCost: 'TimeCost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBNodeId: 'string',
      endTime: 'string',
      isSuccess: 'string',
      simulatePhase: 'string',
      startTime: 'string',
      stepMsg: 'string',
      stepName: 'string',
      timeCost: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBLogFilesResponseBodySwitchLogItems extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to query the details of your clusters, including the cluster IDs.
   * 
   * @example
   * pc-*************
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The destination database type. Valid values:
   * 
   * - **PolarDBMySQL**: A major version upgrade of PolarDB for MySQL.
   * 
   * - **RDS**: A migration from RDS to PolarDB for MySQL.
   * 
   * @example
   * PolarDBMySQL
   */
  dstDbType?: string;
  /**
   * @remarks
   * The time when the system event was complete. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format and is displayed in UTC.
   * 
   * @example
   * 2025-04-19T02:12:00Z
   */
  eventFinishTime?: string;
  /**
   * @remarks
   * The time when the system event started. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format and is displayed in UTC.
   * 
   * @example
   * 2025-04-19T01:12:00Z
   */
  eventStartTime?: string;
  /**
   * @remarks
   * The simulation list ID.
   * 
   * @example
   * 231
   */
  simulateListId?: string;
  /**
   * @remarks
   * The fault simulation status. Valid values:
   * 
   * - **0**: Pending
   * 
   * - **1**: Success
   * 
   * - **2**: Running
   * 
   * - **3**: Failed
   * 
   * - **4**: Aborted
   * 
   * - **5**: Awaiting rollback
   * 
   * @example
   * 1
   */
  simulateStatus?: string;
  /**
   * @remarks
   * The status code of the fault simulation.
   * 
   * @example
   * 0
   */
  simulatecode?: string;
  /**
   * @remarks
   * The source database type. Valid values:
   * 
   * - **PolarDBMySQL**: A major version upgrade of PolarDB for MySQL.
   * 
   * - **RDS**: A migration from RDS to PolarDB for MySQL.
   * 
   * @example
   * PolarDBMySQL
   */
  srcDbType?: string;
  /**
   * @remarks
   * A list of failover steps.
   */
  switchStepItems?: DescribeDBLogFilesResponseBodySwitchLogItemsSwitchStepItems[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      dstDbType: 'DstDbType',
      eventFinishTime: 'EventFinishTime',
      eventStartTime: 'EventStartTime',
      simulateListId: 'SimulateListId',
      simulateStatus: 'SimulateStatus',
      simulatecode: 'Simulatecode',
      srcDbType: 'SrcDbType',
      switchStepItems: 'SwitchStepItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      dstDbType: 'string',
      eventFinishTime: 'string',
      eventStartTime: 'string',
      simulateListId: 'string',
      simulateStatus: 'string',
      simulatecode: 'string',
      srcDbType: 'string',
      switchStepItems: { 'type': 'array', 'itemType': DescribeDBLogFilesResponseBodySwitchLogItemsSwitchStepItems },
    };
  }

  validate() {
    if(Array.isArray(this.switchStepItems)) {
      $dara.Model.validateArray(this.switchStepItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBLogFilesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * pc-****************
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The instance type. Valid values:
   * 
   * - **polardb_mysql_rw**: read-write instance.
   * 
   * - **polardb_mysql_ro**: read-only instance.
   * 
   * - **polardb_mysql_standby**: standby instance.
   * 
   * @example
   * polardb_mysql_rw
   */
  DBInstanceType?: string;
  /**
   * @remarks
   * A list of failover logs.
   */
  haLogItems?: DescribeDBLogFilesResponseBodyHaLogItems[];
  /**
   * @remarks
   * Indicates whether a failover record exists. Valid values:
   * 
   * - **1**: No
   * 
   * - **0**: Yes
   * 
   * @example
   * 1
   */
  haStatus?: number;
  /**
   * @remarks
   * The number of log items on the current page.
   * 
   * @example
   * 1
   */
  itemsNumbers?: number;
  /**
   * @remarks
   * The page number. It must be a positive integer that does not exceed the maximum value of the Integer data type. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 5 to 50. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 24A1990B-4F6E-482B-B8CB-75C612******
   */
  requestId?: string;
  /**
   * @remarks
   * A list of fault simulation records.
   */
  switchListItems?: DescribeDBLogFilesResponseBodySwitchListItems[];
  /**
   * @remarks
   * A list of fault simulation logs.
   */
  switchLogItems?: DescribeDBLogFilesResponseBodySwitchLogItems[];
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 1
   */
  totalRecords?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      DBInstanceType: 'DBInstanceType',
      haLogItems: 'HaLogItems',
      haStatus: 'HaStatus',
      itemsNumbers: 'ItemsNumbers',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      switchListItems: 'SwitchListItems',
      switchLogItems: 'SwitchLogItems',
      totalRecords: 'TotalRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      DBInstanceType: 'string',
      haLogItems: { 'type': 'array', 'itemType': DescribeDBLogFilesResponseBodyHaLogItems },
      haStatus: 'number',
      itemsNumbers: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      switchListItems: { 'type': 'array', 'itemType': DescribeDBLogFilesResponseBodySwitchListItems },
      switchLogItems: { 'type': 'array', 'itemType': DescribeDBLogFilesResponseBodySwitchLogItems },
      totalRecords: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.haLogItems)) {
      $dara.Model.validateArray(this.haLogItems);
    }
    if(Array.isArray(this.switchListItems)) {
      $dara.Model.validateArray(this.switchListItems);
    }
    if(Array.isArray(this.switchLogItems)) {
      $dara.Model.validateArray(this.switchLogItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

