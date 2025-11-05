// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCustomerOrdersResponseBodyData extends $dara.Model {
  /**
   * @example
   * test_123
   */
  customerAccount?: string;
  /**
   * @example
   * myBd
   */
  customerManager?: string;
  /**
   * @example
   * 123456
   */
  customerNo?: number;
  /**
   * @example
   * 236414227150922
   */
  orderId?: number;
  /**
   * @example
   * 0
   */
  orderSource?: string;
  /**
   * @example
   * 3
   */
  orderStatus?: number;
  /**
   * @example
   * BUY
   */
  orderType?: string;
  /**
   * @example
   * 3.92
   */
  originalCost?: number;
  /**
   * @example
   * 3:32
   */
  paymentMethod?: string;
  /**
   * @example
   * 2024-08-13 13:02:02
   */
  paymentTime?: string;
  /**
   * @example
   * 3.92
   */
  pretaxCost?: number;
  /**
   * @example
   * oss
   */
  productDetail?: string;
  /**
   * @example
   * snapshot
   */
  productType?: string;
  /**
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
   * @example
   * 200
   */
  code?: string;
  data?: GetCustomerOrdersResponseBodyData[];
  message?: string;
  msg?: string;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
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
   * @example
   * true
   */
  success?: boolean;
  /**
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

