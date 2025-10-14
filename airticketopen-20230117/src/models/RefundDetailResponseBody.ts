// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefundDetailResponseBodyDataMultiRefundDetailsPassengerMultiRefundDetailsPassenger extends $dara.Model {
  /**
   * @remarks
   * credential number
   * 
   * @example
   * 411***********4411
   */
  document?: string;
  /**
   * @remarks
   * first name
   * 
   * @example
   * SAN
   */
  firstName?: string;
  /**
   * @remarks
   * last name
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
   * amount of the supplementary refund for the change order
   * 
   * @example
   * 30
   */
  changeOrderRefundFee?: number;
  /**
   * @remarks
   * amount of the supplementary refund for the original order
   * 
   * @example
   * 30
   */
  originalOrderRefundFee?: number;
  /**
   * @remarks
   * passenger for the refund
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
   * supplementary refund order number
   * 
   * @example
   * 498843***6950
   */
  multiRefundOrderNum?: number;
  /**
   * @remarks
   * transaction number of the supplementary refund order
   * 
   * @example
   * 498843***6950
   */
  multiRefundTransactionNo?: string;
  /**
   * @remarks
   * supplementary refund details in passenger dimension
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
   * credential number
   * 
   * @example
   * 411***********4411
   */
  document?: string;
  /**
   * @remarks
   * first name
   * 
   * @example
   * SAN
   */
  firstName?: string;
  /**
   * @remarks
   * first name
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
   * total price of the used flight tickets
   * 
   * @example
   * 30
   */
  alreadyUsedTotalFee?: number;
  /**
   * @remarks
   * amount refunded to the user after change (only available when has change order)
   * 
   * @example
   * 30
   */
  modifyRefundToBuyerMoney?: number;
  /**
   * @remarks
   * non-refundable change service fee
   * 
   * @example
   * 30
   */
  nonRefundableChangeServiceFee?: number;
  /**
   * @remarks
   * non-refundable upgrade fee
   * 
   * @example
   * 30
   */
  nonRefundableChangeUpgradeFee?: number;
  /**
   * @remarks
   * non-refundable tax amount, i.e., tax refund fee
   * 
   * @example
   * 30
   */
  nonRefundableTaxFee?: number;
  /**
   * @remarks
   * non-refundable ticket amount, i.e., ticket refund fee
   * 
   * @example
   * 30
   */
  nonRefundableTicketFee?: number;
  /**
   * @remarks
   * amount refundable to the user from the original ticket (fare + tax - non_refundable_ticket_fee - non_refundable_tax_fee - already_used_total_fee - discount)
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
   * information of the passenger applying for a refund
   */
  passenger?: RefundDetailResponseBodyDataPassengerRefundDetailsPassenger;
  /**
   * @remarks
   * details of the refund fee
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
   * arrival airport code (capitalized)
   * 
   * @example
   * MFM
   */
  arrivalAirport?: string;
  /**
   * @remarks
   * arrival city code (capitalized)
   * 
   * @example
   * MFM
   */
  arrivalCity?: string;
  /**
   * @remarks
   * arrival terminal
   * 
   * @example
   * T1
   */
  arrivalTerminal?: string;
  /**
   * @remarks
   * arrival time in string format (yyyy-MM-dd HH:mm:ss)
   * 
   * @example
   * 2023-03-10 10:40:00
   */
  arrivalTime?: string;
  /**
   * @remarks
   * field deprecated
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
   * cabin class
   * 
   * @example
   * Y
   */
  cabinClass?: string;
  /**
   * @remarks
   * code share or not
   * 
   * @example
   * false
   */
  codeShare?: boolean;
  /**
   * @remarks
   * departure airport code (capitalized)
   * 
   * @example
   * PVG
   */
  departureAirport?: string;
  /**
   * @remarks
   * departure city code (capitalized)
   * 
   * @example
   * SHA
   */
  departureCity?: string;
  /**
   * @remarks
   * departure terminal
   * 
   * @example
   * T2
   */
  departureTerminal?: string;
  /**
   * @remarks
   * departure time in string format (yyyy-MM-dd HH:mm:ss)
   * 
   * @example
   * 2023-03-10 07:55:00
   */
  departureTime?: string;
  /**
   * @remarks
   * equipment type
   * 
   * @example
   * 32Q
   */
  equipType?: string;
  /**
   * @remarks
   * flight time, unit: minute
   * 
   * @example
   * 165
   */
  flightDuration?: number;
  /**
   * @remarks
   * marketing airline code (eg: KA)
   * 
   * @example
   * HO
   */
  marketingAirline?: string;
  /**
   * @remarks
   * marketing flight no. (eg: KA5809)
   * 
   * @example
   * HO1295
   */
  marketingFlightNo?: string;
  /**
   * @remarks
   * marketing flight no. (eg: 5809)
   * 
   * @example
   * 1295
   */
  marketingFlightNoInt?: number;
  /**
   * @remarks
   * operating airline code (eg: CX)
   * 
   * @example
   * HO
   */
  operatingAirline?: string;
  /**
   * @remarks
   * operating flight no. (eg: CX601)
   * 
   * @example
   * HO1295
   */
  operatingFlightNo?: string;
  /**
   * @remarks
   * segment ID format: flight no.+departure airport[IATA airport code]+arrival airport[IATA airport code]+departure time(MMdd)
   * 
   * @example
   * HO1295-PVG-MFM-20230310
   */
  segmentId?: string;
  /**
   * @remarks
   * stopover city list when stop_quantity > 0 , use “,” for seperation use
   * 
   * @example
   * SEL,HKG
   */
  stopCityList?: string;
  /**
   * @remarks
   * number of stopover
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
   * segment list
   */
  segmentList?: RefundDetailResponseBodyDataRefundJourneysSegmentList[];
  /**
   * @remarks
   * number of transfer
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
   * whether it is a supplementary refund order (if the refund amount is not enough, you can use RefundApply to create a supplementary refund order)
   * 
   * @example
   * false
   */
  containMultiRefund?: boolean;
  /**
   * @remarks
   * supplementary refund orders
   */
  multiRefundDetails?: RefundDetailResponseBodyDataMultiRefundDetails[];
  /**
   * @remarks
   * order number that returned by Book
   * 
   * @example
   * 4966***617111
   */
  orderNum?: number;
  /**
   * @remarks
   * refund details by passenger dimension
   */
  passengerRefundDetails?: RefundDetailResponseBodyDataPassengerRefundDetails[];
  /**
   * @remarks
   * refund completed time(timestamp)
   * 
   * @example
   * 1677229005000
   */
  paySuccessUtcTime?: number;
  /**
   * @remarks
   * URLs for refund attachments
   * 
   * @example
   * [zzz,yyy]
   */
  refundAttachmentUrls?: string[];
  /**
   * @remarks
   * refunded journey
   */
  refundJourneys?: RefundDetailResponseBodyDataRefundJourneys[];
  /**
   * @remarks
   * refund order number that returned by RefundApply
   * 
   * @example
   * 4966***617654
   */
  refundOrderNum?: number;
  /**
   * @remarks
   * reason for refund
   * 
   * @example
   * desc reason
   */
  refundReason?: string;
  /**
   * @remarks
   * refund type 
   * 
   * 2: voluntary application
   * 
   * 5: flight delay or cancellation, flight schedule change, etc., due to airline reasons
   * 
   * 6: health reasons with a certificate from a secondary class A hospital or above
   * 
   * 7: non-voluntary confirmed guidance
   * 
   * 100: non-voluntary non-confirmed guidance
   * 
   * @example
   * 5
   */
  refundType?: number;
  /**
   * @remarks
   * reason for refund rejection
   * 
   * @example
   * refuse reason
   */
  refuseReason?: string;
  /**
   * @remarks
   * refund order status
   * 
   * 0: refund application
   * 
   * 1: refund in progress
   * 
   * 2: refund failed
   * 
   * 3: refund succeeded
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * transaction number
   * 
   * @example
   * 1677229005000
   */
  transactionNo?: string;
  /**
   * @remarks
   * refund order created time(timestamp)
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
   * @example
   * 51593418-8C73-5E47-8BA8-3F1D4A00CC0B
   */
  requestId?: string;
  /**
   * @remarks
   * data
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
   * error data
   * 
   * @example
   * null
   */
  errorData?: any;
  /**
   * @remarks
   * error message
   * 
   * @example
   * null
   */
  errorMsg?: string;
  /**
   * @remarks
   * http reqeust has been processed successfully，status code is 200
   * 
   * @example
   * 200
   */
  status?: number;
  /**
   * @remarks
   * true represents success, false represents failure
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

