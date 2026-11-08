// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAlertLogCountRequest extends $dara.Model {
  /**
   * @remarks
   * The alert contact group.
   * 
   * @example
   * ECS_Group
   */
  contactGroup?: string;
  /**
   * @remarks
   * The end timestamp for querying alert history.
   * 
   * Unit: milliseconds.
   * 
   * You can only query the alert history within the last year. If the query time range exceeds one year, the return value of the `AlertLogCount` parameter is empty.
   * 
   * > The interval between the start time (StartTime) and the end time (EndTime) must be less than or equal to 15 days. You must specify both parameters or neither. If you do not specify these parameters, the alert history within the last 15 minutes is queried by default.
   * 
   * @example
   * 1610074409694
   */
  endTime?: number;
  /**
   * @remarks
   * The Alarm Metric. Valid values:
   * 
   * - TRIGGERED: Alert triggered.
   * 
   * - RESOLVED: Alert recovered.
   * 
   * @example
   * TRIGGERED
   */
  eventType?: string;
  /**
   * @remarks
   * Aggregates data by spatial dimension, which is equivalent to the GROUP BY clause in SQL. Valid values:
   * - `product`: Aggregates by Alibaba Cloud service.
   * - `level`: Aggregates by alert level.
   * - `groupId`: Aggregates by application group.
   * - `contactGroup`: Aggregates by alert contact group.
   * - `product,metricName`: Aggregates by Alibaba Cloud service and metric.
   * 
   * This parameter is required.
   * 
   * @example
   * product
   */
  groupBy?: string;
  /**
   * @remarks
   * The ID of the application group.
   * 
   * @example
   * 7301****
   */
  groupId?: string;
  /**
   * @remarks
   * The time range for retrieving logs. Unit: minutes.
   * 
   * @example
   * 360
   */
  lastMin?: string;
  /**
   * @remarks
   * The alert level and notification method. Valid values:
   * 
   * <props="china">- P2: Phone call, text message, email, and DingTalk chatbot.
   * 
   * <props="china">- P3: Text message, email, and DingTalk chatbot.
   * 
   * <props="china">- P4: Email and DingTalk chatbot.
   * 
   * <props="china">- OK: No alerts.
   * 
   * <props="intl">- P4: Email and DingTalk chatbot.
   * 
   * <props="intl">- OK: No alerts.
   * 
   * <props="partner">- P4: Email and DingTalk chatbot.
   * 
   * <props="partner">- OK: No alerts.
   * 
   * @example
   * P4
   */
  level?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * > For more information about the metrics of Alibaba Cloud services, see [Metrics of Alibaba Cloud services](https://help.aliyun.com/document_detail/163515.html).
   * 
   * @example
   * cpu_total
   */
  metricName?: string;
  /**
   * @remarks
   * The namespace of the Alibaba Cloud service.
   * 
   * > For more information about the namespaces of Alibaba Cloud services, see [Metrics of Alibaba Cloud services](https://help.aliyun.com/document_detail/163515.html).
   * 
   * @example
   * acs_ecs_dashboard
   */
  namespace?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The abbreviation of the Alibaba Cloud service name.
   * 
   * @example
   * ECS
   */
  product?: string;
  regionId?: string;
  /**
   * @remarks
   * The ID of the alert rule.
   * 
   * 
   * For more information about how to obtain the ID of an alert rule, see [DescribeMetricRuleList](https://help.aliyun.com/document_detail/114941.html).
   * 
   * @example
   * bfae2ca5b4e07d2c7278772e***********
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the alert rule.
   * 
   * @example
   * test123
   */
  ruleName?: string;
  /**
   * @remarks
   * The search keyword for alert history statistics.
   * 
   * @example
   * test
   */
  searchKey?: string;
  /**
   * @remarks
   * The alert status. Valid values:
   * - 0: Alert triggered or recovered to Normal.
   * - 1: Not in the effective period.
   * - 2: mute for epoch.
   * - 3: Host restarting.
   * - 4: Do not send alerts.
   * 
   * <props="china">When the alert status is 0, if the value of Level is P2, P3, or P4, an alert is triggered. If the value of Level is OK, the alert is recovered to Normal.
   * <props="intl">When the alert status is 0, if the value of Level is P4, an alert is triggered. If the value of Level is OK, the alert is recovered to Normal.
   * <props="partner">When the alert status is 0, if the value of Level is P4, an alert is triggered. If the value of Level is OK, the alert is recovered to Normal.
   * 
   * @example
   * 0
   */
  sendStatus?: string;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated. You can ignore this parameter.
   * 
   * @example
   * None
   * 
   * @deprecated
   */
  sourceType?: string;
  /**
   * @remarks
   * The start timestamp for querying alert history.
   * 
   * Unit: milliseconds.
   * 
   * You can only query the alert history within the last year. If the query time range exceeds one year, the return value of the `AlertLogCount` parameter is empty.
   * 
   * > The interval between the start time (StartTime) and the end time (EndTime) must be less than or equal to 15 days. You must specify both parameters or neither. If you do not specify these parameters, the alert history within the last 15 minutes is queried by default.
   * 
   * @example
   * 1609988009694
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      contactGroup: 'ContactGroup',
      endTime: 'EndTime',
      eventType: 'EventType',
      groupBy: 'GroupBy',
      groupId: 'GroupId',
      lastMin: 'LastMin',
      level: 'Level',
      metricName: 'MetricName',
      namespace: 'Namespace',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      product: 'Product',
      regionId: 'RegionId',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      searchKey: 'SearchKey',
      sendStatus: 'SendStatus',
      sourceType: 'SourceType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroup: 'string',
      endTime: 'number',
      eventType: 'string',
      groupBy: 'string',
      groupId: 'string',
      lastMin: 'string',
      level: 'string',
      metricName: 'string',
      namespace: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      product: 'string',
      regionId: 'string',
      ruleId: 'string',
      ruleName: 'string',
      searchKey: 'string',
      sendStatus: 'string',
      sourceType: 'string',
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

