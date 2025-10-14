// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AccountFlowListResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * 1000
   */
  afterAvailableAmount?: number;
  /**
   * @example
   * 1950.5
   */
  beforeAvailableAmount?: number;
  /**
   * @example
   * 49880***971
   */
  changeOrderNum?: number;
  /**
   * @example
   * 1627239841225842666
   */
  flowId?: number;
  /**
   * @example
   * 1676799185000
   */
  gmtCreate?: number;
  /**
   * @example
   * 1676966530000
   */
  gmtModified?: number;
  /**
   * @example
   * 950.5
   */
  opAmount?: number;
  /**
   * @example
   * 2
   */
  opType?: number;
  /**
   * @example
   * 4988430***971
   */
  orderNum?: number;
  /**
   * @example
   * 1
   */
  orderType?: number;
  /**
   * @example
   * 4988430***971
   */
  outOrderNum?: string;
  /**
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
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 5
   */
  totalCount?: number;
  /**
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
  list?: AccountFlowListResponseBodyDataList[];
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
   * @example
   * 51593418-8C73-5E47-8BA8-3F1D4A00CC0B
   */
  requestId?: string;
  data?: AccountFlowListResponseBodyData;
  /**
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @example
   * null
   */
  errorData?: any;
  /**
   * @example
   * null
   */
  errorMsg?: string;
  /**
   * @example
   * 200
   */
  status?: number;
  /**
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

