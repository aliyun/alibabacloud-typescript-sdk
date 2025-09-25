// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePageFaceVerifyDataResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * Date.
   * 
   * @example
   * 2024-03-24T00:00:00.000Z
   */
  date?: string;
  /**
   * @remarks
   * Product scheme code, please refer to the financial-grade real-person help documentation.
   * 
   * @example
   * ID_PLUS
   */
  productCode?: string;
  /**
   * @remarks
   * Scene ID.
   * 
   * @example
   * 20**40
   */
  sceneId?: string;
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
  successCount?: string;
  /**
   * @remarks
   * Total count.
   * 
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
   * @remarks
   * Return code
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Current page number.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * List of returned data.
   */
  items?: DescribePageFaceVerifyDataResponseBodyItems[];
  /**
   * @remarks
   * Return message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * Number of items per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * ID of this request.
   * 
   * @example
   * 473469C7-A***B-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the response was successful.
   * 
   * @example
   * true
   */
  success?: string;
  /**
   * @remarks
   * Total count.
   * 
   * @example
   * 100
   */
  totalCount?: string;
  /**
   * @remarks
   * Total number of pages.
   * 
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

