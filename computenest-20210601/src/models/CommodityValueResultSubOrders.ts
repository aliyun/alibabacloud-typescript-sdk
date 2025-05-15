// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CommodityValueResultSubOrdersSubOrder } from "./CommodityValueResultSubOrdersSubOrder";


export class CommodityValueResultSubOrders extends $dara.Model {
  /**
   * @remarks
   * 订单子项。
   */
  subOrder?: CommodityValueResultSubOrdersSubOrder[];
  static names(): { [key: string]: string } {
    return {
      subOrder: 'SubOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subOrder: { 'type': 'array', 'itemType': CommodityValueResultSubOrdersSubOrder },
    };
  }

  validate() {
    if(Array.isArray(this.subOrder)) {
      $dara.Model.validateArray(this.subOrder);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

