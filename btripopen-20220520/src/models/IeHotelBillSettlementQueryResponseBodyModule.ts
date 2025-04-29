// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IeHotelBillSettlementQueryResponseBodyModuleDataList } from "./IeHotelBillSettlementQueryResponseBodyModuleDataList";


export class IeHotelBillSettlementQueryResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 12
   */
  category?: number;
  /**
   * @example
   * corp1
   */
  corpId?: string;
  dataList?: IeHotelBillSettlementQueryResponseBodyModuleDataList[];
  /**
   * @example
   * 1012039195340093034
   */
  orderId?: string;
  /**
   * @example
   * 2022-11-02
   */
  periodEnd?: string;
  /**
   * @example
   * 2022-11-01
   */
  periodStart?: string;
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
      dataList: 'data_list',
      orderId: 'order_id',
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
      dataList: { 'type': 'array', 'itemType': IeHotelBillSettlementQueryResponseBodyModuleDataList },
      orderId: 'string',
      periodEnd: 'string',
      periodStart: 'string',
      scrollId: 'string',
      totalSize: 'number',
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

