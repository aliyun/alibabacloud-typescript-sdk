// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeDetailListOfBuyerResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * 4988430***950
   */
  changeOrderNum?: number;
  /**
   * @example
   * 4988430***971
   */
  orderNum?: number;
  /**
   * @example
   * 2
   */
  orderStatus?: number;
  /**
   * @example
   * 2
   */
  payStatus?: number;
  /**
   * @example
   * hkduendkd-2023-dj0
   */
  transactionNo?: string;
  /**
   * @example
   * 1677415274000
   */
  utcCreateTime?: number;
  static names(): { [key: string]: string } {
    return {
      changeOrderNum: 'change_order_num',
      orderNum: 'order_num',
      orderStatus: 'order_status',
      payStatus: 'pay_status',
      transactionNo: 'transaction_no',
      utcCreateTime: 'utc_create_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderNum: 'number',
      orderNum: 'number',
      orderStatus: 'number',
      payStatus: 'number',
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

export class ChangeDetailListOfBuyerResponseBodyDataPagination extends $dara.Model {
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

export class ChangeDetailListOfBuyerResponseBodyData extends $dara.Model {
  list?: ChangeDetailListOfBuyerResponseBodyDataList[];
  pagination?: ChangeDetailListOfBuyerResponseBodyDataPagination;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      pagination: 'pagination',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ChangeDetailListOfBuyerResponseBodyDataList },
      pagination: ChangeDetailListOfBuyerResponseBodyDataPagination,
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

export class ChangeDetailListOfBuyerResponseBody extends $dara.Model {
  /**
   * @example
   * 51593418-8C73-5E47-8BA8-3F1D4A00CC0B
   */
  requestId?: string;
  data?: ChangeDetailListOfBuyerResponseBodyData;
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
      data: ChangeDetailListOfBuyerResponseBodyData,
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

