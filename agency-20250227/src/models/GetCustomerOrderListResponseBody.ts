// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCustomerOrderListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Order discount
   * 
   * @example
   * 1
   */
  amountDiscount?: number;
  /**
   * @remarks
   * Actual payment amount
   * 
   * @example
   * 29137
   */
  amountDue?: number;
  /**
   * @remarks
   * Creation Time
   * 
   * @example
   * 2019-01-24 14:20:40
   */
  createdAt?: string;
  /**
   * @remarks
   * Customer Account
   * 
   * @example
   * test_123
   */
  customerAccount?: string;
  /**
   * @remarks
   * Customer categorization
   * 
   * @example
   * C类
   */
  customerClassification?: string;
  /**
   * @remarks
   * Customer UID
   * 
   * @example
   * 123456
   */
  customerUid?: number;
  /**
   * @remarks
   * Coupon amount
   * 
   * @example
   * 0
   */
  deductedAmountByCoupons?: number;
  /**
   * @remarks
   * Discounted price
   * 
   * @example
   * 29137
   */
  discountedPrice?: number;
  /**
   * @remarks
   * Order ID
   * 
   * @example
   * 236414227150922
   */
  orderId?: number;
  /**
   * @remarks
   * Order status. Values include:  
   * 1: Unpaid  
   * 2: Paid  
   * 3: Voided
   * 
   * @example
   * 3
   */
  orderStatus?: number;
  /**
   * @remarks
   * Order type. Values include: BUY, UPGRADE, DOWNGRADE, RENEW, REFUND, OTHERS
   * 
   * @example
   * BUY
   */
  orderType?: string;
  /**
   * @remarks
   * Payment Time
   * 
   * @example
   * 2019-01-24 14:20:40
   */
  paidAt?: string;
  /**
   * @remarks
   * Payment type:  
   * 1: Non-agent payment  
   * 2: Agent payment
   * 
   * @example
   * 1
   */
  payType?: number;
  /**
   * @remarks
   * Original Price/List Price
   * 
   * @example
   * 29137
   */
  price?: number;
  /**
   * @remarks
   * Product code
   * 
   * @example
   * slb
   */
  productCode?: string;
  /**
   * @remarks
   * Product name
   * 
   * @example
   * slb
   */
  productName?: string;
  /**
   * @remarks
   * Opportunity ID
   * 
   * @example
   * 202502230421
   */
  projectId?: number;
  /**
   * @remarks
   * Customer-facing staff
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
   * Access denied details
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Status Code
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Returned data
   */
  data?: GetCustomerOrderListResponseBodyData[];
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Message
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Page number
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * Page size
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 2103a30617045934095083027d88c5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation succeeded
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Total number of entries
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

