// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageBaselineCheckSummaryResponseBodyBaselineResultSummary extends $dara.Model {
  /**
   * @remarks
   * The baseline category.
   * 
   * @example
   * Unauthorized access
   */
  baselineClassAlias?: string;
  /**
   * @remarks
   * The keyword of the baseline category.
   * 
   * @example
   * hc_image_exploit
   */
  baselineClassKey?: string;
  /**
   * @remarks
   * The baseline name.
   * 
   * @example
   * Unauthorized access
   */
  baselineNameAlias?: string;
  /**
   * @remarks
   * The keyword of the baseline name.
   * 
   * @example
   * hc_image_exploit
   */
  baselineNameKey?: string;
  /**
   * @remarks
   * The risk level of the baseline. Valid values:
   * 
   * - **high**: high risk
   * 
   * - **medium**: medium risk
   * 
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
   * 1626628760000
   */
  firstScanTime?: number;
  /**
   * @remarks
   * The number of images with a **high** risk level that have baseline risk issues.
   * 
   * @example
   * 15
   */
  highRiskImage?: number;
  /**
   * @remarks
   * The timestamp of the most recent scan, in milliseconds.
   * 
   * @example
   * 1626628760000
   */
  lastScanTime?: number;
  /**
   * @remarks
   * The number of images with a **low** risk level that have baseline risk issues.
   * 
   * @example
   * 0
   */
  lowRiskImage?: number;
  /**
   * @remarks
   * The number of images with a **medium** risk level that have baseline risk issues.
   * 
   * @example
   * 0
   */
  middleRiskImage?: number;
  /**
   * @remarks
   * The fix status of the baseline risk. Valid values:
   * - **0**: Unfixed.
   * - **1**: Fixed.
   * - **2**: Pending verification.
   * - **3**: Fix failed.
   * 
   * @example
   * 0
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      baselineClassAlias: 'BaselineClassAlias',
      baselineClassKey: 'BaselineClassKey',
      baselineNameAlias: 'BaselineNameAlias',
      baselineNameKey: 'BaselineNameKey',
      baselineNameLevel: 'BaselineNameLevel',
      firstScanTime: 'FirstScanTime',
      highRiskImage: 'HighRiskImage',
      lastScanTime: 'LastScanTime',
      lowRiskImage: 'LowRiskImage',
      middleRiskImage: 'MiddleRiskImage',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineClassAlias: 'string',
      baselineClassKey: 'string',
      baselineNameAlias: 'string',
      baselineNameKey: 'string',
      baselineNameLevel: 'string',
      firstScanTime: 'number',
      highRiskImage: 'number',
      lastScanTime: 'number',
      lowRiskImage: 'number',
      middleRiskImage: 'number',
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

export class DescribeImageBaselineCheckSummaryResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries on the current page in a paged query.
   * 
   * @example
   * 3
   */
  count?: number;
  /**
   * @remarks
   * The current page number in a paged query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of image baseline check results per page in a paged query. Default value: **20**, which indicates that 20 image baseline check results are displayed per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of query results.
   * 
   * @example
   * 3
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

export class DescribeImageBaselineCheckSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the image baseline check list.
   */
  baselineResultSummary?: DescribeImageBaselineCheckSummaryResponseBodyBaselineResultSummary[];
  /**
   * @remarks
   * The paging information displayed on the page in a paged query.
   */
  pageInfo?: DescribeImageBaselineCheckSummaryResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request. Alibaba Cloud generates a unique identifier for each request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * 5BD95679-D63A-4151-97D0-188432F4A57
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      baselineResultSummary: 'BaselineResultSummary',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineResultSummary: { 'type': 'array', 'itemType': DescribeImageBaselineCheckSummaryResponseBodyBaselineResultSummary },
      pageInfo: DescribeImageBaselineCheckSummaryResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.baselineResultSummary)) {
      $dara.Model.validateArray(this.baselineResultSummary);
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

