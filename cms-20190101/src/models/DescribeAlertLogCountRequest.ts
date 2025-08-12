// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAlertLogCountRequest extends $dara.Model {
  /**
   * @remarks
   * The alert group.
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
   * You can query only the alert logs within the last year. If the query time is longer than one year, the return value of the `AlertLogCount` parameter is empty.
   * 
   * >  The interval between the start time (StartTime) and end time (EndTime) must be less than or equal to 15 days. The start time and end time must be specified or left empty at the same time. If you do not specify the start time and end time, the alert logs within the last 15 minutes are queried by default.
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
   * The dimension based on which data is aggregated. This parameter is similar to the Group By clause of SQL statements. Valid values:
   * 
   * *   `product`: aggregates data by cloud service.
   * *   `level`: aggregates data by alert level.
   * *   `groupId`: aggregates data by application group.
   * *   `contactGroup`: aggregates data by alert group.
   * *   `product,metricName`: aggregates data both by cloud service and by metric.
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
   * The statistical period of alert logs. Unit: minutes.
   * 
   * @example
   * 360
   */
  lastMin?: string;
  /**
   * @remarks
   * The level and notification method of the alert. Valid values:
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
   * The name of the metric.
   * 
   * >  For more information about the metrics of different cloud services, see [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * @example
   * cpu_total
   */
  metricName?: string;
  /**
   * @remarks
   * The namespace of the cloud service.
   * 
   * >  For more information about the namespaces of cloud services, see [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * @example
   * acs_ecs_dashboard
   */
  namespace?: string;
  /**
   * @remarks
   * The dimension based on which data is aggregated. This parameter is equivalent to the GROUP BY clause in SQL. Valid values:
   * 
   * *   `product`: aggregates data by cloud service.
   * *   `level`: aggregates data by alert level.
   * *   `groupId`: aggregates data by application group.
   * *   `contactGroup`: aggregates data by alert contact group.
   * *   `product,metricName`: aggregates data both by cloud service and by metric.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The abbreviation of the service name.
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
   * The keyword based on which the alert logs to be counted are searched.
   * 
   * @example
   * test
   */
  searchKey?: string;
  /**
   * @remarks
   * The status of the alert. Valid values:
   * 
   * *   0: The alert is triggered or cleared.
   * *   1: The alert is generated not during the effective period.
   * *   2: The alert is muted and not triggered in a specified period.
   * *   3: The host is restarting.
   * *   4: Notifications are not sent for the alert.
   * 
   * When the value of the SendStatus parameter is 0, the value P4 of the Level parameter indicates a triggered alert and the value OK indicates a cleared alert.
   * 
   * @example
   * 0
   */
  sendStatus?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * None
   */
  sourceType?: string;
  /**
   * @remarks
   * The start timestamp of the alert logs to be queried.
   * 
   * Unit: milliseconds.
   * 
   * You can query only the alert logs within the last year. If the query time is longer than one year, the return value of the `AlertLogCount` parameter is empty.
   * 
   * >  The interval between the start time (StartTime) and end time (EndTime) must be less than or equal to 15 days. The start time and end time must be specified or left empty at the same time. If you do not specify the start time and end time, the alert logs within the last 15 minutes are queried by default.
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

