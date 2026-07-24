// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefundDetailListResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether this is a supplementary refund order.
   * 
   * @example
   * true
   */
  isMultiRefund?: boolean;
  /**
   * @remarks
   * The order number.
   * 
   * @example
   * 49884*****2345
   */
  orderNum?: number;
  /**
   * @remarks
   * The refund order number.
   * 
   * @example
   * 49884*****950
   */
  refundOrderNum?: number;
  /**
   * @remarks
   * The refund order status. Valid values:
   * - 0: refund requested.
   * - 1: refund being processed.
   * - 2: refund failed.
   * - 3: refund succeeded.
   * 
   * @example
   * 1
   */
  refundOrderStatus?: number;
  /**
   * @remarks
   * The refund order number of the original order associated with this supplementary refund order. This field is returned only for supplementary refund orders and indicates the refund order ID of the associated original order.
   * 
   * @example
   * 49884*****2387
   */
  relatedRefundOrderNum?: string;
  /**
   * @remarks
   * The transaction number.
   * 
   * @example
   * 49884**tde-95za
   */
  transactionNo?: string;
  /**
   * @remarks
   * The creation time. The value is a UTC timestamp.
   * 
   * @example
   * 1677229002000
   */
  utcCreateTime?: number;
  static names(): { [key: string]: string } {
    return {
      isMultiRefund: 'is_multi_refund',
      orderNum: 'order_num',
      refundOrderNum: 'refund_order_num',
      refundOrderStatus: 'refund_order_status',
      relatedRefundOrderNum: 'related_refund_order_num',
      transactionNo: 'transaction_no',
      utcCreateTime: 'utc_create_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isMultiRefund: 'boolean',
      orderNum: 'number',
      refundOrderNum: 'number',
      refundOrderStatus: 'number',
      relatedRefundOrderNum: 'string',
      transactionNo: 'string',
      utcCreateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundDetailListResponseBodyDataPagination extends $dara.Model {
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
   * The number of records per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 1
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'current_page',
      pageSize: 'page_size',
      totalCount: 'total_count',
      totalPage: 'total_page',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundDetailListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The data list.
   */
  list?: RefundDetailListResponseBodyDataList[];
  /**
   * @remarks
   * The pagination information.
   */
  pagination?: RefundDetailListResponseBodyDataPagination;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      pagination: 'pagination',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': RefundDetailListResponseBodyDataList },
      pagination: RefundDetailListResponseBodyDataPagination,
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    if(this.pagination && typeof (this.pagination as any).validate === 'function') {
      (this.pagination as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundDetailListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 51593418-8C73-5E47-8BA8-3F1D4A00CC0B
   */
  requestId?: string;
  /**
   * @remarks
   * The data returned for a successful request.
   */
  data?: RefundDetailListResponseBodyData;
  /**
   * @remarks
   * The business error code.
   * 
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @remarks
   * The data returned with the error.
   * 
   * @example
   * null
   */
  errorData?: any;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * null
   */
  errorMsg?: string;
  /**
   * @remarks
   * The HTTP status code. The value is always 200 for successful requests.
   * 
   * @example
   * 200
   */
  status?: number;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'data',
      errorCode: 'error_code',
      errorData: 'error_data',
      errorMsg: 'error_msg',
      status: 'status',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: RefundDetailListResponseBodyData,
      errorCode: 'string',
      errorData: 'any',
      errorMsg: 'string',
      status: 'number',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

