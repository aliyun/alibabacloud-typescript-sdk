// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightItineraryScanQueryResponseBodyModuleItemsFlights extends $dara.Model {
  arrivalStation?: string;
  cabinClass?: string;
  carrier?: string;
  departureStation?: string;
  flightDate?: string;
  flightNumber?: string;
  flightTime?: string;
  freeBaggageAllowance?: string;
  index?: string;
  seatClass?: string;
  validFromDate?: string;
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
  agentCode?: string;
  applyId?: string;
  billDate?: string;
  blueOrRed?: number;
  build?: string;
  costCenter?: string;
  department?: string;
  flights?: FlightItineraryScanQueryResponseBodyModuleItemsFlights[];
  fuelSurcharge?: string;
  id?: string;
  insurance?: string;
  invoiceTitle?: string;
  invoiceType?: number;
  issueCompany?: string;
  issueDate?: string;
  itineraryNum?: string;
  ofdOssUrl?: string;
  orderId?: number;
  ossUrl?: string;
  otherTaxes?: string;
  passengerName?: string;
  pdfOssUrl?: string;
  project?: string;
  promptMessage?: string;
  purchaserName?: string;
  purchaserTaxNo?: string;
  purchaserType?: number;
  taxAmount?: string;
  taxRate?: string;
  ticketNo?: string;
  ticketPrice?: string;
  totalPrice?: string;
  validationCode?: string;
  xmlOssUrl?: string;
  static names(): { [key: string]: string } {
    return {
      agentCode: 'agent_code',
      applyId: 'apply_id',
      billDate: 'bill_date',
      blueOrRed: 'blue_or_red',
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
      otherTaxes: 'other_taxes',
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
      xmlOssUrl: 'xml_oss_url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentCode: 'string',
      applyId: 'string',
      billDate: 'string',
      blueOrRed: 'number',
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
      otherTaxes: 'string',
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
      xmlOssUrl: 'string',
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
  code?: string;
  message?: string;
  module?: FlightItineraryScanQueryResponseBodyModule;
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

