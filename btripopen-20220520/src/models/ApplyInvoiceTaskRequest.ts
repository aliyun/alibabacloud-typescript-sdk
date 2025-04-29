// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ApplyInvoiceTaskRequestInvoiceTaskList } from "./ApplyInvoiceTaskRequestInvoiceTaskList";


export class ApplyInvoiceTaskRequest extends $dara.Model {
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
  invoiceTaskList?: ApplyInvoiceTaskRequestInvoiceTaskList[];
  static names(): { [key: string]: string } {
    return {
      billDate: 'bill_date',
      invoiceTaskList: 'invoice_task_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billDate: 'string',
      invoiceTaskList: { 'type': 'array', 'itemType': ApplyInvoiceTaskRequestInvoiceTaskList },
    };
  }

  validate() {
    if(Array.isArray(this.invoiceTaskList)) {
      $dara.Model.validateArray(this.invoiceTaskList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

