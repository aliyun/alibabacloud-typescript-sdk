// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProductQuotasResponseBodyQuotasPeriod extends $dara.Model {
  /**
   * @remarks
   * The unit of the quota calculation period.
   * 
   * @example
   * day
   */
  periodUnit?: string;
  /**
   * @remarks
   * The value of the quota calculation period.
   * 
   * @example
   * {}
   */
  periodValue?: number;
  static names(): { [key: string]: string } {
    return {
      periodUnit: 'PeriodUnit',
      periodValue: 'PeriodValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      periodUnit: 'string',
      periodValue: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductQuotasResponseBodyQuotasQuotaItems extends $dara.Model {
  /**
   * @remarks
   * The quota value.
   * 
   * @example
   * 1009
   */
  quota?: string;
  /**
   * @remarks
   * The quota unit.
   * 
   * @example
   * Count
   */
  quotaUnit?: string;
  /**
   * @remarks
   * The quota category.
   * 
   * @example
   * BaseQuota
   */
  type?: string;
  /**
   * @remarks
   * The quota usage.
   * 
   * @example
   * 1009
   */
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      quota: 'Quota',
      quotaUnit: 'QuotaUnit',
      type: 'Type',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quota: 'string',
      quotaUnit: 'string',
      type: 'string',
      usage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductQuotasResponseBodyQuotasUsageMetric extends $dara.Model {
  /**
   * @remarks
   * The CloudMonitor monitoring dimensions.
   * 
   * Format: a collection of `key:value` pairs. Example:
   * `{"productCode":"***","metricKey":"***","regionId":"***","label":"***"}`.
   */
  metricDimensions?: { [key: string]: string };
  /**
   * @remarks
   * The name of the CloudMonitor monitoring metric.
   * 
   * @example
   * Usage
   */
  metricName?: string;
  /**
   * @remarks
   * The namespace of the CloudMonitor monitoring data.
   * 
   * @example
   * acs_quotas_flowcontrol
   */
  metricNamespace?: string;
  static names(): { [key: string]: string } {
    return {
      metricDimensions: 'MetricDimensions',
      metricName: 'MetricName',
      metricNamespace: 'MetricNamespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricDimensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      metricName: 'string',
      metricNamespace: 'string',
    };
  }

  validate() {
    if(this.metricDimensions) {
      $dara.Model.validateMap(this.metricDimensions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductQuotasResponseBodyQuotas extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the quota is adjustable.
   * 
   * @example
   * true
   */
  adjustable?: boolean;
  /**
   * @remarks
   * The range of quota values that can be applied for the current quota item, which serves as a reference for quota applications.
   */
  applicableRange?: number[];
  /**
   * @remarks
   * The quota adjustment type.
   * 
   * @example
   * discontinuous
   */
  applicableType?: string;
  /**
   * @remarks
   * The sample reasons for applying for a quota adjustment.
   * 
   * @example
   * The business xxx is expected to grow by 50%.
   */
  applyReasonTips?: string;
  /**
   * @remarks
   * Indicates whether the used quota is displayed.
   * 
   * @example
   * true
   */
  consumable?: boolean;
  /**
   * @remarks
   * The quota dimensions. Format: `{"regionId":"region"}`.
   * 
   * @example
   * {"regionId":"cn-hangzhou"}
   */
  dimensions?: { [key: string]: any };
  /**
   * @remarks
   * The UTC time when the quota takes effect.
   * 
   * @example
   * 2022-09-28T06:07:00Z
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The UTC time when the quota expires.
   * 
   * @example
   * 2022-09-29T06:07:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * Indicates whether the quota is a global quota.
   * 
   * @example
   * true
   */
  globalQuota?: boolean;
  /**
   * @remarks
   * The quota calculation period.
   */
  period?: ListProductQuotasResponseBodyQuotasPeriod;
  /**
   * @remarks
   * The abbreviation of the cloud service name.
   * 
   * @example
   * ecs
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the quota.
   * 
   * @example
   * q_security-groups
   */
  quotaActionCode?: string;
  /**
   * @remarks
   * The ARN of the quota.
   * 
   * @example
   * acs:quotas:cn-hangzhou:120886317861****:quota/ecs/q_security-groups
   */
  quotaArn?: string;
  /**
   * @remarks
   * The quota type.
   * 
   * @example
   * CommonQuota
   */
  quotaCategory?: string;
  /**
   * @remarks
   * The quota description.
   * 
   * @example
   * The maximum number of security groups that can be owned by the current account.
   */
  quotaDescription?: string;
  /**
   * @remarks
   * The quota details.
   */
  quotaItems?: ListProductQuotasResponseBodyQuotasQuotaItems[];
  /**
   * @remarks
   * The quota name.
   * 
   * @example
   * ecs.g5.2xlarge
   */
  quotaName?: string;
  /**
   * @remarks
   * The quota type.
   * 
   * @example
   * privilege
   */
  quotaType?: string;
  /**
   * @remarks
   * The quota unit.
   * 
   * @example
   * AMOUNT
   */
  quotaUnit?: string;
  /**
   * @remarks
   * The range of quota values supported by the current quota item, which serves as a reference when you configure a quota template.
   */
  supportedRange?: number[];
  /**
   * @remarks
   * The quota value.
   * 
   * @example
   * 200
   */
  totalQuota?: number;
  /**
   * @remarks
   * The quota usage.
   * 
   * @example
   * 1009
   */
  totalUsage?: number;
  /**
   * @remarks
   * The reason why the quota is not adjustable.
   * 
   * @example
   * applicationProcess
   */
  unadjustableDetail?: string;
  /**
   * @remarks
   * The monitoring information of the quota usage in CloudMonitor.
   * 
   * > An empty value indicates that no monitoring data is available for this quota in CloudMonitor.
   */
  usageMetric?: ListProductQuotasResponseBodyQuotasUsageMetric;
  static names(): { [key: string]: string } {
    return {
      adjustable: 'Adjustable',
      applicableRange: 'ApplicableRange',
      applicableType: 'ApplicableType',
      applyReasonTips: 'ApplyReasonTips',
      consumable: 'Consumable',
      dimensions: 'Dimensions',
      effectiveTime: 'EffectiveTime',
      expireTime: 'ExpireTime',
      globalQuota: 'GlobalQuota',
      period: 'Period',
      productCode: 'ProductCode',
      quotaActionCode: 'QuotaActionCode',
      quotaArn: 'QuotaArn',
      quotaCategory: 'QuotaCategory',
      quotaDescription: 'QuotaDescription',
      quotaItems: 'QuotaItems',
      quotaName: 'QuotaName',
      quotaType: 'QuotaType',
      quotaUnit: 'QuotaUnit',
      supportedRange: 'SupportedRange',
      totalQuota: 'TotalQuota',
      totalUsage: 'TotalUsage',
      unadjustableDetail: 'UnadjustableDetail',
      usageMetric: 'UsageMetric',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjustable: 'boolean',
      applicableRange: { 'type': 'array', 'itemType': 'number' },
      applicableType: 'string',
      applyReasonTips: 'string',
      consumable: 'boolean',
      dimensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      effectiveTime: 'string',
      expireTime: 'string',
      globalQuota: 'boolean',
      period: ListProductQuotasResponseBodyQuotasPeriod,
      productCode: 'string',
      quotaActionCode: 'string',
      quotaArn: 'string',
      quotaCategory: 'string',
      quotaDescription: 'string',
      quotaItems: { 'type': 'array', 'itemType': ListProductQuotasResponseBodyQuotasQuotaItems },
      quotaName: 'string',
      quotaType: 'string',
      quotaUnit: 'string',
      supportedRange: { 'type': 'array', 'itemType': 'number' },
      totalQuota: 'number',
      totalUsage: 'number',
      unadjustableDetail: 'string',
      usageMetric: ListProductQuotasResponseBodyQuotasUsageMetric,
    };
  }

  validate() {
    if(Array.isArray(this.applicableRange)) {
      $dara.Model.validateArray(this.applicableRange);
    }
    if(this.dimensions) {
      $dara.Model.validateMap(this.dimensions);
    }
    if(this.period && typeof (this.period as any).validate === 'function') {
      (this.period as any).validate();
    }
    if(Array.isArray(this.quotaItems)) {
      $dara.Model.validateArray(this.quotaItems);
    }
    if(Array.isArray(this.supportedRange)) {
      $dara.Model.validateArray(this.supportedRange);
    }
    if(this.usageMetric && typeof (this.usageMetric as any).validate === 'function') {
      (this.usageMetric as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductQuotasResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of records returned for the current query.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * Indicates whether a token for the next query is available.
   * 
   * - If NextToken is empty, it indicates that no subsequent query is available.
   * - If NextToken is returned, the value is the token used to start the next query.
   * 
   * @example
   * AAAAAd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The quota details.
   */
  quotas?: ListProductQuotasResponseBodyQuotas[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D0131FD5-5397-44FE-BF5A-4B7165B813CC
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records returned for the current request.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      quotas: 'Quotas',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      quotas: { 'type': 'array', 'itemType': ListProductQuotasResponseBodyQuotas },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.quotas)) {
      $dara.Model.validateArray(this.quotas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

