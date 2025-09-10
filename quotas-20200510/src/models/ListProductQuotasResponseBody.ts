// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProductQuotasResponseBodyQuotasPeriod extends $dara.Model {
  /**
   * @remarks
   * The unit of the calculation cycle.
   * 
   * Valid values:
   * 
   * *   week
   * *   hour
   * *   day
   * *   second
   * *   minute
   * 
   * @example
   * day
   */
  periodUnit?: string;
  /**
   * @remarks
   * The value of the calculation cycle.
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

export class ListProductQuotasResponseBodyQuotasQuotaItems extends $dara.Model {
  /**
   * @remarks
   * The value of the quota.
   * 
   * @example
   * 10
   */
  quota?: string;
  /**
   * @remarks
   * The unit of the quota.
   * 
   * @example
   * AMOUNT
   */
  quotaUnit?: string;
  /**
   * @remarks
   * The category of the quota.
   * 
   * Valid values:
   * 
   * *   BaseQuota: base quota
   * *   ReservedQuota: reserved quota
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
   * 1
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

export class ListProductQuotasResponseBodyQuotas extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the quota is adjustable.
   * 
   * Valid values:
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
   * The type of the adjustable value.
   * 
   * Valid values:
   * 
   * *   continuous
   * *   discontinuous
   * 
   * @example
   * discontinuous
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
   * Indicates whether the system shows the used value of the quota.
   * 
   * Valid values:
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
   * The quota dimension. Format: `{"regionId":"Region"}`.
   * 
   * @example
   * {"regionId":"cn-hangzhou"}
   */
  dimensions?: { [key: string]: any };
  /**
   * @remarks
   * The start time of the validity period of the quota. The value is displayed in UTC.
   * 
   * @example
   * 2022-09-28T06:07:00Z
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The end time of the validity period of the quota. The value is displayed in UTC.
   * 
   * @example
   * 2022-09-29T06:07:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * Indicates whether the quota is a global quota.
   * 
   * Valid values:
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
  period?: ListProductQuotasResponseBodyQuotasPeriod;
  /**
   * @remarks
   * The abbreviation of the Alibaba Cloud service name.
   * 
   * @example
   * ecs-spec
   */
  productCode?: string;
  /**
   * @remarks
   * The quota ID.
   * 
   * @example
   * ecs.g5.2xlarge
   */
  quotaActionCode?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the quota.
   * 
   * @example
   * acs:quotas:cn-hangzhou:107992689699****:quota/ecs/ecs.g5.2xlarge/postpaid/vpc/cn-hangzhou/instancetype/cn-hangzhou-i
   */
  quotaArn?: string;
  /**
   * @remarks
   * The type of the quota.
   * 
   * Valid values:
   * 
   * *   FlowControl: API rate limit
   * *   WhiteListLabel: whitelist quota
   * *   CommonQuota: general quota
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
   * ecs.g5.2xlarge
   */
  quotaDescription?: string;
  /**
   * @remarks
   * The details of the quotas.
   */
  quotaItems?: ListProductQuotasResponseBodyQuotasQuotaItems[];
  /**
   * @remarks
   * The name of the quota.
   * 
   * @example
   * ecs.g5.2xlarge
   */
  quotaName?: string;
  /**
   * @remarks
   * The type of the quota.
   * 
   * Valid values:
   * 
   * *   normal
   * *   privilege
   * 
   * @example
   * privilege
   */
  quotaType?: string;
  /**
   * @remarks
   * The unit of the quota.
   * 
   * @example
   * AMOUNT
   */
  quotaUnit?: string;
  /**
   * @remarks
   * The range of the quota value that can be requested for the current quota item. When you configure a quota template, you can use the range as a reference.
   */
  supportedRange?: number[];
  /**
   * @remarks
   * The value of the quota.
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
   * 1
   */
  totalUsage?: number;
  /**
   * @remarks
   * The reason why the quota is not adjustable.
   * 
   * Valid values:
   * 
   * *   limitReached: The quota limit is reached.
   * *   nonactivated: The service is not activated.
   * *   applicationProcess: The application is being processed.
   * 
   * @example
   * applicationProcess
   */
  unadjustableDetail?: string;
  /**
   * @remarks
   * The monitoring information of the quota in CloudMonitor.
   * 
   * >  If this parameter is empty, no monitoring data of the quota exists in CloudMonitor.
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
   * The number of records that are returned for the query.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * The returned value of NextToken is a pagination token, which can be used in the next request to retrieve a new page of results.
   * 
   * *   If NextToken is empty, no next page exists.
   * *   If a value of NextToken is returned, the value indicates the token that is used for the next query.
   * 
   * @example
   * AAAAAd98/tlL5GF2aM7UMKQGM8LZesIPr0CbfxASQvHV/pwcmVKNfdBbW8OPld3NvG9Cy8+dNcyFzyUttQA3IONfBhRGpXFyiVoTgK+dupBsP2mX
   */
  nextToken?: string;
  /**
   * @remarks
   * The details of the quotas.
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
   * The total number of entries returned.
   * 
   * @example
   * 4
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

