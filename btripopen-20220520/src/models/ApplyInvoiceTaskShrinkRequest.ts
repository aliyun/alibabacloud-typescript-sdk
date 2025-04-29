// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyInvoiceTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2022-12-01
   */
  billDate?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  invoiceTaskListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      billDate: 'bill_date',
      invoiceTaskListShrink: 'invoice_task_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billDate: 'string',
      invoiceTaskListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

