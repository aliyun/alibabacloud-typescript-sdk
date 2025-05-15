// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CommodityValueResultOrder } from "./CommodityValueResultOrder";
import { CommodityValueResultSubOrders } from "./CommodityValueResultSubOrders";
import { CommodityValueResultCoupons } from "./CommodityValueResultCoupons";


export class CommodityValueResult extends $dara.Model {
  /**
   * @remarks
   * 订单信息。
   */
  order?: CommodityValueResultOrder;
  /**
   * @remarks
   * 询价类型，可选值：
   * 1. Buy：新购询价。
   * 2. ModificationBuy：变配询价。
   * 
   * @example
   * Buy
   */
  inquiryType?: string;
  /**
   * @remarks
   * 订单子项。
   */
  subOrders?: CommodityValueResultSubOrders;
  /**
   * @remarks
   * 优惠券。
   */
  coupons?: CommodityValueResultCoupons[];
  static names(): { [key: string]: string } {
    return {
      order: 'Order',
      inquiryType: 'InquiryType',
      subOrders: 'SubOrders',
      coupons: 'Coupons',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: CommodityValueResultOrder,
      inquiryType: 'string',
      subOrders: CommodityValueResultSubOrders,
      coupons: { 'type': 'array', 'itemType': CommodityValueResultCoupons },
    };
  }

  validate() {
    if(this.order && typeof (this.order as any).validate === 'function') {
      (this.order as any).validate();
    }
    if(this.subOrders && typeof (this.subOrders as any).validate === 'function') {
      (this.subOrders as any).validate();
    }
    if(Array.isArray(this.coupons)) {
      $dara.Model.validateArray(this.coupons);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

