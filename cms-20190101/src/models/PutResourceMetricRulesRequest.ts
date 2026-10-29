// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutResourceMetricRulesRequestRulesEscalationsCritical extends $dara.Model {
  /**
   * @remarks
   * The comparison operator for the Critical-level threshold. Valid values:
   * 
   * - GreaterThanOrEqualToThreshold: greater than or equal to.
   * - GreaterThanThreshold: greater than.
   * - LessThanOrEqualToThreshold: less than or equal to.
   * - LessThanThreshold: less than.
   * - NotEqualToThreshold: not equal to.
   * - EqualToThreshold: equal to.
   * - GreaterThanYesterday: greater than the value at the same time yesterday.
   * - LessThanYesterday: less than the value at the same time yesterday.
   * - GreaterThanLastWeek: greater than the value at the same time last week.
   * - LessThanLastWeek: less than the value at the same time last week.
   * - GreaterThanLastPeriod: greater than the value in the previous period.
   * - LessThanLastPeriod: less than the value in the previous period.
   * 
   * Valid values of N: 1 to 50.
   * 
   * > You must configure at least one of the following alert levels: Critical, Warn, and Info. For the configured alert level, you must configure the Statistics, ComparisonOperator, Threshold, and Times parameters at the same time.
   * 
   * @example
   * GreaterThanOrEqualToThreshold
   */
  comparisonOperator?: string;
  n?: number;
  preCondition?: string;
  /**
   * @remarks
   * The statistical method for Critical-level alerts.
   * 
   * Valid values of N: 1 to 50.
   * 
   * The value of this parameter is determined by the `Statistics` column corresponding to the `MetricName` parameter of the specified Alibaba Cloud service, such as Maximum, Minimum, and Average. For more information about how to obtain the value of this parameter, see [Alibaba Cloud service monitoring metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * > You must configure the Settings for at least one of the following alert levels: Critical, Warn (warning), and Info. For the configured alert level, you must configure the Statistics, ComparisonOperator, Threshold, and Times parameters at the same time.
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * The threshold for Critical-level alerts.
   * 
   * Valid values of N: 1 to 50.
   * 
   * 
   * > You must configure at least one of the following alert levels: Critical, Warn, and Info. For the configured alert level, you must configure the Statistics, ComparisonOperator, Threshold, and Times parameters at the same time.
   * 
   * @example
   * 90
   */
  threshold?: string;
  /**
   * @remarks
   * The number of retries for Critical-level alerts.
   * 
   * Valid values of N: 1 to 50.
   * 
   * > You must configure at least one of the following alert levels: Critical, Warn, and Info. For the configured alert level, you must configure the Statistics, ComparisonOperator, Threshold, and Times parameters at the same time.
   * 
   * @example
   * 3
   */
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
  /**
   * @remarks
   * The comparison operator for the Info-level threshold. Valid values:
   * 
   * - GreaterThanOrEqualToThreshold: greater than or equal to.
   * - GreaterThanThreshold: greater than.
   * - LessThanOrEqualToThreshold: less than or equal to.
   * - LessThanThreshold: less than.
   * - NotEqualToThreshold: not equal to.
   * - EqualToThreshold: equal to.
   * - GreaterThanYesterday: greater than the value at the same time yesterday.
   * - LessThanYesterday: less than the value at the same time yesterday.
   * - GreaterThanLastWeek: greater than the value at the same time last week.
   * - LessThanLastWeek: less than the value at the same time last week.
   * - GreaterThanLastPeriod: greater than the value in the previous period.
   * - LessThanLastPeriod: less than the value in the previous period.
   * 
   * Valid values of N: 1 to 50.
   * 
   * > You must configure at least one of the following alert levels: Critical, Warn, and Info. For the configured alert level, you must configure the Statistics, ComparisonOperator, Threshold, and Times parameters at the same time.
   * 
   * @example
   * GreaterThanOrEqualToThreshold
   */
  comparisonOperator?: string;
  n?: number;
  preCondition?: string;
  /**
   * @remarks
   * The statistical method for Info-level alerts.
   * 
   * Valid values of N: 1 to 50.
   * 
   * The value of this parameter is determined by the `Statistics` column corresponding to the `MetricName` parameter of the specified Alibaba Cloud service, such as Maximum, Minimum, and Average. For more information about how to obtain the value of this parameter, see [Alibaba Cloud service monitoring metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * > You must configure the Settings for at least one of the following alert levels: Critical, Warn (warning), and Info. For the configured alert level, you must configure the Statistics, ComparisonOperator, Threshold, and Times parameters at the same time.
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * The threshold for Info-level alerts.
   * 
   * > You must configure at least one of the following alert levels: Critical, Warn, and Info. For the configured alert level, you must configure the Statistics, ComparisonOperator, Threshold, and Times parameters at the same time.
   * 
   * @example
   * 90
   */
  threshold?: string;
  /**
   * @remarks
   * The number of retries for Info-level alerts.
   * 
   * Valid values of N: 1 to 50.
   * 
   * > You must configure at least one of the following alert levels: Critical, Warn, and Info. For the configured alert level, you must configure the Statistics, ComparisonOperator, Threshold, and Times parameters at the same time.
   * 
   * @example
   * 3
   */
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
  /**
   * @remarks
   * The comparison operator for the Warn-level threshold. Valid values:
   * 
   * - GreaterThanOrEqualToThreshold: greater than or equal to.
   * - GreaterThanThreshold: greater than.
   * - LessThanOrEqualToThreshold: less than or equal to.
   * - LessThanThreshold: less than.
   * - NotEqualToThreshold: not equal to.
   * - EqualToThreshold: equal to.
   * - GreaterThanYesterday: greater than the value at the same time yesterday.
   * - LessThanYesterday: less than the value at the same time yesterday.
   * - GreaterThanLastWeek: greater than the value at the same time last week.
   * - LessThanLastWeek: less than the value at the same time last week.
   * - GreaterThanLastPeriod: greater than the value in the previous period.
   * - LessThanLastPeriod: less than the value in the previous period.
   * 
   * Valid values of N: 1 to 50.
   * 
   * > You must configure at least one of the following alert levels: Critical, Warn, and Info. For the configured alert level, you must configure the Statistics, ComparisonOperator, Threshold, and Times parameters at the same time.
   * 
   * @example
   * GreaterThanOrEqualToThreshold
   */
  comparisonOperator?: string;
  n?: number;
  preCondition?: string;
  /**
   * @remarks
   * The statistical method for Warn-level alerts.
   * 
   * Valid values of N: 1 to 50.
   * 
   * The value of this parameter is determined by the `Statistics` column corresponding to the `MetricName` parameter of the specified Alibaba Cloud service, such as Maximum, Minimum, and Average. For more information about how to obtain the value of this parameter, see [Alibaba Cloud service monitoring metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * > You must configure the Settings for at least one of the following alert levels: Critical, Warn (warning), and Info. For the configured alert level, you must configure the Statistics, ComparisonOperator, Threshold, and Times parameters at the same time.
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * The threshold for Warn-level alerts.
   * 
   * Valid values of N: 1 to 50.
   * 
   * > You must configure at least one of the following alert levels: Critical, Warn, and Info. For the configured alert level, you must configure the Statistics, ComparisonOperator, Threshold, and Times parameters at the same time.
   * 
   * @example
   * 90
   */
  threshold?: string;
  /**
   * @remarks
   * The number of retries for Warn-level alerts.
   * 
   * Valid values of N: 1 to 50.
   * 
   * > You must configure at least one of the following alert levels: Critical, Warn, and Info. For the configured alert level, you must configure the Statistics, ComparisonOperator, Threshold, and Times parameters at the same time.
   * 
   * @example
   * 3
   */
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
   * > Tag values support template parameters. The template parameters are replaced with the actual tag values.
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
   * The alert contact group. Alert notifications are sent to the alert contacts in this alert contact group.
   * 
   * Valid values of N: 1 to 50.
   * 
   * > An alert contact group is a group of alert contacts and can contain one or more alert contacts. For more information about how to create alert contacts and alert contact groups, see [PutContact](https://help.aliyun.com/document_detail/114923.html) and [PutContactGroup](https://help.aliyun.com/document_detail/114929.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ECS_Group
   */
  contactGroups?: string;
  /**
   * @remarks
   * The effective period of the alert rule.
   * 
   * Valid values of N: 1 to 50.
   * 
   * @example
   * 00:00-23:59
   */
  effectiveInterval?: string;
  /**
   * @remarks
   * The subject of the alert email.
   * 
   * Valid values of N: 1 to 50.
   * 
   * @example
   * ECS instance alert
   */
  emailSubject?: string;
  /**
   * @remarks
   * The trigger period of the alert rule.
   * 
   * Unit: seconds.
   * 
   * Valid values of N: 1 to 50.
   * 
   * > For more information about how to query the statistical period of a monitoring metric, see [Alibaba Cloud service monitoring metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * @example
   * 60
   */
  interval?: string;
  /**
   * @remarks
   * The labels that are written to the metric and displayed in the alert notification when the metric meets the alert condition and an alert is triggered.
   */
  labels?: PutResourceMetricRulesRequestRulesLabels[];
  /**
   * @remarks
   * The monitoring metric name.
   * 
   * Valid values of N: 1 to 50.
   * 
   * For more information about how to query the monitoring metric name, see [Alibaba Cloud service monitoring metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * @example
   * cpu_total
   */
  metricName?: string;
  /**
   * @remarks
   * The data namespace of the Alibaba Cloud service.
   * 
   * Valid values of N: 1 to 50.
   * 
   * For more information about how to query the data namespace of an Alibaba Cloud service, see [Alibaba Cloud service monitoring metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * This parameter is required.
   * 
   * @example
   * acs_ecs_dashboard
   */
  namespace?: string;
  /**
   * @remarks
   * The handling method for alerts when no monitoring data is available. Valid values:
   * 
   * - KEEP_LAST_STATE (default): No operations are performed.
   * - INSUFFICIENT_DATA: The alert content indicates that no data is available.
   * - OK: Normal.
   * 
   * Valid values of N: 1 to 50.
   * 
   * @example
   * KEEP_LAST_STATE
   */
  noDataPolicy?: string;
  /**
   * @remarks
   * The inactive time range of the alert rule.
   * 
   * Valid values of N: 1 to 50.
   * 
   * @example
   * 00:00-06:00
   */
  noEffectiveInterval?: string;
  /**
   * @remarks
   * The statistical period of the monitoring metric.
   * 
   * Unit: seconds. Default value: the original reporting period of the monitoring metric.
   * 
   * Valid values of N: 1 to 50.
   * 
   * > For more information about how to query the statistical period of a monitoring metric, see [Alibaba Cloud service monitoring metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * @example
   * 60
   */
  period?: string;
  /**
   * @remarks
   * The resource information. Examples: `[{"instanceId":"i-uf6j91r34rnwawoo****"}]` and `[{"userId":"100931896542****"}]`.
   * 
   * Valid values of N: 1 to 50.
   * 
   * For more information about the dimensions supported by resource information, see [Alibaba Cloud service monitoring metrics](https://help.aliyun.com/document_detail/163515.html).
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
   * Valid values of N: 1 to 50.
   * 
   * You can enter a new alert rule ID or use an existing alert rule ID in CloudMonitor. For more information about how to query the ID of an alert rule, see [DescribeMetricRuleList](https://help.aliyun.com/document_detail/114941.html).
   * 
   * > If you enter a new alert rule ID, a threshold alert rule is created.
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
   * Valid values of N: 1 to 50.
   * 
   * You can enter a new alert rule name or use an existing alert rule name in CloudMonitor. For more information about how to query the name of an alert rule, see [DescribeMetricRuleList](https://help.aliyun.com/document_detail/114941.html).
   * 
   * > If you enter a new alert rule name, a threshold alert rule is created.
   * 
   * This parameter is required.
   * 
   * @example
   * test123
   */
  ruleName?: string;
  /**
   * @remarks
   * Specifies whether to send a recovery notification.
   * 
   * @example
   * true
   */
  sendOK?: boolean;
  /**
   * @remarks
   * The mute epoch.
   * 
   * Unit: seconds. Default value: 86400.
   * 
   * Valid values of N: 1 to 50.
   * 
   * > The mute epoch refers to the interval at which to send an alert notification again if the alert does not recover to Normal after it is triggered.
   * 
   * @example
   * 86400
   */
  silenceTime?: number;
  /**
   * @remarks
   * The webhook URL to which a POST request is sent when an alert callback is triggered.
   * 
   * Valid values of N: 1 to 50.
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
      sendOK: 'SendOK',
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
      sendOK: 'boolean',
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
   * Specifies whether to only precheck the request. Valid values:
   * - **true**: The system only prechecks the request and does not bind a security group to the instance. The system checks whether required parameters are specified, the request format, and service limits. If the request fails the precheck, the corresponding error is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
   * - **false** (default): The system sends a normal request. After the request passes the precheck, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The list of threshold alert rules.
   * 
   * Valid values of N: 1 to 50.
   * 
   * This parameter is required.
   */
  rules?: PutResourceMetricRulesRequestRules[];
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
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

