// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IFlightOrderListQueryResponseBodyModuleFlightSaleOrderFlightOrderInsureList extends $dara.Model {
  /**
   * @example
   * 17060573244016310
   */
  insOrderId?: string;
  insPayType?: string;
  insTotalPrice?: number;
  /**
   * @example
   * 1
   */
  tradeAction?: string;
  static names(): { [key: string]: string } {
    return {
      insOrderId: 'ins_order_id',
      insPayType: 'ins_pay_type',
      insTotalPrice: 'ins_total_price',
      tradeAction: 'trade_action',
    };
  }

  static types(): { [key: string]: any } {
    return {
      insOrderId: 'string',
      insPayType: 'string',
      insTotalPrice: 'number',
      tradeAction: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

