// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMetricRuleTemplateRequestAlertTemplatesEscalationsCritical extends $dara.Model {
  /**
   * @remarks
   * The comparison operator for the critical-level alert threshold. Valid values:
   * 
   * - GreaterThanOrEqualToThreshold: greater than or equal to the threshold. 
   * - GreaterThanThreshold: greater than the threshold. 
   * - LessThanOrEqualToThreshold: less than or equal to the threshold. 
   * - LessThanThreshold: less than the threshold. 
   * - NotEqualToThreshold: not equal to the threshold. 
   * - GreaterThanYesterday: greater than the metric value at the same time yesterday. 
   * - LessThanYesterday: less than the metric value at the same time yesterday. 
   * - GreaterThanLastWeek: greater than the metric value at the same time last week. 
   * - LessThanLastWeek: less than the metric value at the same time last week. 
   * - GreaterThanLastPeriod: greater than the metric value in the last period. 
   * - LessThanLastPeriod: less than the metric value in the last period. 
   * 
   * Valid values of N: 1 to 200.
   * 
   * > You must specify at least one of the following alert levels: Critical, Warn, or Info. For the specified alert level, you must specify the Statistics, ComparisonOperator, Threshold, and Times parameters at the same time.
   * 
   * @example
   * GreaterThanOrEqualToThreshold
   */
  comparisonOperator?: string;
  n?: number;
  /**
   * @remarks
   * The statistical method for critical-level alerts.
   * 
   * Valid values of N: 1 to 200.
   * 
   * The valid values of this parameter are determined by the Statistics column that corresponds to the MetricName parameter of the specified cloud service. Examples: Maximum, Minimum, and Average. For more information about how to obtain the valid values of this parameter, see [Cloud service monitoring metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * > You must specify at least one of the following alert levels: Critical, Warn, or Info. For the specified alert level, the Settings for the Statistics, ComparisonOperator, Threshold, and Times parameters must be configured at the same time.
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * The threshold that triggers a critical-level alert notification.
   * 
   * Valid values of N: 1 to 200.
   * 
   * > You must specify at least one of the following alert levels: Critical, Warn, or Info. For the specified alert level, the Settings for the Statistics, ComparisonOperator, Threshold, and Times parameters must be configured at the same time.
   * 
   * @example
   * 30
   */
  threshold?: string;
  /**
   * @remarks
   * The number of consecutive times that the monitoring metrics must reach the alert threshold to send a critical alert notification.
   * 
   * Valid values of N: 1 to 200.
   * 
   * > You must specify at least one of the following alert levels: Critical, Warn, or Info. For the specified alert level, the Settings for the Statistics, ComparisonOperator, Threshold, and Times parameters must be configured at the same time.
   * 
   * @example
   * 3
   */
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      n: 'N',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      n: 'number',
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

