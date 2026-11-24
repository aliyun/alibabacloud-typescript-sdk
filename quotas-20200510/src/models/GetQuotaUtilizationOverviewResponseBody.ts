// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQuotaUtilizationOverviewResponseBodyQuotaOverviewInUse extends $dara.Model {
  /**
   * @remarks
   * The number of adjustable quotas in use.
   * 
   * @example
   * 50
   */
  adjustable?: number;
  /**
   * @remarks
   * The adjustment rate of quotas in use, without the percentage sign.
   * 
   * @example
   * 50
   */
  adjustableRatio?: number;
  /**
   * @remarks
   * The total number of quotas in use.
   * 
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      adjustable: 'Adjustable',
      adjustableRatio: 'AdjustableRatio',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjustable: 'number',
      adjustableRatio: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaUtilizationOverviewResponseBodyQuotaOverviewOver80Percent extends $dara.Model {
  /**
   * @remarks
   * The number of adjustable quotas with a utilization rate exceeding 80%.
   * 
   * @example
   * 50
   */
  adjustable?: number;
  /**
   * @remarks
   * The adjustment rate of quotas with a utilization rate exceeding 80%, without the percentage sign.
   * 
   * @example
   * 50
   */
  adjustableRatio?: number;
  /**
   * @remarks
   * The number of quotas with a utilization rate exceeding 80%.
   * 
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      adjustable: 'Adjustable',
      adjustableRatio: 'AdjustableRatio',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjustable: 'number',
      adjustableRatio: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaUtilizationOverviewResponseBodyQuotaOverviewOver95Percent extends $dara.Model {
  /**
   * @remarks
   * The number of adjustable quotas with a utilization rate exceeding 95%.
   * 
   * @example
   * 50
   */
  adjustable?: number;
  /**
   * @remarks
   * The adjustment rate of quotas with a utilization rate exceeding 95%, without the percentage sign.
   * 
   * @example
   * 50
   */
  adjustableRatio?: number;
  /**
   * @remarks
   * The number of quotas with a utilization rate exceeding 95%.
   * 
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      adjustable: 'Adjustable',
      adjustableRatio: 'AdjustableRatio',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjustable: 'number',
      adjustableRatio: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaUtilizationOverviewResponseBodyQuotaOverview extends $dara.Model {
  /**
   * @remarks
   * The quotas in use.
   */
  inUse?: GetQuotaUtilizationOverviewResponseBodyQuotaOverviewInUse;
  /**
   * @remarks
   * The quotas with a utilization rate exceeding 80%.
   */
  over80Percent?: GetQuotaUtilizationOverviewResponseBodyQuotaOverviewOver80Percent;
  /**
   * @remarks
   * The quotas with a utilization rate exceeding 95%.
   */
  over95Percent?: GetQuotaUtilizationOverviewResponseBodyQuotaOverviewOver95Percent;
  static names(): { [key: string]: string } {
    return {
      inUse: 'InUse',
      over80Percent: 'Over80Percent',
      over95Percent: 'Over95Percent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inUse: GetQuotaUtilizationOverviewResponseBodyQuotaOverviewInUse,
      over80Percent: GetQuotaUtilizationOverviewResponseBodyQuotaOverviewOver80Percent,
      over95Percent: GetQuotaUtilizationOverviewResponseBodyQuotaOverviewOver95Percent,
    };
  }

  validate() {
    if(this.inUse && typeof (this.inUse as any).validate === 'function') {
      (this.inUse as any).validate();
    }
    if(this.over80Percent && typeof (this.over80Percent as any).validate === 'function') {
      (this.over80Percent as any).validate();
    }
    if(this.over95Percent && typeof (this.over95Percent as any).validate === 'function') {
      (this.over95Percent as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaUtilizationOverviewResponseBody extends $dara.Model {
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
   * The data generation time or statistical date. For general quotas, the time is in UTC and formatted as yyyy-MM-dd\\"T\\"HH:mm:ss\\"Z\\". For API rate limits, the format is yyyy-MM-dd.
   * 
   * @example
   * 2026-10-21T07:30:10Z
   */
  generatedAt?: string;
  /**
   * @remarks
   * The supplementary description of the report status. Use Status to determine the status.
   * 
   * @example
   * Quota utilization data is available.
   */
  message?: string;
  /**
   * @remarks
   * The quota overview data.
   */
  quotaOverview?: GetQuotaUtilizationOverviewResponseBodyQuotaOverview;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 920D8A47-26BB-49FA-A09F-F98D7DAA55F3
   */
  requestId?: string;
  /**
   * @remarks
   * The query result status of the quota utilization report. Valid values:
   * 
   * - AVAILABLE: The data is available.
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
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      generatedAt: 'GeneratedAt',
      message: 'Message',
      quotaOverview: 'QuotaOverview',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      generatedAt: 'string',
      message: 'string',
      quotaOverview: GetQuotaUtilizationOverviewResponseBodyQuotaOverview,
      requestId: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.quotaOverview && typeof (this.quotaOverview as any).validate === 'function') {
      (this.quotaOverview as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

