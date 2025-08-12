// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricRuleListRequest extends $dara.Model {
  /**
   * @remarks
   * The status of the alert rule. Valid values:
   * 
   * *   OK: The alert rule has no active alerts.
   * *   ALARM: The alert rule has active alerts.
   * *   INSUFFICIENT_DATA: No data is available.
   * 
   * @example
   * OK
   */
  alertState?: string;
  /**
   * @remarks
   * The monitoring dimensions of the specified resource.
   * 
   * Set the value to a collection of `key:value` pairs. Example: `{"userId":"120886317861****"}` or `{"instanceId":"i-2ze2d6j5uhg20x47****"}`.
   * 
   * @example
   * {"instanceId":"i-2ze2d6j5uhg20x47****"}
   */
  dimensions?: string;
  /**
   * @remarks
   * Specifies whether to query enabled or disabled alert rules. Valid values:
   * 
   * *   true: queries enabled alert rules.
   * *   false: queries disabled alert rules.
   * 
   * @example
   * true
   */
  enableState?: boolean;
  /**
   * @remarks
   * The ID of the application group.
   * 
   * For information about how to obtain the ID of an application group, see [DescribeMonitorGroups](https://help.aliyun.com/document_detail/115032.html).
   * 
   * @example
   * 7301****
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * For information about how to obtain the name of a metric, see [DescribeMetricMetaList](https://help.aliyun.com/document_detail/98846.html) or [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * @example
   * cpu_total
   */
  metricName?: string;
  /**
   * @remarks
   * The namespace of the cloud service.
   * 
   * For information about how to obtain the namespace of a cloud service, see [DescribeMetricMetaList](https://help.aliyun.com/document_detail/98846.html) or [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * @example
   * acs_ecs_dashboard
   */
  namespace?: string;
  /**
   * @remarks
   * The page number of the page to return.
   * 
   * Minimum value: 1. Default value: 1.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Minimum value: 1. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  regionId?: string;
  /**
   * @remarks
   * The ID of the alert rule. You can specify up to 20 IDs at a time. Separate multiple IDs with commas (,).
   * 
   * @example
   * applyTemplate344cfd42-0f32-4fd6-805a-88d7908a****
   */
  ruleIds?: string;
  /**
   * @remarks
   * The name of the alert rule.
   * 
   * This parameter supports fuzzy match.
   * 
   * @example
   * Rule_01
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      alertState: 'AlertState',
      dimensions: 'Dimensions',
      enableState: 'EnableState',
      groupId: 'GroupId',
      metricName: 'MetricName',
      namespace: 'Namespace',
      page: 'Page',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      ruleIds: 'RuleIds',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertState: 'string',
      dimensions: 'string',
      enableState: 'boolean',
      groupId: 'string',
      metricName: 'string',
      namespace: 'string',
      page: 'number',
      pageSize: 'number',
      regionId: 'string',
      ruleIds: 'string',
      ruleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

