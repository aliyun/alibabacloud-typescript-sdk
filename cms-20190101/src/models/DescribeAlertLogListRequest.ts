// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAlertLogListRequest extends $dara.Model {
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
   * The end of the time range to query the alert history.
   * 
   * Unit: milliseconds.
   * 
   * You can query only the alert history within the last year. If the query time range exceeds one year, the return value of the `AlertLogList` parameter is empty.
   * 
   * > The interval between the start time (`StartTime`) and end time (`EndTime`) must be less than or equal to 15 days. Both parameters must be specified or unspecified at the same time. If they are not specified, the alert history within the last 15 minutes is queried by default.
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
   * - RESOLVED: The alert is cleared.
   * 
   * @example
   * TRIGGERED
   */
  eventType?: string;
  /**
   * @remarks
   * The spatial dimension by which the data is aggregated, which is equivalent to Group By in SQL. Valid values:
   * - `product`: aggregates data by cloud service.
   * - `level`: aggregates data by alert level.
   * - `groupId`: aggregates data by application group.
   * - `contactGroup`: aggregates data by alert contact group.
   * - `product,metricName`: aggregates data by cloud service and metric.
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
   * The interval at which logs are obtained. Unit: minutes.
   * 
   * @example
   * 360
   */
  lastMin?: string;
  /**
   * @remarks
   * The alert level and notification methods. Valid values:
   * 
   * <props="china">- P2: phone calls, text messages, emails, and DingTalk chatbots.
   * 
   * <props="china">- P3: text messages, emails, and DingTalk chatbots.
   * 
   * <props="china">- P4: emails and DingTalk chatbots.
   * 
   * <props="china">- OK: no alerts.
   * 
   * <props="intl">- P4: emails and DingTalk chatbots.
   * 
   * <props="intl">- OK: no alerts.
   * 
   * <props="partner">- P4: emails and DingTalk chatbots.
   * 
   * <props="partner">- OK: no alerts.
   * 
   * @example
   * P4
   */
  level?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * >For more information about the metrics of cloud services, see [Metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * @example
   * IntranetInRate
   */
  metricName?: string;
  /**
   * @remarks
   * The namespace of the cloud service.
   * 
   * > For more information about the namespaces of cloud services, see [Metrics](https://help.aliyun.com/document_detail/163515.html).
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
   * The number of entries per page.
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
   * For more information about how to obtain the abbreviation of a cloud service name, see [DescribeProductsOfActiveMetricRule](https://help.aliyun.com/document_detail/114930.html).
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
   * For more information about how to query the ID of an alert rule, see [DescribeMetricRuleList](https://help.aliyun.com/document_detail/114941.html).
   * 
   * @example
   * bc369e8_30f87e517ed2fc****
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
   * The keyword used to query the alert history.
   * 
   * @example
   * alert
   */
  searchKey?: string;
  /**
   * @remarks
   * The alert status. Valid values:
   * - 0: An alert is triggered or cleared.
   * - 1: The current time is not within the effective period of the alert.
   * - 2: The current time is within the channel silence period.
   * - 3: The host is being restarted.
   * - 4: No alerts are sent.
   * 
   * <props="china">When the alert status is 0, an alert is triggered if Level is set to P2, P3, or P4; the alert is cleared if Level is set to OK.
   * <props="intl">When the alert status is 0, an alert is triggered if Level is set to P4; the alert is cleared if Level is set to OK.
   * <props="partner">When the alert status is 0, an alert is triggered if Level is set to P4; the alert is cleared if Level is set to OK.
   * 
   * @example
   * 0
   */
  sendStatus?: string;
  /**
   * @remarks
   * The type of the alert rule. Valid value: METRIC, which indicates a time series metric alert rule.
   * 
   * @example
   * METRIC
   */
  sourceType?: string;
  /**
   * @remarks
   * The beginning of the time range to query the alert history.
   * 
   * Unit: milliseconds.
   * 
   * You can query only the alert history within the last year. If the query time range exceeds one year, the return value of the `AlertLogList` parameter is empty.
   * 
   * > The interval between the start time (`StartTime`) and end time (`EndTime`) must be less than or equal to 15 days. Both parameters must be specified or unspecified at the same time. If they are not specified, the alert history within the last 15 minutes is queried by default.
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

