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
   * 
   * - ALL: all.
   * - DQE: data quality.
   * - OS: data service.
   * - STREAM: real-time computing.
   * - VDM_BATCH: offline computing.
   * - SOP: O&M platform.
   * - REAL_TIME_PIPELINE: real-time integration.
   * - KGB: baseline monitoring.
   * 
   * And more.
   * 
   * @example
   * VDM_BATCH
   */
  sourceSystemType?: string;
  /**
   * @remarks
   * The alert object type. Valid values:
   * - OS_API: API operation.
   * - OS_APPLICATION_SERVICE: service application.
   * - STREAM_TASK: real-time computing.
   * - REAL_TIME_PIPELINE_TASK: real-time integration.
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
   * - DQE_LOGICAL_TABLE: logical table.
   * - DQE_PHYSICAL_TABLE: physical table.
   * - DQE_REALTIME_TABLE: real-time meta table.
   * - DQE_DATA_SOURCE: data source.
   * - DQE_INDEX: metric.
   * - QD_DECISION_INVOKE: QD decision invocation.
   * - BASELINE: baseline.
   * 
   * And more.
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
   * - DQE_COLUMN: field rule exception.
   * - DQE_DATA_SOURCE: data source rule exception.
   * - DQE_CUSTOMIZE: custom rule exception.
   * - DQE_TABLE: table rule exception.
   * - DQE_REALTIME_TABLE: real-time table rule exception.
   * - DQE_INDEX: metric rule exception.
   * - OS_AVG_RESPONSE: average response time exception.
   * - OS_CALL_TIMES: call count exception.
   * - OS_ERROR_RATE: error rate exception.
   * - OS_OFFLINE: Offline percentage exception.
   * - STREAM_BIZ_DELAY: business delay too high.
   * - STREAM_DATA_RETENTION: data retention exceeds configuration.
   * - STREAM_MORE_THAN_FAILURE: failure frequency exceeds configuration.
   * - STREAM_TPS_OUT_RANGE: TPS out of range.
   * - STREAM_CHECKPOINT_FAILURE: checkpoint failures exceed configuration.
   * - STREAM_BACKPRESSURE: backpressure duration exceeds configuration.
   * - STREAM_JOB_FAILURE: job execution failed.
   * - VDM_BATCH_ERROR: error.
   * - VDM_BATCH_FINISH: completed.
   * - VDM_BATCH_TIME_OUT: execution timed out.
   * - VDM_BATCH_UNDONE: not completed.
   * - VDM_BATCH_LOGIC_DATA_DELAY: data delay.
   * - QD_DECISION_CALL_TIMES: decision call count exception.
   * - QD_DECISION_MAX_RESPONSE: maximum response time exception.
   * - QD_DECISION_ERROR_RATE: error rate exception.
   * - QD_DECISION_PARAM_COUNT: decision parameter count exception.
   * - QD_DECISION_PARAM_PERCENTAGE: decision parameter percentage exception.
   * - QD_DECISION_PARAM_SUM: decision parameter sum exception.
   * - QD_DECISION_PARAM_AVG: decision parameter average exception.
   * - LOGICAL_INSTANCE_GENERATION: logical instance generation monitoring.
   * - KGB_TASK_ERROR: baseline task error.
   * - KGB_TASK_SLOW_DOWN: baseline task slowdown.
   * - KGB_EARLY_WARNING: baseline early warning.
   * - KGB_BROKEN_LINE: baseline broken line.
   * 
   * And more.
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
   * The name of the alert receiver.
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
   * - VOICE: phone call.
   * - SMS: text message.
   * - MAIL: email.
   * - DINGTALK_ROBOT: DingTalk robot.
   * - DINGDING: DingTalk work notification.
   * - CUSTOM: custom message channel.
   * - WECHAT: WeCom.
   * - FEISHU: Lark.
   * - SILENCE: do not send.
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
   * The alert receiver type. Valid values:
   * - ON_CALL_TABLE: on-call schedule.
   * - USER_DEFINED: custom user.
   * - OWNER: owner.
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
   * 不合法
   */
  failReason?: string;
  /**
   * @remarks
   * The push content.
   * 
   * @example
   * test
   */
  sendContent?: string;
  /**
   * @remarks
   * The push time.
   * 
   * @example
   * 2024-11-25 10:02:47
   */
  sendTime?: string;
  /**
   * @remarks
   * The push status. Valid values:
   * - SUCCESS: Sent successfully.
   * - FAILE: Failed to send.
   * - SENDING: Sending in progress.
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
   * The receiver information.
   */
  alertReceiver?: ListAlertNotificationsResponseBodyListResultDataAlertReceiver;
  /**
   * @remarks
   * The alert sending information.
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
   * The total number of records.
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
   * The error code. A value of OK indicates that the request was successful.
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
   * Indicates whether the request was successful.
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

