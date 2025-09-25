// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSmartStatisticsPageListResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * Date. Format: <i>month/day</i>
   * 
   * @example
   * 11/8
   */
  date?: string;
  /**
   * @remarks
   * Pass rate.
   * 
   * @example
   * 25
   */
  passRate?: string;
  /**
   * @remarks
   * Product solution Code, please refer to the Enhanced Real Person Help Documentation.
   * 
   * @example
   * SMART_VERIFY
   */
  productCode?: string;
  /**
   * @remarks
   * Scene ID.
   * 
   * @example
   * 20**40
   */
  sceneId?: number;
  /**
   * @remarks
   * Scene name.
   * 
   * @example
   * ****实名认证
   */
  sceneName?: string;
  /**
   * @remarks
   * Number of successful calls.
   * 
   * @example
   * 1
   */
  successCount?: number;
  /**
   * @remarks
   * Total count.
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
   * Current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Returned data list.
   */
  items?: DescribeSmartStatisticsPageListResponseBodyItems[];
  /**
   * @remarks
   * Number of items displayed per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * ID of this request.
   * 
   * @example
   * 96943***4E39F805
   */
  requestId?: string;
  /**
   * @remarks
   * Total count.
   * 
   * @example
   * 29
   */
  totalCount?: number;
  /**
   * @remarks
   * Total number of pages.
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

