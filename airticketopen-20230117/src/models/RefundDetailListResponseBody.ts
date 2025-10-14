// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefundDetailListResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * whether it is a supplementary refund order (if the refund amount is not enough, you can use RefundApply to create a supplementary refund order)
   * 
   * @example
   * true
   */
  isMultiRefund?: boolean;
  /**
   * @remarks
   * order number that returned by Book
   * 
   * @example
   * 49884*****2345
   */
  orderNum?: number;
  /**
   * @remarks
   * refund order number that returned by RefundApply
   * 
   * @example
   * 49884*****950
   */
  refundOrderNum?: number;
  /**
   * @remarks
   * refund order status 
   * 
   * 0: refund application
   * 
   * 1: refund in progress
   * 
   * 2: refund failed
   * 
   * 3: refund succeeded
   * 
   * @example
   * 1
   */
  refundOrderStatus?: number;
  /**
   * @remarks
   * the original refund order number associated with this supplementary refund order, only avaliable when is_multi_refund=true
   * 
   * @example
   * 49884*****2387
   */
  relatedRefundOrderNum?: string;
  /**
   * @remarks
   * transaction number
   * 
   * @example
   * 49884**tde-95za
   */
  transactionNo?: string;
  /**
   * @remarks
   * refund time(timestamp)
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
   * current page index
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * page size
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * the number of total refund orders
   * 
   * @example
   * 5
   */
  totalCount?: number;
  /**
   * @remarks
   * the number of total pages
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
   * refund order list
   */
  list?: RefundDetailListResponseBodyDataList[];
  /**
   * @remarks
   * information of pagination
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
   * request ID
   * 
   * @example
   * 51593418-8C73-5E47-8BA8-3F1D4A00CC0B
   */
  requestId?: string;
  /**
   * @remarks
   * data
   */
  data?: RefundDetailListResponseBodyData;
  /**
   * @remarks
   * error code
   * 
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @remarks
   * error data
   * 
   * @example
   * null
   */
  errorData?: any;
  /**
   * @remarks
   * error message
   * 
   * @example
   * null
   */
  errorMsg?: string;
  /**
   * @remarks
   * http reqeust has been processed successfully，status code is 200
   * 
   * @example
   * 200
   */
  status?: number;
  /**
   * @remarks
   * true represents success, false represents failure
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

