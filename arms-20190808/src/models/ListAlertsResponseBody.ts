// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertsResponseBodyPageBeanListAlertsActivities extends $dara.Model {
  /**
   * @remarks
   * The content of the alert notification.
   * 
   * @example
   * [Notification policy: Send notifications to DingTalk groups] Host monitoring. Host IP address: 10.76.XX.XX. Average memory usage of the host in the last 1 minute ≥ 1.0%. Current value: 84.7454%.
   */
  content?: string;
  /**
   * @remarks
   * The description of the activity.
   * 
   * @example
   * [Alert Claimed] The alert is claimed
   */
  description?: string;
  /**
   * @remarks
   * The name of the handler.
   * 
   * @example
   * O\\&M Engineer A
   */
  handlerName?: string;
  /**
   * @remarks
   * The operation time of the activity.
   * 
   * @example
   * 2021-12-20 19:08:57
   */
  time?: string;
  /**
   * @remarks
   * The type of the activity. Valid values:
   * 
   * *   1: The alert is claimed.
   * *   2: The alert is disclaimed.
   * *   3: A comment is added for the alert.
   * *   4: The alert is disabled.
   * *   5: An alert notification is sent.
   * 
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      description: 'Description',
      handlerName: 'HandlerName',
      time: 'Time',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      description: 'string',
      handlerName: 'string',
      time: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertsResponseBodyPageBeanListAlertsAlertEvents extends $dara.Model {
  /**
   * @remarks
   * The name of the event.
   * 
   * @example
   * Test-triggered alert
   */
  alertName?: string;
  /**
   * @remarks
   * The annotations.
   * 
   * @example
   * { "_aliyun_arms_alert_value":"4.0" "_aliyun_arms_alert_traceId":"ac10c43116421327442277073d5461-105075299"}
   */
  annotations?: string;
  /**
   * @remarks
   * The description of the event.
   * 
   * @example
   * Host monitoring. Host IP address: 10.76.XX.XX. Average memory usage of the host in the last 1 minute ≥ 1.0%. Current value: 84.7454%.
   */
  description?: string;
  /**
   * @remarks
   * The time when the event ended.
   * 
   * @example
   * 2022-01-19 17:10:31
   */
  endTime?: string;
  /**
   * @remarks
   * The URL of the event.
   * 
   * @example
   * http://arms.console.aliyun.com
   */
  generatorURL?: string;
  /**
   * @remarks
   * The name of the integration that corresponds to the alert event.
   * 
   * @example
   * ARMS
   */
  integrationName?: string;
  /**
   * @remarks
   * The type of the integration that corresponds to the alert event. Valid values:
   * 
   * *   ARMS
   * *   CLOUD_MONITOR
   * *   MSE
   * *   ARMS_CLOUD_DIALTEST
   * *   PROMETHEUS
   * *   LOG_SERVICE
   * *   CUSTOM
   * *   ARMS_PROMETHEUS
   * *   ARMS_APP_MON
   * *   ARMS_FRONT_MON
   * *   ARMS_CUSTOM
   * *   XTRACE
   * *   GRAFANA
   * *   ZABBIX
   * *   SKYWALKING
   * *   EVENT_BRIDGE
   * *   NAGIOS
   * *   OPENFALCON
   * *   ARMS_INSIGHTS
   * 
   * @example
   * ARMS_APP_MON
   */
  integrationType?: string;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * { "severity":"warning" "_aliyun_arms_alert_level":"ERROR" "_aliyun_arms_entropy":"0.30170457417889235"}
   */
  labels?: string;
  /**
   * @remarks
   * The time when the event was created.
   * 
   * @example
   * 2022-01-19 17:05:42
   */
  receiveTime?: string;
  /**
   * @remarks
   * The severity level of the event. Valid values:
   * 
   * *   critical
   * *   error
   * *   warning
   * *   info
   * 
   * @example
   * warning
   */
  severity?: string;
  /**
   * @remarks
   * The time when the event started.
   * 
   * @example
   * 2022-01-18 00:14:00
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the event. Valid values:
   * 
   * *   Active: The event is not cleared.
   * *   Silenced: The event is silenced.
   * *   Resolved: The event is cleared.
   * 
   * @example
   * Active
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      alertName: 'AlertName',
      annotations: 'Annotations',
      description: 'Description',
      endTime: 'EndTime',
      generatorURL: 'GeneratorURL',
      integrationName: 'IntegrationName',
      integrationType: 'IntegrationType',
      labels: 'Labels',
      receiveTime: 'ReceiveTime',
      severity: 'Severity',
      startTime: 'StartTime',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertName: 'string',
      annotations: 'string',
      description: 'string',
      endTime: 'string',
      generatorURL: 'string',
      integrationName: 'string',
      integrationType: 'string',
      labels: 'string',
      receiveTime: 'string',
      severity: 'string',
      startTime: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertsResponseBodyPageBeanListAlerts extends $dara.Model {
  /**
   * @remarks
   * Time to claim the alarm.
   * 
   * @example
   * -1
   */
  acknowledgeTime?: number;
  /**
   * @remarks
   * The list of activities.
   */
  activities?: ListAlertsResponseBodyPageBeanListAlertsActivities[];
  /**
   * @remarks
   * The list of events.
   */
  alertEvents?: ListAlertsResponseBodyPageBeanListAlertsAlertEvents[];
  /**
   * @remarks
   * The alert ID.
   * 
   * @example
   * 2279
   */
  alertId?: number;
  /**
   * @remarks
   * The name of the alert rule.
   * 
   * @example
   * Test alert
   */
  alertName?: string;
  /**
   * @remarks
   * The time when the alert was created.
   * 
   * @example
   * 2022-01-18 00:21:35
   */
  createTime?: string;
  /**
   * @remarks
   * The description of a event execution status.
   * 
   * @example
   * [Notification Strategy: ARMS Front-end Alarm]\\nPage Indicator Page Name: Home JS Error Number Average in the last 5 minutes &gt;= 1.0 times, current value 1.0000 times\\n
   */
  describe?: string;
  /**
   * @remarks
   * The ID of the notification policy.
   * 
   * @example
   * 12345
   */
  dispatchRuleId?: number;
  /**
   * @remarks
   * The name of the notification policy.
   * 
   * @example
   * DingTalk Notification
   */
  dispatchRuleName?: string;
  /**
   * @remarks
   * Alarm handler.
   * 
   * @example
   * Alice
   */
  handler?: string;
  /**
   * @remarks
   * The contact card of an instant messaging app.
   * 
   * @example
   * Test Robot
   */
  notifyRobots?: string;
  /**
   * @remarks
   * The notification object configured in the notification policy, responsible for handling alerts.
   * 
   * @example
   * Alice
   */
  owner?: string;
  /**
   * @remarks
   * Alarm recovery time.
   * 
   * @example
   * -1
   */
  recoverTime?: number;
  /**
   * @remarks
   * The severity level of the alert. Valid values: P6, P5, P4, P3, P2, and P1. The preceding values are listed in ascending order of severity.
   * 
   * @example
   * P6
   */
  severity?: string;
  /**
   * @remarks
   * The Alert solution.
   * 
   * @example
   * --
   */
  solution?: string;
  /**
   * @remarks
   * The status of the alert. Valid values:
   * 
   * *   0: The alert is pending.
   * *   1: The alert is being handled.
   * *   2: The alert is handled.
   * 
   * @example
   * 0
   */
  state?: number;
  static names(): { [key: string]: string } {
    return {
      acknowledgeTime: 'AcknowledgeTime',
      activities: 'Activities',
      alertEvents: 'AlertEvents',
      alertId: 'AlertId',
      alertName: 'AlertName',
      createTime: 'CreateTime',
      describe: 'Describe',
      dispatchRuleId: 'DispatchRuleId',
      dispatchRuleName: 'DispatchRuleName',
      handler: 'Handler',
      notifyRobots: 'NotifyRobots',
      owner: 'Owner',
      recoverTime: 'RecoverTime',
      severity: 'Severity',
      solution: 'Solution',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acknowledgeTime: 'number',
      activities: { 'type': 'array', 'itemType': ListAlertsResponseBodyPageBeanListAlertsActivities },
      alertEvents: { 'type': 'array', 'itemType': ListAlertsResponseBodyPageBeanListAlertsAlertEvents },
      alertId: 'number',
      alertName: 'string',
      createTime: 'string',
      describe: 'string',
      dispatchRuleId: 'number',
      dispatchRuleName: 'string',
      handler: 'string',
      notifyRobots: 'string',
      owner: 'string',
      recoverTime: 'number',
      severity: 'string',
      solution: 'string',
      state: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.activities)) {
      $dara.Model.validateArray(this.activities);
    }
    if(Array.isArray(this.alertEvents)) {
      $dara.Model.validateArray(this.alertEvents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertsResponseBodyPageBean extends $dara.Model {
  /**
   * @remarks
   * The queried alert notification history records.
   */
  listAlerts?: ListAlertsResponseBodyPageBeanListAlerts[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of alerts returned per page.
   * 
   * @example
   * 20
   */
  size?: number;
  /**
   * @remarks
   * The total number of queried alerts.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      listAlerts: 'ListAlerts',
      page: 'Page',
      size: 'Size',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listAlerts: { 'type': 'array', 'itemType': ListAlertsResponseBodyPageBeanListAlerts },
      page: 'number',
      size: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.listAlerts)) {
      $dara.Model.validateArray(this.listAlerts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned error message.
   * 
   * @example
   * alert.manager.error.code.signature.invalid
   */
  message?: string;
  /**
   * @remarks
   * The struct returned.
   */
  pageBean?: ListAlertsResponseBodyPageBean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2FC13182-B9AF-4E6B-BE51-72669B7C****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      pageBean: 'PageBean',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      pageBean: ListAlertsResponseBodyPageBean,
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

