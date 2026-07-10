// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSmartStatisticsPageListResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The date. Format: <i>month/day</i>.
   * 
   * @example
   * 11/8
   */
  date?: string;
  /**
   * @remarks
   * The pass rate.
   * 
   * @example
   * 25
   */
  passRate?: string;
  /**
   * @remarks
   * The product solution code. For more information, refer to the enhanced ID Verification documentation.
   * 
   * @example
   * SMART_VERIFY
   */
  productCode?: string;
  /**
   * @remarks
   * The scene ID.
   * 
   * @example
   * 20**40
   */
  sceneId?: number;
  /**
   * @remarks
   * The scene name.
   * 
   * @example
   * ****实名认证
   */
  sceneName?: string;
  /**
   * @remarks
   * The number of successful calls.
   * 
   * @example
   * 1
   */
  successCount?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 4
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      passRate: 'PassRate',
      productCode: 'ProductCode',
      sceneId: 'SceneId',
      sceneName: 'SceneName',
      successCount: 'SuccessCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      passRate: 'string',
      productCode: 'string',
      sceneId: 'number',
      sceneName: 'string',
      successCount: 'number',
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

export class DescribeSmartStatisticsPageListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The list of returned data.
   */
  items?: DescribeSmartStatisticsPageListResponseBodyItems[];
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 96943***4E39F805
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 29
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 3
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      items: 'Items',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': DescribeSmartStatisticsPageListResponseBodyItems },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

