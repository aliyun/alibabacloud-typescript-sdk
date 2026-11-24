// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQuotaUtilizationReportResponseBodyQuotasFlowControlAlgoPeriod extends $dara.Model {
  /**
   * @remarks
   * The unit of the quota calculation period. Valid values:
   * - second: Seconds.
   * - minute: Minutes.
   * - hour: Hours.
   * - day: Days.
   * - week: Weeks.
   * 
   * @example
   * second
   */
  periodUnit?: string;
  /**
   * @remarks
   * The value of the quota calculation period.
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

export class ListQuotaUtilizationReportResponseBodyQuotasFlowControlAlgo extends $dara.Model {
  /**
   * @remarks
   * The type of the throttling algorithm. Valid values:
   * - FixedWindow: Fixed window.
   * - TokenBucket: Token bucket.
   * - Concurrency: Concurrency limit.
   * 
   * @example
   * FixedWindow
   */
  algoType?: string;
  /**
   * @remarks
   * The time period. This parameter is returned only for FixedWindow and is empty for other algorithms.
   */
  period?: ListQuotaUtilizationReportResponseBodyQuotasFlowControlAlgoPeriod;
  /**
   * @remarks
   * The time interval between two token refills. This parameter is returned only for TokenBucket and is empty for other algorithms. The time unit must be confirmed with the upstream service and is not declared in the current code.
   * 
   * @example
   * 1
   */
  refillInterval?: number;
  /**
   * @remarks
   * The number of tokens added per refill. This parameter is returned only for TokenBucket and is empty for other algorithms.
   * 
   * @example
   * 2
   */
  tokensPerRefill?: number;
  /**
   * @remarks
   * The quota value.
   * 
   * @example
   * 10
   */
  totalQuota?: number;
  static names(): { [key: string]: string } {
    return {
      algoType: 'AlgoType',
      period: 'Period',
      refillInterval: 'RefillInterval',
      tokensPerRefill: 'TokensPerRefill',
      totalQuota: 'TotalQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algoType: 'string',
      period: ListQuotaUtilizationReportResponseBodyQuotasFlowControlAlgoPeriod,
      refillInterval: 'number',
      tokensPerRefill: 'number',
      totalQuota: 'number',
    };
  }

  validate() {
    if(this.period && typeof (this.period as any).validate === 'function') {
      (this.period as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotaUtilizationReportResponseBodyQuotasUsageMetric extends $dara.Model {
  /**
   * @remarks
   * The CloudMonitor monitoring dimensions.
   * 
   * Format: a collection of key:value pairs. Example:
   * `{"productCode":"***","metricKey":"***","regionId":"***","label":"***"}`.
   * 
   * @example
   * {"regionId":"cn-hangzhou"}
   */
  metricDimensions?: { [key: string]: string };
  /**
   * @remarks
   * The [monitored metric](https://cms.console.aliyun.com/metric-meta/acs_ecs_dashboard/ecs).
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

export class ListQuotaUtilizationReportResponseBodyQuotas extends $dara.Model {
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
   * Indicates whether the used quota is displayed.
   * 
   * @example
   * true
   */
  consumable?: boolean;
  /**
   * @remarks
   * The quota dimensions. Format: `{"regionId":"region ID"}`.
   * 
   * @example
   * {"regionId":"cn-hangzhou"}
   */
  dimensions?: { [key: string]: string };
  /**
   * @remarks
   * The traffic throttling algorithms.
   */
  flowControlAlgo?: ListQuotaUtilizationReportResponseBodyQuotasFlowControlAlgo;
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
   * The quota ID.
   * 
   * @example
   * q_security-groups
   */
  quotaActionCode?: string;
  /**
   * @remarks
   * The quota ARN.
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
   * The quota name.
   * 
   * @example
   * ecs.g5.2xlarge
   */
  quotaName?: string;
  /**
   * @remarks
   * The quota value.
   * 
   * @example
   * 10000
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
   * > An empty value indicates that no monitoring data for this quota exists in CloudMonitor.
   */
  usageMetric?: ListQuotaUtilizationReportResponseBodyQuotasUsageMetric;
  /**
   * @remarks
   * The quota utilization rate, without the percentage sign.
   * 
   * @example
   * 10.1
   */
  utilization?: number;
  /**
   * @remarks
   * The risk level determined by the returned Utilization value. Valid values:
   * - NORMAL: Less than 80%.
   * - WARN: Greater than or equal to 80% and less than 95%.
   * - CRITICAL: Greater than or equal to 95%.
   * 
   * @example
   * WARN
   */
  utilizationStatus?: string;
  static names(): { [key: string]: string } {
    return {
      adjustable: 'Adjustable',
      consumable: 'Consumable',
      dimensions: 'Dimensions',
      flowControlAlgo: 'FlowControlAlgo',
      productCode: 'ProductCode',
      quotaActionCode: 'QuotaActionCode',
      quotaArn: 'QuotaArn',
      quotaCategory: 'QuotaCategory',
      quotaDescription: 'QuotaDescription',
      quotaName: 'QuotaName',
      totalQuota: 'TotalQuota',
      totalUsage: 'TotalUsage',
      unadjustableDetail: 'UnadjustableDetail',
      usageMetric: 'UsageMetric',
      utilization: 'Utilization',
      utilizationStatus: 'UtilizationStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjustable: 'boolean',
      consumable: 'boolean',
      dimensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      flowControlAlgo: ListQuotaUtilizationReportResponseBodyQuotasFlowControlAlgo,
      productCode: 'string',
      quotaActionCode: 'string',
      quotaArn: 'string',
      quotaCategory: 'string',
      quotaDescription: 'string',
      quotaName: 'string',
      totalQuota: 'number',
      totalUsage: 'number',
      unadjustableDetail: 'string',
      usageMetric: ListQuotaUtilizationReportResponseBodyQuotasUsageMetric,
      utilization: 'number',
      utilizationStatus: 'string',
    };
  }

  validate() {
    if(this.dimensions) {
      $dara.Model.validateMap(this.dimensions);
    }
    if(this.flowControlAlgo && typeof (this.flowControlAlgo as any).validate === 'function') {
      (this.flowControlAlgo as any).validate();
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

export class ListQuotaUtilizationReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * RAM.PERMISSION.DENIED
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * You are not authorized to do this action or the API input parameter is invalid.
   */
  errorMsg?: string;
  /**
   * @remarks
   * The data generation time or statistical date. For general quotas, the time is in UTC and formatted as yyyy-MM-dd\\"T\\"HH:mm:ss\\"Z\\". For API rate quotas, the date is formatted as yyyy-MM-dd.
   * 
   * @example
   * 2026-10-26T06:24:57Z
   */
  generatedAt?: string;
  /**
   * @remarks
   * The supplementary description of the report status, such as report generation in progress, report generation needs to be started first, or a newer report is available for re-query. Applications should use Status to determine the status.
   * 
   * @example
   * Quota utilization data is available.
   */
  message?: string;
  /**
   * @remarks
   * The token used to query the next page. An empty value indicates that no next page exists.
   * 
   * @example
   * eyJvZmZzZXQiOjEwLCJvdHNOZXh0VG9rZW4iOiJDQUVTR3dvWkNoY0tFM1J2ZEdGc1gzVnpZV2RsWDNCbGNtTmxiblFRQVJnQkl1RUJDZ2tCQUFBQUFBQUFXVUFLMHdFRHpnQUFBREZUTXpFek9ETXdNemN6TnpNNE16VXpPVE0xTXpjek5qTXpNekV6TlRNNE16Z3VVek01TXpjek5UTTJOalkyTWpZeE16Y3laRFl5TmpJek16WXhNbVF6TkRNMk16RXpOREprTmpFek9UTTRNemN5WkRZMk16WTJORE16TXpVMk16TXhNemt6TURZMk16RXpNUzVUTmpFMk16YzBOamsyWmpabE56UTNNall4TmprMll5NVRNelkyTWpZMU16a3pPRE0yTmpRek1qSmtNekV6TlRNeU5qRXlaRE0wTXpFek1UWTJNbVEyTWpZME16TXpNVEprTXpNMk16WXlOalV6TkRNMU16VXpNalkwTXpVek1qTTMiLCJ0YXNrSWQiOiI5NzU2ZmJhNy1iYjNhLTQ2MTQtYTk4Ny1mNmQzNWMxOTBmMTEiLCJ1aWQiOiIxODA3Nzg1OTU3NjMxNTg4IiwidXRpbGl6YXRpb25TdGF0dXNlcyI6IiJ9
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of quota usage on the current page. An empty list is returned if no matching data exists or no general quota report is available.
   */
  quotas?: ListQuotaUtilizationReportResponseBodyQuotas[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7ED584FB-ECBF-4A2A-969D-F54D25EFABF9
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the query result for the quota utilization report. Valid values:
   * 
   * - AVAILABLE: The data is available for query.
   * 
   * - GENERATING: A new report is being generated. If an unexpired historical report exists, the most recent historical report is returned.
   * - UNAVAILABLE: No general quota report is available. You must call StartQuotaUtilizationReport to start report generation first.
   * 
   * @example
   * AVAILABLE
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * 
   * - true: The call is successful.
   * - false: The call fails.
   * 
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries that meet all filter conditions in the current report, rather than the number of entries on the current page. The value is 0 if no matching entries exist.
   * 
   * @example
   * 50
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      generatedAt: 'GeneratedAt',
      message: 'Message',
      nextToken: 'NextToken',
      quotas: 'Quotas',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      generatedAt: 'string',
      message: 'string',
      nextToken: 'string',
      quotas: { 'type': 'array', 'itemType': ListQuotaUtilizationReportResponseBodyQuotas },
      requestId: 'string',
      status: 'string',
      success: 'boolean',
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

