// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProductQuotaResponseBodyQuotaPeriod extends $dara.Model {
  /**
   * @remarks
   * The unit of the quota period. Valid values:
   * 
   * - second: Seconds.
   * 
   * - minute: Minutes.
   * 
   * - hour: Hours.
   * 
   * - day: Days.
   * 
   * - week: Weeks.
   * 
   * @example
   * day
   */
  periodUnit?: string;
  /**
   * @remarks
   * The value of the quota period.
   * 
   * @example
   * 1
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

export class GetProductQuotaResponseBodyQuotaQuotaItems extends $dara.Model {
  /**
   * @remarks
   * The quota value.
   * 
   * @example
   * 801
   */
  quota?: string;
  /**
   * @remarks
   * The quota unit.
   * 
   * > The unit varies for each quota. For example, the unit of the q_cbdch3 quota (maximum number of clusters) for Container Service for Kubernetes is Cluster, and the unit of the q_security-groups quota (maximum number of security groups) for Elastic Compute Service servers is count.
   * 
   * @example
   * Count
   */
  quotaUnit?: string;
  /**
   * @remarks
   * The quota item type. Valid values:
   * 
   * - BaseQuota: Base quota.
   * 
   * - ReservedQuota: Reserved quota.
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
   * 26
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

export class GetProductQuotaResponseBodyQuotaUsageMetric extends $dara.Model {
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
   * The CloudMonitor metric name.
   * 
   * @example
   * Usage
   */
  metricName?: string;
  /**
   * @remarks
   * The CloudMonitor metric namespace.
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

export class GetProductQuotaResponseBodyQuota extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the quota is adjustable. Valid values:
   * 
   * - true: Adjustable.
   * 
   * - false: Not adjustable.
   * 
   * @example
   * true
   */
  adjustable?: boolean;
  /**
   * @remarks
   * The applicable range for quota adjustment.
   */
  applicableRange?: number[];
  /**
   * @remarks
   * The type of quota adjustment. Valid values:
   * 
   * - continuous: Continuous.
   * 
   * - discontinuous: Discontinuous.
   * 
   * @example
   * continuous
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
   * Indicates whether the used quota is displayed. Valid values:
   * 
   * - true: The used quota is displayed.
   * 
   * - false: The used quota is not displayed.
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
   * 2022-09-28T06:06:00Z
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The UTC time when the quota expires.
   * 
   * @example
   * 2022-09-29T06:06:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * Indicates whether the quota is a global quota. Valid values:
   * - true: The quota item is shared across all regions.
   * - false: The quota item is independent for each region.
   * 
   * @example
   * true
   */
  globalQuota?: boolean;
  /**
   * @remarks
   * The quota period.
   */
  period?: GetProductQuotaResponseBodyQuotaPeriod;
  /**
   * @remarks
   * The abbreviated name of the cloud service.
   * 
   * @example
   * ecs
   */
  productCode?: string;
  /**
   * @remarks
   * The quota ID.
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
   * acs:quotas:cn-hangzhou:120886317861****:quota/ecs/q_security-groups/
   */
  quotaArn?: string;
  /**
   * @remarks
   * The quota category. Valid values:
   * - CommonQuota: General quota.
   * 
   * - FlowControl: API rate limit.
   * 
   * - WhiteListLabel: Privilege.
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
  quotaItems?: GetProductQuotaResponseBodyQuotaQuotaItems[];
  /**
   * @remarks
   * The quota name.
   * 
   * @example
   * Maximum Number of Security Groups
   */
  quotaName?: string;
  /**
   * @remarks
   * The quota type. Valid values:
   * 
   * - privilege: Privilege.
   * 
   * - normal: Normal.
   * 
   * @example
   * normal
   */
  quotaType?: string;
  /**
   * @remarks
   * The quota unit.
   * 
   * > The unit varies for each quota. For example, the unit of the q_cbdch3 quota (maximum number of clusters) for Container Service for Kubernetes is Cluster, and the unit of the q_security-groups quota (maximum number of security groups) for Elastic Compute Service servers is count.
   * 
   * @example
   * Count
   */
  quotaUnit?: string;
  /**
   * @remarks
   * The supported range of quota values for the current quota item, which can be used as a reference when configuring a quota template.
   */
  supportedRange?: number[];
  /**
   * @remarks
   * The quota value.
   * 
   * @example
   * 801
   */
  totalQuota?: number;
  /**
   * @remarks
   * The quota usage.
   * 
   * @example
   * 26
   */
  totalUsage?: number;
  /**
   * @remarks
   * The reason why the quota cannot be adjusted. Valid values:
   * 
   * - nonactivated: The service is not activated.
   * 
   * - applicationProcess: The quota application is being processed.
   * 
   * - limitReached: The quota limit is reached.
   * 
   * - supportTicketRequired: A ticket must be submitted for the application.
   * 
   * @example
   * limitReached
   */
  unadjustableDetail?: string;
  /**
   * @remarks
   * The monitoring information of the quota usage in CloudMonitor.
   * 
   * > An empty value indicates that no monitoring data is available for this quota in CloudMonitor.
   */
  usageMetric?: GetProductQuotaResponseBodyQuotaUsageMetric;
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
      period: GetProductQuotaResponseBodyQuotaPeriod,
      productCode: 'string',
      quotaActionCode: 'string',
      quotaArn: 'string',
      quotaCategory: 'string',
      quotaDescription: 'string',
      quotaItems: { 'type': 'array', 'itemType': GetProductQuotaResponseBodyQuotaQuotaItems },
      quotaName: 'string',
      quotaType: 'string',
      quotaUnit: 'string',
      supportedRange: { 'type': 'array', 'itemType': 'number' },
      totalQuota: 'number',
      totalUsage: 'number',
      unadjustableDetail: 'string',
      usageMetric: GetProductQuotaResponseBodyQuotaUsageMetric,
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

export class GetProductQuotaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The quota details.
   */
  quota?: GetProductQuotaResponseBodyQuota;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8FF8CAF0-29D9-4F11-B6A4-FD2CBCA016D3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      quota: 'Quota',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quota: GetProductQuotaResponseBodyQuota,
      requestId: 'string',
    };
  }

  validate() {
    if(this.quota && typeof (this.quota as any).validate === 'function') {
      (this.quota as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

