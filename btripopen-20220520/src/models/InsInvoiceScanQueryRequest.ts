// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsInvoiceScanQueryRequest extends $dara.Model {
  /**
   * @example
   * 2022-12-01
   */
  billDate?: string;
  /**
   * @example
   * 123
   */
  billId?: number;
  /**
   * @example
   * 456
   */
  invoiceSubTaskId?: number;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      billDate: 'bill_date',
      billId: 'bill_id',
      invoiceSubTaskId: 'invoice_sub_task_id',
      pageNo: 'page_no',
      pageSize: 'page_size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billDate: 'string',
      billId: 'number',
      invoiceSubTaskId: 'number',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