export class CreateMetricRuleTemplateRequestAlertTemplatesEscalationsInfo extends $dara.Model {
  /**
   * @remarks
   * The comparison operator for the info-level alert threshold. Valid values:
   * 
   * - GreaterThanOrEqualToThreshold: greater than or equal to the threshold. 
   * - GreaterThanThreshold: greater than the threshold. 
   * - LessThanOrEqualToThreshold: less than or equal to the threshold. 
   * - LessThanThreshold: less than the threshold. 
   * - NotEqualToThreshold: not equal to the threshold. 
   * - GreaterThanYesterday: greater than the metric value at the same time yesterday. 
   * - LessThanYesterday: less than the metric value at the same time yesterday. 
   * - GreaterThanLastWeek: greater than the metric value at the same time last week. 
   * - LessThanLastWeek: less than the metric value at the same time last week. 
   * - GreaterThanLastPeriod: greater than the metric value in the last period. 
   * - LessThanLastPeriod: less than the metric value in the last period. 
   * 
   * Valid values of N: 1 to 200.
   * 
   * > You must specify at least one of the following alert levels: Critical, Warn, or Info. For the specified alert level, you must specify the Statistics, ComparisonOperator, Threshold, and Times parameters at the same time.
   * 
   * @example
   * GreaterThanOrEqualToThreshold
   */
  comparisonOperator?: string;
  n?: number;
  /**
   * @remarks
   * The statistical method for info-level alerts.
   * 
   * Valid values of N: 1 to 200.
   * 
   * The valid values of this parameter are determined by the Statistics column that corresponds to the MetricName parameter of the specified cloud service. Examples: Maximum, Minimum, and Average. For more information about how to obtain the valid values of this parameter, see [Cloud service monitoring metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * > You must specify at least one of the following alert levels: Critical, Warn, or Info. For the specified alert level, the Settings for the Statistics, ComparisonOperator, Threshold, and Times parameters must be configured at the same time.
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * The info-level alert threshold.
   * 
   * Valid values of N: 1 to 200.
   * 
   * > You must specify at least one of the following alert levels: Critical, Warn, or Info. For the specified alert level, you must specify the Statistics, ComparisonOperator, Threshold, and Times parameters at the same time.
   * 
   * @example
   * 20
   */
  threshold?: string;
  /**
   * @remarks
   * The number of consecutive times that the monitoring metrics must reach the alert threshold to send an info-level alert notification.
   * 
   * Valid values of N: 1 to 200.
   * 
   * > You must specify at least one of the following alert levels: Critical, Warn, or Info. For the specified alert level, the Settings for the Statistics, ComparisonOperator, Threshold, and Times parameters must be configured at the same time.
   * 
   * @example
   * 1
   */
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      n: 'N',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      n: 'number',
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

export class CreateMetricRuleTemplateRequestAlertTemplatesEscalationsWarn extends $dara.Model {
  /**
   * @remarks
   * The comparison operator for the warning-level alert threshold. Valid values:
   * 
   * - GreaterThanOrEqualToThreshold: greater than or equal to the threshold. 
   * - GreaterThanThreshold: greater than the threshold. 
   * - LessThanOrEqualToThreshold: less than or equal to the threshold. 
   * - LessThanThreshold: less than the threshold. 
   * - NotEqualToThreshold: not equal to the threshold. 
   * - GreaterThanYesterday: greater than the metric value at the same time yesterday. 
   * - LessThanYesterday: less than the metric value at the same time yesterday. 
   * - GreaterThanLastWeek: greater than the metric value at the same time last week. 
   * - LessThanLastWeek: less than the metric value at the same time last week. 
   * - GreaterThanLastPeriod: greater than the metric value in the last period. 
   * - LessThanLastPeriod: less than the metric value in the last period. 
   * 
   * Valid values of N: 1 to 200.
   * 
   * > You must specify at least one of the following alert levels: Critical, Warn, or Info. For the specified alert level, you must specify the Statistics, ComparisonOperator, Threshold, and Times parameters at the same time.
   * 
   * @example
   * GreaterThanOrEqualToThreshold
   */
  comparisonOperator?: string;
  n?: number;
  /**
   * @remarks
   * The statistical method for warning-level alerts.
   * 
   * Valid values of N: 1 to 200.
   * 
   * The valid values of this parameter are determined by the Statistics column that corresponds to the MetricName parameter of the specified cloud service. Examples: Maximum, Minimum, and Average. For more information about how to obtain the valid values of this parameter, see [Cloud service monitoring metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * > You must specify at least one of the following alert levels: Critical, Warn, or Info. For the specified alert level, the Settings for the Statistics, ComparisonOperator, Threshold, and Times parameters must be configured at the same time.
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * The warning-level alert threshold.
   * 
   * Valid values of N: 1 to 200.
   * 
   * > You must specify at least one of the following alert levels: Critical, Warn, or Info. For the specified alert level, you must specify the Statistics, ComparisonOperator, Threshold, and Times parameters at the same time.
   * 
   * @example
   * 30
   */
  threshold?: string;
  /**
   * @remarks
   * The number of consecutive times that the monitoring metrics must reach the alert threshold to send a warning alert notification.
   * 
   * Valid values of N: 1 to 200.
   * 
   * > You must specify at least one of the following alert levels: Critical, Warn, or Info. For the specified alert level, the Settings for the Statistics, ComparisonOperator, Threshold, and Times parameters must be configured at the same time.
   * 
   * @example
   * 1
   */
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      n: 'N',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      n: 'number',
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

export class CreateMetricRuleTemplateRequestAlertTemplatesEscalations extends $dara.Model {
  critical?: CreateMetricRuleTemplateRequestAlertTemplatesEscalationsCritical;
  info?: CreateMetricRuleTemplateRequestAlertTemplatesEscalationsInfo;
  warn?: CreateMetricRuleTemplateRequestAlertTemplatesEscalationsWarn;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      info: 'Info',
      warn: 'Warn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: CreateMetricRuleTemplateRequestAlertTemplatesEscalationsCritical,
      info: CreateMetricRuleTemplateRequestAlertTemplatesEscalationsInfo,
      warn: CreateMetricRuleTemplateRequestAlertTemplatesEscalationsWarn,
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

export class CreateMetricRuleTemplateRequestAlertTemplates extends $dara.Model {
  escalations?: CreateMetricRuleTemplateRequestAlertTemplatesEscalations;
  /**
   * @remarks
   * The abbreviation of the cloud service name.
   * 
   * Valid values of N: 1 to 200.
   * 
   * For more information about how to obtain the abbreviation of a cloud service name, see the metricCategory field in the Labels response parameter of the [DescribeProjectMeta](https://help.aliyun.com/document_detail/114916.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  category?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * Valid values of N: 1 to 200.
   * 
   * For more information about how to obtain the metric name, see [DescribeMetricMetaList](https://help.aliyun.com/document_detail/98846.html) or [Cloud service monitoring metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cpu_total
   */
  metricName?: string;
  /**
   * @remarks
   * The namespace of the cloud service.
   * 
   * Valid values of N: 1 to 200.
   * 
   * For more information about how to obtain the namespace of a cloud service, see [DescribeMetricMetaList](https://help.aliyun.com/document_detail/98846.html) or [Cloud service monitoring metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * This parameter is required.
   * 
   * @example
   * acs_ecs_dashboard
   */
  namespace?: string;
  /**
   * @remarks
   * The aggregation period of the monitoring data. Unit: seconds.
   * 
   * The default value is the minimum aggregation period of the metric. In most cases, you do not need to specify this parameter.
   * 
   * Valid values of N: 1 to 200.
   * 
   * @example
   * 60
   */
  period?: number;
  /**
   * @remarks
   * The name of the alert rule.
   * 
   * Valid values of N: 1 to 200.
   * 
   * This parameter is required.
   * 
   * @example
   * ECS_Rule1
   */
  ruleName?: string;
  /**
   * @remarks
   * The options for the extended Dimension field.
   * 
   * Valid values of N: 1 to 200.
   * 
   * For example, if the alert template is applied to an application group, this parameter is set to `{"disk":"/"}`, and the MetricName parameter is set to DiskUtilization, the root partition (`"/"`) of the disk for all instances in the application group is associated with the corresponding alert rule.
   * 
   * > For more information about the valid values of the extended field options, see [DescribeMetricRuleTemplateAttribute](https://help.aliyun.com/document_detail/114979.html).
   * 
   * @example
   * {"disk":"/"}
   */
  selector?: string;
  /**
   * @remarks
   * The webhook URL to which alert notifications are sent.
   * 
   * Valid values of N: 1 to 200.
   * 
   * Specify a publicly accessible URL. CloudMonitor sends alert notifications to this URL by using HTTP POST requests. Only HTTP is supported.
   * 
   * @example
   * http://ww.aliyun.com
   */
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      escalations: 'Escalations',
      category: 'Category',
      metricName: 'MetricName',
      namespace: 'Namespace',
      period: 'Period',
      ruleName: 'RuleName',
      selector: 'Selector',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalations: CreateMetricRuleTemplateRequestAlertTemplatesEscalations,
      category: 'string',
      metricName: 'string',
      namespace: 'string',
      period: 'number',
      ruleName: 'string',
      selector: 'string',
      webhook: 'string',
    };
  }

  validate() {
    if(this.escalations && typeof (this.escalations as any).validate === 'function') {
      (this.escalations as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMetricRuleTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The alert templates.
   */
  alertTemplates?: CreateMetricRuleTemplateRequestAlertTemplates[];
  /**
   * @remarks
   * The description of the alert template.
   * 
   * @example
   * ECS_Template1
   */
  description?: string;
  /**
   * @remarks
   * The name of the alert template.
   * 
   * This parameter is required.
   * 
   * @example
   * Template1
   */
  name?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      alertTemplates: 'AlertTemplates',
      description: 'Description',
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertTemplates: { 'type': 'array', 'itemType': CreateMetricRuleTemplateRequestAlertTemplates },
      description: 'string',
      name: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.alertTemplates)) {
      $dara.Model.validateArray(this.alertTemplates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

