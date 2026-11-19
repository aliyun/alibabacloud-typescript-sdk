// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertEventsResponseBodyListResultDataAlertObject extends $dara.Model {
  /**
   * @remarks
   * The name of the alert object.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The source system. Valid values:
   * - ALL: All.
   * - DQE: Data quality.
   * - OS: Data service.
   * - STREAM: Real-time computing.
   * - VDM_BATCH: Offline computing.
   * - SOP: O&M platform.
   * - REAL_TIME_PIPELINE: Real-time integration.
   * - KGB: Baseline monitoring.
   * 
   * @example
   * VDM_BATCH
   */
  sourceSystemType?: string;
  /**
   * @remarks
   * The alert object type. Valid values:
   * - OS_API: API operation.
   * - OS_APPLICATION_SERVICE: Service application.
   * - STREAM_TASK: Real-time computing.
   * - REAL_TIME_PIPELINE_TASK: Real-time integration.
   * - VDM_BATCH_SHELL: SHELL.
   * - VDM_BATCH_PYTHON: PYTHON.
   * - VDM_BATCH_DATAX: DATAX.
   * - VDM_BATCH_DLINK: DLINK.
   * - VDM_BATCH_VIRTUAL: VIRTUAL.
   * - VDM_BATCH_PYTHON37: PYTHON37.
   * - VDM_BATCH_PYTHON311: PYTHON311.
   * - VDM_BATCH_MAX_COMPUTE_SQL: MAXCOMPUTE_SQL.
   * - VDM_BATCH_MAX_COMPUTE_MR: MAXCOMPUTE_MR.
   * - VDM_BATCH_SPARK_JAR_ON_MAX_COMPUTE: SPARK_JAR_ON_MAX_COMPUTE.
   * - VDM_BATCH_HIVE_SQL: HIVE_SQL.
   * - VDM_BATCH_HADOOP_MR: HADOOP_MR.
   * - VDM_BATCH_SPARK_JAR_ON_HIVE: SPARK_JAR_ON_HIVE.
   * - VDM_BATCH_SPARK_SQL_ON_HIVE: SPARK_SQL_ON_HIVE.
   * - VDM_BATCH_SPARK_SQL: VDM_BATCH_SPARK_SQL.
   * - DQE_LOGICAL_TABLE: Logical table.
   * - DQE_PHYSICAL_TABLE: Physical table.
   * - DQE_REALTIME_TABLE: Real-time metadata table.
   * - DQE_DATA_SOURCE: Data source.
   * - DQE_INDEX: Metric.
   * - QD_DECISION_INVOKE: QD decision invocation.
   * - BASELINE: Baseline.
   * 
   * @example
   * STREAM_TASK
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      sourceSystemType: 'SourceSystemType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      sourceSystemType: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertEventsResponseBodyListResultDataAlertReasonAlertReasonParamList extends $dara.Model {
  /**
   * @remarks
   * The name of the alert cause parameter.
   * 
   * @example
   * biz_date
   */
  key?: string;
  /**
   * @remarks
   * The value of the alert cause parameter.
   * 
   * @example
   * 2024-11-24 00:00:00
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertEventsResponseBodyListResultDataAlertReason extends $dara.Model {
  /**
   * @remarks
   * The list of alert cause parameters.
   */
  alertReasonParamList?: ListAlertEventsResponseBodyListResultDataAlertReasonAlertReasonParamList[];
  /**
   * @remarks
   * The business date.
   * 
   * @example
   * 2024-11-25 10:02:47
   */
  bizDate?: string;
  /**
   * @remarks
   * The alert cause. Valid values:
   * - DQE_COLUMN: Field rule exception.
   * - DQE_DATA_SOURCE: Data source rule exception.
   * - DQE_CUSTOMIZE: Custom rule exception.
   * - DQE_TABLE: Table rule exception.
   * - DQE_REALTIME_TABLE: Real-time table rule exception.
   * - DQE_INDEX: Metric rule exception.
   * - OS_AVG_RESPONSE: Average response time exception.
   * - OS_CALL_TIMES: Call count exception.
   * - OS_ERROR_RATE: Error rate exception.
   * - OS_OFFLINE: Offline percentage exception.
   * - STREAM_BIZ_DELAY: High business delay.
   * - STREAM_DATA_RETENTION: Data retention exceeds configuration.
   * - STREAM_MORE_THAN_FAILURE: Failure frequency exceeds configuration.
   * - STREAM_TPS_OUT_RANGE: TPS out of range.
   * - STREAM_CHECKPOINT_FAILURE: Checkpoint failures exceed configuration.
   * - STREAM_BACKPRESSURE: Backpressure duration exceeds configuration.
   * - STREAM_JOB_FAILURE: Run failure.
   * - VDM_BATCH_ERROR: Error.
   * - VDM_BATCH_FINISH: Completed.
   * - VDM_BATCH_TIME_OUT: Run timeout.
   * - VDM_BATCH_UNDONE: Uncompleted.
   * - VDM_BATCH_LOGIC_DATA_DELAY: Data delay.
   * - QD_DECISION_CALL_TIMES: Decision call count exception.
   * - QD_DECISION_MAX_RESPONSE: Maximum response time exception.
   * - QD_DECISION_ERROR_RATE: Error rate exception.
   * - QD_DECISION_PARAM_COUNT: Decision parameter count exception.
   * - QD_DECISION_PARAM_PERCENTAGE: Decision parameter percentage exception.
   * - QD_DECISION_PARAM_SUM: Decision parameter sum exception.
   * - QD_DECISION_PARAM_AVG: Decision parameter average exception.
   * - LOGICAL_INSTANCE_GENERATION: Logical instance generation monitoring.
   * - KGB_TASK_ERROR: Baseline task error.
   * - KGB_TASK_SLOW_DOWN: Baseline task slowdown.
   * - KGB_EARLY_WARNING: Baseline early warning.
   * - KGB_BROKEN_LINE: Baseline breach.
   * 
   * @example
   * VDM_BATCH_FINISH
   */
  type?: string;
  /**
   * @remarks
   * The unique identifier.
   * 
   * @example
   * t_6340134343289405440_20241124_639873707610
   */
  uniqueKey?: string;
  static names(): { [key: string]: string } {
    return {
      alertReasonParamList: 'AlertReasonParamList',
      bizDate: 'BizDate',
      type: 'Type',
      uniqueKey: 'UniqueKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertReasonParamList: { 'type': 'array', 'itemType': ListAlertEventsResponseBodyListResultDataAlertReasonAlertReasonParamList },
      bizDate: 'string',
      type: 'string',
      uniqueKey: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.alertReasonParamList)) {
      $dara.Model.validateArray(this.alertReasonParamList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertEventsResponseBodyListResultDataAlertReceiverListUserList extends $dara.Model {
  /**
   * @remarks
   * The username.
   * 
   * @example
   * ADMIN
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertEventsResponseBodyListResultDataAlertReceiverList extends $dara.Model {
  /**
   * @remarks
   * The list of alert channel types.
   */
  alertChannelTypeList?: string[];
  /**
   * @remarks
   * The list of custom alert channel IDs.
   */
  customAlertChannelIdList?: string[];
  /**
   * @remarks
   * The name of the on-call schedule.
   * 
   * @example
   * test
   */
  onCallTableName?: string;
  /**
   * @remarks
   * The type of the alert recipient. Valid values:
   * - ON_CALL_TABLE: On-call schedule.
   * - USER_DEFINED: Custom user.
   * - OWNER: Owner.
   * 
   * @example
   * OWNER
   */
  type?: string;
  /**
   * @remarks
   * The list of alert users.
   */
  userList?: ListAlertEventsResponseBodyListResultDataAlertReceiverListUserList[];
  static names(): { [key: string]: string } {
    return {
      alertChannelTypeList: 'AlertChannelTypeList',
      customAlertChannelIdList: 'CustomAlertChannelIdList',
      onCallTableName: 'OnCallTableName',
      type: 'Type',
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertChannelTypeList: { 'type': 'array', 'itemType': 'string' },
      customAlertChannelIdList: { 'type': 'array', 'itemType': 'string' },
      onCallTableName: 'string',
      type: 'string',
      userList: { 'type': 'array', 'itemType': ListAlertEventsResponseBodyListResultDataAlertReceiverListUserList },
    };
  }

  validate() {
    if(Array.isArray(this.alertChannelTypeList)) {
      $dara.Model.validateArray(this.alertChannelTypeList);
    }
    if(Array.isArray(this.customAlertChannelIdList)) {
      $dara.Model.validateArray(this.customAlertChannelIdList);
    }
    if(Array.isArray(this.userList)) {
      $dara.Model.validateArray(this.userList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertEventsResponseBodyListResultDataBelongProject extends $dara.Model {
  /**
   * @remarks
   * The business unit name.
   * 
   * @example
   * biz_1
   */
  bizName?: string;
  /**
   * @remarks
   * The project name.
   * 
   * @example
   * project_1
   */
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      bizName: 'BizName',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizName: 'string',
      projectName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertEventsResponseBodyListResultDataUrlConfig extends $dara.Model {
  /**
   * @remarks
   * The URL of the alert configuration page.
   * 
   * @example
   * https://dataphin.com/ops/test3
   */
  alertConfigUrl?: string;
  /**
   * @remarks
   * The URL of the log page.
   * 
   * @example
   * https://dataphin.com/ops/test2
   */
  logUrl?: string;
  /**
   * @remarks
   * The URL of the alert object page.
   * 
   * @example
   * https://dataphin.com/ops/test1
   */
  objectUrl?: string;
  static names(): { [key: string]: string } {
    return {
      alertConfigUrl: 'AlertConfigUrl',
      logUrl: 'LogUrl',
      objectUrl: 'ObjectUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertConfigUrl: 'string',
      logUrl: 'string',
      objectUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertEventsResponseBodyListResultData extends $dara.Model {
  /**
   * @remarks
   * The alert frequency. Valid values:
   * - ONCE: Immediate alert.
   * - PERIOD: Periodic alert. Format: 1HOUR, 1MINUTE, 1SECOND.
   * 
   * @example
   * ONCE
   */
  alertFrequency?: string;
  /**
   * @remarks
   * The alert object.
   */
  alertObject?: ListAlertEventsResponseBodyListResultDataAlertObject;
  /**
   * @remarks
   * The alert cause.
   */
  alertReason?: ListAlertEventsResponseBodyListResultDataAlertReason;
  /**
   * @remarks
   * The list of alert recipients.
   */
  alertReceiverList?: ListAlertEventsResponseBodyListResultDataAlertReceiverList[];
  /**
   * @remarks
   * The project.
   */
  belongProject?: ListAlertEventsResponseBodyListResultDataBelongProject;
  /**
   * @remarks
   * The expiration time of the do-not-disturb mode.
   * 
   * @example
   * 2024-11-25 00:00:00
   */
  doNotDisturbEndTime?: string;
  /**
   * @remarks
   * The first alert time.
   * 
   * @example
   * 2024-11-25 10:02:47
   */
  firstAlertTime?: string;
  /**
   * @remarks
   * The alert event ID.
   * 
   * @example
   * 12345
   */
  id?: string;
  /**
   * @remarks
   * The latest alert time.
   * 
   * @example
   * 2024-11-25 10:02:47
   */
  latestAlertTime?: string;
  /**
   * @remarks
   * The alert status. Valid values:
   * - ALERTING: Alerting.
   * - DO_NOT_DISTURB: Do not disturb.
   * - SILENCING: Alerting (silenced).
   * - FINISH: Completed.
   * 
   * @example
   * FINISH
   */
  status?: string;
  /**
   * @remarks
   * The total number of alerts.
   * 
   * @example
   * 1
   */
  totalAlertTimes?: number;
  /**
   * @remarks
   * The URL information.
   */
  urlConfig?: ListAlertEventsResponseBodyListResultDataUrlConfig;
  static names(): { [key: string]: string } {
    return {
      alertFrequency: 'AlertFrequency',
      alertObject: 'AlertObject',
      alertReason: 'AlertReason',
      alertReceiverList: 'AlertReceiverList',
      belongProject: 'BelongProject',
      doNotDisturbEndTime: 'DoNotDisturbEndTime',
      firstAlertTime: 'FirstAlertTime',
      id: 'Id',
      latestAlertTime: 'LatestAlertTime',
      status: 'Status',
      totalAlertTimes: 'TotalAlertTimes',
      urlConfig: 'UrlConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertFrequency: 'string',
      alertObject: ListAlertEventsResponseBodyListResultDataAlertObject,
      alertReason: ListAlertEventsResponseBodyListResultDataAlertReason,
      alertReceiverList: { 'type': 'array', 'itemType': ListAlertEventsResponseBodyListResultDataAlertReceiverList },
      belongProject: ListAlertEventsResponseBodyListResultDataBelongProject,
      doNotDisturbEndTime: 'string',
      firstAlertTime: 'string',
      id: 'string',
      latestAlertTime: 'string',
      status: 'string',
      totalAlertTimes: 'number',
      urlConfig: ListAlertEventsResponseBodyListResultDataUrlConfig,
    };
  }

  validate() {
    if(this.alertObject && typeof (this.alertObject as any).validate === 'function') {
      (this.alertObject as any).validate();
    }
    if(this.alertReason && typeof (this.alertReason as any).validate === 'function') {
      (this.alertReason as any).validate();
    }
    if(Array.isArray(this.alertReceiverList)) {
      $dara.Model.validateArray(this.alertReceiverList);
    }
    if(this.belongProject && typeof (this.belongProject as any).validate === 'function') {
      (this.belongProject as any).validate();
    }
    if(this.urlConfig && typeof (this.urlConfig as any).validate === 'function') {
      (this.urlConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertEventsResponseBodyListResult extends $dara.Model {
  /**
   * @remarks
   * The alert event query result.
   */
  data?: ListAlertEventsResponseBodyListResultData[];
  /**
   * @remarks
   * The total count.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListAlertEventsResponseBodyListResultData },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. A value of OK indicates that the request is normal.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code returned by the backend.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The query result.
   */
  listResult?: ListAlertEventsResponseBodyListResult;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      listResult: 'ListResult',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      listResult: ListAlertEventsResponseBodyListResult,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.listResult && typeof (this.listResult as any).validate === 'function') {
      (this.listResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

