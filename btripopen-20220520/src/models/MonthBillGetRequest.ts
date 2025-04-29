// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MonthBillGetRequest extends $dara.Model {
  billBatch?: string;
  /**
   * @example
   * 202207
   */
  billMonth?: string;
  static names(): { [key: string]: string } {
    return {
      billBatch: 'bill_batch',
      billMonth: 'bill_month',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billBatch: 'string',
      billMonth: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

