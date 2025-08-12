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
   * The end timestamp of the alert logs to be queried.
   * 
   * Unit: milliseconds.
   * 
   * You can query only the alert logs within the last year. If the query time is longer than one year, the return value of the `AlertLogList` parameter is empty.
   * 
   * >  The time period between the start time specified by `StartTime` and end time specified by `EndTime` must be less than or equal to 15 days. You must specify StartTime and EndTime at the same time, or leave StartTime and EndTime empty at the same time. If you do not specify this parameter, the alert logs within the last 15 minutes are queried by default.
   * 
   * @example
   * 1610074409694
   */
  endTime?: number;
  /**
   * @remarks
   * The type of the alert event. Valid values:
   * 
   * *   TRIGGERED: The alert is triggered.
   * *   RESOLVED: The alert is resolved.
   * 
   * @example
   * TRIGGERED
   */
  eventType?: string;
  /**
   * @remarks
   * The dimensions based on which data is aggregated. This parameter is equivalent to the GROUP BY clause in SQL. Valid values:
   * 
   * *   `product`: aggregates data by cloud service.
   * *   `level`: aggregates data by alert level.
   * *   `groupId`: aggregates data by application group.
   * *   `contactGroup`: aggregates data by alert contact group.
   * *   `product,metricName`: aggregates data both by cloud service and by metric.
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
   * The statistical period of alert logs. Unit: minutes.
   * 
   * @example
   * 360
   */
  lastMin?: string;
  /**
   * @remarks
   * The severity level and notification methods of the alert. Valid values:
   * 
   * *   P4: Alert notifications are sent by using emails and DingTalk chatbots.
   * *   OK: No alert is generated.
   * 
   * @example
   * P4
   */
  level?: string;
  /**
   * @remarks
   * The metric name.
   * 
   * > For more information about the metrics of different cloud services, see [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * @example
   * IntranetInRate
   */
  metricName?: string;
  /**
   * @remarks
   * The namespace of the cloud service.
   * 
   * >  For information about how to query the namespace of a cloud service, see [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
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
   * The abbreviation of the service name.
   * 
   * For information about how to obtain the abbreviation of a cloud service name, see [DescribeProductsOfActiveMetricRule](https://help.aliyun.com/document_detail/114930.html).
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
   * For information about how to obtain the ID of an alert rule, see [DescribeMetricRuleList](https://help.aliyun.com/document_detail/114941.html).
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
   * The search keyword that is used to query alert logs.
   * 
   * @example
   * alert
   */
  searchKey?: string;
  /**
   * @remarks
   * The status of the alert. Valid values:
   * 
   * *   0: The alert is triggered or cleared.
   * *   1: The alert is ineffective.
   * *   2: The alert is muted.
   * *   3: The host is restarting.
   * *   4: No alert notification is sent.
   * 
   * If the value of the SendStatus parameter is 0, the value P4 of the Level parameter indicates a triggered alert and the value OK indicates a cleared alert.
   * 
   * @example
   * 0
   */
  sendStatus?: string;
  /**
   * @remarks
   * The type of the alert rule. Valid value: METRIC. This value indicates an alert rule for time series metrics.
   * 
   * @example
   * METRIC
   */
  sourceType?: string;
  /**
   * @remarks
   * The start timestamp of the alert logs to be queried.
   * 
   * Unit: milliseconds.
   * 
   * You can query only the alert logs within the last year. If the query time is longer than one year, the return value of the `AlertLogList` parameter is empty.
   * 
   * >  The time period between the start time specified by `StartTime` and the end time specified by `EndTime` must be less than or equal to 15 days. You must specify StartTime and EndTime at the same time, or leave StartTime and EndTime empty at the same time. If you do not specify this parameter, the alert logs within the last 15 minutes are queried by default.
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

