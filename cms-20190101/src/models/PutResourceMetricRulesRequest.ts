// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutResourceMetricRulesRequestRulesEscalationsCritical extends $dara.Model {
  /**
   * @remarks
   * Critical级别阈值比较符。取值：
   * 
   * - GreaterThanOrEqualToThreshold：大于等于。
   * - GreaterThanThreshold：大于。
   * - LessThanOrEqualToThreshold：小于等于。
   * - LessThanThreshold：小于。
   * - NotEqualToThreshold：不等于。
   * - EqualToThreshold：等于。
   * - GreaterThanYesterday：同比昨天时间上涨。
   * - LessThanYesterday：同比昨天时间下降。
   * - GreaterThanLastWeek：同比上周同一时间上涨。
   * - LessThanLastWeek：同比上周同一时间下降。
   * - GreaterThanLastPeriod：环比上周期上涨。
   * - LessThanLastPeriod：环比上周期下降。
   * 
   * N的取值范围：1~50。
   * 
   * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
   * 
   * @example
   * GreaterThanOrEqualToThreshold
   */
  comparisonOperator?: string;
  n?: number;
  preCondition?: string;
  /**
   * @remarks
   * Critical级别报警统计方法。
   * 
   * N的取值范围：1~50。
   * 
   * 该参数的取值由指定云产品的`MetricName`对应的`Statistics`列决定，例如：Maximum、Minimum和Average。关于如何获取该参数的取值，请参见[云产品监控项](https://help.aliyun.com/document_detail/163515.html)。
   * 
   * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * Critical级别报警阈值。
   * 
   * N的取值范围：1~50。
   * 
   * 
   * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
   * 
   * @example
   * 90
   */
  threshold?: string;
  /**
   * @remarks
   * Critical级别报警重试次数。
   * 
   * N的取值范围：1~50。
   * 
   * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
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
   * Info级别阈值比较符。取值：
   * 
   * - GreaterThanOrEqualToThreshold：大于等于。
   * - GreaterThanThreshold：大于。
   * - LessThanOrEqualToThreshold：小于等于。
   * - LessThanThreshold：小于。
   * - NotEqualToThreshold：不等于。
   * - EqualToThreshold：等于。
   * - GreaterThanYesterday：同比昨天时间上涨。
   * - LessThanYesterday：同比昨天时间下降。
   * - GreaterThanLastWeek：同比上周同一时间上涨。
   * - LessThanLastWeek：同比上周同一时间下降。
   * - GreaterThanLastPeriod：环比上周期上涨。
   * - LessThanLastPeriod：环比上周期下降。
   * 
   * N的取值范围：1~50。
   * 
   * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
   * 
   * @example
   * GreaterThanOrEqualToThreshold
   */
  comparisonOperator?: string;
  n?: number;
  preCondition?: string;
  /**
   * @remarks
   * Info级别报警统计方法。
   * 
   * N的取值范围：1~50。
   * 
   * 该参数的取值由指定云产品的`MetricName`对应的`Statistics`列决定，例如：Maximum、Minimum和Average。关于如何获取该参数的取值，请参见[云产品监控项](https://help.aliyun.com/document_detail/163515.html)。
   * 
   * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * Info级别报警阈值。
   * 
   * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
   * 
   * @example
   * 90
   */
  threshold?: string;
  /**
   * @remarks
   * Info级别报警重试次数。
   * 
   * N的取值范围：1~50。
   * 
   * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
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
   * Warn级别阈值比较符。取值：
   * 
   * - GreaterThanOrEqualToThreshold：大于等于。
   * - GreaterThanThreshold：大于。
   * - LessThanOrEqualToThreshold：小于等于。
   * - LessThanThreshold：小于。
   * - NotEqualToThreshold：不等于。
   * - EqualToThreshold：等于。
   * - GreaterThanYesterday：同比昨天时间上涨。
   * - LessThanYesterday：同比昨天时间下降。
   * - GreaterThanLastWeek：同比上周同一时间上涨。
   * - LessThanLastWeek：同比上周同一时间下降。
   * - GreaterThanLastPeriod：环比上周期上涨。
   * - LessThanLastPeriod：环比上周期下降。
   * 
   * N的取值范围：1~50。
   * 
   * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
   * 
   * @example
   * GreaterThanOrEqualToThreshold
   */
  comparisonOperator?: string;
  n?: number;
  preCondition?: string;
  /**
   * @remarks
   * Warn级别报警统计方法。
   * 
   * N的取值范围：1~50。
   * 
   * 该参数的取值由指定云产品的`MetricName`对应的`Statistics`列决定，例如：Maximum、Minimum和Average。关于如何获取该参数的取值，请参见[云产品监控项](https://help.aliyun.com/document_detail/163515.html)。
   * 
   * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * Warn级别报警阈值。
   * 
   * N的取值范围：1~50。
   * 
   * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
   * 
   * @example
   * 90
   */
  threshold?: string;
  /**
   * @remarks
   * Warn级别报警重试次数。
   * 
   * N的取值范围：1~50。
   * 
   * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
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
   * 标签键。
   * 
   * @example
   * tagKey1
   */
  key?: string;
  /**
   * @remarks
   * 标签值。
   * 
   * > 标签值支持模板参数，将模板参数替换为实际标签值。
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
   * 报警联系组。报警通知会发送给该报警联系组中的报警联系人。
   * 
   * N的取值范围：1~50。
   * 
   * > 报警联系组是一组报警联系人，可以包含一个或多个报警联系人。关于如何创建报警联系人和报警联系组，请参见[PutContact](https://help.aliyun.com/document_detail/114923.html)和[PutContactGroup](https://help.aliyun.com/document_detail/114929.html)。
   * 
   * This parameter is required.
   * 
   * @example
   * ECS_Group
   */
  contactGroups?: string;
  /**
   * @remarks
   * 报警规则的生效时间范围。
   * 
   * N的取值范围：1~50。
   * 
   * @example
   * 00:00-23:59
   */
  effectiveInterval?: string;
  /**
   * @remarks
   * 报警邮件主题。
   * 
   * N的取值范围：1~50。
   * 
   * @example
   * ECS instance alert
   */
  emailSubject?: string;
  /**
   * @remarks
   * 报警规则的触发周期。
   * 
   * 单位：秒。
   * 
   * N的取值范围：1~50。
   * 
   * >关于如何查询监控项的统计周期，请参见[云产品监控项](https://help.aliyun.com/document_detail/163515.html)。
   * 
   * @example
   * 60
   */
  interval?: string;
  /**
   * @remarks
   * 当监控项达到报警条件并进行报警时，标签同时写入监控项，在报警通知中进行展示。
   */
  labels?: PutResourceMetricRulesRequestRulesLabels[];
  /**
   * @remarks
   * 监控项名称。
   * 
   * N的取值范围：1~50。
   * 
   * 关于如何查询监控项名称，请参见[云产品监控项](https://help.aliyun.com/document_detail/163515.html)。
   * 
   * @example
   * cpu_total
   */
  metricName?: string;
  /**
   * @remarks
   * 云产品的数据命名空间。
   * 
   * N的取值范围：1~50。
   * 
   * 关于如何查询云产品的数据命名空间，请参见[云产品监控项](https://help.aliyun.com/document_detail/163515.html)。
   * 
   * This parameter is required.
   * 
   * @example
   * acs_ecs_dashboard
   */
  namespace?: string;
  /**
   * @remarks
   * 无监控数据时报警的处理方式。取值：
   * 
   * - KEEP_LAST_STATE（默认值）：不做任何处理。
   * - INSUFFICIENT_DATA：报警内容为无数据。
   * - OK：正常。
   * 
   * N的取值范围：1~50。
   * 
   * @example
   * KEEP_LAST_STATE
   */
  noDataPolicy?: string;
  /**
   * @remarks
   * 报警规则的失效时间范围。
   * 
   * N的取值范围：1~50。
   * 
   * @example
   * 00:00-06:00
   */
  noEffectiveInterval?: string;
  /**
   * @remarks
   * 监控项的统计周期。
   * 
   * 单位：秒。默认为监控项的原始上报周期。
   * 
   * N的取值范围：1~50。
   * 
   * >关于如何查询监控项的统计周期，请参见[云产品监控项](https://help.aliyun.com/document_detail/163515.html)。
   * 
   * @example
   * 60
   */
  period?: string;
  /**
   * @remarks
   * 资源信息，例如：`[{"instanceId":"i-uf6j91r34rnwawoo****"}]`、`[{"userId":"100931896542****"}]`。
   * 
   * N的取值范围：1~50。
   * 
   * 关于资源信息支持的维度Dimensions，请参见[云产品监控项](https://help.aliyun.com/document_detail/163515.html)。
   * 
   * This parameter is required.
   * 
   * @example
   * [{"instanceId":"i-uf6j91r34rnwawoo****"}]
   */
  resources?: string;
  /**
   * @remarks
   * 报警规则ID。
   * 
   * N的取值范围：1~50。
   * 
   * 您可以输入新的报警规则ID，也可以使用云监控已存在的报警规则ID。关于如何查询报警规则ID，请参见[DescribeMetricRuleList](https://help.aliyun.com/document_detail/114941.html)。
   * 
   * > 输入新的报警规则ID，表示创建一条阈值报警规则。
   * 
   * This parameter is required.
   * 
   * @example
   * a151cd6023eacee2f0978e03863cc1697c89508****
   */
  ruleId?: string;
  /**
   * @remarks
   * 报警规则名称。
   * 
   * N的取值范围：1~50。
   * 
   * 您可以输入新的报警规则名称，也可以使用云监控已存在的报警规则名称。关于如何查询报警规则名称，请参见[DescribeMetricRuleList](https://help.aliyun.com/document_detail/114941.html)。
   * 
   * > 输入新的报警规则名称，表示创建一条阈值报警规则。
   * 
   * This parameter is required.
   * 
   * @example
   * test123
   */
  ruleName?: string;
  /**
   * @remarks
   * 是否发送恢复通知
   * 
   * @example
   * true
   */
  sendOK?: boolean;
  /**
   * @remarks
   * 通道沉默周期。
   * 
   * 单位：秒，默认值：86400。
   * 
   * N的取值范围：1~50。
   * 
   * > 通道沉默周期是指报警发生后未恢复正常，间隔多久重新发送一次报警通知。
   * 
   * @example
   * 86400
   */
  silenceTime?: number;
  /**
   * @remarks
   * 报警发生回调时指定的URL地址，向URL发送POST请求。
   * 
   * N的取值范围：1~50。
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
   * The list of threshold alert rules.
   * 
   * Valid values of N: 1 to 50.
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

