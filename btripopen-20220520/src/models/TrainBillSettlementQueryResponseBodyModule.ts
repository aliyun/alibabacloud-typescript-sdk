// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TrainBillSettlementQueryResponseBodyModuleDataList } from "./TrainBillSettlementQueryResponseBodyModuleDataList";


export class TrainBillSettlementQueryResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 6
   */
  category?: number;
  corpId?: string;
  dataList?: TrainBillSettlementQueryResponseBodyModuleDataList[];
  /**
   * @example
   * 2021-10-14
   */
  periodEnd?: string;
  /**
   * @example
   * 2021-10-13
   */
  periodStart?: string;
  scrollId?: string;
  /**
   * @example
   * 2694
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      corpId: 'corp_id',
      dataList: 'data_list',
      periodEnd: 'period_end',
      periodStart: 'period_start',
      scrollId: 'scroll_id',
      totalNum: 'total_num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'number',
      corpId: 'string',
      dataList: { 'type': 'array', 'itemType': TrainBillSettlementQueryResponseBodyModuleDataList },
      periodEnd: 'string',
      periodStart: 'string',
      scrollId: 'string',
      totalNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataList)) {
      $dara.Model.validateArray(this.dataList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

