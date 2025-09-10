// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProductQuotaResponseBodyQuotaPeriod extends $dara.Model {
  /**
   * @remarks
   * The unit of the calculation cycle of the quota. Valid values:
   * 
   * *   second
   * *   minute
   * *   hour
   * *   day
   * *   week
   * 
   * @example
   * Day
   */
  periodUnit?: string;
  /**
   * @remarks
   * The value of the calculation cycle of the quota.
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
   * The value of the quota.
   * 
   * @example
   * 801
   */
  quota?: string;
  /**
   * @remarks
   * The unit of the quota.
   * 
   * >  The unit of each quota is unique. For example, the quota whose ID is `q_cbdch3` represents the maximum number of ACK clusters. The unit of this quota is clusters. The quota whose ID is `q_security-groups` represents the maximum number of security groups. The unit of this quota is security groups.
   * 
   * @example
   * Count
   */
  quotaUnit?: string;
  /**
   * @remarks
   * The category of the quota. Valid values:
   * 
   * *   BaseQuota: base quota.
   * *   ReservedQuota: reserved quota.
   * 
   * @example
   * BaseQuota
   */
  type?: string;
  /**
   * @remarks
   * The used quota.
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
   * The monitoring dimensions.
   * 
   * The value is a collection of `key:value` pairs. Example: `{"productCode":"***","metricKey":"***","regionId":"***","label":"***"}`.
   */
  metricDimensions?: { [key: string]: string };
  /**
   * @remarks
   * The monitoring metric.
   * 
   * @example
   * Usage
   */
  metricName?: string;
  /**
   * @remarks
   * The monitoring namespace.
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
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  adjustable?: boolean;
  /**
   * @remarks
   * The range of the quota value that can be requested for the quota item.
   */
  applicableRange?: number[];
  /**
   * @remarks
   * The type of the adjustable value. Valid values:
   * 
   * *   continuous
   * *   discontinuous
   * 
   * @example
   * continuous
   */
  applicableType?: string;
  /**
   * @remarks
   * The reason for submitting a quota increase request.
   * 
   * @example
   * The business xxx is expected to grow by 50%.
   */
  applyReasonTips?: string;
  /**
   * @remarks
   * Indicates whether the system shows the used value of the quota. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  consumable?: boolean;
  /**
   * @remarks
   * The quota dimensions. Format: `{"regionId":"Region"}`.
   * 
   * @example
   * {"regionId":"cn-hangzhou"}
   */
  dimensions?: { [key: string]: any };
  /**
   * @remarks
   * The start time of the validity period of the quota. Specify the value in UTC.
   * 
   * @example
   * 2022-09-28T06:06:00Z
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The end time of the validity period of the quota. Specify the value in UTC.
   * 
   * @example
   * 2022-09-29T06:06:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * Indicates whether the quota is a global quota. Valid values:
   * 
   * *   true: The quota is shared in all regions.
   * *   false: The quota is independently used in a region.
   * 
   * @example
   * true
   */
  globalQuota?: boolean;
  /**
   * @remarks
   * The calculation cycle of the quota.
   */
  period?: GetProductQuotaResponseBodyQuotaPeriod;
  /**
   * @remarks
   * The abbreviation of the Alibaba Cloud service name.
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
   * The Alibaba Cloud Resource Name (ARN) of the quota.
   * 
   * @example
   * acs:quotas:cn-hangzhou:120886317861****:quota/ecs/q_security-groups/
   */
  quotaArn?: string;
  /**
   * @remarks
   * The type of the quota. Valid values:
   * 
   * *   CommonQuota: general quota
   * *   FlowControl: API rate limit
   * *   WhiteListLabel: whitelist quota
   * 
   * @example
   * CommonQuota
   */
  quotaCategory?: string;
  /**
   * @remarks
   * The description of the quota.
   * 
   * @example
   * The maximum number of security groups that can be owned by the current account
   */
  quotaDescription?: string;
  /**
   * @remarks
   * The details of the quota.
   */
  quotaItems?: GetProductQuotaResponseBodyQuotaQuotaItems[];
  /**
   * @remarks
   * The name of the quota.
   * 
   * @example
   * Maximum Number of Security Groups
   */
  quotaName?: string;
  /**
   * @remarks
   * The type of the quota. Valid values:
   * 
   * *   privilege
   * *   normal
   * 
   * @example
   * normal
   */
  quotaType?: string;
  /**
   * @remarks
   * The unit of the quota.
   * 
   * >  The unit of each quota is unique. For example, the quota whose ID is `q_cbdch3` represents the maximum number of Container Service for Kubernetes (ACK) clusters. The unit of this quota is clusters. The quota whose ID is `q_security-groups` represents the maximum number of security groups. The unit of this quota is security groups.
   * 
   * @example
   * Count
   */
  quotaUnit?: string;
  /**
   * @remarks
   * The range of the quota value.
   */
  supportedRange?: number[];
  /**
   * @remarks
   * The value of the quota.
   * 
   * @example
   * 801
   */
  totalQuota?: number;
  /**
   * @remarks
   * The used quota.
   * 
   * @example
   * 26
   */
  totalUsage?: number;
  /**
   * @remarks
   * The reason why the quota is not adjustable. Valid values:
   * 
   * *   nonactivated: The service is not activated.
   * *   applicationProcess: The application is being processed.
   * *   limitReached: The quota limit is reached.
   * *   supportTicketRequired: The quota can be increased only by submitting a ticket.
   * 
   * @example
   * limitReached
   */
  unadjustableDetail?: string;
  /**
   * @remarks
   * The monitoring information of the quota in CloudMonitor.
   * 
   * >  If this parameter is empty, no monitoring data of the quota exists in CloudMonitor.
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
   * The details of the quota.
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

