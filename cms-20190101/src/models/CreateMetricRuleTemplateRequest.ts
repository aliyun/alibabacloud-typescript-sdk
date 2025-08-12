// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMetricRuleTemplateRequestAlertTemplatesEscalationsCritical extends $dara.Model {
  comparisonOperator?: string;
  n?: number;
  statistics?: string;
  threshold?: string;
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
  comparisonOperator?: string;
  n?: number;
  statistics?: string;
  threshold?: string;
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
  comparisonOperator?: string;
  n?: number;
  statistics?: string;
  threshold?: string;
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
   * For more information about how to obtain the abbreviation of a cloud service name, see `metricCategory` in the response parameter `Labels` of the [DescribeProjectMeta](https://help.aliyun.com/document_detail/114916.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  category?: string;
  /**
   * @remarks
   * The metric name.
   * 
   * Valid values of N: 1 to 200.
   * 
   * For information about how to obtain the name of a metric, see [DescribeMetricMetaList](https://help.aliyun.com/document_detail/98846.html) or [Metrics](https://help.aliyun.com/document_detail/163515.html).
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
   * For information about how to obtain the namespace of a cloud service, see [DescribeMetricMetaList](https://help.aliyun.com/document_detail/98846.html) or [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * This parameter is required.
   * 
   * @example
   * acs_ecs_dashboard
   */
  namespace?: string;
  /**
   * @remarks
   * The aggregation period of monitoring data. Unit: seconds.
   * 
   * The default value is the minimum aggregation period. Generally, you do not need to specify the minimum aggregation period.
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
   * The dimension of the alert. It is an extended field.
   * 
   * Valid values of N: 1 to 200.
   * 
   * For example, an alert template is applied to an application group, this parameter is set to `{"disk":"/"}`, and the MetricName parameter is set to `DiskUtilization`. In this case, the generated alert rule is applied to the root disk partition (`"/"`) of all instances in the application group to which the alert template is applied.
   * 
   * >  For more information about the values of extended fields, see [DescribeMetricRuleTemplateAttribute](https://help.aliyun.com/document_detail/114979.html).
   * 
   * @example
   * {"disk":"/"}
   */
  selector?: string;
  /**
   * @remarks
   * The callback URL.
   * 
   * Valid values of N: 1 to 200.
   * 
   * The callback URL must be accessible over the Internet. CloudMonitor pushes an alert notification to the specified callback URL by sending an HTTP POST request. Only the HTTP protocol is supported.
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
   * The details of the alert template.
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

