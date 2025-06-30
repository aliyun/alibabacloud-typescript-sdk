// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MonthBillSplitGetRequest extends $dara.Model {
  /**
   * @example
   * 20240101
   */
  billBatch?: string;
  /**
   * @example
   * 202401
   */
  billMonth?: string;
  billSplitKeyList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * by_invoice_third_part_id
   */
  billSplitMode?: string;
  static names(): { [key: string]: string } {
    return {
      billBatch: 'bill_batch',
      billMonth: 'bill_month',
      billSplitKeyList: 'bill_split_key_list',
      billSplitMode: 'bill_split_mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billBatch: 'string',
      billMonth: 'string',
      billSplitKeyList: { 'type': 'array', 'itemType': 'string' },
      billSplitMode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.billSplitKeyList)) {
      $dara.Model.validateArray(this.billSplitKeyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

