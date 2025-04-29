// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FuPointBillSettlementQueryResponseBodyModuleItems } from "./FuPointBillSettlementQueryResponseBodyModuleItems";


export class FuPointBillSettlementQueryResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 10
   */
  category?: number;
  /**
   * @example
   * corpid
   */
  corpId?: string;
  items?: FuPointBillSettlementQueryResponseBodyModuleItems[];
  /**
   * @example
   * 2022-07-02
   */
  periodEnd?: string;
  /**
   * @example
   * 2021-10-13
   */
  periodStart?: string;
  /**
   * @example
   * 1qwe
   */
  scrollId?: string;
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
      periodEnd: 'period_end',
      periodStart: 'period_start',
      scrollId: 'scroll_id',
      totalSize: 'total_size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'number',
      corpId: 'string',
      items: { 'type': 'array', 'itemType': FuPointBillSettlementQueryResponseBodyModuleItems },
      periodEnd: 'string',
      periodStart: 'string',
      scrollId: 'string',
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

