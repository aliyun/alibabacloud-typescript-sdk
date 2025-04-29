// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainTicketScanQueryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
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
  serialNumber?: string;
  ticketNo?: string;
  static names(): { [key: string]: string } {
    return {
      billDate: 'bill_date',
      billId: 'bill_id',
      invoiceSubTaskId: 'invoice_sub_task_id',
      pageNo: 'page_no',
      pageSize: 'page_size',
      serialNumber: 'serial_number',
      ticketNo: 'ticket_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billDate: 'string',
      billId: 'number',
      invoiceSubTaskId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      serialNumber: 'string',
      ticketNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

