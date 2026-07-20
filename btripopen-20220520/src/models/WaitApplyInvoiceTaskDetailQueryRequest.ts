// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WaitApplyInvoiceTaskDetailQueryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2022-12-01
   */
  billDate?: string;
  static names(): { [key: string]: string } {
    return {
      billDate: 'bill_date',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

