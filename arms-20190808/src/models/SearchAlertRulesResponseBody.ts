// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchAlertRulesResponseBodyPageBeanAlertRulesAlarmContext extends $dara.Model {
  /**
   * @remarks
   * The sub-title of the alert notification content.
   * 
   * @example
   * TestSubTitle
   */
  alarmContentSubTitle?: string;
  /**
   * @remarks
   * The template of the alert notification.
   * 
   * @example
   * Alert name: $Alert name\\nFilter condition: $Filter\\nAlert time: $Alert time\\nAlert content: $Alert content\\nNote: The alert persists until a reply email is received. The system will remind you again in 24 hours.
   */
  alarmContentTemplate?: string;
  /**
   * @remarks
   * The content of the alert notification.
   * 
   * @example
   * Alert name: $Alert name\\nFilter condition: $Filter\\nAlert time: $Alert time\\nAlert content: $Alert content\\nNote: The alert persists until a reply email is received. The system will remind you again in 24 hours.
   */
  content?: string;
  /**
   * @remarks
   * The sub-title of the alert notification.
   * 
   * @example
   * test
   */
  subTitle?: string;
  static names(): { [key: string]: string } {
    return {
      alarmContentSubTitle: 'AlarmContentSubTitle',
      alarmContentTemplate: 'AlarmContentTemplate',
      content: 'Content',
      subTitle: 'SubTitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmContentSubTitle: 'string',
      alarmContentTemplate: 'string',
      content: 'string',
      subTitle: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertRulesResponseBodyPageBeanAlertRulesAlertRuleRules extends $dara.Model {
  /**
   * @remarks
   * The aggregation logic of the metric data of the alert rule. Valid values:
   * 
   * *   `AVG`: calculates the average value for each minute
   * *   `SUM`: calculates the total value for each minute
   * *   `MAX`: calculates the maximum value for each minute
   * *   `MIN`: calculates the minimum value for each minute
   * 
   * @example
   * AVG
   */
  aggregates?: string;
  /**
   * @remarks
   * The displayed description of the alert metric.
   * 
   * @example
   * response time_ms
   */
  alias?: string;
  /**
   * @remarks
   * The metric based on which alerts are triggered. For more information, see the "[Alert metrics](https://help.aliyun.com/document_detail/175825.html#h2-url-4)" section in this topic.
   * 
   * @example
   * appstat.jvm.SystemDiskFree
   */
  measure?: string;
  /**
   * @remarks
   * The time range when data is requested. Unit: minutes. For example, a value of 5 indicates that the alert rule applies to the data in the last 5 minutes.
   * 
   * @example
   * 5
   */
  NValue?: number;
  /**
   * @remarks
   * The operation logic of the condition. Valid values:
   * 
   * *   CURRENT_GTE: greater than or equal to
   * *   CURRENT_LTE: less than or equal to
   * *   PREVIOUS_UP: the increase percentage compared with the last period
   * *   PREVIOUS_DOWN: the decrease percentage compared with the last period
   * *   HOH_UP: the increase percentage compared with the last hour
   * *   HOH_DOWN: the decrease percentage compared with the last hour
   * *   DOD_UP: the increase percentage compared with the last day
   * *   DOD_DOWN: the decrease percentage compared with the last day
   * 
   * @example
   * CURRENT_GTE
   */
  operator?: string;
  /**
   * @remarks
   * The threshold of the condition.
   * 
   * @example
   * 30
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      aggregates: 'Aggregates',
      alias: 'Alias',
      measure: 'Measure',
      NValue: 'NValue',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregates: 'string',
      alias: 'string',
      measure: 'string',
      NValue: 'number',
      operator: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertRulesResponseBodyPageBeanAlertRulesAlertRule extends $dara.Model {
  /**
   * @remarks
   * The logical operator between conditions. Valid values: `&`: AND. `|`: OR.
   * 
   * @example
   * |
   */
  operator?: string;
  /**
   * @remarks
   * The condition of the alert rule.
   */
  rules?: SearchAlertRulesResponseBodyPageBeanAlertRulesAlertRuleRules[];
  static names(): { [key: string]: string } {
    return {
      operator: 'Operator',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operator: 'string',
      rules: { 'type': 'array', 'itemType': SearchAlertRulesResponseBodyPageBeanAlertRulesAlertRuleRules },
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertRulesResponseBodyPageBeanAlertRulesMetricParamDimensions extends $dara.Model {
  /**
   * @remarks
   * The key of the dimension. Valid values:
   * 
   * *   `rpc`: the name of the API
   * *   `rpcType`: the type of the API call, such as HTTP or DUBBO
   * *   `endpoint`: the name of the database
   * *   `rootIp`: the IP address of the host
   * 
   * @example
   * rootIp
   */
  key?: string;
  /**
   * @remarks
   * The type of the dimension. Valid values:
   * 
   * *   `STATIC`: checks only the value of this dimension. In this case, you must set the **dimensions.value** parameter.
   * *   `ALL`: checks the values of all dimensions. The metrics of all API calls are checked. If an API call triggers an alert, the name of the API is displayed in the alert notification. In this case, you do not need to set the **dimensions.value** parameter.
   * *   `DISABLE`: aggregates the values of all dimensions. In this case, you do not need to set the **dimensions.value** parameter.
   * 
   * @example
   * DISABLE
   */
  type?: string;
  /**
   * @remarks
   * The value of the dimension.
   * 
   * @example
   * "127.0.0.1"
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      type: 'string',
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

export class SearchAlertRulesResponseBodyPageBeanAlertRulesMetricParam extends $dara.Model {
  /**
   * @remarks
   * The ID of the application group that is associated with the alert rule. This parameter is applicable to Enterprise Distributed Application Service (EDAS) applications.
   * 
   * @example
   * DEFAULT
   */
  appGroupId?: string;
  /**
   * @remarks
   * The auto-increment ID of the ARMS application. You can ignore this ID.
   * 
   * @example
   * 123
   */
  appId?: string;
  /**
   * @remarks
   * The dimensions in the condition.
   */
  dimensions?: SearchAlertRulesResponseBodyPageBeanAlertRulesMetricParamDimensions[];
  /**
   * @remarks
   * The PID of the application that is associated with the alert rule.
   * 
   * @example
   * 9870ca99-8105-4da7-a3a4-d72dd1b1****
   */
  pid?: string;
  /**
   * @remarks
   * The type of the metric. Valid values:
   * 
   * *   `txn`: the number of API calls during application monitoring
   * *   `txn_type`: the types of API calls during application monitoring
   * *   `db`: database metrics
   * *   `jvm`: Java virtual machine (JVM) metrics
   * *   `host`: host metrics
   * *   `exception`: API call errors
   * 
   * @example
   * DB
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appGroupId: 'AppGroupId',
      appId: 'AppId',
      dimensions: 'Dimensions',
      pid: 'Pid',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGroupId: 'string',
      appId: 'string',
      dimensions: { 'type': 'array', 'itemType': SearchAlertRulesResponseBodyPageBeanAlertRulesMetricParamDimensions },
      pid: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dimensions)) {
      $dara.Model.validateArray(this.dimensions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertRulesResponseBodyPageBeanAlertRulesNotice extends $dara.Model {
  /**
   * @remarks
   * The end of the time range when the alert rule takes effect within 24 hours per day. This value is a UNIX timestamp. The year, month, and day that are indicated by the timestamp are not displayed in this value. Only the hour, minute, and second are displayed.
   * 
   * @example
   * 1480607940000
   */
  endTime?: number;
  /**
   * @remarks
   * The end of the time range when alert notifications are sent based on the alert rule within 24 hours per day. This value is a UNIX timestamp. The year, month, and day that are indicated by the timestamp are not displayed in this value. Only the hour, minute, and second are displayed.
   * 
   * @example
   * 1480607940000
   */
  noticeEndTime?: number;
  /**
   * @remarks
   * The beginning of the time range when alert notifications are sent based on the alert rule within 24 hours per day. This value is a UNIX timestamp. The year, month, and day that are indicated by the timestamp are not displayed in this value. Only the hour, minute, and second are displayed.
   * 
   * @example
   * 1480521600000
   */
  noticeStartTime?: number;
  /**
   * @remarks
   * The beginning of the time range when the alert rule takes effect within 24 hours per day. This value is a UNIX timestamp. The year, month, and day that are indicated by the timestamp are not displayed in this value. Only the hour, minute, and second are displayed.
   * 
   * @example
   * 1480521600000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      noticeEndTime: 'NoticeEndTime',
      noticeStartTime: 'NoticeStartTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      noticeEndTime: 'number',
      noticeStartTime: 'number',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertRulesResponseBodyPageBeanAlertRules extends $dara.Model {
  /**
   * @remarks
   * The format of the alert notification.
   */
  alarmContext?: SearchAlertRulesResponseBodyPageBeanAlertRulesAlarmContext;
  /**
   * @remarks
   * The severity of the alerts. Only the value `WARN` is supported.
   * 
   * @example
   * WARN
   */
  alertLevel?: string;
  /**
   * @remarks
   * The conditions of the alert rule. Multiple conditions are separated by the AND or OR logical operators.
   */
  alertRule?: SearchAlertRulesResponseBodyPageBeanAlertRulesAlertRule;
  /**
   * @remarks
   * The name of the alert rule.
   * 
   * @example
   * TestAlertRule
   */
  alertTitle?: string;
  /**
   * @remarks
   * The type of the alert rule. Valid values:
   * 
   * *   `1`: custom alert rules that are used to monitor drill-down data sets
   * *   `3`: custom alert rules that are used to monitor tiled data sets
   * *   `4`: alert rules that are used to monitor the browser, including the default frontend alert rules
   * *   `5`: alert rules that are used to monitor applications, including the default application alert rules
   * *   `6`: the default browser alert rules
   * *   `7`: the default application alert rules
   * *   `8`: Tracing Analysis alert rules
   * *   `101`: Prometheus alert rules
   * 
   * @example
   * 4
   */
  alertType?: number;
  /**
   * @remarks
   * The version of the alert rule. Default value: `1`.
   * 
   * @example
   * 1
   */
  alertVersion?: number;
  /**
   * @remarks
   * Sending method of alarm notification.
   */
  alertWays?: string[];
  /**
   * @remarks
   * The configuration items of the alert rule. The value is a JSON string.
   * 
   * The configuration item **continuous** indicates whether alert notifications are continuously sent. Valid values:
   * 
   * *   `true`: Alert notifications are sent every minute.
   * *   `false`: The alert silence feature is enabled.
   * 
   * The configuration item **dataRevision** indicates the data revision policy that is used if no data is obtained or the data is null. Default value: 2. Valid values:
   * 
   * *   `0`: overwrites the data by using the value 0
   * *   `1`: overwrites the data by using the value 1
   * *   `2`: overwrites the data by using the value null. This value indicates that no alert is triggered if no data exists
   * 
   * @example
   * {\\"continuous\\":true,\\"dataRevision\\":2}
   */
  config?: string;
  /**
   * @remarks
   * The ID of the contact group. Multiple IDs are separated by commas (,).
   * 
   * @example
   * 381*,572*
   */
  contactGroupIdList?: string;
  /**
   * @remarks
   * The IDs of the alert contact groups. The value is a JSON array.
   * 
   * @example
   * [123, 234]
   */
  contactGroupIds?: string;
  /**
   * @remarks
   * The timestamp that shows when the alert rule was created.
   * 
   * @example
   * 1579508519683
   */
  createTime?: number;
  /**
   * @remarks
   * Indicates whether the alert is sent through the alert center. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * true
   */
  hostByAlertManager?: boolean;
  /**
   * @remarks
   * The ID of the alert rule.
   * 
   * @example
   * 123
   */
  id?: number;
  /**
   * @remarks
   * The information about the application that is associated with the alert rule.
   */
  metricParam?: SearchAlertRulesResponseBodyPageBeanAlertRulesMetricParam;
  /**
   * @remarks
   * The time ranges when the alert rule takes effect and when alert notifications are sent.
   */
  notice?: SearchAlertRulesResponseBodyPageBeanAlertRulesNotice;
  /**
   * @remarks
   * The ID of the region to which the alert rule belongs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxyexli2****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the alert rule. `RUNNING`: The alert rule is enabled. `STOPPED`: The alert rule is disabled.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The ID of the Application Real-Time Monitoring Service (ARMS) task that is associated with the alert rule.
   * 
   * @example
   * 123
   */
  taskId?: number;
  /**
   * @remarks
   * The status of the task. This parameter is hidden from users.
   * 
   * @example
   * ""
   */
  taskStatus?: string;
  /**
   * @remarks
   * The name of the alert.
   * 
   * @example
   * AlertTest
   */
  title?: string;
  /**
   * @remarks
   * The timestamp that shows when the alert rule was updated.
   * 
   * @example
   * 1480521600000
   */
  updateTime?: number;
  /**
   * @remarks
   * The ID of the user to which the alert rule belongs.
   * 
   * @example
   * 113197164949****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      alarmContext: 'AlarmContext',
      alertLevel: 'AlertLevel',
      alertRule: 'AlertRule',
      alertTitle: 'AlertTitle',
      alertType: 'AlertType',
      alertVersion: 'AlertVersion',
      alertWays: 'AlertWays',
      config: 'Config',
      contactGroupIdList: 'ContactGroupIdList',
      contactGroupIds: 'ContactGroupIds',
      createTime: 'CreateTime',
      hostByAlertManager: 'HostByAlertManager',
      id: 'Id',
      metricParam: 'MetricParam',
      notice: 'Notice',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
      title: 'Title',
      updateTime: 'UpdateTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmContext: SearchAlertRulesResponseBodyPageBeanAlertRulesAlarmContext,
      alertLevel: 'string',
      alertRule: SearchAlertRulesResponseBodyPageBeanAlertRulesAlertRule,
      alertTitle: 'string',
      alertType: 'number',
      alertVersion: 'number',
      alertWays: { 'type': 'array', 'itemType': 'string' },
      config: 'string',
      contactGroupIdList: 'string',
      contactGroupIds: 'string',
      createTime: 'number',
      hostByAlertManager: 'boolean',
      id: 'number',
      metricParam: SearchAlertRulesResponseBodyPageBeanAlertRulesMetricParam,
      notice: SearchAlertRulesResponseBodyPageBeanAlertRulesNotice,
      regionId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      taskId: 'number',
      taskStatus: 'string',
      title: 'string',
      updateTime: 'number',
      userId: 'string',
    };
  }

  validate() {
    if(this.alarmContext && typeof (this.alarmContext as any).validate === 'function') {
      (this.alarmContext as any).validate();
    }
    if(this.alertRule && typeof (this.alertRule as any).validate === 'function') {
      (this.alertRule as any).validate();
    }
    if(Array.isArray(this.alertWays)) {
      $dara.Model.validateArray(this.alertWays);
    }
    if(this.metricParam && typeof (this.metricParam as any).validate === 'function') {
      (this.metricParam as any).validate();
    }
    if(this.notice && typeof (this.notice as any).validate === 'function') {
      (this.notice as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertRulesResponseBodyPageBean extends $dara.Model {
  /**
   * @remarks
   * The details of the alert rules.
   */
  alertRules?: SearchAlertRulesResponseBodyPageBeanAlertRules[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 23
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      alertRules: 'AlertRules',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertRules: { 'type': 'array', 'itemType': SearchAlertRulesResponseBodyPageBeanAlertRules },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.alertRules)) {
      $dara.Model.validateArray(this.alertRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned struct.
   */
  pageBean?: SearchAlertRulesResponseBodyPageBean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 34ED024E-9E31-434A-9E4E-D9D15C3****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageBean: 'PageBean',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageBean: SearchAlertRulesResponseBodyPageBean,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pageBean && typeof (this.pageBean as any).validate === 'function') {
      (this.pageBean as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

