// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefundDetailResponseBodyDataMultiRefundDetailsPassengerMultiRefundDetailsPassenger extends $dara.Model {
  /**
   * @remarks
   * The document number.
   * 
   * @example
   * 411***********4411
   */
  document?: string;
  /**
   * @remarks
   * The first name of the passenger.
   * 
   * @example
   * SAN
   */
  firstName?: string;
  /**
   * @remarks
   * The last name of the passenger.
   * 
   * @example
   * ZHANG
   */
  lastName?: string;
  static names(): { [key: string]: string } {
    return {
      document: 'document',
      firstName: 'first_name',
      lastName: 'last_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      document: 'string',
      firstName: 'string',
      lastName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundDetailResponseBodyDataMultiRefundDetailsPassengerMultiRefundDetails extends $dara.Model {
  /**
   * @remarks
   * The supplementary refund amount from the rebooking order.
   * 
   * @example
   * 30
   */
  changeOrderRefundFee?: number;
  /**
   * @remarks
   * The supplementary refund amount from the original order.
   * 
   * @example
   * 30
   */
  originalOrderRefundFee?: number;
  /**
   * @remarks
   * The passenger for the refund.
   */
  passenger?: RefundDetailResponseBodyDataMultiRefundDetailsPassengerMultiRefundDetailsPassenger;
  static names(): { [key: string]: string } {
    return {
      changeOrderRefundFee: 'change_order_refund_fee',
      originalOrderRefundFee: 'original_order_refund_fee',
      passenger: 'passenger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderRefundFee: 'number',
      originalOrderRefundFee: 'number',
      passenger: RefundDetailResponseBodyDataMultiRefundDetailsPassengerMultiRefundDetailsPassenger,
    };
  }

  validate() {
    if(this.passenger && typeof (this.passenger as any).validate === 'function') {
      (this.passenger as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundDetailResponseBodyDataMultiRefundDetails extends $dara.Model {
  /**
   * @remarks
   * The refund order number of the supplementary refund.
   * 
   * @example
   * 498843***6950
   */
  multiRefundOrderNum?: number;
  /**
   * @remarks
   * The transaction serial number of the supplementary refund.
   * 
   * @example
   * 498843***6950
   */
  multiRefundTransactionNo?: string;
  /**
   * @remarks
   * The passenger-level supplementary refund details.
   */
  passengerMultiRefundDetails?: RefundDetailResponseBodyDataMultiRefundDetailsPassengerMultiRefundDetails[];
  static names(): { [key: string]: string } {
    return {
      multiRefundOrderNum: 'multi_refund_order_num',
      multiRefundTransactionNo: 'multi_refund_transaction_no',
      passengerMultiRefundDetails: 'passenger_multi_refund_details',
    };
  }

  static types(): { [key: string]: any } {
    return {
      multiRefundOrderNum: 'number',
      multiRefundTransactionNo: 'string',
      passengerMultiRefundDetails: { 'type': 'array', 'itemType': RefundDetailResponseBodyDataMultiRefundDetailsPassengerMultiRefundDetails },
    };
  }

  validate() {
    if(Array.isArray(this.passengerMultiRefundDetails)) {
      $dara.Model.validateArray(this.passengerMultiRefundDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundDetailResponseBodyDataPassengerRefundDetailsPassenger extends $dara.Model {
  /**
   * @remarks
   * The document number.
   * 
   * @example
   * 411***********4411
   */
  document?: string;
  /**
   * @remarks
   * The first name of the passenger.
   * 
   * @example
   * SAN
   */
  firstName?: string;
  /**
   * @remarks
   * The last name of the passenger.
   * 
   * @example
   * ZHANG
   */
  lastName?: string;
  static names(): { [key: string]: string } {
    return {
      document: 'document',
      firstName: 'first_name',
      lastName: 'last_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      document: 'string',
      firstName: 'string',
      lastName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundDetailResponseBodyDataPassengerRefundDetailsRefundFee extends $dara.Model {
  /**
   * @remarks
   * The total price of already used tickets.
   * 
   * @example
   * 30
   */
  alreadyUsedTotalFee?: number;
  ancillaryRefundToBuyerMoney?: number;
  /**
   * @remarks
   * The refundable amount to the buyer from rebooking.
   * 
   * @example
   * 30
   */
  modifyRefundToBuyerMoney?: number;
  /**
   * @remarks
   * The non-refundable rebooking service fee.
   * 
   * @example
   * 30
   */
  nonRefundableChangeServiceFee?: number;
  /**
   * @remarks
   * The non-refundable cabin upgrade service fee.
   * 
   * @example
   * 30
   */
  nonRefundableChangeUpgradeFee?: number;
  /**
   * @remarks
   * The non-refundable tax amount, which is the tax refund service fee.
   * 
   * @example
   * 30
   */
  nonRefundableTaxFee?: number;
  /**
   * @remarks
   * The non-refundable ticket amount, which is the ticket refund service fee.
   * 
   * @example
   * 30
   */
  nonRefundableTicketFee?: number;
  /**
   * @remarks
   * The refundable amount to the buyer from the original ticket (ticket price + taxes - ticket refund service fee - tax refund service fee - total price of already used tickets).
   * 
   * @example
   * 30
   */
  refundToBuyerMoney?: number;
  suezServiceFee?: number;
  static names(): { [key: string]: string } {
    return {
      alreadyUsedTotalFee: 'already_used_total_fee',
      ancillaryRefundToBuyerMoney: 'ancillary_refund_to_buyer_money',
      modifyRefundToBuyerMoney: 'modify_refund_to_buyer_money',
      nonRefundableChangeServiceFee: 'non_refundable_change_service_fee',
      nonRefundableChangeUpgradeFee: 'non_refundable_change_upgrade_fee',
      nonRefundableTaxFee: 'non_refundable_tax_fee',
      nonRefundableTicketFee: 'non_refundable_ticket_fee',
      refundToBuyerMoney: 'refund_to_buyer_money',
      suezServiceFee: 'suez_service_fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alreadyUsedTotalFee: 'number',
      ancillaryRefundToBuyerMoney: 'number',
      modifyRefundToBuyerMoney: 'number',
      nonRefundableChangeServiceFee: 'number',
      nonRefundableChangeUpgradeFee: 'number',
      nonRefundableTaxFee: 'number',
      nonRefundableTicketFee: 'number',
      refundToBuyerMoney: 'number',
      suezServiceFee: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundDetailResponseBodyDataPassengerRefundDetails extends $dara.Model {
  /**
   * @remarks
   * The passenger information for the refund.
   */
  passenger?: RefundDetailResponseBodyDataPassengerRefundDetailsPassenger;
  /**
   * @remarks
   * The refund fee breakdown.
   */
  refundFee?: RefundDetailResponseBodyDataPassengerRefundDetailsRefundFee;
  static names(): { [key: string]: string } {
    return {
      passenger: 'passenger',
      refundFee: 'refund_fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passenger: RefundDetailResponseBodyDataPassengerRefundDetailsPassenger,
      refundFee: RefundDetailResponseBodyDataPassengerRefundDetailsRefundFee,
    };
  }

  validate() {
    if(this.passenger && typeof (this.passenger as any).validate === 'function') {
      (this.passenger as any).validate();
    }
    if(this.refundFee && typeof (this.refundFee as any).validate === 'function') {
      (this.refundFee as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundDetailResponseBodyDataRefundJourneysSegmentList extends $dara.Model {
  /**
   * @remarks
   * The three-letter IATA code of the arrival airport (uppercase).
   * 
   * @example
   * MFM
   */
  arrivalAirport?: string;
  /**
   * @remarks
   * The three-letter IATA code of the arrival city (uppercase).
   * 
   * @example
   * MFM
   */
  arrivalCity?: string;
  /**
   * @remarks
   * The arrival terminal.
   * 
   * @example
   * T1
   */
  arrivalTerminal?: string;
  /**
   * @remarks
   * The arrival date and time in string format (yyyy-MM-dd HH:mm:ss).
   * 
   * @example
   * 2023-03-10 10:40:00
   */
  arrivalTime?: string;
  /**
   * @remarks
   * The number of remaining seats.
   * 
   * @example
   * 7
   */
  availability?: string;
  /**
   * @remarks
   * The cabin code.
   * 
   * @example
   * V
   */
  cabin?: string;
  /**
   * @remarks
   * The cabin class.
   * 
   * @example
   * Y
   */
  cabinClass?: string;
  /**
   * @remarks
   * Indicates whether the flight is a codeshare flight.
   * 
   * @example
   * false
   */
  codeShare?: boolean;
  /**
   * @remarks
   * The three-letter IATA code of the departure airport (uppercase).
   * 
   * @example
   * PVG
   */
  departureAirport?: string;
  /**
   * @remarks
   * The three-letter IATA code of the departure city (uppercase).
   * 
   * @example
   * SHA
   */
  departureCity?: string;
  /**
   * @remarks
   * The departure terminal.
   * 
   * @example
   * T2
   */
  departureTerminal?: string;
  /**
   * @remarks
   * The departure date and time in string format (yyyy-MM-dd HH:mm:ss).
   * 
   * @example
   * 2023-03-10 07:55:00
   */
  departureTime?: string;
  /**
   * @remarks
   * The aircraft type.
   * 
   * @example
   * 32Q
   */
  equipType?: string;
  /**
   * @remarks
   * The flight duration, in minutes.
   * 
   * @example
   * 165
   */
  flightDuration?: number;
  /**
   * @remarks
   * The marketing airline code (such as HO).
   * 
   * @example
   * HO
   */
  marketingAirline?: string;
  /**
   * @remarks
   * The marketing flight number (such as HO1295).
   * 
   * @example
   * HO1295
   */
  marketingFlightNo?: string;
  /**
   * @remarks
   * The numeric marketing flight number (such as 1295).
   * 
   * @example
   * 1295
   */
  marketingFlightNoInt?: number;
  /**
   * @remarks
   * The operating airline code (such as CX).
   * 
   * @example
   * HO
   */
  operatingAirline?: string;
  /**
   * @remarks
   * The operating flight number (such as CX601).
   * 
   * @example
   * HO1295
   */
  operatingFlightNo?: string;
  /**
   * @remarks
   * The segment ID. Format: flight number + departure airport + arrival airport + departure date (MMdd).
   * 
   * @example
   * HO1295-PVG-MFM-20230310
   */
  segmentId?: string;
  /**
   * @remarks
   * The list of stopover cities. This field has a value when stopQuantity is greater than 0. Multiple cities are separated by commas.
   * 
   * @example
   * SEL,HKG
   */
  stopCityList?: string;
  /**
   * @remarks
   * The number of stopover cities.
   * 
   * @example
   * 0
   */
  stopQuantity?: number;
  static names(): { [key: string]: string } {
    return {
      arrivalAirport: 'arrival_airport',
      arrivalCity: 'arrival_city',
      arrivalTerminal: 'arrival_terminal',
      arrivalTime: 'arrival_time',
      availability: 'availability',
      cabin: 'cabin',
      cabinClass: 'cabin_class',
      codeShare: 'code_share',
      departureAirport: 'departure_airport',
      departureCity: 'departure_city',
      departureTerminal: 'departure_terminal',
      departureTime: 'departure_time',
      equipType: 'equip_type',
      flightDuration: 'flight_duration',
      marketingAirline: 'marketing_airline',
      marketingFlightNo: 'marketing_flight_no',
      marketingFlightNoInt: 'marketing_flight_no_int',
      operatingAirline: 'operating_airline',
      operatingFlightNo: 'operating_flight_no',
      segmentId: 'segment_id',
      stopCityList: 'stop_city_list',
      stopQuantity: 'stop_quantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrivalAirport: 'string',
      arrivalCity: 'string',
      arrivalTerminal: 'string',
      arrivalTime: 'string',
      availability: 'string',
      cabin: 'string',
      cabinClass: 'string',
      codeShare: 'boolean',
      departureAirport: 'string',
      departureCity: 'string',
      departureTerminal: 'string',
      departureTime: 'string',
      equipType: 'string',
      flightDuration: 'number',
      marketingAirline: 'string',
      marketingFlightNo: 'string',
      marketingFlightNoInt: 'number',
      operatingAirline: 'string',
      operatingFlightNo: 'string',
      segmentId: 'string',
      stopCityList: 'string',
      stopQuantity: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundDetailResponseBodyDataRefundJourneys extends $dara.Model {
  /**
   * @remarks
   * The segment information.
   */
  segmentList?: RefundDetailResponseBodyDataRefundJourneysSegmentList[];
  /**
   * @remarks
   * The number of transfers.
   * 
   * @example
   * 0
   */
  transferCount?: number;
  static names(): { [key: string]: string } {
    return {
      segmentList: 'segment_list',
      transferCount: 'transfer_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      segmentList: { 'type': 'array', 'itemType': RefundDetailResponseBodyDataRefundJourneysSegmentList },
      transferCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.segmentList)) {
      $dara.Model.validateArray(this.segmentList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the refund contains a supplementary refund.
   * 
   * @example
   * false
   */
  containMultiRefund?: boolean;
  /**
   * @remarks
   * The list of supplementary refund details associated with the initial refund.
   */
  multiRefundDetails?: RefundDetailResponseBodyDataMultiRefundDetails[];
  /**
   * @remarks
   * The order number.
   * 
   * @example
   * 4966***617111
   */
  orderNum?: number;
  /**
   * @remarks
   * The list of passenger-level refund details.
   */
  passengerRefundDetails?: RefundDetailResponseBodyDataPassengerRefundDetails[];
  /**
   * @remarks
   * The actual refund time, in UTC timestamp.
   * 
   * @example
   * 1677229005000
   */
  paySuccessUtcTime?: number;
  /**
   * @remarks
   * The list of attachment URLs for medical refund requests.
   * 
   * @example
   * [zzz,yyy]
   */
  refundAttachmentUrls?: string[];
  /**
   * @remarks
   * The journeys included in the refund.
   */
  refundJourneys?: RefundDetailResponseBodyDataRefundJourneys[];
  /**
   * @remarks
   * The refund order number.
   * 
   * @example
   * 4966***617654
   */
  refundOrderNum?: number;
  /**
   * @remarks
   * The reason for the refund request.
   * 
   * @example
   * desc reason
   */
  refundReason?: string;
  /**
   * @remarks
   * The refund request type. Valid values:
   * - 2: voluntary request.
   * - 5: airline-initiated reasons such as flight delay, cancellation, or schedule change.
   * - 6: medical reasons with a certificate from a Grade II Class A hospital or above.
   * - 7: involuntary definitive emergency guidance.
   * - 100: involuntary non-definitive emergency.
   * 
   * @example
   * 5
   */
  refundType?: number;
  /**
   * @remarks
   * The reason for rejecting the refund request.
   * 
   * @example
   * refuse reason
   */
  refuseReason?: string;
  /**
   * @remarks
   * The refund order status. Valid values:
   * - 0: refund requested.
   * - 1: refund being processed.
   * - 2: refund failed.
   * - 3: refund succeeded.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The transaction serial number.
   * 
   * @example
   * 1677229005000
   */
  transactionNo?: string;
  /**
   * @remarks
   * The creation time of the refund order, in UTC timestamp.
   * 
   * @example
   * 1677229002000
   */
  utcCreateTime?: number;
  static names(): { [key: string]: string } {
    return {
      containMultiRefund: 'contain_multi_refund',
      multiRefundDetails: 'multi_refund_details',
      orderNum: 'order_num',
      passengerRefundDetails: 'passenger_refund_details',
      paySuccessUtcTime: 'pay_success_utc_time',
      refundAttachmentUrls: 'refund_attachment_urls',
      refundJourneys: 'refund_journeys',
      refundOrderNum: 'refund_order_num',
      refundReason: 'refund_reason',
      refundType: 'refund_type',
      refuseReason: 'refuse_reason',
      status: 'status',
      transactionNo: 'transaction_no',
      utcCreateTime: 'utc_create_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containMultiRefund: 'boolean',
      multiRefundDetails: { 'type': 'array', 'itemType': RefundDetailResponseBodyDataMultiRefundDetails },
      orderNum: 'number',
      passengerRefundDetails: { 'type': 'array', 'itemType': RefundDetailResponseBodyDataPassengerRefundDetails },
      paySuccessUtcTime: 'number',
      refundAttachmentUrls: { 'type': 'array', 'itemType': 'string' },
      refundJourneys: { 'type': 'array', 'itemType': RefundDetailResponseBodyDataRefundJourneys },
      refundOrderNum: 'number',
      refundReason: 'string',
      refundType: 'number',
      refuseReason: 'string',
      status: 'number',
      transactionNo: 'string',
      utcCreateTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.multiRefundDetails)) {
      $dara.Model.validateArray(this.multiRefundDetails);
    }
    if(Array.isArray(this.passengerRefundDetails)) {
      $dara.Model.validateArray(this.passengerRefundDetails);
    }
    if(Array.isArray(this.refundAttachmentUrls)) {
      $dara.Model.validateArray(this.refundAttachmentUrls);
    }
    if(Array.isArray(this.refundJourneys)) {
      $dara.Model.validateArray(this.refundJourneys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 51593418-8C73-5E47-8BA8-3F1D4A00CC0B
   */
  requestId?: string;
  /**
   * @remarks
   * The data returned for a successful request.
   */
  data?: RefundDetailResponseBodyData;
  /**
   * @remarks
   * The business error code.
   * 
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @remarks
   * The data returned with the error.
   * 
   * @example
   * null
   */
  errorData?: any;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * null
   */
  errorMsg?: string;
  /**
   * @remarks
   * The HTTP status code. The value is always 200 for successful requests.
   * 
   * @example
   * 200
   */
  status?: number;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'data',
      errorCode: 'error_code',
      errorData: 'error_data',
      errorMsg: 'error_msg',
      status: 'status',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: RefundDetailResponseBodyData,
      errorCode: 'string',
      errorData: 'any',
      errorMsg: 'string',
      status: 'number',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

