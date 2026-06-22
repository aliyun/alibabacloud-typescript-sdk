// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageBaselineItemListResponseBodyBaselineItemInfos extends $dara.Model {
  /**
   * @remarks
   * The alias of the baseline category.
   * 
   * @example
   * Access Key泄漏
   */
  baselineClassAlias?: string;
  /**
   * @remarks
   * The key of the baseline category.
   * 
   * @example
   * ak_leak
   */
  baselineClassKey?: string;
  /**
   * @remarks
   * The alias of the baseline sub-item.
   * 
   * @example
   * Access Key泄漏
   */
  baselineItemAlias?: string;
  /**
   * @remarks
   * The key of the baseline sub-item.
   * 
   * @example
   * ak_leak
   */
  baselineItemKey?: string;
  /**
   * @remarks
   * The alias of the baseline name.
   * 
   * @example
   * Access Key泄漏
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
   * The fix status of the baseline risk. Valid values:
   * - **0**: unfixed
   * - **1**: fixed
   * - **2**: pending verification
   * - **3**: fix failed.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The whitelist status of the baseline check item. Valid values:
   * - **0**: not whitelisted
   * - **1**: whitelisted.
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
   * The number of entries on the current page in a paged query.
   * 
   * @example
   * 20
   */
  count?: number;
  /**
   * @remarks
   * The page number of the current page in a paged query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries per page in a paged query.
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
   * The list of image baseline data.
   */
  baselineItemInfos?: DescribeImageBaselineItemListResponseBodyBaselineItemInfos[];
  /**
   * @remarks
   * The pagination information of the query results.
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

