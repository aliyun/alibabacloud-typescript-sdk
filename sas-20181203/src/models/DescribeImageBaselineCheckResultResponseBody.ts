// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageBaselineCheckResultResponseBodyBaselineResult extends $dara.Model {
  /**
   * @remarks
   * The key of the image baseline type.
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
   * The alias of the image baseline.
   * 
   * @example
   * Identity authentication
   */
  baselineNameAlias?: string;
  /**
   * @remarks
   * The key of the image baseline.
   * 
   * @example
   * identification
   */
  baselineNameKey?: string;
  /**
   * @remarks
   * The severity of the image baseline. Valid values:
   * 
   * *   **high**
   * *   **medium**
   * *   **low**
   * 
   * @example
   * high
   */
  baselineNameLevel?: string;
  /**
   * @remarks
   * The timestamp generated when the first scan was performed. Unit: milliseconds.
   * 
   * @example
   * 1610304058366
   */
  firstScanTime?: number;
  /**
   * @remarks
   * The number of high-risk images that are affected.
   * 
   * @example
   * 1
   */
  highRiskItemCount?: number;
  /**
   * @remarks
   * The timestamp generated when the last scan was performed. Unit: milliseconds.
   * 
   * @example
   * 1610304058301
   */
  lastScanTime?: number;
  /**
   * @remarks
   * The number of low-risk images that are affected.
   * 
   * @example
   * 10
   */
  lowRiskItemCount?: number;
  /**
   * @remarks
   * The number of medium-risk images that are affected.
   * 
   * @example
   * 1
   */
  middleRiskItemCount?: number;
  /**
   * @remarks
   * The status of the baseline risks. Valid values:
   * 
   * *   **0**: unfixed
   * *   **1**: fixed
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
   * The number of entries returned on the current page.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page.
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
   * An array that consists of the check results of image baselines.
   */
  baselineResult?: DescribeImageBaselineCheckResultResponseBodyBaselineResult[];
  /**
   * @remarks
   * The pagination information.
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

