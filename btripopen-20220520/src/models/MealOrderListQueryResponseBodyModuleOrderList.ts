// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MealOrderListQueryResponseBodyModuleOrderList extends $dara.Model {
  /**
   * @example
   * 100
   */
  corpPayAmount?: number;
  merchantName?: string;
  /**
   * @example
   * 1034124198083211043
   */
  orderId?: string;
  /**
   * @example
   * 1
   */
  orderStatus?: number;
  orderType?: string;
  /**
   * @example
   * 100
   */
  payAmount?: number;
  /**
   * @example
   * 100
   */
  personPayAmount?: number;
  /**
   * @example
   * 1711705057
   */
  settleTime?: string;
  static names(): { [key: string]: string } {
    return {
      corpPayAmount: 'corp_pay_amount',
      merchantName: 'merchant_name',
      orderId: 'order_id',
      orderStatus: 'order_status',
      orderType: 'order_type',
      payAmount: 'pay_amount',
      personPayAmount: 'person_pay_amount',
      settleTime: 'settle_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpPayAmount: 'number',
      merchantName: 'string',
      orderId: 'string',
      orderStatus: 'number',
      orderType: 'string',
      payAmount: 'number',
      personPayAmount: 'number',
      settleTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

