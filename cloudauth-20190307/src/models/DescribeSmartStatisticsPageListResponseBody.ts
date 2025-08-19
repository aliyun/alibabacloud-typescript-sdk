// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSmartStatisticsPageListResponseBodyItems extends $dara.Model {
  /**
   * @example
   * 11/8
   */
  date?: string;
  /**
   * @example
   * 25
   */
  passRate?: string;
  /**
   * @example
   * SMART_VERIFY
   */
  productCode?: string;
  /**
   * @example
   * 20**40
   */
  sceneId?: number;
  sceneName?: string;
  /**
   * @example
   * 1
   */
  successCount?: number;
  /**
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
   * @example
   * 1
   */
  currentPage?: number;
  items?: DescribeSmartStatisticsPageListResponseBodyItems[];
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 96943***4E39F805
   */
  requestId?: string;
  /**
   * @example
   * 29
   */
  totalCount?: number;
  /**
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

