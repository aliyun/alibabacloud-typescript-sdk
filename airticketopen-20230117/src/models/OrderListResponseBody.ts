// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OrderListResponseBodyDataListPassengerListCredential extends $dara.Model {
  /**
   * @remarks
   * The place of issue, represented as a two-letter code.
   * 
   * @example
   * CN
   */
  certIssuePlace?: string;
  /**
   * @remarks
   * The credential number.
   * 
   * @example
   * E1***5674
   */
  credentialNum?: string;
  /**
   * @remarks
   * The credential type. Valid values:
   * - 0: ID card.
   * - 1: passport.
   * - 2: student ID.
   * - 3: military ID.
   * - 4: Home Return Permit.
   * - 5: Taiwan Compatriot Permit.
   * - 6: Hong Kong and Macao Travel Permit.
   * - 7: international seafarer certificate.
   * - 8: Foreigner Permanent Residence Card.
   * - 10: police officer ID.
   * - 11: soldier ID.
   * - 12: Taiwan Travel Permit.
   * - 13: Taiwan Entry Permit.
   * - 14: household register.
   * - 15: birth certificate.
   * - 16: driver license.
   * - 17: Hong Kong and Macao Resident Residence Permit.
   * - 18: Taiwan Resident Residence Permit.
   * 
   * @example
   * 1
   */
  credentialType?: number;
  /**
   * @remarks
   * The credential expiration date.
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
   * The date of birth in the yyyyMMdd format.
   * 
   * @example
   * 20020301
   */
  birthday?: string;
  /**
   * @remarks
   * The credential information.
   */
  credential?: OrderListResponseBodyDataListPassengerListCredential;
  /**
   * @remarks
   * The first name.
   * 
   * @example
   * SAN
   */
  firstName?: string;
  /**
   * @remarks
   * The gender. Valid values:
   * - 0: MALE.
   * - 1: FEMALE.
   * 
   * @example
   * 0
   */
  gender?: number;
  /**
   * @remarks
   * The last name.
   * 
   * @example
   * ZHANG
   */
  lastName?: string;
  /**
   * @remarks
   * The country code of the mobile phone number.
   * 
   * @example
   * 86
   */
  mobileCountryCode?: string;
  /**
   * @remarks
   * The mobile phone number.
   * 
   * @example
   * 183******96
   */
  mobilePhoneNumber?: string;
  /**
   * @remarks
   * The two-letter nationality code.
   * 
   * @example
   * CN
   */
  nationality?: string;
  /**
   * @remarks
   * The passenger type. Valid values:
   * - 0: adult.
   * - 1: child.
   * - 8: infant.
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
   * The booking time (order creation time). The value is a 13-digit UNIX timestamp.
   * 
   * @example
   * 1677210784000
   */
  bookTime?: number;
  /**
   * @remarks
   * The order number.
   * 
   * @example
   * 4966***617111
   */
  orderNum?: number;
  /**
   * @remarks
   * The order status. Valid values:
   * - 2: order creation succeeded.
   * - 3: order paid.
   * - 4: order succeeded.
   * - 5: order closed.
   * 
   * @example
   * 4
   */
  orderStatus?: string;
  /**
   * @remarks
   * The external order number.
   * 
   * @example
   * x091-2023-0220-j-0001
   */
  outOrderNum?: string;
  /**
   * @remarks
   * The passenger list.
   */
  passengerList?: OrderListResponseBodyDataListPassengerList[];
  /**
   * @remarks
   * The payment status. Valid values:
   * - 0: initialized.
   * - 1: creation succeeded.
   * - 2: payment succeeded.
   * - 4: transaction closed.
   * 
   * @example
   * 2
   */
  payStatus?: string;
  /**
   * @remarks
   * The payment time. The value is a 13-digit UNIX timestamp.
   * 
   * @example
   * 1677210788000
   */
  payTime?: number;
  /**
   * @remarks
   * The discount amount. Unit: yuan.
   * 
   * @example
   * 10
   */
  promotionPrice?: number;
  /**
   * @remarks
   * The actual payment amount. Unit: yuan.
   * 
   * @example
   * 3000
   */
  realPayPrice?: number;
  /**
   * @remarks
   * The buyer nickname.
   * 
   * @example
   * nick
   */
  sessionNick?: string;
  /**
   * @remarks
   * The ticketing time. The value is a 13-digit UNIX timestamp.
   * 
   * @example
   * 1677210786000
   */
  succeedTime?: number;
  /**
   * @remarks
   * The total price of the order. Unit: yuan.
   * 
   * @example
   * 3000
   */
  totalPrice?: number;
  /**
   * @remarks
   * The transaction serial number.
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

export class OrderListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The data list.
   */
  list?: OrderListResponseBodyDataList[];
  /**
   * @remarks
   * The pagination information.
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
  data?: OrderListResponseBodyData;
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

