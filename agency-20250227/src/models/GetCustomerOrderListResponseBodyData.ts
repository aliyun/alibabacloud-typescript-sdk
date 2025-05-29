// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCustomerOrderListResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  amountDiscount?: number;
  /**
   * @example
   * 29137
   */
  amountDue?: number;
  /**
   * @example
   * 2019-01-24 14:20:40
   */
  createdAt?: string;
  /**
   * @example
   * test_123
   */
  customerAccount?: string;
  customerClassification?: string;
  /**
   * @example
   * 123456
   */
  customerUid?: number;
  /**
   * @example
   * 0
   */
  deductedAmountByCoupons?: number;
  /**
   * @example
   * 29137
   */
  discountedPrice?: number;
  /**
   * @example
   * 236414227150922
   */
  orderId?: number;
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
   * 2019-01-24 14:20:40
   */
  paidAt?: string;
  /**
   * @example
   * 1
   */
  payType?: number;
  /**
   * @example
   * 29137
   */
  price?: number;
  /**
   * @example
   * slb
   */
  productCode?: string;
  /**
   * @example
   * slb
   */
  productName?: string;
  /**
   * @example
   * 202502230421
   */
  projectId?: number;
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

