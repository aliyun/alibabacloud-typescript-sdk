// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainTicketScanQueryRequest extends $dara.Model {
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
  invoiceDateEnd?: string;
  invoiceDateStart?: string;
  /**
   * @example
   * 456
   */
  invoiceSubTaskId?: number;
  orderId?: number;
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
      invoiceDateEnd: 'invoice_date_end',
      invoiceDateStart: 'invoice_date_start',
      invoiceSubTaskId: 'invoice_sub_task_id',
      orderId: 'order_id',
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
      invoiceDateEnd: 'string',
      invoiceDateStart: 'string',
      invoiceSubTaskId: 'number',
      orderId: 'number',
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

