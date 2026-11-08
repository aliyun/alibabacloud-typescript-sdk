// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAlertLogHistogramRequest extends $dara.Model {
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
   * > - You can only query the alert history of the last year.
   * > - The time interval between the start time (`StartTime`) and the end time (`EndTime`) must be less than or equal to 15 days.
   * 
   * @example
   * 1609989009694
   */
  endTime?: number;
  /**
   * @remarks
   * The alert type. Valid values:
   * 
   * - TRIGGERED: The alert is triggered.
   * - RESOLVED: The alert recovers.
   * 
   * @example
   * RESOLVED
   */
  eventType?: string;
  /**
   * @remarks
   * The dimension for data aggregation, which is equivalent to the GROUP BY clause in SQL. Valid values:
   * - `product`: Aggregates data by cloud service.
   * - `level`: Aggregates data by alert level.
   * - `groupId`: Aggregates data by application group.
   * - `contactGroup`: Aggregates data by alert contact group.
   * - `product,metricName`: Aggregates data by cloud service and metric.
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
   * The period for retrieving logs. Unit: minutes.
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
   * The name of the metric.
   * 
   * > For more information about the metrics of cloud services, see [Cloud service metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * @example
   * cpu_total
   */
  metricName?: string;
  /**
   * @remarks
   * The namespace of the cloud service.
   * 
   * > For more information about the namespaces of cloud services, see [Cloud service metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * @example
   * acs_ecs_dashboard
   */
  namespace?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The abbreviation of the cloud service name.
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
   * ae06917_75a8c43178ab66****
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
   * The search keyword for querying alert history.
   * 
   * @example
   * alert
   */
  searchKey?: string;
  /**
   * @remarks
   * The alert status. Valid values:
   * - 0: An alert is triggered or the alert recovers to Normal.
   * - 1: Outside the effective period.
   * - 2: Mute epoch.
   * - 3: The host is restarting.
   * - 4: Does not send alert notifications.
   * 
   * <props="china">If the alert status is 0 and the value of Level is P2, P3, or P4, an alert is triggered. If the value of Level is OK, the alert recovers to Normal.
   * <props="intl">If the alert status is 0 and the value of Level is P4, an alert is triggered. If the value of Level is OK, the alert recovers to Normal.
   * <props="partner">If the alert status is 0 and the value of Level is P4, an alert is triggered. If the value of Level is OK, the alert recovers to Normal.
   * 
   * @example
   * 0
   */
  sendStatus?: string;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated. You do not need to specify this parameter.
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
   * > - You can only query the alert history of the last year.
   * > - The time interval between the start time (`StartTime`) and the end time (`EndTime`) must be less than or equal to 15 days.
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

