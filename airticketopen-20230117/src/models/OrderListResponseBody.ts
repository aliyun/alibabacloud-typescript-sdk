// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OrderListResponseBodyDataListPassengerListCredential extends $dara.Model {
  /**
   * @remarks
   * issuing place (two-letter code)
   * 
   * @example
   * CN
   */
  certIssuePlace?: string;
  /**
   * @remarks
   * credential number
   * 
   * @example
   * E1***5674
   */
  credentialNum?: string;
  /**
   * @remarks
   * credential type , only support "1"(1 means passport) currently.
   * 
   * @example
   * 1
   */
  credentialType?: number;
  /**
   * @remarks
   * credential expiration date
   * 
   * @example
   * 20290101
   */
  expireDate?: string;
  static names(): { [key: string]: string } {
    return {
      certIssuePlace: 'cert_issue_place',
      credentialNum: 'credential_num',
      credentialType: 'credential_type',
      expireDate: 'expire_date',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIssuePlace: 'string',
      credentialNum: 'string',
      credentialType: 'number',
      expireDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderListResponseBodyDataListPassengerList extends $dara.Model {
  /**
   * @remarks
   * date of birth (yyyyMMdd)
   * 
   * @example
   * 20020301
   */
  birthday?: string;
  /**
   * @remarks
   * credential
   */
  credential?: OrderListResponseBodyDataListPassengerListCredential;
  /**
   * @remarks
   * first name
   * 
   * @example
   * SAN
   */
  firstName?: string;
  /**
   * @remarks
   * gender 0: MALE; 1: FEMALE
   * 
   * @example
   * 0
   */
  gender?: number;
  /**
   * @remarks
   * last name
   * 
   * @example
   * ZHANG
   */
  lastName?: string;
  /**
   * @remarks
   * mobile country code
   * 
   * @example
   * 86
   */
  mobileCountryCode?: string;
  /**
   * @remarks
   * mobile phone number
   * 
   * @example
   * 183******96
   */
  mobilePhoneNumber?: string;
  /**
   * @remarks
   * nationality (two-letter code)
   * 
   * @example
   * CN
   */
  nationality?: string;
  /**
   * @remarks
   * passenger type 0: adult; 1: child; 8: infant
   * 
   * @example
   * 0
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      birthday: 'birthday',
      credential: 'credential',
      firstName: 'first_name',
      gender: 'gender',
      lastName: 'last_name',
      mobileCountryCode: 'mobile_country_code',
      mobilePhoneNumber: 'mobile_phone_number',
      nationality: 'nationality',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      birthday: 'string',
      credential: OrderListResponseBodyDataListPassengerListCredential,
      firstName: 'string',
      gender: 'number',
      lastName: 'string',
      mobileCountryCode: 'string',
      mobilePhoneNumber: 'string',
      nationality: 'string',
      type: 'number',
    };
  }

  validate() {
    if(this.credential && typeof (this.credential as any).validate === 'function') {
      (this.credential as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderListResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * book time(timestamp)
   * 
   * @example
   * 1677210784000
   */
  bookTime?: number;
  /**
   * @remarks
   * order number created by book
   * 
   * @example
   * 4966***617111
   */
  orderNum?: number;
  /**
   * @remarks
   * order status
   * 
   * 1: order reservation in process
   * 
   * 2: order reservation successful
   * 
   * 3: order paid
   * 
   * 4: order successful
   * 
   * 5: order closed
   * 
   * @example
   * 4
   */
  orderStatus?: string;
  /**
   * @remarks
   * external order number(customized by buyer when book)
   * 
   * @example
   * x091-2023-0220-j-0001
   */
  outOrderNum?: string;
  /**
   * @remarks
   * the information about all passenger of current order
   */
  passengerList?: OrderListResponseBodyDataListPassengerList[];
  /**
   * @remarks
   * payment status
   * 
   * 1: payment in process
   * 
   * 2: deduction successful
   * 
   * 3: paid to the seller
   * 
   * 4: transaction closed
   * 
   * @example
   * 2
   */
  payStatus?: string;
  /**
   * @remarks
   * pay time(timestamp)
   * 
   * @example
   * 1677210788000
   */
  payTime?: number;
  /**
   * @remarks
   * discount amount
   * 
   * @example
   * 10
   */
  promotionPrice?: number;
  /**
   * @remarks
   * actual payment amount
   * 
   * @example
   * 3000
   */
  realPayPrice?: number;
  /**
   * @remarks
   * buyer nickname
   * 
   * @example
   * nick
   */
  sessionNick?: string;
  /**
   * @remarks
   * order success time(timestamp)
   * 
   * @example
   * 1677210786000
   */
  succeedTime?: number;
  /**
   * @remarks
   * total price of current order
   * 
   * @example
   * 3000
   */
  totalPrice?: number;
  /**
   * @remarks
   * transaction number
   * 
   * @example
   * hkduendkd-2023-dj0
   */
  transactionNo?: string;
  static names(): { [key: string]: string } {
    return {
      bookTime: 'book_time',
      orderNum: 'order_num',
      orderStatus: 'order_status',
      outOrderNum: 'out_order_num',
      passengerList: 'passenger_list',
      payStatus: 'pay_status',
      payTime: 'pay_time',
      promotionPrice: 'promotion_price',
      realPayPrice: 'real_pay_price',
      sessionNick: 'session_nick',
      succeedTime: 'succeed_time',
      totalPrice: 'total_price',
      transactionNo: 'transaction_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bookTime: 'number',
      orderNum: 'number',
      orderStatus: 'string',
      outOrderNum: 'string',
      passengerList: { 'type': 'array', 'itemType': OrderListResponseBodyDataListPassengerList },
      payStatus: 'string',
      payTime: 'number',
      promotionPrice: 'number',
      realPayPrice: 'number',
      sessionNick: 'string',
      succeedTime: 'number',
      totalPrice: 'number',
      transactionNo: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.passengerList)) {
      $dara.Model.validateArray(this.passengerList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderListResponseBodyDataPagination extends $dara.Model {
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
   * the number of total orders
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

export class OrderListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * order list
   */
  list?: OrderListResponseBodyDataList[];
  /**
   * @remarks
   * information of pagination
   */
  pagination?: OrderListResponseBodyDataPagination;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      pagination: 'pagination',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': OrderListResponseBodyDataList },
      pagination: OrderListResponseBodyDataPagination,
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

export class OrderListResponseBody extends $dara.Model {
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
  data?: OrderListResponseBodyData;
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
      data: OrderListResponseBodyData,
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

