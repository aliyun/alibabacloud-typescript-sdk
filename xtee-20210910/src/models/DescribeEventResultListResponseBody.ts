// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventResultListResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The event code.
   * 
   * @example
   * de_aszbjb7236
   */
  eventCode?: string;
  /**
   * @remarks
   * The event name.
   * 
   * @example
   * 注册风险
   */
  eventName?: string;
  /**
   * @remarks
   * The number of entries that passed the check.
   * 
   * @example
   * 90
   */
  passNum?: number;
  /**
   * @remarks
   * The number of pending entries.
   * 
   * @example
   * 5
   */
  pendingNum?: number;
  /**
   * @remarks
   * The number of entries rejected during approval.
   * 
   * @example
   * 5
   */
  rejectNum?: number;
  /**
   * @remarks
   * The total number of entries.
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
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
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
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * The error details.
   * 
   * @example
   * The input parameter data is not valid. order_storage_company_num component not found
   */
  message?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
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
   * AE7E6105-7DEB-5125-9B24-DCBC139F6CD2
   */
  requestId?: string;
  /**
   * @remarks
   * The returned object.
   */
  resultObject?: DescribeEventResultListResponseBodyResultObject[];
  /**
   * @remarks
   * Indicates whether the query was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 31
   */
  totalItem?: number;
  /**
   * @remarks
   * The total number of pages.
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

