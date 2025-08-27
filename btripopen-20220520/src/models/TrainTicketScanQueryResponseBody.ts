// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainTicketScanQueryResponseBodyModuleItems extends $dara.Model {
  applyId?: string;
  arrStation?: string;
  /**
   * @example
   * 2022-12-01
   */
  billDate?: string;
  coachName?: string;
  costCenter?: string;
  depStation?: string;
  /**
   * @example
   * 2023-01-12 10:00:00
   */
  depTime?: string;
  department?: string;
  feeTypeShowCode?: number;
  /**
   * @example
   * 71
   */
  id?: string;
  invoiceDate?: string;
  invoiceMaterial?: number;
  invoiceTitle?: string;
  ofdUrl?: string;
  /**
   * @example
   * 3137168772101111000
   */
  orderId?: number;
  /**
   * @example
   * https://www.testurl.com
   */
  ossUrl?: string;
  passenger?: string;
  pdfUrl?: string;
  /**
   * @example
   * 100
   */
  price?: string;
  project?: string;
  purchaserName?: string;
  purchaserTaxNo?: string;
  seat?: string;
  seatNo?: string;
  /**
   * @example
   * 30671211200127U123456
   */
  serialNumber?: string;
  /**
   * @example
   * 8.26
   */
  taxAmount?: string;
  /**
   * @example
   * 9%
   */
  taxRate?: string;
  /**
   * @remarks
   * 取票号
   * 
   * @example
   * 784-1111111111
   */
  ticketNo?: string;
  /**
   * @remarks
   * 车次
   * 
   * @example
   * G99
   */
  trainNo?: string;
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
      feeTypeShowCode: 'fee_type_show_code',
      id: 'id',
      invoiceDate: 'invoice_date',
      invoiceMaterial: 'invoice_material',
      invoiceTitle: 'invoice_title',
      ofdUrl: 'ofd_url',
      orderId: 'order_id',
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
      feeTypeShowCode: 'number',
      id: 'string',
      invoiceDate: 'string',
      invoiceMaterial: 'number',
      invoiceTitle: 'string',
      ofdUrl: 'string',
      orderId: 'number',
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
  /**
   * @example
   * 2
   */
  totalPage?: number;
  /**
   * @example
   * 30
   */
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
  /**
   * @example
   * 200
   */
  code?: string;
  message?: string;
  module?: TrainTicketScanQueryResponseBodyModule;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * C61ECFF6-606B-5F66-B81D-D77369043A5F
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * traceId
   * 
   * @example
   * 21041ce316577904808056433edbb2
   */
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

