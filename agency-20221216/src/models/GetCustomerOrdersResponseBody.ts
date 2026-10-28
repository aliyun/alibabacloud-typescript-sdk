// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCustomerOrdersResponseBodyData extends $dara.Model {
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
   * The account manager.
   * 
   * @example
   * myBd
   */
  customerManager?: string;
  /**
   * @remarks
   * The customer UID.
   * 
   * @example
   * 123456
   */
  customerNo?: number;
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
   * The order source. Valid values:
   * - 0: Regular customer.
   * - 1: Enterprise customer.
   * - 2: Tier-2 distributor.
   * 
   * @example
   * 0
   */
  orderSource?: string;
  /**
   * @remarks
   * The order status. Valid values:
   * - 1: Unpaid.
   * - 2: Canceled.
   * - 3: Paid.
   * 
   * @example
   * 3
   */
  orderStatus?: number;
  /**
   * @remarks
   * The order type. Valid values:
   * - BUY: New purchase.
   * - UPGRADE: Upgrade.
   * - DOWNGRADE: Downgrade.
   * - RENEW: Renewal.
   * - REFUND: Refund.
   * - OTHERS: Others.
   * 
   * @example
   * BUY
   */
  orderType?: string;
  /**
   * @remarks
   * The original order price.
   * 
   * @example
   * 3.92
   */
  originalCost?: number;
  /**
   * @remarks
   * The payment method.
   * 
   * @example
   * 3:32
   */
  paymentMethod?: string;
  /**
   * @remarks
   * The payment time. Format: YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2024-08-13 13:02:02
   */
  paymentTime?: string;
  /**
   * @remarks
   * The payable amount.
   * 
   * @example
   * 3.92
   */
  pretaxCost?: number;
  /**
   * @remarks
   * The product details.
   * 
   * @example
   * oss
   */
  productDetail?: string;
  /**
   * @remarks
   * The product detail code.
   * 
   * @example
   * snapshot
   */
  productType?: string;
  /**
   * @remarks
   * The order placement time. Format: YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2024-08-13 13:02:02
   */
  timeToOrder?: string;
  static names(): { [key: string]: string } {
    return {
      customerAccount: 'CustomerAccount',
      customerManager: 'CustomerManager',
      customerNo: 'CustomerNo',
      orderId: 'OrderId',
      orderSource: 'OrderSource',
      orderStatus: 'OrderStatus',
      orderType: 'OrderType',
      originalCost: 'OriginalCost',
      paymentMethod: 'PaymentMethod',
      paymentTime: 'PaymentTime',
      pretaxCost: 'PretaxCost',
      productDetail: 'ProductDetail',
      productType: 'ProductType',
      timeToOrder: 'TimeToOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerAccount: 'string',
      customerManager: 'string',
      customerNo: 'number',
      orderId: 'number',
      orderSource: 'string',
      orderStatus: 'number',
      orderType: 'string',
      originalCost: 'number',
      paymentMethod: 'string',
      paymentTime: 'string',
      pretaxCost: 'number',
      productDetail: 'string',
      productType: 'string',
      timeToOrder: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomerOrdersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetCustomerOrdersResponseBodyData[];
  /**
   * @remarks
   * The message. The value is the same as the Code parameter.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The message. The value is the same as the Code parameter.
   * 
   * @example
   * Success
   */
  msg?: string;
  /**
   * @remarks
   * The current page number.
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
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 23309219-4A34-589D-A3E0-9B2A3BFFD24F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * - 200: OK.
   * - 201: Parameter error.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      msg: 'Msg',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetCustomerOrdersResponseBodyData },
      message: 'string',
      msg: 'string',
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

