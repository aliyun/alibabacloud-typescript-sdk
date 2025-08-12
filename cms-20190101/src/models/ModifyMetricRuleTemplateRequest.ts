// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyMetricRuleTemplateRequestAlertTemplatesEscalationsCritical extends $dara.Model {
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

export class ModifyMetricRuleTemplateRequestAlertTemplatesEscalationsInfo extends $dara.Model {
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

export class ModifyMetricRuleTemplateRequestAlertTemplatesEscalationsWarn extends $dara.Model {
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

export class ModifyMetricRuleTemplateRequestAlertTemplatesEscalations extends $dara.Model {
  critical?: ModifyMetricRuleTemplateRequestAlertTemplatesEscalationsCritical;
  info?: ModifyMetricRuleTemplateRequestAlertTemplatesEscalationsInfo;
  warn?: ModifyMetricRuleTemplateRequestAlertTemplatesEscalationsWarn;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      info: 'Info',
      warn: 'Warn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: ModifyMetricRuleTemplateRequestAlertTemplatesEscalationsCritical,
      info: ModifyMetricRuleTemplateRequestAlertTemplatesEscalationsInfo,
      warn: ModifyMetricRuleTemplateRequestAlertTemplatesEscalationsWarn,
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

export class ModifyMetricRuleTemplateRequestAlertTemplates extends $dara.Model {
  escalations?: ModifyMetricRuleTemplateRequestAlertTemplatesEscalations;
  /**
   * @remarks
   * The abbreviation of the cloud service name.
   * 
   * Valid values of N: 1 to 200.
   * 
   * For more information about how to obtain the abbreviation of a cloud service name, see `metricCategory` in the response parameter `Labels` of the [DescribeProjectMeta](https://help.aliyun.com/document_detail/114916.html) operation.
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
   * For information about how to obtain metrics, see [DescribeMetricMetaList](https://help.aliyun.com/document_detail/98846.html) or [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
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
   * @example
   * acs_ecs_dashboard
   */
  namespace?: string;
  /**
   * @remarks
   * The statistical period of the monitoring data.
   * 
   * Valid values of N: 1 to 200.
   * 
   * > If the value is set to 300 seconds, the monitoring data is collected every 300 seconds. If the monitoring data is reported every 1 minute, the alert system calculates the average, maximum, and minimum values of the monitoring data of 5 minutes and checks whether the aggregated values exceed the threshold. To prevent unexpected alerts, we recommend that you set this parameter together with other parameters.
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
   * @example
   * rule1
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
   * > For more information about the values of extended fields, see [DescribeMetricRuleTemplateAttribute](https://help.aliyun.com/document_detail/114979.html).
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
   * https://apiwebhook.hipac.cn/api/v1/alarm/aly/eregfeeferrtbnmkdszp
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
      escalations: ModifyMetricRuleTemplateRequestAlertTemplatesEscalations,
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

export class ModifyMetricRuleTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The details of the alert template.
   */
  alertTemplates?: ModifyMetricRuleTemplateRequestAlertTemplates[];
  /**
   * @remarks
   * The description of the alert template.
   * 
   * @example
   * ECS_template1
   */
  description?: string;
  /**
   * @remarks
   * The name of the alert template.
   * 
   * For information about how to obtain the name of an alert template, see [DescribeMetricRuleTemplateList](https://help.aliyun.com/document_detail/114982.html).
   * 
   * @example
   * test123
   */
  name?: string;
  regionId?: string;
  /**
   * @remarks
   * The version of the alert template. The version changes with the number of times that the alert template is modified.
   * 
   * For information about how to obtain the version of an alert template, see [DescribeMetricRuleTemplateList](https://help.aliyun.com/document_detail/114982.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  restVersion?: number;
  /**
   * @remarks
   * The ID of the alert template.
   * 
   * For information about how to obtain the ID of an alert template, see [DescribeMetricRuleTemplateList](https://help.aliyun.com/document_detail/114982.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      alertTemplates: 'AlertTemplates',
      description: 'Description',
      name: 'Name',
      regionId: 'RegionId',
      restVersion: 'RestVersion',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertTemplates: { 'type': 'array', 'itemType': ModifyMetricRuleTemplateRequestAlertTemplates },
      description: 'string',
      name: 'string',
      regionId: 'string',
      restVersion: 'number',
      templateId: 'number',
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

