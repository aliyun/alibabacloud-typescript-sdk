// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageBaselineCheckSummaryResponseBodyBaselineResultSummary extends $dara.Model {
  /**
   * @remarks
   * The category of the baseline.
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
   * The name of the baseline.
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
   * 1626628760000
   */
  firstScanTime?: number;
  /**
   * @remarks
   * The number of images on which **high** baseline risks are detected.
   * 
   * @example
   * 15
   */
  highRiskImage?: number;
  /**
   * @remarks
   * The timestamp generated when the last scan was performed. Unit: milliseconds.
   * 
   * @example
   * 1626628760000
   */
  lastScanTime?: number;
  /**
   * @remarks
   * The number of images on which **low** baseline risks are detected.
   * 
   * @example
   * 0
   */
  lowRiskImage?: number;
  /**
   * @remarks
   * The number of images on which **medium** baseline risks are detected.
   * 
   * @example
   * 0
   */
  middleRiskImage?: number;
  /**
   * @remarks
   * The status of the baseline risks. Valid values:
   * 
   * *   **0**: unfixed
   * *   **1**: fixed
   * *   **2**: pending verification
   * *   **3**: fixing failed
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
   * The number of entries returned on the current page.
   * 
   * @example
   * 3
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
   * The number of entries returned per page. Default value: **20**.
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
   * An array that consists of the check results of image baselines.
   */
  baselineResultSummary?: DescribeImageBaselineCheckSummaryResponseBodyBaselineResultSummary[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeImageBaselineCheckSummaryResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
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

