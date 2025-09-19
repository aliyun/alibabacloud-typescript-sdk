// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageBaselineItemListResponseBodyBaselineItemInfos extends $dara.Model {
  /**
   * @remarks
   * The alias of the baseline type.
   * 
   * @example
   * AccessKey pair leak
   */
  baselineClassAlias?: string;
  /**
   * @remarks
   * The key of the baseline type.
   * 
   * @example
   * ak_leak
   */
  baselineClassKey?: string;
  /**
   * @remarks
   * The alias of the baseline check item.
   * 
   * @example
   * AccessKey pair leak
   */
  baselineItemAlias?: string;
  /**
   * @remarks
   * The key of the baseline check item.
   * 
   * @example
   * ak_leak
   */
  baselineItemKey?: string;
  /**
   * @remarks
   * The alias of the baseline.
   * 
   * @example
   * AccessKey pair leak
   */
  baselineNameAlias?: string;
  /**
   * @remarks
   * The key of the baseline name.
   * 
   * @example
   * ak_leak
   */
  baselineNameKey?: string;
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
  /**
   * @remarks
   * Indicates whether the baseline check item is added to the whitelist. Valid values:
   * 
   * *   **0**: The baseline check item is not added to the whitelist.
   * *   **1**: The baseline check item is added to the whitelist.
   * 
   * @example
   * 0
   */
  whiteList?: number;
  static names(): { [key: string]: string } {
    return {
      baselineClassAlias: 'BaselineClassAlias',
      baselineClassKey: 'BaselineClassKey',
      baselineItemAlias: 'BaselineItemAlias',
      baselineItemKey: 'BaselineItemKey',
      baselineNameAlias: 'BaselineNameAlias',
      baselineNameKey: 'BaselineNameKey',
      status: 'Status',
      whiteList: 'WhiteList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineClassAlias: 'string',
      baselineClassKey: 'string',
      baselineItemAlias: 'string',
      baselineItemKey: 'string',
      baselineNameAlias: 'string',
      baselineNameKey: 'string',
      status: 'number',
      whiteList: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageBaselineItemListResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 20
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
   * 253
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

export class DescribeImageBaselineItemListResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of baseline check items.
   */
  baselineItemInfos?: DescribeImageBaselineItemListResponseBodyBaselineItemInfos[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeImageBaselineItemListResponseBodyPageInfo;
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
      baselineItemInfos: 'BaselineItemInfos',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineItemInfos: { 'type': 'array', 'itemType': DescribeImageBaselineItemListResponseBodyBaselineItemInfos },
      pageInfo: DescribeImageBaselineItemListResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.baselineItemInfos)) {
      $dara.Model.validateArray(this.baselineItemInfos);
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

