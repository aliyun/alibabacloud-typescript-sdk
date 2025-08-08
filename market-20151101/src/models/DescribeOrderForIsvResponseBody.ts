// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOrderForIsvResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  accountQuantity?: number;
  /**
   * @example
   * 190311111111****
   */
  aliUid?: number;
  components?: any;
  /**
   * @example
   * 0.0
   */
  couponPrice?: number;
  /**
   * @example
   * 1531191564000
   */
  createdOn?: number;
  /**
   * @remarks
   * List
   */
  instanceIds?: string[];
  /**
   * @example
   * 202211111111111
   */
  orderId?: number;
  /**
   * @example
   * NORMAL
   */
  orderStatus?: string;
  /**
   * @example
   * NEW
   */
  orderType?: string;
  /**
   * @example
   * 10.0
   */
  originalPrice?: number;
  /**
   * @example
   * 1531191675000
   */
  paidOn?: number;
  /**
   * @example
   * PAID
   */
  payStatus?: string;
  /**
   * @example
   * 0.0
   */
  paymentPrice?: number;
  /**
   * @example
   * MONTH
   */
  periodType?: string;
  /**
   * @example
   * cmgj02****
   */
  productCode?: string;
  productName?: string;
  /**
   * @example
   * cmgj02****-prepay
   */
  productSkuCode?: string;
  /**
   * @example
   * 1
   */
  quantity?: number;
  /**
   * @example
   * 6EF60BEC-****-****-****-270359FB54A7
   */
  requestId?: string;
  /**
   * @example
   * 0.0
   */
  totalPrice?: number;
  static names(): { [key: string]: string } {
    return {
      accountQuantity: 'AccountQuantity',
      aliUid: 'AliUid',
      components: 'Components',
      couponPrice: 'CouponPrice',
      createdOn: 'CreatedOn',
      instanceIds: 'InstanceIds',
      orderId: 'OrderId',
      orderStatus: 'OrderStatus',
      orderType: 'OrderType',
      originalPrice: 'OriginalPrice',
      paidOn: 'PaidOn',
      payStatus: 'PayStatus',
      paymentPrice: 'PaymentPrice',
      periodType: 'PeriodType',
      productCode: 'ProductCode',
      productName: 'ProductName',
      productSkuCode: 'ProductSkuCode',
      quantity: 'Quantity',
      requestId: 'RequestId',
      totalPrice: 'TotalPrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountQuantity: 'number',
      aliUid: 'number',
      components: 'any',
      couponPrice: 'number',
      createdOn: 'number',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      orderId: 'number',
      orderStatus: 'string',
      orderType: 'string',
      originalPrice: 'number',
      paidOn: 'number',
      payStatus: 'string',
      paymentPrice: 'number',
      periodType: 'string',
      productCode: 'string',
      productName: 'string',
      productSkuCode: 'string',
      quantity: 'number',
      requestId: 'string',
      totalPrice: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

