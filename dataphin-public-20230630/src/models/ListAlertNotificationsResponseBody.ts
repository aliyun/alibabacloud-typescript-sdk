// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertNotificationsResponseBodyListResultDataAlertObject extends $dara.Model {
  /**
   * @remarks
   * The object name.
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
   * etc.
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
   * VDM_BATCH_SHELL
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

export class ListAlertNotificationsResponseBodyListResultDataAlertReasonAlertReasonParamList extends $dara.Model {
  /**
   * @remarks
   * The alert parameter name.
   * 
   * @example
   * biz_date
   */
  key?: string;
  /**
   * @remarks
   * The alert parameter value.
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

export class ListAlertNotificationsResponseBodyListResultDataAlertReason extends $dara.Model {
  /**
   * @remarks
   * The list of alert parameters.
   */
  alertReasonParamList?: ListAlertNotificationsResponseBodyListResultDataAlertReasonAlertReasonParamList[];
  /**
   * @remarks
   * The business date.
   * 
   * @example
   * 20241125
   */
  bizDate?: string;
  /**
   * @remarks
   * The alert reason type. Valid values:
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
   * - STREAM_JOB_FAILURE: Execution failed.
   * - VDM_BATCH_ERROR: Error occurred.
   * - VDM_BATCH_FINISH: Completed.
   * - VDM_BATCH_TIME_OUT: Execution timed out.
   * - VDM_BATCH_UNDONE: Incomplete.
   * - VDM_BATCH_LOGIC_DATA_DELAY: Data delay.
   * - QD_DECISION_CALL_TIMES: Decision call count exception.
   * - QD_DECISION_MAX_RESPONSE: Maximum response time exception.
   * - QD_DECISION_ERROR_RATE: Error rate exception.
   * - QD_DECISION_PARAM_COUNT: Decision parameter statistics count exception.
   * - QD_DECISION_PARAM_PERCENTAGE: Decision parameter statistics percentage exception.
   * - QD_DECISION_PARAM_SUM: Decision parameter sum exception.
   * - QD_DECISION_PARAM_AVG: Decision parameter average exception.
   * - LOGICAL_INSTANCE_GENERATION: Logical instance generation monitoring.
   * - KGB_TASK_ERROR: Baseline task error.
   * - KGB_TASK_SLOW_DOWN: Baseline task slowed down.
   * - KGB_EARLY_WARNING: Baseline early warning.
   * - KGB_BROKEN_LINE: Baseline SLA breached.
   * etc.
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
   * 123456
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
      alertReasonParamList: { 'type': 'array', 'itemType': ListAlertNotificationsResponseBodyListResultDataAlertReasonAlertReasonParamList },
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

export class ListAlertNotificationsResponseBodyListResultDataAlertReceiverUser extends $dara.Model {
  /**
   * @remarks
   * The alert recipient name.
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

export class ListAlertNotificationsResponseBodyListResultDataAlertReceiver extends $dara.Model {
  /**
   * @remarks
   * The push channel type. Valid values:
   * - VOICE: Voice calls.
   * - SMS: Text messages.
   * - MAIL: Email.
   * - DINGTALK_ROBOT: DingTalk robot.
   * - DINGDING: DingTalk work notification.
   * - CUSTOM: Custom message channel.
   * - WECHAT: WeCom.
   * - FEISHU: Lark.
   * - SILENCE: No notification.
   * 
   * @example
   * SMS
   */
  alertChannelType?: string;
  /**
   * @remarks
   * The custom message channel ID.
   * 
   * @example
   * 123456
   */
  customAlertChannelId?: string;
  /**
   * @remarks
   * The on-call schedule ID.
   * 
   * @example
   * 12345
   */
  onCallTableId?: string;
  /**
   * @remarks
   * The on-call schedule name.
   * 
   * @example
   * test
   */
  onCallTableName?: string;
  /**
   * @remarks
   * The alert recipient type. Valid values:
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
   * The user information.
   */
  user?: ListAlertNotificationsResponseBodyListResultDataAlertReceiverUser;
  static names(): { [key: string]: string } {
    return {
      alertChannelType: 'AlertChannelType',
      customAlertChannelId: 'CustomAlertChannelId',
      onCallTableId: 'OnCallTableId',
      onCallTableName: 'OnCallTableName',
      type: 'Type',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertChannelType: 'string',
      customAlertChannelId: 'string',
      onCallTableId: 'string',
      onCallTableName: 'string',
      type: 'string',
      user: ListAlertNotificationsResponseBodyListResultDataAlertReceiverUser,
    };
  }

  validate() {
    if(this.user && typeof (this.user as any).validate === 'function') {
      (this.user as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertNotificationsResponseBodyListResultDataAlertSend extends $dara.Model {
  /**
   * @remarks
   * The alert reason.
   * 
   * @example
   * Invalid
   */
  failReason?: string;
  /**
   * @remarks
   * The delivery content.
   * 
   * @example
   * test
   */
  sendContent?: string;
  /**
   * @remarks
   * The delivery time.
   * 
   * @example
   * 2024-11-25 10:02:47
   */
  sendTime?: string;
  /**
   * @remarks
   * The delivery status. Valid values:
   * - SUCCESS: Delivered successfully.
   * - FAILE: Delivery failed.
   * - SENDING: Delivering.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      failReason: 'FailReason',
      sendContent: 'SendContent',
      sendTime: 'SendTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failReason: 'string',
      sendContent: 'string',
      sendTime: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertNotificationsResponseBodyListResultData extends $dara.Model {
  /**
   * @remarks
   * The alert event ID.
   * 
   * @example
   * 12345
   */
  alertEventId?: string;
  /**
   * @remarks
   * The alert object.
   */
  alertObject?: ListAlertNotificationsResponseBodyListResultDataAlertObject;
  /**
   * @remarks
   * The alert reason.
   */
  alertReason?: ListAlertNotificationsResponseBodyListResultDataAlertReason;
  /**
   * @remarks
   * The recipient information.
   */
  alertReceiver?: ListAlertNotificationsResponseBodyListResultDataAlertReceiver;
  /**
   * @remarks
   * The alert delivery information.
   */
  alertSend?: ListAlertNotificationsResponseBodyListResultDataAlertSend;
  static names(): { [key: string]: string } {
    return {
      alertEventId: 'AlertEventId',
      alertObject: 'AlertObject',
      alertReason: 'AlertReason',
      alertReceiver: 'AlertReceiver',
      alertSend: 'AlertSend',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertEventId: 'string',
      alertObject: ListAlertNotificationsResponseBodyListResultDataAlertObject,
      alertReason: ListAlertNotificationsResponseBodyListResultDataAlertReason,
      alertReceiver: ListAlertNotificationsResponseBodyListResultDataAlertReceiver,
      alertSend: ListAlertNotificationsResponseBodyListResultDataAlertSend,
    };
  }

  validate() {
    if(this.alertObject && typeof (this.alertObject as any).validate === 'function') {
      (this.alertObject as any).validate();
    }
    if(this.alertReason && typeof (this.alertReason as any).validate === 'function') {
      (this.alertReason as any).validate();
    }
    if(this.alertReceiver && typeof (this.alertReceiver as any).validate === 'function') {
      (this.alertReceiver as any).validate();
    }
    if(this.alertSend && typeof (this.alertSend as any).validate === 'function') {
      (this.alertSend as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertNotificationsResponseBodyListResult extends $dara.Model {
  /**
   * @remarks
   * The list of push records.
   */
  data?: ListAlertNotificationsResponseBodyListResultData[];
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
      data: { 'type': 'array', 'itemType': ListAlertNotificationsResponseBodyListResultData },
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

export class ListAlertNotificationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. OK indicates that the request is successful.
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
  listResult?: ListAlertNotificationsResponseBodyListResult;
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
      listResult: ListAlertNotificationsResponseBodyListResult,
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

