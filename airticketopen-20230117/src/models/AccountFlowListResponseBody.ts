// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AccountFlowListResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The available balance after the operation, in CNY.
   * 
   * @example
   * 1000
   */
  afterAvailableAmount?: number;
  /**
   * @remarks
   * The available balance before the operation, in CNY.
   * 
   * @example
   * 1950.5
   */
  beforeAvailableAmount?: number;
  /**
   * @remarks
   * The change order number. This value is not empty if the flow is related to a ticket change.
   * 
   * @example
   * 49880***971
   */
  changeOrderNum?: number;
  /**
   * @remarks
   * The flow ID.
   * 
   * @example
   * 1627239841225842666
   */
  flowId?: number;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1676799185000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 1676966530000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The operation amount, in CNY.
   * 
   * @example
   * 950.5
   */
  opAmount?: number;
  /**
   * @remarks
   * The operation type. Valid values:
   * - 1: payment
   * - 2: refund
   * - 3: top-up.
   * 
   * @example
   * 2
   */
  opType?: number;
  /**
   * @remarks
   * The original order number.
   * 
   * @example
   * 4988430***971
   */
  orderNum?: number;
  /**
   * @remarks
   * The order type. Valid values:
   * - 0: original transaction
   * - 1: change order payment
   * - 2: refund.
   * 
   * @example
   * 1
   */
  orderType?: number;
  /**
   * @remarks
   * The external order number of the original order.
   * 
   * @example
   * 4988430***971
   */
  outOrderNum?: string;
  /**
   * @remarks
   * The refund order number. This value is not empty if the flow is related to a refund.
   * 
   * @example
   * 48430***971
   */
  refundOrderNum?: number;
  static names(): { [key: string]: string } {
    return {
      afterAvailableAmount: 'after_available_amount',
      beforeAvailableAmount: 'before_available_amount',
      changeOrderNum: 'change_order_num',
      flowId: 'flow_id',
      gmtCreate: 'gmt_create',
      gmtModified: 'gmt_modified',
      opAmount: 'op_amount',
      opType: 'op_type',
      orderNum: 'order_num',
      orderType: 'order_type',
      outOrderNum: 'out_order_num',
      refundOrderNum: 'refund_order_num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterAvailableAmount: 'number',
      beforeAvailableAmount: 'number',
      changeOrderNum: 'number',
      flowId: 'number',
      gmtCreate: 'number',
      gmtModified: 'number',
      opAmount: 'number',
      opType: 'number',
      orderNum: 'number',
      orderType: 'number',
      outOrderNum: 'string',
      refundOrderNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AccountFlowListResponseBodyDataPagination extends $dara.Model {
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

export class AccountFlowListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The data list.
   */
  list?: AccountFlowListResponseBodyDataList[];
  /**
   * @remarks
   * The pagination information.
   */
  pagination?: AccountFlowListResponseBodyDataPagination;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      pagination: 'pagination',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': AccountFlowListResponseBodyDataList },
      pagination: AccountFlowListResponseBodyDataPagination,
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

export class AccountFlowListResponseBody extends $dara.Model {
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
  data?: AccountFlowListResponseBodyData;
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
   * The HTTP status code. The value is always 200 for successful HTTP requests.
   * 
   * @example
   * 200
   */
  status?: number;
  /**
   * @remarks
   * Indicates whether the request is successful.
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
      data: AccountFlowListResponseBodyData,
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

