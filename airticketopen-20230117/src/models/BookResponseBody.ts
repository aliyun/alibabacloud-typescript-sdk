// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BookResponseBodyDataOrderListOrderAttributeAbaPayLockRateInfo extends $dara.Model {
  /**
   * @example
   * 14.2854
   */
  payIntendedAmount?: string;
  /**
   * @example
   * CNY
   */
  payIntendedCurrencyCode?: string;
  /**
   * @example
   * USD
   */
  quotationCurrencyCode?: string;
  /**
   * @example
   * 7.1427
   */
  toPayCurrencyRate?: string;
  static names(): { [key: string]: string } {
    return {
      payIntendedAmount: 'pay_intended_amount',
      payIntendedCurrencyCode: 'pay_intended_currency_code',
      quotationCurrencyCode: 'quotation_currency_code',
      toPayCurrencyRate: 'to_pay_currency_rate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payIntendedAmount: 'string',
      payIntendedCurrencyCode: 'string',
      quotationCurrencyCode: 'string',
      toPayCurrencyRate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BookResponseBodyDataOrderListOrderAttribute extends $dara.Model {
  abaPayLockRateInfo?: BookResponseBodyDataOrderListOrderAttributeAbaPayLockRateInfo;
  static names(): { [key: string]: string } {
    return {
      abaPayLockRateInfo: 'aba_pay_lock_rate_info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abaPayLockRateInfo: BookResponseBodyDataOrderListOrderAttributeAbaPayLockRateInfo,
    };
  }

  validate() {
    if(this.abaPayLockRateInfo && typeof (this.abaPayLockRateInfo as any).validate === 'function') {
      (this.abaPayLockRateInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BookResponseBodyDataOrderList extends $dara.Model {
  orderAttribute?: BookResponseBodyDataOrderListOrderAttribute;
  /**
   * @remarks
   * The order number.
   * 
   * @example
   * 4966***617111
   */
  orderNum?: number;
  static names(): { [key: string]: string } {
    return {
      orderAttribute: 'order_attribute',
      orderNum: 'order_num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderAttribute: BookResponseBodyDataOrderListOrderAttribute,
      orderNum: 'number',
    };
  }

  validate() {
    if(this.orderAttribute && typeof (this.orderAttribute as any).validate === 'function') {
      (this.orderAttribute as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BookResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of order information.
   */
  orderList?: BookResponseBodyDataOrderList[];
  static names(): { [key: string]: string } {
    return {
      orderList: 'order_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderList: { 'type': 'array', 'itemType': BookResponseBodyDataOrderList },
    };
  }

  validate() {
    if(Array.isArray(this.orderList)) {
      $dara.Model.validateArray(this.orderList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BookResponseBodyErrorDataOrderListOrderAttributeAbaPayLockRateInfo extends $dara.Model {
  /**
   * @example
   * 14.2854
   */
  payIntendedAmount?: string;
  /**
   * @example
   * CNY
   */
  payIntendedCurrencyCode?: string;
  /**
   * @example
   * USD
   */
  quotationCurrencyCode?: string;
  /**
   * @example
   * 7.1427
   */
  toPayCurrencyRate?: string;
  static names(): { [key: string]: string } {
    return {
      payIntendedAmount: 'pay_intended_amount',
      payIntendedCurrencyCode: 'pay_intended_currency_code',
      quotationCurrencyCode: 'quotation_currency_code',
      toPayCurrencyRate: 'to_pay_currency_rate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payIntendedAmount: 'string',
      payIntendedCurrencyCode: 'string',
      quotationCurrencyCode: 'string',
      toPayCurrencyRate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BookResponseBodyErrorDataOrderListOrderAttribute extends $dara.Model {
  abaPayLockRateInfo?: BookResponseBodyErrorDataOrderListOrderAttributeAbaPayLockRateInfo;
  static names(): { [key: string]: string } {
    return {
      abaPayLockRateInfo: 'aba_pay_lock_rate_info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abaPayLockRateInfo: BookResponseBodyErrorDataOrderListOrderAttributeAbaPayLockRateInfo,
    };
  }

  validate() {
    if(this.abaPayLockRateInfo && typeof (this.abaPayLockRateInfo as any).validate === 'function') {
      (this.abaPayLockRateInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BookResponseBodyErrorDataOrderList extends $dara.Model {
  orderAttribute?: BookResponseBodyErrorDataOrderListOrderAttribute;
  /**
   * @remarks
   * The order number.
   * 
   * @example
   * 4966***617111
   */
  orderNum?: number;
  static names(): { [key: string]: string } {
    return {
      orderAttribute: 'order_attribute',
      orderNum: 'order_num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderAttribute: BookResponseBodyErrorDataOrderListOrderAttribute,
      orderNum: 'number',
    };
  }

  validate() {
    if(this.orderAttribute && typeof (this.orderAttribute as any).validate === 'function') {
      (this.orderAttribute as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BookResponseBodyErrorData extends $dara.Model {
  /**
   * @remarks
   * The list of order information. If you call the Book operation again with the same parameters after a successful booking, the order number is returned.
   */
  orderList?: BookResponseBodyErrorDataOrderList[];
  static names(): { [key: string]: string } {
    return {
      orderList: 'order_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderList: { 'type': 'array', 'itemType': BookResponseBodyErrorDataOrderList },
    };
  }

  validate() {
    if(Array.isArray(this.orderList)) {
      $dara.Model.validateArray(this.orderList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BookResponseBody extends $dara.Model {
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
  data?: BookResponseBodyData;
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
  errorData?: BookResponseBodyErrorData;
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
      data: BookResponseBodyData,
      errorCode: 'string',
      errorData: BookResponseBodyErrorData,
      errorMsg: 'string',
      status: 'number',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(this.errorData && typeof (this.errorData as any).validate === 'function') {
      (this.errorData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

