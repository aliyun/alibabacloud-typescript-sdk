// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSubPartnerOrderListResponseBodyData extends $dara.Model {
  /**
   * @example
   * 0.9
   */
  amountDiscount?: number;
  /**
   * @example
   * 3750
   */
  amountDue?: number;
  /**
   * @example
   * 2024-07-07 07:52:22
   */
  createdAt?: string;
  customerClassification?: string;
  /**
   * @example
   * 0
   */
  deductedAmountByCoupons?: number;
  /**
   * @example
   * 3750
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
   * 2024-07-07 07:52:22
   */
  paidAt?: string;
  /**
   * @example
   * 1
   */
  payType?: number;
  /**
   * @example
   * 3750
   */
  price?: number;
  /**
   * @example
   * ecs
   */
  productCode?: string;
  productName?: string;
  /**
   * @example
   * 202502233443
   */
  projectId?: number;
  subPartnerName?: string;
  /**
   * @example
   * 1123132
   */
  subPartnerUid?: number;
  static names(): { [key: string]: string } {
    return {
      amountDiscount: 'AmountDiscount',
      amountDue: 'AmountDue',
      createdAt: 'CreatedAt',
      customerClassification: 'CustomerClassification',
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
      subPartnerName: 'SubPartnerName',
      subPartnerUid: 'SubPartnerUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amountDiscount: 'number',
      amountDue: 'number',
      createdAt: 'string',
      customerClassification: 'string',
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
      subPartnerName: 'string',
      subPartnerUid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

