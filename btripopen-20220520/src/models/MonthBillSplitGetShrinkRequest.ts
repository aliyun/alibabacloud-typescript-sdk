// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MonthBillSplitGetShrinkRequest extends $dara.Model {
  billBatch?: string;
  billMonth?: string;
  billSplitKeyListShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  billSplitMode?: string;
  static names(): { [key: string]: string } {
    return {
      billBatch: 'bill_batch',
      billMonth: 'bill_month',
      billSplitKeyListShrink: 'bill_split_key_list',
      billSplitMode: 'bill_split_mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billBatch: 'string',
      billMonth: 'string',
      billSplitKeyListShrink: 'string',
      billSplitMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

