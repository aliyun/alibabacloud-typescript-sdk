// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQuotaUtilizationOverviewResponseBodyQuotaOverviewInUse extends $dara.Model {
  /**
   * @example
   * 50
   */
  adjustable?: number;
  /**
   * @example
   * 50
   */
  adjustableRatio?: number;
  /**
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
   * @example
   * 50
   */
  adjustable?: number;
  /**
   * @example
   * 50
   */
  adjustableRatio?: number;
  /**
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
   * @example
   * 50
   */
  adjustable?: number;
  /**
   * @example
   * 50
   */
  adjustableRatio?: number;
  /**
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
  inUse?: GetQuotaUtilizationOverviewResponseBodyQuotaOverviewInUse;
  over80Percent?: GetQuotaUtilizationOverviewResponseBodyQuotaOverviewOver80Percent;
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
   * 2026-10-21T07:30:10Z
   */
  generatedAt?: string;
  /**
   * @example
   * Quota utilization data is available.
   */
  message?: string;
  quotaOverview?: GetQuotaUtilizationOverviewResponseBodyQuotaOverview;
  /**
   * @example
   * 920D8A47-26BB-49FA-A09F-F98D7DAA55F3
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

