// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutResourceMetricRulesRequestRulesEscalationsCritical extends $dara.Model {
  comparisonOperator?: string;
  n?: number;
  preCondition?: string;
  statistics?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      n: 'N',
      preCondition: 'PreCondition',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      n: 'number',
      preCondition: 'string',
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

export class PutResourceMetricRulesRequestRulesEscalationsInfo extends $dara.Model {
  comparisonOperator?: string;
  n?: number;
  preCondition?: string;
  statistics?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      n: 'N',
      preCondition: 'PreCondition',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      n: 'number',
      preCondition: 'string',
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

export class PutResourceMetricRulesRequestRulesEscalationsWarn extends $dara.Model {
  comparisonOperator?: string;
  n?: number;
  preCondition?: string;
  statistics?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      n: 'N',
      preCondition: 'PreCondition',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      n: 'number',
      preCondition: 'string',
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

export class PutResourceMetricRulesRequestRulesEscalations extends $dara.Model {
  critical?: PutResourceMetricRulesRequestRulesEscalationsCritical;
  info?: PutResourceMetricRulesRequestRulesEscalationsInfo;
  warn?: PutResourceMetricRulesRequestRulesEscalationsWarn;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      info: 'Info',
      warn: 'Warn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: PutResourceMetricRulesRequestRulesEscalationsCritical,
      info: PutResourceMetricRulesRequestRulesEscalationsInfo,
      warn: PutResourceMetricRulesRequestRulesEscalationsWarn,
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

export class PutResourceMetricRulesRequestRulesLabels extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * tagKey1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * >  You can use a template parameter to specify a tag value. CloudMonitor replaces the value of the template parameter with an actual tag value.
   * 
   * @example
   * ECS
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

export class PutResourceMetricRulesRequestRules extends $dara.Model {
  escalations?: PutResourceMetricRulesRequestRulesEscalations;
  /**
   * @remarks
   * The alert contact groups. The alert notifications are sent to the alert contacts in the alert contact group.
   * 
   * Valid values of N: 1 to 500.
   * 
   * >  An alert contact group can contain one or more alert contacts. For information about how to create alert contacts and alert contact groups, see [PutContact](https://help.aliyun.com/document_detail/114923.html) and [PutContactGroup](https://help.aliyun.com/document_detail/114929.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ECS_Group
   */
  contactGroups?: string;
  /**
   * @remarks
   * The time period during which the alert rule is effective.
   * 
   * Valid values of N: 1 to 500.
   * 
   * @example
   * 00:00-23:59
   */
  effectiveInterval?: string;
  /**
   * @remarks
   * The subject of the alert notification email.
   * 
   * Valid values of N: 1 to 500.
   */
  emailSubject?: string;
  /**
   * @remarks
   * The interval at which alerts are triggered based on the alert rule.
   * 
   * Unit: seconds.
   * 
   * Valid values of N: 1 to 500.
   * 
   * >  For information about how to query the statistical period of a metric, see [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * @example
   * 60
   */
  interval?: string;
  /**
   * @remarks
   * If the metric meets the specified condition in the alert rule and CloudMonitor sends an alert notification, the tag is also written to the metric and displayed in the alert notification.
   */
  labels?: PutResourceMetricRulesRequestRulesLabels[];
  /**
   * @remarks
   * The metric name.
   * 
   * Valid values of N: 1 to 500.
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
   * Valid values of N: 1 to 500.
   * 
   * For information about how to query the namespace of a cloud service, see [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * This parameter is required.
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
   * Valid values of N: 1 to 500.
   * 
   * @example
   * KEEP_LAST_STATE
   */
  noDataPolicy?: string;
  /**
   * @remarks
   * The time period during which the alert rule is ineffective.
   * 
   * Valid values of N: 1 to 500.
   * 
   * @example
   * 00:00-06:00
   */
  noEffectiveInterval?: string;
  /**
   * @remarks
   * The statistical period of the metric.
   * 
   * Unit: seconds. The default value is the interval at which the monitoring data of the metric is collected.
   * 
   * Valid values of N: 1 to 500.
   * 
   * >  For information about how to query the statistical period of a metric, see [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * @example
   * 60
   */
  period?: string;
  /**
   * @remarks
   * The information about the resource. Example: `[{"instanceId":"i-uf6j91r34rnwawoo****"}]` or `[{"userId":"100931896542****"}]`.
   * 
   * Valid values of N: 1 to 500.
   * 
   * For more information about the supported dimensions that are used to query resources, see [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * This parameter is required.
   * 
   * @example
   * [{"instanceId":"i-uf6j91r34rnwawoo****"}]
   */
  resources?: string;
  /**
   * @remarks
   * The ID of the alert rule.
   * 
   * Valid values of N: 1 to 500.
   * 
   * You can specify a new ID or the ID of an existing alert rule. For information about how to query the ID of an alert rule, see [DescribeMetricRuleList](https://help.aliyun.com/document_detail/114941.html).
   * 
   * >  If you specify a new ID, a threshold-triggered alert rule is created.
   * 
   * This parameter is required.
   * 
   * @example
   * a151cd6023eacee2f0978e03863cc1697c89508****
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the alert rule.
   * 
   * Valid values of N: 1 to 500.
   * 
   * You can specify a new name or the name of an existing alert rule. For information about how to query the name of an alert rule, see [DescribeMetricRuleList](https://help.aliyun.com/document_detail/114941.html).
   * 
   * >  If you specify a new name, a threshold-triggered alert rule is created.
   * 
   * This parameter is required.
   * 
   * @example
   * test123
   */
  ruleName?: string;
  /**
   * @remarks
   * The mute period during which new alert notifications are not sent even if the trigger conditions are met.
   * 
   * Unit: seconds. Default value: 86400.
   * 
   * Valid values of N: 1 to 500.
   * 
   * >  If an alert is not cleared after the mute period ends, CloudMonitor resends an alert notification.
   * 
   * @example
   * 86400
   */
  silenceTime?: number;
  /**
   * @remarks
   * The callback URL to which a POST request is sent when an alert is triggered based on the alert rule.
   * 
   * Valid values of N: 1 to 500.
   * 
   * @example
   * https://alert.aliyun.com.com:8080/callback
   */
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      escalations: 'Escalations',
      contactGroups: 'ContactGroups',
      effectiveInterval: 'EffectiveInterval',
      emailSubject: 'EmailSubject',
      interval: 'Interval',
      labels: 'Labels',
      metricName: 'MetricName',
      namespace: 'Namespace',
      noDataPolicy: 'NoDataPolicy',
      noEffectiveInterval: 'NoEffectiveInterval',
      period: 'Period',
      resources: 'Resources',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      silenceTime: 'SilenceTime',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalations: PutResourceMetricRulesRequestRulesEscalations,
      contactGroups: 'string',
      effectiveInterval: 'string',
      emailSubject: 'string',
      interval: 'string',
      labels: { 'type': 'array', 'itemType': PutResourceMetricRulesRequestRulesLabels },
      metricName: 'string',
      namespace: 'string',
      noDataPolicy: 'string',
      noEffectiveInterval: 'string',
      period: 'string',
      resources: 'string',
      ruleId: 'string',
      ruleName: 'string',
      silenceTime: 'number',
      webhook: 'string',
    };
  }

  validate() {
    if(this.escalations && typeof (this.escalations as any).validate === 'function') {
      (this.escalations as any).validate();
    }
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The threshold-triggered alert rules.
   * 
   * Valid values of N: 1 to 500.
   * 
   * This parameter is required.
   */
  rules?: PutResourceMetricRulesRequestRules[];
  static names(): { [key: string]: string } {
    return {
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rules: { 'type': 'array', 'itemType': PutResourceMetricRulesRequestRules },
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

