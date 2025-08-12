// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAlertHistoryListRequest extends $dara.Model {
  /**
   * @remarks
   * The order of alerts. Valid values:
   * 
   * *   true (default value): reverse chronological order
   * *   false: chronological order
   * 
   * @example
   * true
   */
  ascending?: boolean;
  /**
   * @remarks
   * The end timestamp of the historical alerts that you want to query.
   * 
   * Unit: milliseconds.
   * 
   * @example
   * 1640608200000
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the application group.
   * 
   * For information about how to obtain the ID of an application group, see [DescribeMonitorGroups](https://help.aliyun.com/document_detail/115032.html).
   * 
   * @example
   * 7671****
   */
  groupId?: string;
  /**
   * @remarks
   * The metric that is used to monitor the cloud service.
   * 
   * For information about how to query the name of a metric, see [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * @example
   * cpu_total
   */
  metricName?: string;
  /**
   * @remarks
   * The namespace of the cloud service.
   * 
   * For information about how to query the namespace of a cloud service, see [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * @example
   * acs_ecs_dashboard
   */
  namespace?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  page?: number;
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
  regionId?: string;
  /**
   * @remarks
   * The ID of the alert rule.
   * 
   * For information about how to obtain the ID of an alert rule, see [DescribeMetricRuleList](https://help.aliyun.com/document_detail/114941.html).
   * 
   * @example
   * applyTemplate61dc81b5-d357-4cf6-a9b7-9f83c1d5****
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the alert rule.
   * 
   * For information about how to query the name of an alert rule, see [DescribeMetricRuleList](https://help.aliyun.com/document_detail/114941.html).
   * 
   * @example
   * ECS_Rule
   */
  ruleName?: string;
  /**
   * @remarks
   * The start timestamp of the historical alerts that you want to query.
   * 
   * Unit: milliseconds.
   * 
   * @example
   * 1640237400000
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the alert. Valid values:
   * 
   * *   ALARM (default value): Alerts are triggered.
   * *   OK: No alerts are triggered.
   * 
   * @example
   * ALARM
   */
  state?: string;
  /**
   * @remarks
   * Specifies whether alerts are muted. Valid values:
   * 
   * *   2 (default value): Alerts are muted and are not triggered within the mute period, even if the condition specified in the alert rule is met.
   * *   0: Alerts are triggered or cleared.
   * *   1: The alert rule is ineffective.
   * 
   * @example
   * 2
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      ascending: 'Ascending',
      endTime: 'EndTime',
      groupId: 'GroupId',
      metricName: 'MetricName',
      namespace: 'Namespace',
      page: 'Page',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      startTime: 'StartTime',
      state: 'State',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ascending: 'boolean',
      endTime: 'string',
      groupId: 'string',
      metricName: 'string',
      namespace: 'string',
      page: 'number',
      pageSize: 'number',
      regionId: 'string',
      ruleId: 'string',
      ruleName: 'string',
      startTime: 'string',
      state: 'string',
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

