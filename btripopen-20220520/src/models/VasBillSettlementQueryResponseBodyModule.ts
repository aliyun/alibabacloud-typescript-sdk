// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { VasBillSettlementQueryResponseBodyModuleItems } from "./VasBillSettlementQueryResponseBodyModuleItems";


export class VasBillSettlementQueryResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 21
   */
  category?: number;
  corpId?: string;
  items?: VasBillSettlementQueryResponseBodyModuleItems[];
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
  /**
   * @example
   * CAESBgoEIgIIABgAIhkKFwMSAAAAMUw4MDAwMDAwMDA2ZTFjZTNi
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
      items: { 'type': 'array', 'itemType': VasBillSettlementQueryResponseBodyModuleItems },
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

