// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightItineraryScanQueryRequest extends $dara.Model {
  billDate?: string;
  billId?: number;
  invoiceSubTaskId?: number;
  itineraryNum?: string;
  orderId?: number;
  pageNo?: number;
  pageSize?: number;
  ticketNo?: string;
  static names(): { [key: string]: string } {
    return {
      billDate: 'bill_date',
      billId: 'bill_id',
      invoiceSubTaskId: 'invoice_sub_task_id',
      itineraryNum: 'itinerary_num',
      orderId: 'order_id',
      pageNo: 'page_no',
      pageSize: 'page_size',
      ticketNo: 'ticket_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billDate: 'string',
      billId: 'number',
      invoiceSubTaskId: 'number',
      itineraryNum: 'string',
      orderId: 'number',
      pageNo: 'number',
      pageSize: 'number',
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

