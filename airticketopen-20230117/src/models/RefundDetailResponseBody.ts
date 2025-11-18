// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefundDetailResponseBodyDataMultiRefundDetailsPassengerMultiRefundDetailsPassenger extends $dara.Model {
  /**
   * @remarks
   * Document number
   * 
   * @example
   * 411***********4411
   */
  document?: string;
  /**
   * @remarks
   * Passenger\\"s first name
   * 
   * @example
   * SAN
   */
  firstName?: string;
  /**
   * @remarks
   * Passenger\\"s last name
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
   * Amount refunded from the Change order
   * 
   * @example
   * 30
   */
  changeOrderRefundFee?: number;
  /**
   * @remarks
   * Amount refunded from the Ticketing order
   * 
   * @example
   * 30
   */
  originalOrderRefundFee?: number;
  /**
   * @remarks
   * Passenger for the refund
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
   * Additional refund order number
   * 
   * @example
   * 498843***6950
   */
  multiRefundOrderNum?: number;
  /**
   * @remarks
   * Transaction number of the Additional Refund order
   * 
   * @example
   * 498843***6950
   */
  multiRefundTransactionNo?: string;
  /**
   * @remarks
   * Additional refund details from the passenger\\"s
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
   * Document number
   * 
   * @example
   * 411***********4411
   */
  document?: string;
  /**
   * @remarks
   * Passenger\\"s first name
   * 
   * @example
   * SAN
   */
  firstName?: string;
  /**
   * @remarks
   * Passenger\\"s last name
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
   * Total price of the used segments
   * 
   * @example
   * 30
   */
  alreadyUsedTotalFee?: number;
  /**
   * @remarks
   * Amount refunded to the user after a change
   * 
   * @example
   * 30
   */
  modifyRefundToBuyerMoney?: number;
  /**
   * @remarks
   * Non-refundable change penalty
   * 
   * @example
   * 30
   */
  nonRefundableChangeServiceFee?: number;
  /**
   * @remarks
   * Non-refundable fare difference
   * 
   * @example
   * 30
   */
  nonRefundableChangeUpgradeFee?: number;
  /**
   * @remarks
   * tax penalty
   * 
   * @example
   * 30
   */
  nonRefundableTaxFee?: number;
  /**
   * @remarks
   * fare penalty
   * 
   * @example
   * 30
   */
  nonRefundableTicketFee?: number;
  /**
   * @remarks
   * Amount refundable to the user (ticket price + taxes - fare penalty - tax penalty - total price of used segments)
   * 
   * @example
   * 30
   */
  refundToBuyerMoney?: number;
  static names(): { [key: string]: string } {
    return {
      alreadyUsedTotalFee: 'already_used_total_fee',
      modifyRefundToBuyerMoney: 'modify_refund_to_buyer_money',
      nonRefundableChangeServiceFee: 'non_refundable_change_service_fee',
      nonRefundableChangeUpgradeFee: 'non_refundable_change_upgrade_fee',
      nonRefundableTaxFee: 'non_refundable_tax_fee',
      nonRefundableTicketFee: 'non_refundable_ticket_fee',
      refundToBuyerMoney: 'refund_to_buyer_money',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alreadyUsedTotalFee: 'number',
      modifyRefundToBuyerMoney: 'number',
      nonRefundableChangeServiceFee: 'number',
      nonRefundableChangeUpgradeFee: 'number',
      nonRefundableTaxFee: 'number',
      nonRefundableTicketFee: 'number',
      refundToBuyerMoney: 'number',
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
   * Information of the passenger applying for a refund
   */
  passenger?: RefundDetailResponseBodyDataPassengerRefundDetailsPassenger;
  /**
   * @remarks
   * Refund fee details
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
   * Three-letter code of the arrival airport (in uppercase)
   * 
   * @example
   * MFM
   */
  arrivalAirport?: string;
  /**
   * @remarks
   * Three-letter code of the arrival city (in uppercase)
   * 
   * @example
   * MFM
   */
  arrivalCity?: string;
  /**
   * @remarks
   * Arrival terminal of the flight
   * 
   * @example
   * T1
   */
  arrivalTerminal?: string;
  /**
   * @remarks
   * Arrival date and time in string format (yyyy-mm-dd hh:mm:ss)
   * 
   * @example
   * 2023-03-10 10:40:00
   */
  arrivalTime?: string;
  /**
   * @remarks
   * Number of available seats
   * 
   * @example
   * 7
   */
  availability?: string;
  /**
   * @remarks
   * RBD
   * 
   * @example
   * V
   */
  cabin?: string;
  /**
   * @remarks
   * service class ( compartment )
   * 
   * @example
   * Y
   */
  cabinClass?: string;
  /**
   * @remarks
   * Indicates whether it is a codeshare flight
   * 
   * @example
   * false
   */
  codeShare?: boolean;
  /**
   * @remarks
   * Three-letter code of the departure airport (in uppercase)
   * 
   * @example
   * PVG
   */
  departureAirport?: string;
  /**
   * @remarks
   * Three-letter code of the departure city (in uppercase)
   * 
   * @example
   * SHA
   */
  departureCity?: string;
  /**
   * @remarks
   * Departure terminal of the flight
   * 
   * @example
   * T2
   */
  departureTerminal?: string;
  /**
   * @remarks
   * Departure date and time in string format (yyyy-mm-dd hh:mm:ss)
   * 
   * @example
   * 2023-03-10 07:55:00
   */
  departureTime?: string;
  /**
   * @remarks
   * Aircraft type
   * 
   * @example
   * 32Q
   */
  equipType?: string;
  /**
   * @remarks
   * Flight duration in minutes
   * 
   * @example
   * 165
   */
  flightDuration?: number;
  /**
   * @remarks
   * Marketing airline (e.g., HO)
   * 
   * @example
   * HO
   */
  marketingAirline?: string;
  /**
   * @remarks
   * Marketing flight number (e.g., HO1295)
   * 
   * @example
   * HO1295
   */
  marketingFlightNo?: string;
  /**
   * @remarks
   * Marketing flight number (numeric part, e.g., 1295)
   * 
   * @example
   * 1295
   */
  marketingFlightNoInt?: number;
  /**
   * @remarks
   * Operating airline (e.g., CX)
   * 
   * @example
   * HO
   */
  operatingAirline?: string;
  /**
   * @remarks
   * Operating flight number (e.g., CX601)
   * 
   * @example
   * HO1295
   */
  operatingFlightNo?: string;
  /**
   * @remarks
   * Segment ID format: flight number + departure airport + arrival airport + departure date (MMdd)
   * 
   * @example
   * HO1295-PVG-MFM-20230310
   */
  segmentId?: string;
  /**
   * @remarks
   * List of stop cities, present when stopQuantity > 0, multiple values separated by commas
   * 
   * @example
   * SEL,HKG
   */
  stopCityList?: string;
  /**
   * @remarks
   * Number of stop cities
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
   * Segment information
   */
  segmentList?: RefundDetailResponseBodyDataRefundJourneysSegmentList[];
  /**
   * @remarks
   * Number of transfers
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
   * Whether it contains additional refunds
   * 
   * @example
   * false
   */
  containMultiRefund?: boolean;
  /**
   * @remarks
   * List of additional refund details associated with the initial refund
   */
  multiRefundDetails?: RefundDetailResponseBodyDataMultiRefundDetails[];
  /**
   * @remarks
   * Order number
   * 
   * @example
   * 4966***617111
   */
  orderNum?: number;
  /**
   * @remarks
   * List of passenger refund details, refund information by passenger
   */
  passengerRefundDetails?: RefundDetailResponseBodyDataPassengerRefundDetails[];
  /**
   * @remarks
   * Actual refund time, UTC timestamp
   * 
   * @example
   * 1677229005000
   */
  paySuccessUtcTime?: number;
  /**
   * @remarks
   * List of URLs for medical refund attachments
   * 
   * @example
   * [zzz,yyy]
   */
  refundAttachmentUrls?: string[];
  /**
   * @remarks
   * Refund journey
   */
  refundJourneys?: RefundDetailResponseBodyDataRefundJourneys[];
  /**
   * @remarks
   * Refund order number
   * 
   * @example
   * 4966***617654
   */
  refundOrderNum?: number;
  /**
   * @remarks
   * Reason for refund
   * 
   * @example
   * desc reason
   */
  refundReason?: string;
  /**
   * @remarks
   * 2: Voluntary application; 5: Flight delay or cancellation, flight schedule change, etc., due to airline reasons; 6: Health reasons with a report from a hospital of at least secondary level A; 7: Involuntary emergency guidance; 100: Involuntary non-emergency
   * 
   * @example
   * 5
   */
  refundType?: number;
  /**
   * @remarks
   * Reason for refund rejection
   * 
   * @example
   * refuse reason
   */
  refuseReason?: string;
  /**
   * @remarks
   * Refund order status 0: Refund application; 1: Refund in progress; 2: Refund failed; 3: Refund successful
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * Transaction serial number
   * 
   * @example
   * 1677229005000
   */
  transactionNo?: string;
  /**
   * @remarks
   * Refund order creation time, UTC timestamp
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
   * Request RequestId
   * 
   * @example
   * 51593418-8C73-5E47-8BA8-3F1D4A00CC0B
   */
  requestId?: string;
  /**
   * @remarks
   * Correctly processed return data
   */
  data?: RefundDetailResponseBodyData;
  /**
   * @remarks
   * error code
   * 
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @remarks
   * Error handling carries data
   * 
   * @example
   * null
   */
  errorData?: any;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * null
   */
  errorMsg?: string;
  /**
   * @remarks
   * HTTP request successful, status value is 200
   * 
   * @example
   * 200
   */
  status?: number;
  /**
   * @remarks
   * Whether the request was successful
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

