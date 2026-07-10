// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainTicketScanQueryResponseBodyModuleItems extends $dara.Model {
  applyId?: string;
  arrStation?: string;
  billDate?: string;
  coachName?: string;
  costCenter?: string;
  depStation?: string;
  depTime?: string;
  department?: string;
  electronicTicketNo?: string;
  feeTypeShowCode?: number;
  hasChanged?: boolean;
  id?: string;
  invoiceDate?: string;
  invoiceMaterial?: number;
  invoiceTitle?: string;
  ofdUrl?: string;
  orderId?: number;
  originTicketNo?: string;
  ossUrl?: string;
  passenger?: string;
  pdfUrl?: string;
  price?: string;
  project?: string;
  purchaserName?: string;
  purchaserTaxNo?: string;
  seat?: string;
  seatNo?: string;
  serialNumber?: string;
  taxAmount?: string;
  taxRate?: string;
  ticketNo?: string;
  trainNo?: string;
  xmlUrl?: string;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
      arrStation: 'arr_station',
      billDate: 'bill_date',
      coachName: 'coach_name',
      costCenter: 'cost_center',
      depStation: 'dep_station',
      depTime: 'dep_time',
      department: 'department',
      electronicTicketNo: 'electronic_ticket_no',
      feeTypeShowCode: 'fee_type_show_code',
      hasChanged: 'has_changed',
      id: 'id',
      invoiceDate: 'invoice_date',
      invoiceMaterial: 'invoice_material',
      invoiceTitle: 'invoice_title',
      ofdUrl: 'ofd_url',
      orderId: 'order_id',
      originTicketNo: 'origin_ticket_no',
      ossUrl: 'oss_url',
      passenger: 'passenger',
      pdfUrl: 'pdf_url',
      price: 'price',
      project: 'project',
      purchaserName: 'purchaser_name',
      purchaserTaxNo: 'purchaser_tax_no',
      seat: 'seat',
      seatNo: 'seat_no',
      serialNumber: 'serial_number',
      taxAmount: 'tax_amount',
      taxRate: 'tax_rate',
      ticketNo: 'ticket_no',
      trainNo: 'train_no',
      xmlUrl: 'xml_url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'string',
      arrStation: 'string',
      billDate: 'string',
      coachName: 'string',
      costCenter: 'string',
      depStation: 'string',
      depTime: 'string',
      department: 'string',
      electronicTicketNo: 'string',
      feeTypeShowCode: 'number',
      hasChanged: 'boolean',
      id: 'string',
      invoiceDate: 'string',
      invoiceMaterial: 'number',
      invoiceTitle: 'string',
      ofdUrl: 'string',
      orderId: 'number',
      originTicketNo: 'string',
      ossUrl: 'string',
      passenger: 'string',
      pdfUrl: 'string',
      price: 'string',
      project: 'string',
      purchaserName: 'string',
      purchaserTaxNo: 'string',
      seat: 'string',
      seatNo: 'string',
      serialNumber: 'string',
      taxAmount: 'string',
      taxRate: 'string',
      ticketNo: 'string',
      trainNo: 'string',
      xmlUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainTicketScanQueryResponseBodyModule extends $dara.Model {
  items?: TrainTicketScanQueryResponseBodyModuleItems[];
  pageNo?: number;
  pageSize?: number;
  totalPage?: number;
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      pageNo: 'page_no',
      pageSize: 'page_size',
      totalPage: 'total_page',
      totalSize: 'total_size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': TrainTicketScanQueryResponseBodyModuleItems },
      pageNo: 'number',
      pageSize: 'number',
      totalPage: 'number',
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainTicketScanQueryResponseBody extends $dara.Model {
  code?: string;
  message?: string;
  module?: TrainTicketScanQueryResponseBodyModule;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: TrainTicketScanQueryResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(this.module && typeof (this.module as any).validate === 'function') {
      (this.module as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

