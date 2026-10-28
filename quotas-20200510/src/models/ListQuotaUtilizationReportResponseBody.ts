// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQuotaUtilizationReportResponseBodyQuotasFlowControlAlgoPeriod extends $dara.Model {
  /**
   * @example
   * second
   */
  periodUnit?: string;
  /**
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
   * @example
   * FixedWindow
   */
  algoType?: string;
  period?: ListQuotaUtilizationReportResponseBodyQuotasFlowControlAlgoPeriod;
  /**
   * @example
   * 1
   */
  refillInterval?: number;
  /**
   * @example
   * 2
   */
  tokensPerRefill?: number;
  /**
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
  metricDimensions?: { [key: string]: string };
  /**
   * @example
   * Usage
   */
  metricName?: string;
  /**
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
   * @example
   * true
   */
  adjustable?: boolean;
  /**
   * @example
   * true
   */
  consumable?: boolean;
  dimensions?: { [key: string]: string };
  flowControlAlgo?: ListQuotaUtilizationReportResponseBodyQuotasFlowControlAlgo;
  /**
   * @example
   * ecs
   */
  productCode?: string;
  /**
   * @example
   * q_security-groups
   */
  quotaActionCode?: string;
  /**
   * @example
   * acs:quotas:cn-hangzhou:120886317861****:quota/ecs/q_security-groups
   */
  quotaArn?: string;
  /**
   * @example
   * CommonQuota
   */
  quotaCategory?: string;
  /**
   * @example
   * The maximum number of security groups that can be owned by the current account.
   */
  quotaDescription?: string;
  /**
   * @example
   * ecs.g5.2xlarge
   */
  quotaName?: string;
  /**
   * @example
   * 10000
   */
  totalQuota?: number;
  /**
   * @example
   * 1009
   */
  totalUsage?: number;
  /**
   * @example
   * applicationProcess
   */
  unadjustableDetail?: string;
  usageMetric?: ListQuotaUtilizationReportResponseBodyQuotasUsageMetric;
  /**
   * @example
   * 10.1
   */
  utilization?: number;
  /**
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
   * @example
   * RAM.PERMISSION.DENIED
   */
  errorCode?: string;
  /**
   * @example
   * You are not authorized to do this action or the API input parameter is invalid.
   */
  errorMsg?: string;
  /**
   * @example
   * 2026-10-26T06:24:57Z
   */
  generatedAt?: string;
  /**
   * @example
   * Quota utilization data is available.
   */
  message?: string;
  /**
   * @example
   * eyJvZmZzZXQiOjEwLCJvdHNOZXh0VG9rZW4iOiJDQUVTR3dvWkNoY0tFM1J2ZEdGc1gzVnpZV2RsWDNCbGNtTmxiblFRQVJnQkl1RUJDZ2tCQUFBQUFBQUFXVUFLMHdFRHpnQUFBREZUTXpFek9ETXdNemN6TnpNNE16VXpPVE0xTXpjek5qTXpNekV6TlRNNE16Z3VVek01TXpjek5UTTJOalkyTWpZeE16Y3laRFl5TmpJek16WXhNbVF6TkRNMk16RXpOREprTmpFek9UTTRNemN5WkRZMk16WTJORE16TXpVMk16TXhNemt6TURZMk16RXpNUzVUTmpFMk16YzBOamsyWmpabE56UTNNall4TmprMll5NVRNelkyTWpZMU16a3pPRE0yTmpRek1qSmtNekV6TlRNeU5qRXlaRE0wTXpFek1UWTJNbVEyTWpZME16TXpNVEprTXpNMk16WXlOalV6TkRNMU16VXpNalkwTXpVek1qTTMiLCJ0YXNrSWQiOiI5NzU2ZmJhNy1iYjNhLTQ2MTQtYTk4Ny1mNmQzNWMxOTBmMTEiLCJ1aWQiOiIxODA3Nzg1OTU3NjMxNTg4IiwidXRpbGl6YXRpb25TdGF0dXNlcyI6IiJ9
   */
  nextToken?: string;
  quotas?: ListQuotaUtilizationReportResponseBodyQuotas[];
  /**
   * @example
   * 7ED584FB-ECBF-4A2A-969D-F54D25EFABF9
   */
  requestId?: string;
  /**
   * @example
   * AVAILABLE
   */
  status?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  /**
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

