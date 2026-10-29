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
   * You can query only the alert history within the last year. If the query time range exceeds one year, the `AlertLogCount` response parameter is empty.
   * 
   * > The interval between the start time (StartTime) and end time (EndTime) must be less than or equal to 15 days. Both parameters must be specified or left empty at the same time. If neither is specified, the alert history of the last 15 minutes is queried by default.
   * 
   * @example
   * 1610074409694
   */
  endTime?: number;
  /**
   * @remarks
   * The alert type. Valid values:
   * 
   * - TRIGGERED: The alert is triggered.
   * 
   * - RESOLVED: The alert recovers.
   * 
   * @example
   * TRIGGERED
   */
  eventType?: string;
  /**
   * @remarks
   * Aggregates data by a spatial dimension, which is equivalent to the Group By clause in SQL. Valid values:
   * - `product`: aggregates by Alibaba Cloud service.
   * - `level`: aggregates by alert level.
   * - `groupId`: aggregates by application group.
   * - `contactGroup`: aggregates by alert contact group.
   * - `product,metricName`: aggregates by Alibaba Cloud service and metric.
   * 
   * This parameter is required.
   * 
   * @example
   * product
   */
  groupBy?: string;
  /**
   * @remarks
   * The application group ID.
   * 
   * @example
   * 7301****
   */
  groupId?: string;
  /**
   * @remarks
   * The period for obtaining logs. Unit: minutes.
   * 
   * @example
   * 360
   */
  lastMin?: string;
  /**
   * @remarks
   * The alert level and notification method. Valid values:
   * 
   * <props="china">- P2: Phone call + text message + email + DingTalk chatbot.
   * 
   * <props="china">- P3: Text message + email + DingTalk chatbot.
   * 
   * <props="china">- P4: Email + DingTalk chatbot.
   * 
   * <props="china">- OK: No alert.
   * 
   * <props="intl">- P4: Email + DingTalk chatbot.
   * 
   * <props="intl">- OK: No alert.
   * 
   * <props="partner">- P4: Email + DingTalk chatbot.
   * 
   * <props="partner">- OK: No alert.
   * 
   * @example
   * P4
   */
  level?: string;
  /**
   * @remarks
   * The metric name.
   * 
   * > For information about the metrics of Alibaba Cloud services, see [Cloud service metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * @example
   * cpu_total
   */
  metricName?: string;
  /**
   * @remarks
   * The namespace of the Alibaba Cloud service.
   * 
   * > For information about the namespaces of Alibaba Cloud services, see [Cloud service metrics](https://help.aliyun.com/document_detail/163515.html).
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
   * For information about how to obtain the alert rule ID, see [DescribeMetricRuleList](https://help.aliyun.com/document_detail/114941.html).
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
   * The search keyword for querying alert history statistics.
   * 
   * @example
   * test
   */
  searchKey?: string;
  /**
   * @remarks
   * The alert status. Valid values:
   * - 0: An alert is triggered or the alert recovers to Normal.
   * - 1: The alert rule is not effective.
   * - 2: The mute period.
   * - 3: The host is restarting.
   * - 4: Alerts are not send.
   * 
   * <props="china">When the alert status is 0, if the value of Level is P2, P3, or P4, an alert is triggered. If the value of Level is OK, the alert recovers to Normal.
   * <props="intl">When the alert status is 0, if the value of Level is P4, an alert is triggered. If the value of Level is OK, the alert recovers to Normal.
   * <props="partner">When the alert status is 0, if the value of Level is P4, an alert is triggered. If the value of Level is OK, the alert recovers to Normal.
   * 
   * @example
   * 0
   */
  sendStatus?: string;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated and does not need to be specified.
   * 
   * @example
   * 无
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
   * You can query only the alert history within the last year. If the query time range exceeds one year, the `AlertLogCount` response parameter is empty.
   * 
   * > The interval between the start time (StartTime) and end time (EndTime) must be less than or equal to 15 days. Both parameters must be specified or left empty at the same time. If neither is specified, the alert history of the last 15 minutes is queried by default.
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

