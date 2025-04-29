// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MealBillSettlementQueryResponseBodyModuleItems } from "./MealBillSettlementQueryResponseBodyModuleItems";


export class MealBillSettlementQueryResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 7
   */
  category?: number;
  corpId?: string;
  items?: MealBillSettlementQueryResponseBodyModuleItems[];
  /**
   * @example
   * 1002039195025156700
   */
  orderId?: string;
  /**
   * @example
   * 2022-07-02
   */
  periodEnd?: string;
  /**
   * @example
   * 2022-07-01
   */
  periodStart?: string;
  scrollId?: string;
  /**
   * @example
   * 2695
   */
  totalNum?: number;
  /**
   * @example
   * 30
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      corpId: 'corp_id',
      items: 'items',
      orderId: 'order_id',
      periodEnd: 'period_end',
      periodStart: 'period_start',
      scrollId: 'scroll_id',
      totalNum: 'total_num',
      totalSize: 'total_size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'number',
      corpId: 'string',
      items: { 'type': 'array', 'itemType': MealBillSettlementQueryResponseBodyModuleItems },
      orderId: 'string',
      periodEnd: 'string',
      periodStart: 'string',
      scrollId: 'string',
      totalNum: 'number',
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

