// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightItineraryScanQueryResponseBodyModuleItemsFlights extends $dara.Model {
  /**
   * @remarks
   * 航班至
   */
  arrivalStation?: string;
  /**
   * @remarks
   * 座位等级
   * 
   * @example
   * M
   */
  cabinClass?: string;
  /**
   * @remarks
   * 承运人
   */
  carrier?: string;
  /**
   * @remarks
   * 航班从
   */
  departureStation?: string;
  /**
   * @remarks
   * 日期
   * 
   * @example
   * 2018-11-18
   */
  flightDate?: string;
  /**
   * @remarks
   * 航班号
   * 
   * @example
   * MU2271
   */
  flightNumber?: string;
  /**
   * @remarks
   * 时间
   * 
   * @example
   * 18:25
   */
  flightTime?: string;
  /**
   * @remarks
   * 免费行李
   * 
   * @example
   * 20K
   */
  freeBaggageAllowance?: string;
  /**
   * @remarks
   * 行号
   * 
   * @example
   * 1
   */
  index?: string;
  /**
   * @remarks
   * 客票级别
   * 
   * @example
   * M
   */
  seatClass?: string;
  /**
   * @remarks
   * 客票生效日期
   * 
   * @example
   * 2023-01-01
   */
  validFromDate?: string;
  /**
   * @remarks
   * 有效截止日期
   * 
   * @example
   * 2023-01-01
   */
  validToDate?: string;
  static names(): { [key: string]: string } {
    return {
      arrivalStation: 'arrival_station',
      cabinClass: 'cabin_class',
      carrier: 'carrier',
      departureStation: 'departure_station',
      flightDate: 'flight_date',
      flightNumber: 'flight_number',
      flightTime: 'flight_time',
      freeBaggageAllowance: 'free_baggage_allowance',
      index: 'index',
      seatClass: 'seat_class',
      validFromDate: 'valid_from_date',
      validToDate: 'valid_to_date',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrivalStation: 'string',
      cabinClass: 'string',
      carrier: 'string',
      departureStation: 'string',
      flightDate: 'string',
      flightNumber: 'string',
      flightTime: 'string',
      freeBaggageAllowance: 'string',
      index: 'string',
      seatClass: 'string',
      validFromDate: 'string',
      validToDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightItineraryScanQueryResponseBodyModuleItems extends $dara.Model {
  /**
   * @remarks
   * 销售单位代号
   * 
   * @example
   * SIA25608336893
   */
  agentCode?: string;
  applyId?: string;
  /**
   * @example
   * 2022-12-01
   */
  billDate?: string;
  /**
   * @example
   * 50
   */
  build?: string;
  costCenter?: string;
  department?: string;
  /**
   * @remarks
   * 机票行程明细
   */
  flights?: FlightItineraryScanQueryResponseBodyModuleItemsFlights[];
  /**
   * @example
   * 120
   */
  fuelSurcharge?: string;
  /**
   * @remarks
   * UK
   * 
   * @example
   * 30
   */
  id?: string;
  /**
   * @example
   * 0
   */
  insurance?: string;
  invoiceTitle?: string;
  invoiceType?: number;
  /**
   * @remarks
   * 填开单位
   */
  issueCompany?: string;
  /**
   * @remarks
   * 填开日期
   * 
   * @example
   * 2019-02-28
   */
  issueDate?: string;
  /**
   * @example
   * 6666666666
   */
  itineraryNum?: string;
  ofdOssUrl?: string;
  /**
   * @example
   * 4801105714092
   */
  orderId?: number;
  /**
   * @example
   * https://www.testurl.com
   */
  ossUrl?: string;
  passengerName?: string;
  pdfOssUrl?: string;
  project?: string;
  /**
   * @remarks
   * 提示信息
   */
  promptMessage?: string;
  purchaserName?: string;
  purchaserTaxNo?: string;
  purchaserType?: number;
  /**
   * @example
   * 108.17
   */
  taxAmount?: string;
  /**
   * @example
   * 9%
   */
  taxRate?: string;
  /**
   * @example
   * 784-1111111111
   */
  ticketNo?: string;
  /**
   * @example
   * 1190
   */
  ticketPrice?: string;
  /**
   * @example
   * 1360
   */
  totalPrice?: string;
  /**
   * @remarks
   * 验证码
   * 
   * @example
   * 9817
   */
  validationCode?: string;
  static names(): { [key: string]: string } {
    return {
      agentCode: 'agent_code',
      applyId: 'apply_id',
      billDate: 'bill_date',
      build: 'build',
      costCenter: 'cost_center',
      department: 'department',
      flights: 'flights',
      fuelSurcharge: 'fuel_surcharge',
      id: 'id',
      insurance: 'insurance',
      invoiceTitle: 'invoice_title',
      invoiceType: 'invoice_type',
      issueCompany: 'issue_company',
      issueDate: 'issue_date',
      itineraryNum: 'itinerary_num',
      ofdOssUrl: 'ofd_oss_url',
      orderId: 'order_id',
      ossUrl: 'oss_url',
      passengerName: 'passenger_name',
      pdfOssUrl: 'pdf_oss_url',
      project: 'project',
      promptMessage: 'prompt_message',
      purchaserName: 'purchaser_name',
      purchaserTaxNo: 'purchaser_tax_no',
      purchaserType: 'purchaser_type',
      taxAmount: 'tax_amount',
      taxRate: 'tax_rate',
      ticketNo: 'ticket_no',
      ticketPrice: 'ticket_price',
      totalPrice: 'total_price',
      validationCode: 'validation_code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentCode: 'string',
      applyId: 'string',
      billDate: 'string',
      build: 'string',
      costCenter: 'string',
      department: 'string',
      flights: { 'type': 'array', 'itemType': FlightItineraryScanQueryResponseBodyModuleItemsFlights },
      fuelSurcharge: 'string',
      id: 'string',
      insurance: 'string',
      invoiceTitle: 'string',
      invoiceType: 'number',
      issueCompany: 'string',
      issueDate: 'string',
      itineraryNum: 'string',
      ofdOssUrl: 'string',
      orderId: 'number',
      ossUrl: 'string',
      passengerName: 'string',
      pdfOssUrl: 'string',
      project: 'string',
      promptMessage: 'string',
      purchaserName: 'string',
      purchaserTaxNo: 'string',
      purchaserType: 'number',
      taxAmount: 'string',
      taxRate: 'string',
      ticketNo: 'string',
      ticketPrice: 'string',
      totalPrice: 'string',
      validationCode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.flights)) {
      $dara.Model.validateArray(this.flights);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightItineraryScanQueryResponseBodyModule extends $dara.Model {
  items?: FlightItineraryScanQueryResponseBodyModuleItems[];
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
      items: { 'type': 'array', 'itemType': FlightItineraryScanQueryResponseBodyModuleItems },
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

export class FlightItineraryScanQueryResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  message?: string;
  module?: FlightItineraryScanQueryResponseBodyModule;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * A5009956-1077-52FB-B520-EA8C7E91D722
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
      module: FlightItineraryScanQueryResponseBodyModule,
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

