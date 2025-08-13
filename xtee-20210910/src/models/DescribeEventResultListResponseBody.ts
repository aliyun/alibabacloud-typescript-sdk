// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventResultListResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Event code
   * 
   * @example
   * de_aszbjb7236
   */
  eventCode?: string;
  /**
   * @remarks
   * Event name.
   * 
   * @example
   * 注册风险
   */
  eventName?: string;
  /**
   * @remarks
   * Number of passed checks.
   * 
   * @example
   * 90
   */
  passNum?: number;
  /**
   * @remarks
   * Number of pending items.
   * 
   * @example
   * 5
   */
  pendingNum?: number;
  /**
   * @remarks
   * Number of rejected approvals.
   * 
   * @example
   * 5
   */
  rejectNum?: number;
  /**
   * @remarks
   * Total number of items.
   * 
   * @example
   * 100
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      eventCode: 'eventCode',
      eventName: 'eventName',
      passNum: 'passNum',
      pendingNum: 'pendingNum',
      rejectNum: 'rejectNum',
      totalNum: 'totalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventCode: 'string',
      eventName: 'string',
      passNum: 'number',
      pendingNum: 'number',
      rejectNum: 'number',
      totalNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventResultListResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code.
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
  currentPage?: number;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * Error details
   * 
   * @example
   * The input parameter data is not valid. order_storage_company_num component not found
   */
  message?: string;
  /**
   * @remarks
   * Page size, default value is 10
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * AE7E6105-7DEB-5125-9B24-DCBC139F6CD2
   */
  requestId?: string;
  /**
   * @remarks
   * Returned object
   */
  resultObject?: DescribeEventResultListResponseBodyResultObject[];
  /**
   * @remarks
   * Whether the query was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Total number of items.
   * 
   * @example
   * 31
   */
  totalItem?: number;
  /**
   * @remarks
   * Total number of pages
   * 
   * @example
   * 9
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      currentPage: 'currentPage',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      pageSize: 'pageSize',
      requestId: 'requestId',
      resultObject: 'resultObject',
      success: 'success',
      totalItem: 'totalItem',
      totalPage: 'totalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      currentPage: 'number',
      httpStatusCode: 'string',
      message: 'string',
      pageSize: 'number',
      requestId: 'string',
      resultObject: { 'type': 'array', 'itemType': DescribeEventResultListResponseBodyResultObject },
      success: 'boolean',
      totalItem: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resultObject)) {
      $dara.Model.validateArray(this.resultObject);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

