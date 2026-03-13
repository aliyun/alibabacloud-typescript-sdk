// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IeCarBillSettlementQueryRequest extends $dara.Model {
  /**
   * @example
   * 20250725
   */
  billBatch?: string;
  billRecordTimeEnd?: string;
  billRecordTimeStart?: string;
  /**
   * @example
   * 1002002203361199686
   */
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
   * 10
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
  /**
   * @example
   * CAESBgoEIgIIABgAIhkKFwMSAAAAMUw4MDAwMDAwMDA3MzA1MGJj
   */
  scrollId?: string;
  /**
   * @example
   * true
   */
  scrollMod?: boolean;
  static names(): { [key: string]: string } {
    return {
      billBatch: 'bill_batch',
      billRecordTimeEnd: 'bill_record_time_end',
      billRecordTimeStart: 'bill_record_time_start',
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
      billRecordTimeEnd: 'string',
      billRecordTimeStart: 'string',
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

