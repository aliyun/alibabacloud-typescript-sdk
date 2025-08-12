// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAlertingMetricRuleResourcesResponseBodyResourcesResourceEscalationResourceExpressionListExpressionList extends $dara.Model {
  /**
   * @remarks
   * The operator that is used to compare the metric value with the threshold. Valid values:
   * 
   * *   GreaterThanOrEqualToThreshold: greater than or equal to the threshold
   * *   GreaterThanThreshold: greater than the threshold
   * *   LessThanOrEqualToThreshold: less than or equal to the threshold
   * *   LessThanThreshold: less than the threshold
   * *   NotEqualToThreshold: not equal to the threshold
   * *   GreaterThanYesterday: greater than the metric value at the same time yesterday
   * *   LessThanYesterday: less than the metric value at the same time yesterday
   * *   GreaterThanLastWeek: greater than the metric value at the same time last week
   * *   LessThanLastWeek: less than the metric value at the same time last week
   * *   GreaterThanLastPeriod: greater than the metric value in the last monitoring cycle
   * *   LessThanLastPeriod: less than the metric value in the last monitoring cycle
   * 
   * @example
   * GreaterThanOrEqualToThreshold
   */
  comparisonOperator?: string;
  /**
   * @remarks
   * The metric name.
   * 
   * @example
   * cpu_total
   */
  metricName?: string;
  /**
   * @remarks
   * The statistical period of the metric. Unit: seconds. The default value is the interval at which the monitoring data of the metric is collected.
   * 
   * @example
   * 60
   */
  period?: string;
  /**
   * @remarks
   * The statistical method of the alert level. Valid values:
   * 
   * *   Maximum
   * *   Minimum
   * *   Average
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * The alert threshold.
   * 
   * @example
   * 90
   */
  threshold?: string;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      metricName: 'MetricName',
      period: 'Period',
      statistics: 'Statistics',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      metricName: 'string',
      period: 'string',
      statistics: 'string',
      threshold: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertingMetricRuleResourcesResponseBodyResourcesResourceEscalationResourceExpressionList extends $dara.Model {
  expressionList?: DescribeAlertingMetricRuleResourcesResponseBodyResourcesResourceEscalationResourceExpressionListExpressionList[];
  static names(): { [key: string]: string } {
    return {
      expressionList: 'ExpressionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expressionList: { 'type': 'array', 'itemType': DescribeAlertingMetricRuleResourcesResponseBodyResourcesResourceEscalationResourceExpressionListExpressionList },
    };
  }

  validate() {
    if(Array.isArray(this.expressionList)) {
      $dara.Model.validateArray(this.expressionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertingMetricRuleResourcesResponseBodyResourcesResourceEscalationResource extends $dara.Model {
  /**
   * @remarks
   * The operator that is used to compare the metric value with the threshold. Valid values:
   * 
   * *   GreaterThanOrEqualToThreshold: greater than or equal to the threshold
   * *   GreaterThanThreshold: greater than the threshold
   * *   LessThanOrEqualToThreshold: less than or equal to the threshold
   * *   LessThanThreshold: less than the threshold
   * *   NotEqualToThreshold: not equal to the threshold
   * *   GreaterThanYesterday: greater than the metric value at the same time yesterday
   * *   LessThanYesterday: less than the metric value at the same time yesterday
   * *   GreaterThanLastWeek: greater than the metric value at the same time last week
   * *   LessThanLastWeek: less than the metric value at the same time last week
   * *   GreaterThanLastPeriod: greater than the metric value in the last monitoring cycle
   * *   LessThanLastPeriod: less than the metric value in the last monitoring cycle
   * 
   * @example
   * GreaterThanOrEqualToThreshold
   */
  comparisonOperator?: string;
  /**
   * @remarks
   * The description of the alert rule.
   * 
   * >  This parameter indicates the content of the alert rule. If the metric value meets the alert condition, an alert is triggered.
   * 
   * @example
   * $Average>=10
   */
  expression?: string;
  /**
   * @remarks
   * The description of the multi-metric alert rule.
   */
  expressionList?: DescribeAlertingMetricRuleResourcesResponseBodyResourcesResourceEscalationResourceExpressionList;
  /**
   * @remarks
   * The relationship between multiple metrics. Valid values:
   * 
   * *   &&: If all metrics meet the alert conditions, CloudMonitor sends alert notifications.
   * *   ||: If one of the metrics meets the alert conditions, CloudMonitor sends alert notifications.
   * 
   * @example
   * &&
   */
  expressionListJoin?: string;
  /**
   * @remarks
   * The trigger conditions that are created by using expressions. You can use expressions to create trigger conditions in the following scenarios:
   * 
   * *   Set an alert blacklist for specific resources. For example, if you specify `$instanceId != \\"i-io8kfvcpp7x5****\\" ``&&`` $Average > 50`, no alert is triggered when the `average metric value` of the `i-io8kfvcpp7x5****` instance exceeds 50.
   * *   Set a special alert threshold for a specified instance in the rule. For example, if you specify `$Average > ($instanceId == \\"i-io8kfvcpp7x5****\\"? 80: 50)`, an alert is triggered when the `average metric value` of the `i-io8kfvcpp7x5****` instance exceeds 80 or the `average metric value` of other instances exceeds 50.
   * *   Limit the number of instances whose metric values exceed the threshold. For example, if you specify `count($Average > 20) > 3`, an alert is triggered only when the `average metric value` of more than three instances exceeds 20.
   * 
   * @example
   * $Average > ($instanceId == \\"i-io8kfvcpp7x5****\\"? 80: 50)
   */
  expressionRaw?: string;
  /**
   * @remarks
   * The severity level and notification methods of the alert. Valid values:
   * 
   * *   4: Alert notifications are sent by using emails and DingTalk chatbots.
   * *   OK: No alert is generated.
   * 
   * @example
   * 3
   */
  level?: number;
  /**
   * @remarks
   * The operator that is used to compare the metric value with the threshold. Valid values:
   * 
   * *   `>=`
   * *   `=`
   * *   `<=`
   * *   `>`
   * *   `<`
   * *   `!=`
   * 
   * @example
   * >=
   */
  preCondition?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * mns
   */
  tag?: string;
  /**
   * @remarks
   * The alert threshold.
   * 
   * @example
   * 10
   */
  threshold?: string;
  /**
   * @remarks
   * The consecutive number of times for which the metric value meets the alert condition before an alert is triggered.
   * 
   * @example
   * 1
   */
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      expression: 'Expression',
      expressionList: 'ExpressionList',
      expressionListJoin: 'ExpressionListJoin',
      expressionRaw: 'ExpressionRaw',
      level: 'Level',
      preCondition: 'PreCondition',
      tag: 'Tag',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      expression: 'string',
      expressionList: DescribeAlertingMetricRuleResourcesResponseBodyResourcesResourceEscalationResourceExpressionList,
      expressionListJoin: 'string',
      expressionRaw: 'string',
      level: 'number',
      preCondition: 'string',
      tag: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  validate() {
    if(this.expressionList && typeof (this.expressionList as any).validate === 'function') {
      (this.expressionList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertingMetricRuleResourcesResponseBodyResourcesResourceEscalation extends $dara.Model {
  resource?: DescribeAlertingMetricRuleResourcesResponseBodyResourcesResourceEscalationResource[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: { 'type': 'array', 'itemType': DescribeAlertingMetricRuleResourcesResponseBodyResourcesResourceEscalationResource },
    };
  }

  validate() {
    if(Array.isArray(this.resource)) {
      $dara.Model.validateArray(this.resource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertingMetricRuleResourcesResponseBodyResourcesResource extends $dara.Model {
  /**
   * @remarks
   * The dimensions based on which the resources are queried.
   * 
   * @example
   * {\\"region\\":\\"cn-huhehaote\\",\\"queue\\":\\"test-0128\\",\\"userId\\":\\"120886317861****\\"}
   */
  dimensions?: string;
  /**
   * @remarks
   * Indicates whether the alert rule is enabled. Valid values:
   * 
   * *   true: The alert rule is enabled.
   * *   false: The alert rule is disabled.
   * 
   * @example
   * true
   */
  enable?: string;
  /**
   * @remarks
   * The alert rule based on which the alert is triggered.
   */
  escalation?: DescribeAlertingMetricRuleResourcesResponseBodyResourcesResourceEscalation;
  /**
   * @remarks
   * The ID of the application group.
   * 
   * >  If the alert rule is associated with an application group, the ID of the application group is returned in this parameter.
   * 
   * @example
   * 7671****
   */
  groupId?: string;
  /**
   * @remarks
   * The time when the last alert was triggered for the resource based on the alert rule. The value is a timestamp.
   * 
   * Unit: milliseconds.
   * 
   * @example
   * 1622427900000
   */
  lastAlertTime?: string;
  /**
   * @remarks
   * The time when the alert rule was last modified. The value is a timestamp.
   * 
   * Unit: milliseconds.
   * 
   * @example
   * 1622827900000
   */
  lastModifyTime?: string;
  /**
   * @remarks
   * The severity level and notification methods of the alert. Valid values:
   * 
   * *   4: Alert notifications are sent by using emails and DingTalk chatbots.
   * *   OK: No alert is generated.
   * 
   * @example
   * 3
   */
  level?: number;
  /**
   * @remarks
   * The metric name.
   * 
   * @example
   * ActiveMessages
   */
  metricName?: string;
  /**
   * @remarks
   * The metric value that triggered the alert based on the alert rule. The value is a JSON string.
   * 
   * @example
   * {\\"timestamp\\":1623727500000,\\"Sum\\":926,\\"value\\":463,\\"Maximum\\":463,\\"Minimum\\":463,\\"Average\\":463,\\"SampleCount\\":2,\\"userId\\":\\"120886317861****\\",\\"region\\":\\"cn-huhehaote\\",\\"queue\\":\\"test-0128\\"}
   */
  metricValues?: string;
  /**
   * @remarks
   * The namespace of the cloud service.
   * 
   * @example
   * acs_mns_new
   */
  namespace?: string;
  /**
   * @remarks
   * The type of the cloud service.
   * 
   * @example
   * mns
   */
  productCategory?: string;
  /**
   * @remarks
   * The resources that are monitored.
   * 
   * @example
   * userId=120886317861****,region=cn-huhehaote,queue=test-0128
   */
  resource?: string;
  /**
   * @remarks
   * The consecutive number of times for which the metric value meets the alert condition before an alert is triggered.
   * 
   * @example
   * 3
   */
  retryTimes?: string;
  /**
   * @remarks
   * The ID of the alert rule.
   * 
   * @example
   * putNewAlarm_user_7e78d765-0e3e-4671-ba6d-7ce39108****
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the alert rule.
   * 
   * @example
   * test123456789
   */
  ruleName?: string;
  /**
   * @remarks
   * The time when the resource was associated with the alert rule. The value is a timestamp.
   * 
   * Unit: milliseconds.
   * 
   * @example
   * 1622427900000
   */
  startTime?: string;
  /**
   * @remarks
   * The method used to calculate the metric values that trigger alerts.
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * The alert threshold.
   * 
   * @example
   * 10
   */
  threshold?: string;
  static names(): { [key: string]: string } {
    return {
      dimensions: 'Dimensions',
      enable: 'Enable',
      escalation: 'Escalation',
      groupId: 'GroupId',
      lastAlertTime: 'LastAlertTime',
      lastModifyTime: 'LastModifyTime',
      level: 'Level',
      metricName: 'MetricName',
      metricValues: 'MetricValues',
      namespace: 'Namespace',
      productCategory: 'ProductCategory',
      resource: 'Resource',
      retryTimes: 'RetryTimes',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      startTime: 'StartTime',
      statistics: 'Statistics',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensions: 'string',
      enable: 'string',
      escalation: DescribeAlertingMetricRuleResourcesResponseBodyResourcesResourceEscalation,
      groupId: 'string',
      lastAlertTime: 'string',
      lastModifyTime: 'string',
      level: 'number',
      metricName: 'string',
      metricValues: 'string',
      namespace: 'string',
      productCategory: 'string',
      resource: 'string',
      retryTimes: 'string',
      ruleId: 'string',
      ruleName: 'string',
      startTime: 'string',
      statistics: 'string',
      threshold: 'string',
    };
  }

  validate() {
    if(this.escalation && typeof (this.escalation as any).validate === 'function') {
      (this.escalation as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertingMetricRuleResourcesResponseBodyResources extends $dara.Model {
  resource?: DescribeAlertingMetricRuleResourcesResponseBodyResourcesResource[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: { 'type': 'array', 'itemType': DescribeAlertingMetricRuleResourcesResponseBodyResourcesResource },
    };
  }

  validate() {
    if(Array.isArray(this.resource)) {
      $dara.Model.validateArray(this.resource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertingMetricRuleResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * > The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The request processing has failed due to some unknown error.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0724011B-D9E0-4B2F-8C51-F17A894CC42C
   */
  requestId?: string;
  /**
   * @remarks
   * The resources that are associated with the alert rule.
   */
  resources?: DescribeAlertingMetricRuleResourcesResponseBodyResources;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      resources: 'Resources',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      resources: DescribeAlertingMetricRuleResourcesResponseBodyResources,
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(this.resources && typeof (this.resources as any).validate === 'function') {
      (this.resources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

