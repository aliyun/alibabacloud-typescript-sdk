// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IeFlightBillSettlementQueryRequest extends $dara.Model {
  billBatch?: string;
  orderId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @example
   * 2021-10-02
   */
  periodEnd?: string;
  /**
   * @example
   * 2021-10-01
   */
  periodStart?: string;
  scrollId?: string;
  scrollMod?: boolean;
  static names(): { [key: string]: string } {
    return {
      billBatch: 'bill_batch',
      orderId: 'order_id',
      pageNo: 'page_no',
      pageSize: 'page_size',
      periodEnd: 'period_end',
      periodStart: 'period_start',
      scrollId: 'scroll_id',
      scrollMod: 'scroll_mod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billBatch: 'string',
      orderId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      periodEnd: 'string',
      periodStart: 'string',
      scrollId: 'string',
      scrollMod: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

