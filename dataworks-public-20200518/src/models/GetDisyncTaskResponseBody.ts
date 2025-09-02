// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDISyncTaskResponseBodyDataAlarmListAlarmRuleList extends $dara.Model {
  /**
   * @remarks
   * The calculation method of a metric. Valid values:
   * 
   * *   avg
   * *   max
   * 
   * @example
   * avg
   */
  aggregator?: string;
  /**
   * @remarks
   * The comparison operator, which indicates the method used to compare a metric with the alert rule.
   * 
   * *   \\"=\\"
   * *   \\"<\\"
   * *   \\">\\"
   * 
   * @example
   * =
   */
  comparator?: string;
  /**
   * @remarks
   * The duration that a condition is met before an alert is triggered. Unit: minutes.
   * 
   * @example
   * 3
   */
  duration?: number;
  /**
   * @remarks
   * *   WARNING
   * *   CRITICAL
   * 
   * @example
   * WARNING
   */
  level?: string;
  /**
   * @remarks
   * The threshold for the comparison between a metric and the alert rule.
   * 
   * @example
   * 1
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      aggregator: 'Aggregator',
      comparator: 'Comparator',
      duration: 'Duration',
      level: 'Level',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregator: 'string',
      comparator: 'string',
      duration: 'number',
      level: 'string',
      threshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDISyncTaskResponseBodyDataAlarmListNotifyRule extends $dara.Model {
  /**
   * @remarks
   * The settings for Critical-level alert notifications.
   */
  critical?: string[];
  /**
   * @remarks
   * The alert interval. Unit: minutes.
   * 
   * @example
   * 5
   */
  interval?: number;
  /**
   * @remarks
   * The settings for Warning-level alert notifications.
   */
  warning?: string[];
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      interval: 'Interval',
      warning: 'Warning',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: { 'type': 'array', 'itemType': 'string' },
      interval: 'number',
      warning: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.critical)) {
      $dara.Model.validateArray(this.critical);
    }
    if(Array.isArray(this.warning)) {
      $dara.Model.validateArray(this.warning);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDISyncTaskResponseBodyDataAlarmList extends $dara.Model {
  /**
   * @remarks
   * The alert notification settings. The value of this parameter is an array.
   */
  alarmRuleList?: GetDISyncTaskResponseBodyDataAlarmListAlarmRuleList[];
  /**
   * @remarks
   * The description of the alert rule.
   * 
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the alert rule is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The ID of the alert rule.
   * 
   * @example
   * 45242
   */
  id?: number;
  /**
   * @remarks
   * The alert type. Valid values:
   * 
   * *   taskStatus
   * *   bizDelay
   * *   taskFailoverCount
   * *   ddlUnsupport
   * *   ddlReport
   * *   totalDirtyRecordWriteInLines
   * 
   * @example
   * taskStatus
   */
  metric?: string;
  /**
   * @remarks
   * The settings for alert notification rules. The value of this parameter is an array.
   */
  notifyRule?: GetDISyncTaskResponseBodyDataAlarmListNotifyRule;
  /**
   * @remarks
   * The name of the alert rule.
   * 
   * @example
   * Delay alert rule name 1
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      alarmRuleList: 'AlarmRuleList',
      description: 'Description',
      enabled: 'Enabled',
      id: 'Id',
      metric: 'Metric',
      notifyRule: 'NotifyRule',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmRuleList: { 'type': 'array', 'itemType': GetDISyncTaskResponseBodyDataAlarmListAlarmRuleList },
      description: 'string',
      enabled: 'boolean',
      id: 'number',
      metric: 'string',
      notifyRule: GetDISyncTaskResponseBodyDataAlarmListNotifyRule,
      ruleName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.alarmRuleList)) {
      $dara.Model.validateArray(this.alarmRuleList);
    }
    if(this.notifyRule && typeof (this.notifyRule as any).validate === 'function') {
      (this.notifyRule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDISyncTaskResponseBodyDataSolutionDetail extends $dara.Model {
  /**
   * @remarks
   * The creator of the data synchronization solution.
   * 
   * @example
   * dataworks_di
   */
  creatorName?: string;
  /**
   * @remarks
   * The ID of the data synchronization solution.
   * 
   * @example
   * 100
   */
  id?: number;
  /**
   * @remarks
   * The name of the data synchronization solution.
   * 
   * @example
   * holo_20211206161025
   */
  name?: string;
  /**
   * @remarks
   * The configuration details of the data synchronization solution.
   * 
   * @example
   * {"holoDatasource":"holo","offlineSyncConfig":{"nodeNameRule":"oneclick_holo_di_${db_table_name_src}_to_${db_table_name_dest}","resourceGroup":"group_219193793999490"},"processRuleId":1007,"readerConcurrent":10,"realtimeSyncConfig":{"content":{"order":{"hops":[{"from":"reader","to":"writer"}]},"setting":{"speed":{"readerConcurrent":10}},"steps":[{"stepType":"mysql","name":"reader","category":"reader","parameter":{"connection":[{"datasource":"mm","datasourceType":"mysql","table":[]}]}},{"stepType":"holo","name":"writer","category":"writer","parameter":{"datasource":"holo","writeMode":"replay","datasourceSchema":"public","tableMappingRule":{"datasource":[{"tableRule":[],"srcDatasourceName":"mm"}]}}}]},"extend":{"mode":"migration_holo","resourceGroup":"group_219193793999490"}},"setting":{"autoCreateWorkflow":true,"userDefinedFileNameExpression":"oneclick"},"srcType":"mysql","tableMappingRuleFromRealtimeSyncConfig":{"datasource":[{"srcDatasourceName":"mm","tableRule":[]}]}}
   */
  processContent?: string;
  /**
   * @remarks
   * The additional parameters of the data synchronization solution.
   * 
   * @example
   * {"processType":"new","tableNum":300}
   */
  processExtra?: string;
  /**
   * @remarks
   * The ID of the project to which the data synchronization solution belongs.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The type of the source of the data synchronization solution.
   * 
   * @example
   * mysql
   */
  sourceType?: string;
  /**
   * @remarks
   * The start time of the data synchronization solution.
   * 
   * @example
   * 2021-12-07 14:40:51
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the data synchronization solution. Valid values:
   * 
   * *   0: successful
   * *   1: not running
   * *   2: running
   * *   3: failed
   * *   4: committed
   * *   5: pending manual confirmation
   * *   6: manually confirmed
   * *   7: others
   * *   8: waiting
   * *   9: deleted
   * 
   * @example
   * 0
   */
  status?: string;
  /**
   * @remarks
   * The time when the data synchronization solution was committed.
   * 
   * @example
   * 2021-12-07 14:40:51
   */
  submitTime?: string;
  /**
   * @remarks
   * The type of the data synchronization solution.
   * 
   * @example
   * holo
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      creatorName: 'CreatorName',
      id: 'Id',
      name: 'Name',
      processContent: 'ProcessContent',
      processExtra: 'ProcessExtra',
      projectId: 'ProjectId',
      sourceType: 'SourceType',
      startTime: 'StartTime',
      status: 'Status',
      submitTime: 'SubmitTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorName: 'string',
      id: 'number',
      name: 'string',
      processContent: 'string',
      processExtra: 'string',
      projectId: 'number',
      sourceType: 'string',
      startTime: 'string',
      status: 'string',
      submitTime: 'string',
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

export class GetDISyncTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The alert rules that are associated with the real-time synchronization task. The value of this parameter is an array.
   */
  alarmList?: GetDISyncTaskResponseBodyDataAlarmList[];
  /**
   * @remarks
   * *   If the TaskType parameter is set to DI_REALTIME, the details of the real-time synchronization task are returned.
   * *   If the TaskType parameter is set to DI_SOLUTION, the value null is returned.
   * 
   * @example
   * {"extend":{"mode":"wizard","resourceGroup":"S_res_group_287114642182658_1560324290517"},"nodeDef":{},"order":{"hops":[{"from":"datahub_8htXSsfiS2vtZCVG","to":"datahub_CRHBAyGfhSaLmv2f"}]},"setting":{"errorLimit":{},"jvmOption":""},"steps":[{"stepType":"datahub","category":"writer","displayName":"DataHub1","parameter":{"batchSize":1000,"datasource":"datahub_cloud_dev_test","topic":"dwd_tfc_opt_speed_rid_amap_rt"},"name":"datahub_CRHBAyGfhSaLmv2f","gui":{"x":262,"y":325}},{"stepType":"datahub","displayName":"DataHub2","parameter":{"datasource":"datahub_uric_test","topic":"dwd_tfc_opt_speed_rid_amap_rt_330000","batchSize":1000},"name":"datahub_8htXSsfiS2vtZCVG","gui":{"x":268,"y":160.5},"category":"writer"}]}
   */
  code?: string;
  /**
   * @remarks
   * The cause of the failure to obtain the details of the real-time synchronization task or data synchronization solution.
   * 
   * If the details of the real-time synchronization task or data synchronization solution are obtained, the value null is returned.
   * 
   * @example
   * fileId:[100] is invalid.
   */
  message?: string;
  /**
   * @remarks
   * *   If the TaskType parameter is set to DI_REALTIME, the value null is returned.
   * *   If the TaskType parameter is set to DI_SOLUTION, the details of the data synchronization solution are returned.
   */
  solutionDetail?: GetDISyncTaskResponseBodyDataSolutionDetail;
  /**
   * @remarks
   * Indicates whether the details of the real-time synchronization task or data synchronization solution are obtained. Valid values:
   * 
   * success: The details are obtained. fail: The details fail to be obtained.
   * 
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      alarmList: 'AlarmList',
      code: 'Code',
      message: 'Message',
      solutionDetail: 'SolutionDetail',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmList: { 'type': 'array', 'itemType': GetDISyncTaskResponseBodyDataAlarmList },
      code: 'string',
      message: 'string',
      solutionDetail: GetDISyncTaskResponseBodyDataSolutionDetail,
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.alarmList)) {
      $dara.Model.validateArray(this.alarmList);
    }
    if(this.solutionDetail && typeof (this.solutionDetail as any).validate === 'function') {
      (this.solutionDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDISyncTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned results.
   */
  data?: GetDISyncTaskResponseBodyData;
  /**
   * @remarks
   * The request ID. You can locate logs and troubleshoot issues based on the ID.
   * 
   * @example
   * 0bc1411515937635973****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   True
   * *   False
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetDISyncTaskResponseBodyData,
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

