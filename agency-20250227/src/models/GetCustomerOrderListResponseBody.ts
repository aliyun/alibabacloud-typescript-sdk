// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCustomerOrderListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The order discount.
   * 
   * @example
   * 1
   */
  amountDiscount?: number;
  /**
   * @remarks
   * The actual payment amount.
   * 
   * @example
   * 29137
   */
  amountDue?: number;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2019-01-24 14:20:40
   */
  createdAt?: string;
  /**
   * @remarks
   * The customer account.
   * 
   * @example
   * test_123
   */
  customerAccount?: string;
  /**
   * @remarks
   * The customer classification.
   * 
   * @example
   * C类
   */
  customerClassification?: string;
  /**
   * @remarks
   * The customer UID.
   * 
   * @example
   * 123456
   */
  customerUid?: number;
  /**
   * @remarks
   * The coupon amount.
   * 
   * @example
   * 0
   */
  deductedAmountByCoupons?: number;
  /**
   * @remarks
   * The discounted price.
   * 
   * @example
   * 29137
   */
  discountedPrice?: number;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 236414227150922
   */
  orderId?: number;
  /**
   * @remarks
   * The order status. Valid values:
   * - 1: unpaid
   * - 2: paid
   * - 3: canceled.
   * 
   * @example
   * 3
   */
  orderStatus?: number;
  /**
   * @remarks
   * The order type. Valid values: BUY, UPGRADE, DOWNGRADE, RENEW, REFUND, OTHERS.
   * 
   * @example
   * BUY
   */
  orderType?: string;
  /**
   * @remarks
   * The payment time.
   * 
   * @example
   * 2019-01-24 14:20:40
   */
  paidAt?: string;
  /**
   * @remarks
   * The payment type. Valid values:
   * - 1: non-delegated payment
   * - 2: delegated payment.
   * 
   * @example
   * 1
   */
  payType?: number;
  /**
   * @remarks
   * The original price or list price.
   * 
   * @example
   * 29137
   */
  price?: number;
  /**
   * @remarks
   * The product code.
   * 
   * @example
   * slb
   */
  productCode?: string;
  /**
   * @remarks
   * The product name.
   * 
   * @example
   * slb
   */
  productName?: string;
  /**
   * @remarks
   * The opportunity ID.
   * 
   * @example
   * 202502230421
   */
  projectId?: number;
  /**
   * @remarks
   * The employee who follows up with the customer.
   */
  ramAccountForCustomerManagers?: string[];
  static names(): { [key: string]: string } {
    return {
      amountDiscount: 'AmountDiscount',
      amountDue: 'AmountDue',
      createdAt: 'CreatedAt',
      customerAccount: 'CustomerAccount',
      customerClassification: 'CustomerClassification',
      customerUid: 'CustomerUid',
      deductedAmountByCoupons: 'DeductedAmountByCoupons',
      discountedPrice: 'DiscountedPrice',
      orderId: 'OrderId',
      orderStatus: 'OrderStatus',
      orderType: 'OrderType',
      paidAt: 'PaidAt',
      payType: 'PayType',
      price: 'Price',
      productCode: 'ProductCode',
      productName: 'ProductName',
      projectId: 'ProjectId',
      ramAccountForCustomerManagers: 'RamAccountForCustomerManagers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amountDiscount: 'number',
      amountDue: 'number',
      createdAt: 'string',
      customerAccount: 'string',
      customerClassification: 'string',
      customerUid: 'number',
      deductedAmountByCoupons: 'number',
      discountedPrice: 'number',
      orderId: 'number',
      orderStatus: 'number',
      orderType: 'string',
      paidAt: 'string',
      payType: 'number',
      price: 'number',
      productCode: 'string',
      productName: 'string',
      projectId: 'number',
      ramAccountForCustomerManagers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ramAccountForCustomerManagers)) {
      $dara.Model.validateArray(this.ramAccountForCustomerManagers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomerOrderListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
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
   * The returned data.
   */
  data?: GetCustomerOrderListResponseBodyData[];
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
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
   * 2103a30617045934095083027d88c5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: { 'type': 'array', 'itemType': GetCustomerOrderListResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

