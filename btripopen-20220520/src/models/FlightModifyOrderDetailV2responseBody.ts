// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightModifyOrderDetailV2ResponseBodyModuleAttributes extends $dara.Model {
  baggageRule?: string;
  changeRule?: string;
  latestPayTime?: any;
  latestPayTimeStr?: string;
  refundRule?: string;
  static names(): { [key: string]: string } {
    return {
      baggageRule: 'baggage_rule',
      changeRule: 'change_rule',
      latestPayTime: 'latest_pay_time',
      latestPayTimeStr: 'latest_pay_time_str',
      refundRule: 'refund_rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baggageRule: 'string',
      changeRule: 'string',
      latestPayTime: 'any',
      latestPayTimeStr: 'string',
      refundRule: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightModifyOrderDetailV2ResponseBodyModuleContactInfoDTO extends $dara.Model {
  /**
   * @example
   * 17816963077@163.com
   */
  contactEmail?: string;
  contactName?: string;
  /**
   * @example
   * 17816963077
   */
  contactPhone?: string;
  /**
   * @example
   * false
   */
  sendMsgToPassenger?: boolean;
  static names(): { [key: string]: string } {
    return {
      contactEmail: 'contact_email',
      contactName: 'contact_name',
      contactPhone: 'contact_phone',
      sendMsgToPassenger: 'send_msg_to_passenger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactEmail: 'string',
      contactName: 'string',
      contactPhone: 'string',
      sendMsgToPassenger: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightModifyOrderDetailV2ResponseBodyModuleDestFlightInfoDTOSFlightChange extends $dara.Model {
  changeDesc?: string;
  changeStatus?: string;
  changeStatusCode?: string;
  newSegment?: any;
  passengerNames?: string[];
  static names(): { [key: string]: string } {
    return {
      changeDesc: 'change_desc',
      changeStatus: 'change_status',
      changeStatusCode: 'change_status_code',
      newSegment: 'new_segment',
      passengerNames: 'passenger_names',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeDesc: 'string',
      changeStatus: 'string',
      changeStatusCode: 'string',
      newSegment: 'any',
      passengerNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.passengerNames)) {
      $dara.Model.validateArray(this.passengerNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightModifyOrderDetailV2ResponseBodyModuleDestFlightInfoDTOSSegmentPosition extends $dara.Model {
  /**
   * @example
   * 0
   */
  journeyIndex?: number;
  /**
   * @example
   * 0
   */
  segmentIndex?: number;
  static names(): { [key: string]: string } {
    return {
      journeyIndex: 'journey_index',
      segmentIndex: 'segment_index',
    };
  }

  static types(): { [key: string]: any } {
    return {
      journeyIndex: 'number',
      segmentIndex: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightModifyOrderDetailV2ResponseBodyModuleDestFlightInfoDTOS extends $dara.Model {
  /**
   * @example
   * MU
   */
  airlineCode?: string;
  airlineIconUrl?: string;
  airlineName?: string;
  /**
   * @example
   * HGH
   */
  arrAirportCode?: string;
  arrAirportName?: string;
  /**
   * @example
   * HGH
   */
  arrCityCode?: string;
  arrCityName?: string;
  arrTerminal?: string;
  /**
   * @example
   * 2023-10-03 09:30:00
   */
  arrTime?: string;
  /**
   * @example
   * Y
   */
  cabin?: string;
  /**
   * @example
   * Y
   */
  cabinClass?: string;
  cabinClassName?: string;
  /**
   * @example
   * 10
   */
  cabinDiscount?: number;
  carrierAirlineCode?: string;
  carrierAirlineIconUrl?: string;
  carrierAirlineName?: string;
  carrierFlightNo?: string;
  /**
   * @example
   * PKX
   */
  depAirportCode?: string;
  depAirportName?: string;
  /**
   * @example
   * BJS
   */
  depCityCode?: string;
  depCityName?: string;
  depTerminal?: string;
  /**
   * @example
   * 2023-10-03 07:30:00
   */
  depTime?: string;
  flightChange?: FlightModifyOrderDetailV2ResponseBodyModuleDestFlightInfoDTOSFlightChange;
  /**
   * @example
   * MU5193
   */
  flightNo?: string;
  flightType?: string;
  mealDesc?: string;
  /**
   * @example
   * 1194012
   */
  segmentIId?: string;
  segmentPosition?: FlightModifyOrderDetailV2ResponseBodyModuleDestFlightInfoDTOSSegmentPosition;
  stopArrTime?: string;
  stopCity?: string;
  stopDepTime?: string;
  static names(): { [key: string]: string } {
    return {
      airlineCode: 'airline_code',
      airlineIconUrl: 'airline_icon_url',
      airlineName: 'airline_name',
      arrAirportCode: 'arr_airport_code',
      arrAirportName: 'arr_airport_name',
      arrCityCode: 'arr_city_code',
      arrCityName: 'arr_city_name',
      arrTerminal: 'arr_terminal',
      arrTime: 'arr_time',
      cabin: 'cabin',
      cabinClass: 'cabin_class',
      cabinClassName: 'cabin_class_name',
      cabinDiscount: 'cabin_discount',
      carrierAirlineCode: 'carrier_airline_code',
      carrierAirlineIconUrl: 'carrier_airline_icon_url',
      carrierAirlineName: 'carrier_airline_name',
      carrierFlightNo: 'carrier_flight_no',
      depAirportCode: 'dep_airport_code',
      depAirportName: 'dep_airport_name',
      depCityCode: 'dep_city_code',
      depCityName: 'dep_city_name',
      depTerminal: 'dep_terminal',
      depTime: 'dep_time',
      flightChange: 'flight_change',
      flightNo: 'flight_no',
      flightType: 'flight_type',
      mealDesc: 'meal_desc',
      segmentIId: 'segmentI_id',
      segmentPosition: 'segment_position',
      stopArrTime: 'stop_arr_time',
      stopCity: 'stop_city',
      stopDepTime: 'stop_dep_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineCode: 'string',
      airlineIconUrl: 'string',
      airlineName: 'string',
      arrAirportCode: 'string',
      arrAirportName: 'string',
      arrCityCode: 'string',
      arrCityName: 'string',
      arrTerminal: 'string',
      arrTime: 'string',
      cabin: 'string',
      cabinClass: 'string',
      cabinClassName: 'string',
      cabinDiscount: 'number',
      carrierAirlineCode: 'string',
      carrierAirlineIconUrl: 'string',
      carrierAirlineName: 'string',
      carrierFlightNo: 'string',
      depAirportCode: 'string',
      depAirportName: 'string',
      depCityCode: 'string',
      depCityName: 'string',
      depTerminal: 'string',
      depTime: 'string',
      flightChange: FlightModifyOrderDetailV2ResponseBodyModuleDestFlightInfoDTOSFlightChange,
      flightNo: 'string',
      flightType: 'string',
      mealDesc: 'string',
      segmentIId: 'string',
      segmentPosition: FlightModifyOrderDetailV2ResponseBodyModuleDestFlightInfoDTOSSegmentPosition,
      stopArrTime: 'string',
      stopCity: 'string',
      stopDepTime: 'string',
    };
  }

  validate() {
    if(this.flightChange && typeof (this.flightChange as any).validate === 'function') {
      (this.flightChange as any).validate();
    }
    if(this.segmentPosition && typeof (this.segmentPosition as any).validate === 'function') {
      (this.segmentPosition as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightModifyOrderDetailV2ResponseBodyModuleTravelerInfoDTOSChangeFee extends $dara.Model {
  changeFee?: number;
  serviceFee?: number;
  upgradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      changeFee: 'change_fee',
      serviceFee: 'service_fee',
      upgradePrice: 'upgrade_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeFee: 'number',
      serviceFee: 'number',
      upgradePrice: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightModifyOrderDetailV2ResponseBodyModuleTravelerInfoDTOS extends $dara.Model {
  /**
   * @example
   * 2000-08-19
   */
  birthDate?: string;
  /**
   * @example
   * 430131413423435353
   */
  certNo?: string;
  /**
   * @example
   * 0
   */
  certType?: number;
  changeFee?: FlightModifyOrderDetailV2ResponseBodyModuleTravelerInfoDTOSChangeFee;
  /**
   * @example
   * 1
   */
  gender?: number;
  originTicketNos?: string[];
  /**
   * @example
   * 12172819047252004460056
   */
  passengerId?: string;
  passengerName?: string;
  /**
   * @example
   * 0
   */
  passengerType?: number;
  /**
   * @example
   * 17635462345
   */
  phone?: string;
  /**
   * @example
   * 3243028
   */
  pid?: number;
  ticketNoSegmentMap?: { [key: string]: any };
  ticketNos?: string[];
  static names(): { [key: string]: string } {
    return {
      birthDate: 'birth_date',
      certNo: 'cert_no',
      certType: 'cert_type',
      changeFee: 'change_fee',
      gender: 'gender',
      originTicketNos: 'origin_ticket_nos',
      passengerId: 'passenger_id',
      passengerName: 'passenger_name',
      passengerType: 'passenger_type',
      phone: 'phone',
      pid: 'pid',
      ticketNoSegmentMap: 'ticket_no_segment_map',
      ticketNos: 'ticket_nos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      birthDate: 'string',
      certNo: 'string',
      certType: 'number',
      changeFee: FlightModifyOrderDetailV2ResponseBodyModuleTravelerInfoDTOSChangeFee,
      gender: 'number',
      originTicketNos: { 'type': 'array', 'itemType': 'string' },
      passengerId: 'string',
      passengerName: 'string',
      passengerType: 'number',
      phone: 'string',
      pid: 'number',
      ticketNoSegmentMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      ticketNos: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.changeFee && typeof (this.changeFee as any).validate === 'function') {
      (this.changeFee as any).validate();
    }
    if(Array.isArray(this.originTicketNos)) {
      $dara.Model.validateArray(this.originTicketNos);
    }
    if(this.ticketNoSegmentMap) {
      $dara.Model.validateMap(this.ticketNoSegmentMap);
    }
    if(Array.isArray(this.ticketNos)) {
      $dara.Model.validateArray(this.ticketNos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightModifyOrderDetailV2ResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 2023-08-14 11:28:01
   */
  applyTime?: string;
  attributes?: FlightModifyOrderDetailV2ResponseBodyModuleAttributes;
  /**
   * @example
   * 17635462345@163.com
   */
  bookUserEmail?: string;
  bookUserName?: string;
  /**
   * @example
   * 17635462345
   */
  bookuserPhone?: string;
  changeFailReason?: string;
  contactInfoDTO?: FlightModifyOrderDetailV2ResponseBodyModuleContactInfoDTO;
  destFlightInfoDTOS?: FlightModifyOrderDetailV2ResponseBodyModuleDestFlightInfoDTOS[];
  /**
   * @example
   * 2023-08-14 11:48:01
   */
  lastPayTime?: string;
  /**
   * @example
   * 1017124195788186048
   */
  orderId?: number;
  /**
   * @example
   * 1017124195788186048
   */
  outOrderId?: string;
  /**
   * @example
   * 1019195836916029
   */
  outSubOrderId?: string;
  /**
   * @example
   * 2023-08-14 11:38:01
   */
  payTime?: string;
  reason?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 1019195836916029
   */
  subOrderId?: number;
  /**
   * @example
   * 2023-08-19 15:24:08
   */
  ticketTime?: string;
  /**
   * @example
   * 100
   */
  totalPrice?: number;
  /**
   * @example
   * 0
   */
  totalServiceFeePrice?: number;
  travelerInfoDTOS?: FlightModifyOrderDetailV2ResponseBodyModuleTravelerInfoDTOS[];
  static names(): { [key: string]: string } {
    return {
      applyTime: 'apply_time',
      attributes: 'attributes',
      bookUserEmail: 'book_user_email',
      bookUserName: 'book_user_name',
      bookuserPhone: 'bookuser_phone',
      changeFailReason: 'change_fail_reason',
      contactInfoDTO: 'contact_info_d_t_o',
      destFlightInfoDTOS: 'dest_flight_info_d_t_o_s',
      lastPayTime: 'last_pay_time',
      orderId: 'order_id',
      outOrderId: 'out_order_id',
      outSubOrderId: 'out_sub_order_id',
      payTime: 'pay_time',
      reason: 'reason',
      status: 'status',
      subOrderId: 'sub_order_id',
      ticketTime: 'ticket_time',
      totalPrice: 'total_price',
      totalServiceFeePrice: 'total_service_fee_price',
      travelerInfoDTOS: 'traveler_info_d_t_o_s',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyTime: 'string',
      attributes: FlightModifyOrderDetailV2ResponseBodyModuleAttributes,
      bookUserEmail: 'string',
      bookUserName: 'string',
      bookuserPhone: 'string',
      changeFailReason: 'string',
      contactInfoDTO: FlightModifyOrderDetailV2ResponseBodyModuleContactInfoDTO,
      destFlightInfoDTOS: { 'type': 'array', 'itemType': FlightModifyOrderDetailV2ResponseBodyModuleDestFlightInfoDTOS },
      lastPayTime: 'string',
      orderId: 'number',
      outOrderId: 'string',
      outSubOrderId: 'string',
      payTime: 'string',
      reason: 'string',
      status: 'number',
      subOrderId: 'number',
      ticketTime: 'string',
      totalPrice: 'number',
      totalServiceFeePrice: 'number',
      travelerInfoDTOS: { 'type': 'array', 'itemType': FlightModifyOrderDetailV2ResponseBodyModuleTravelerInfoDTOS },
    };
  }

  validate() {
    if(this.attributes && typeof (this.attributes as any).validate === 'function') {
      (this.attributes as any).validate();
    }
    if(this.contactInfoDTO && typeof (this.contactInfoDTO as any).validate === 'function') {
      (this.contactInfoDTO as any).validate();
    }
    if(Array.isArray(this.destFlightInfoDTOS)) {
      $dara.Model.validateArray(this.destFlightInfoDTOS);
    }
    if(Array.isArray(this.travelerInfoDTOS)) {
      $dara.Model.validateArray(this.travelerInfoDTOS);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightModifyOrderDetailV2ResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  message?: string;
  /**
   * @remarks
   * module
   */
  module?: FlightModifyOrderDetailV2ResponseBodyModule;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 407543AF-2BD9-5890-BD92-9D1AB7218B27
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
   * 210bc2dc16839612026565712dcbe6
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
      module: FlightModifyOrderDetailV2ResponseBodyModule,
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

