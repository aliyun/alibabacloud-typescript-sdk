// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfirmPreBillRequest extends $dara.Model {
  /**
   * @remarks
   * The bill batch date in the format of yyyy-MM-dd, such as 2026-06-21.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-06-21
   */
  billBatch?: string;
  static names(): { [key: string]: string } {
    return {
      billBatch: 'bill_batch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billBatch: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

