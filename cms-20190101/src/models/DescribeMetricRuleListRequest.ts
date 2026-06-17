// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricRuleListRequest extends $dara.Model {
  /**
   * @remarks
   * The state of the alert rule. Valid values:
   * - OK: Normal.
   * - ALARM: Alert.
   * - INSUFFICIENT_DATA: No data.
   * 
   * @example
   * OK
   */
  alertState?: string;
  /**
   * @remarks
   * The monitoring dimensions of the specified resource.
   * 
   * Format: a collection of `key:value` pairs. Example: `{"userId":"120886317861****"}` and `{"instanceId":"i-2ze2d6j5uhg20x47****"}`.
   * 
   * @example
   * {"instanceId":"i-2ze2d6j5uhg20x47****"}
   */
  dimensions?: string;
  /**
   * @remarks
   * The enabled state of the alert rule. Valid values:
   * - true: enabled.
   * - false: disabled.
   * 
   * @example
   * true
   */
  enableState?: boolean;
  /**
   * @remarks
   * The ID of the application group.
   * 
   * For information about how to obtain the application group ID, see [DescribeMonitorGroups](https://help.aliyun.com/document_detail/115032.html).
   * 
   * @example
   * 7301****
   */
  groupId?: string;
  /**
   * @remarks
   * The metric name.
   * 
   * For information about how to obtain metric names, see [DescribeMetricMetaList](https://help.aliyun.com/document_detail/98846.html) or [cloud service monitoring metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * Note: For composite metrics, you can retrieve results only by the first metric.
   * 
   * @example
   * cpu_total
   */
  metricName?: string;
  /**
   * @remarks
   * The namespace of the Alibaba Cloud service.
   * 
   * For information about how to obtain the namespace of an Alibaba Cloud service, see [DescribeMetricMetaList](https://help.aliyun.com/document_detail/98846.html) or [cloud service monitoring metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * @example
   * acs_ecs_dashboard
   */
  namespace?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Minimum value: 1. Default value: 1.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page.
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
   * The IDs of the alert rules. Separate multiple IDs with commas (,). You can query up to 20 alert rules at a time.
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

