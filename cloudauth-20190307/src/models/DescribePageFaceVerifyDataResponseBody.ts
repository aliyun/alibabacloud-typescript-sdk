// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePageFaceVerifyDataResponseBodyItems extends $dara.Model {
  /**
   * @example
   * 2024-03-24T00:00:00.000Z
   */
  date?: string;
  /**
   * @example
   * ID_PLUS
   */
  productCode?: string;
  /**
   * @example
   * 20**40
   */
  sceneId?: string;
  sceneName?: string;
  /**
   * @example
   * 1
   */
  successCount?: string;
  /**
   * @example
   * 19
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
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
      productCode: 'string',
      sceneId: 'string',
      sceneName: 'string',
      successCount: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePageFaceVerifyDataResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 1
   */
  currentPage?: string;
  items?: DescribePageFaceVerifyDataResponseBodyItems[];
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @example
   * 473469C7-A***B-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  /**
   * @example
   * 100
   */
  totalCount?: string;
  /**
   * @example
   * 5
   */
  totalPage?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      currentPage: 'CurrentPage',
      items: 'Items',
      message: 'Message',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      currentPage: 'string',
      items: { 'type': 'array', 'itemType': DescribePageFaceVerifyDataResponseBodyItems },
      message: 'string',
      pageSize: 'string',
      requestId: 'string',
      success: 'string',
      totalCount: 'string',
      totalPage: 'string',
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

