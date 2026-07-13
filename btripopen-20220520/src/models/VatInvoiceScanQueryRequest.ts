// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VatInvoiceScanQueryRequest extends $dara.Model {
  /**
   * @remarks
   * The billing date.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-12-01
   */
  billDate?: string;
  /**
   * @remarks
   * The bill ID.
   * > Deprecated
   * 
   * @example
   * 123
   */
  billId?: number;
  /**
   * @remarks
   * The invoice subtask ID.
   * > Deprecated
   * 
   * @example
   * 456
   */
  invoiceSubTaskId?: number;
  /**
   * @remarks
   * The page number, starting from 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20. Maximum value: 100.
   * 
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

