// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplatesAlertTemplateEscalationsCritical extends $dara.Model {
  /**
   * @remarks
   * The comparison operator that is used to compare the metric value with the threshold for Critical-level alerts. Valid values:
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
   * The statistical method for Critical-level alerts.
   * 
   * The value of the `Statistics` parameter varies with the cloud service. For more information, see [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * The threshold for Critical-level alerts.
   * 
   * @example
   * 90
   */
  threshold?: string;
  /**
   * @remarks
   * The consecutive number of times for which the metric value meets the alert condition before a Critical-level alert is triggered.
   * 
   * @example
   * 5
   */
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplatesAlertTemplateEscalationsInfo extends $dara.Model {
  /**
   * @remarks
   * The comparison operator that is used to compare the metric value with the threshold for Info-level alerts. Valid values:
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
   * The statistical method for Info-level alerts.
   * 
   * The value of the `Statistics` parameter varies with the cloud service. For more information, see [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * The threshold for Info-level alerts.
   * 
   * @example
   * 90
   */
  threshold?: string;
  /**
   * @remarks
   * The consecutive number of times for which the metric value meets the alert condition before an Info-level alert is triggered.
   * 
   * @example
   * 3
   */
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplatesAlertTemplateEscalationsWarn extends $dara.Model {
  /**
   * @remarks
   * The comparison operator that is used to compare the metric value with the threshold for Warn-level alerts. Valid values:
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
   * The statistical method for Warn-level alerts.
   * 
   * The value of the `Statistics` parameter varies with the cloud service. For more information, see [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * The threshold for Warn-level alerts.
   * 
   * @example
   * 90
   */
  threshold?: string;
  /**
   * @remarks
   * The consecutive number of times for which the metric value meets the alert condition before a Warn-level alert is triggered.
   * 
   * @example
   * 3
   */
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplatesAlertTemplateEscalations extends $dara.Model {
  /**
   * @remarks
   * The conditions for triggering Critical-level alerts.
   */
  critical?: DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplatesAlertTemplateEscalationsCritical;
  /**
   * @remarks
   * The conditions for triggering Info-level alerts.
   */
  info?: DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplatesAlertTemplateEscalationsInfo;
  /**
   * @remarks
   * The conditions for triggering Warn-level alerts.
   */
  warn?: DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplatesAlertTemplateEscalationsWarn;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      info: 'Info',
      warn: 'Warn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplatesAlertTemplateEscalationsCritical,
      info: DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplatesAlertTemplateEscalationsInfo,
      warn: DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplatesAlertTemplateEscalationsWarn,
    };
  }

  validate() {
    if(this.critical && typeof (this.critical as any).validate === 'function') {
      (this.critical as any).validate();
    }
    if(this.info && typeof (this.info as any).validate === 'function') {
      (this.info as any).validate();
    }
    if(this.warn && typeof (this.warn as any).validate === 'function') {
      (this.warn as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplatesAlertTemplateLabelsLabels extends $dara.Model {
  /**
   * @remarks
   * The tag key of the alert template.
   * 
   * @example
   * label1
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the alert template.
   * 
   * @example
   * value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplatesAlertTemplateLabels extends $dara.Model {
  labels?: DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplatesAlertTemplateLabelsLabels[];
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplatesAlertTemplateLabelsLabels },
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplatesAlertTemplate extends $dara.Model {
  /**
   * @remarks
   * The abbreviation of the Alibaba Cloud service name.
   * 
   * @example
   * ecs
   */
  category?: string;
  /**
   * @remarks
   * The threshold and the alert level.
   */
  escalations?: DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplatesAlertTemplateEscalations;
  /**
   * @remarks
   * The tags of the alert template.
   */
  labels?: DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplatesAlertTemplateLabels;
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
   * The namespace of the Alibaba Cloud service.
   * 
   * @example
   * acs_ecs_dashboard
   */
  namespace?: string;
  /**
   * @remarks
   * The method that is used to handle alerts when no monitoring data is found. Valid values:
   * 
   * *   KEEP_LAST_STATE (default): No operation is performed.
   * *   INSUFFICIENT_DATA: An alert whose content is "Insufficient data" is triggered.
   * *   OK: The status is considered normal.
   * 
   * @example
   * KEEP_LAST_STATE
   */
  noDataPolicy?: string;
  /**
   * @remarks
   * The name of the alert rule.
   * 
   * @example
   * ECS_Rule
   */
  ruleName?: string;
  /**
   * @remarks
   * The dimension of the alert. It is an extended field.
   * 
   * @example
   * {"disk":"/"}
   */
  selector?: string;
  silenceTime?: number;
  /**
   * @remarks
   * The callback URL to which a request is sent when an alert is triggered.
   * 
   * @example
   * https://www.aliyun.com
   */
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      escalations: 'Escalations',
      labels: 'Labels',
      metricName: 'MetricName',
      namespace: 'Namespace',
      noDataPolicy: 'NoDataPolicy',
      ruleName: 'RuleName',
      selector: 'Selector',
      silenceTime: 'SilenceTime',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      escalations: DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplatesAlertTemplateEscalations,
      labels: DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplatesAlertTemplateLabels,
      metricName: 'string',
      namespace: 'string',
      noDataPolicy: 'string',
      ruleName: 'string',
      selector: 'string',
      silenceTime: 'number',
      webhook: 'string',
    };
  }

  validate() {
    if(this.escalations && typeof (this.escalations as any).validate === 'function') {
      (this.escalations as any).validate();
    }
    if(this.labels && typeof (this.labels as any).validate === 'function') {
      (this.labels as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplates extends $dara.Model {
  alertTemplate?: DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplatesAlertTemplate[];
  static names(): { [key: string]: string } {
    return {
      alertTemplate: 'AlertTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertTemplate: { 'type': 'array', 'itemType': DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplatesAlertTemplate },
    };
  }

  validate() {
    if(Array.isArray(this.alertTemplate)) {
      $dara.Model.validateArray(this.alertTemplate);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTemplateAttributeResponseBodyResource extends $dara.Model {
  /**
   * @remarks
   * The queried alert templates.
   */
  alertTemplates?: DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplates;
  /**
   * @remarks
   * The description of the alert template.
   */
  description?: string;
  /**
   * @remarks
   * The name of the alert template.
   * 
   * @example
   * ECS_Template1
   */
  name?: string;
  /**
   * @remarks
   * The version of the alert template.
   * 
   * @example
   * 1
   */
  restVersion?: string;
  /**
   * @remarks
   * The ID of the alert template.
   * 
   * @example
   * 70****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      alertTemplates: 'AlertTemplates',
      description: 'Description',
      name: 'Name',
      restVersion: 'RestVersion',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertTemplates: DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplates,
      description: 'string',
      name: 'string',
      restVersion: 'string',
      templateId: 'string',
    };
  }

  validate() {
    if(this.alertTemplates && typeof (this.alertTemplates as any).validate === 'function') {
      (this.alertTemplates as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTemplateAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * >  The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * The specified resource is not found.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8F3A82AD-DA92-52B0-8EC6-C059D1C3839F
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the alert template.
   */
  resource?: DescribeMetricRuleTemplateAttributeResponseBodyResource;
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
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      resource: 'Resource',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      resource: DescribeMetricRuleTemplateAttributeResponseBodyResource,
      success: 'boolean',
    };
  }

  validate() {
    if(this.resource && typeof (this.resource as any).validate === 'function') {
      (this.resource as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

