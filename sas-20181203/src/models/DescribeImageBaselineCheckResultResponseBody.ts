// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageBaselineCheckResultResponseBodyBaselineResult extends $dara.Model {
  /**
   * @remarks
   * The type key of the baseline item.
   * 
   * @example
   * identification
   */
  baselineClassAlias?: string;
  /**
   * @remarks
   * The number of baseline check items.
   * 
   * @example
   * 5
   */
  baselineItemCount?: number;
  /**
   * @remarks
   * The alias of the baseline item.
   * 
   * @example
   * 身份鉴别
   */
  baselineNameAlias?: string;
  /**
   * @remarks
   * The name key of the baseline item.
   * 
   * @example
   * identification
   */
  baselineNameKey?: string;
  /**
   * @remarks
   * The risk level of the baseline. Valid values:
   * - **high**: high risk
   * - **medium**: medium risk
   * - **low**: low risk.
   * 
   * @example
   * high
   */
  baselineNameLevel?: string;
  /**
   * @remarks
   * The timestamp of the first scan, in milliseconds.
   * 
   * @example
   * 1610304058366
   */
  firstScanTime?: number;
  /**
   * @remarks
   * The number of associated high-risk images.
   * 
   * @example
   * 1
   */
  highRiskItemCount?: number;
  /**
   * @remarks
   * The timestamp of the most recent scan, in milliseconds.
   * 
   * @example
   * 1610304058301
   */
  lastScanTime?: number;
  /**
   * @remarks
   * The number of associated low-risk images.
   * 
   * @example
   * 10
   */
  lowRiskItemCount?: number;
  /**
   * @remarks
   * The number of associated medium-risk images.
   * 
   * @example
   * 1
   */
  middleRiskItemCount?: number;
  /**
   * @remarks
   * The fix status of the baseline risk. Valid values:
   * - **0**: Unfixed.
   * - **1**: Fixed.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      baselineClassAlias: 'BaselineClassAlias',
      baselineItemCount: 'BaselineItemCount',
      baselineNameAlias: 'BaselineNameAlias',
      baselineNameKey: 'BaselineNameKey',
      baselineNameLevel: 'BaselineNameLevel',
      firstScanTime: 'FirstScanTime',
      highRiskItemCount: 'HighRiskItemCount',
      lastScanTime: 'LastScanTime',
      lowRiskItemCount: 'LowRiskItemCount',
      middleRiskItemCount: 'MiddleRiskItemCount',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineClassAlias: 'string',
      baselineItemCount: 'number',
      baselineNameAlias: 'string',
      baselineNameKey: 'string',
      baselineNameLevel: 'string',
      firstScanTime: 'number',
      highRiskItemCount: 'number',
      lastScanTime: 'number',
      lowRiskItemCount: 'number',
      middleRiskItemCount: 'number',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageBaselineCheckResultResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries on the current page when using paging.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The page number of the current page when using paging.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries per page when using paging.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageBaselineCheckResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the image baseline check results.
   */
  baselineResult?: DescribeImageBaselineCheckResultResponseBodyBaselineResult[];
  /**
   * @remarks
   * The paging information.
   */
  pageInfo?: DescribeImageBaselineCheckResultResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 24A20733-10A0-4AF6-BE6B-E3322413****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      baselineResult: 'BaselineResult',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineResult: { 'type': 'array', 'itemType': DescribeImageBaselineCheckResultResponseBodyBaselineResult },
      pageInfo: DescribeImageBaselineCheckResultResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.baselineResult)) {
      $dara.Model.validateArray(this.baselineResult);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

