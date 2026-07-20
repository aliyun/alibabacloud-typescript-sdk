// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightRefundDetailV2ResponseBodyModuleContactInfoDTO extends $dara.Model {
  /**
   * @example
   * j*********@example.com
   */
  contactEmail?: string;
  /**
   * @example
   * 张四
   */
  contactName?: string;
  /**
   * @example
   * 131****8888
   */
  contactPhone?: string;
  /**
   * @example
   * true
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

export class FlightRefundDetailV2ResponseBodyModuleFlightInfoDTOSSegmentPosition extends $dara.Model {
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

export class FlightRefundDetailV2ResponseBodyModuleFlightInfoDTOS extends $dara.Model {
  /**
   * @example
   * MU
   */
  airlineCode?: string;
  /**
   * @example
   * 航司 icon
   */
  airlineIconUrl?: string;
  /**
   * @example
   * 中国东方航空
   */
  airlineName?: string;
  /**
   * @example
   * HGH
   */
  arrAirportCode?: string;
  /**
   * @example
   * 萧山国际机场
   */
  arrAirportName?: string;
  /**
   * @example
   * HGH
   */
  arrCityCode?: string;
  /**
   * @example
   * 杭州
   */
  arrCityName?: string;
  /**
   * @example
   * 到达航站楼
   */
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
  /**
   * @example
   * 舱等名称
   */
  cabinClassName?: string;
  /**
   * @example
   * 10
   */
  cabinDiscount?: number;
  /**
   * @example
   * 承运方航司二字码
   */
  carrierAirlineCode?: string;
  /**
   * @example
   * 承运方航司 icon
   */
  carrierAirlineIconUrl?: string;
  /**
   * @example
   * 承运方航司名称
   */
  carrierAirlineName?: string;
  /**
   * @example
   * 承运航班号
   */
  carrierFlightNo?: string;
  /**
   * @example
   * PKX
   */
  depAirportCode?: string;
  /**
   * @example
   * 大兴国际机场
   */
  depAirportName?: string;
  /**
   * @example
   * BJS
   */
  depCityCode?: string;
  /**
   * @example
   * 北京
   */
  depCityName?: string;
  /**
   * @example
   * 出发航站楼
   */
  depTerminal?: string;
  /**
   * @example
   * 2023-10-03 07:30:00
   */
  depTime?: string;
  /**
   * @example
   * MU5193
   */
  flightNo?: string;
  /**
   * @example
   * 机型，例"738"
   */
  flightType?: string;
  /**
   * @example
   * 餐食描述
   */
  mealDesc?: string;
  /**
   * @example
   * 1194012
   */
  segmentId?: string;
  segmentPosition?: FlightRefundDetailV2ResponseBodyModuleFlightInfoDTOSSegmentPosition;
  /**
   * @example
   * 经停到达时间
   */
  stopArrTime?: string;
  /**
   * @example
   * 经停城市
   */
  stopCity?: string;
  /**
   * @example
   * 经停出发时间
   */
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
      flightNo: 'flight_no',
      flightType: 'flight_type',
      mealDesc: 'meal_desc',
      segmentId: 'segment_id',
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
      flightNo: 'string',
      flightType: 'string',
      mealDesc: 'string',
      segmentId: 'string',
      segmentPosition: FlightRefundDetailV2ResponseBodyModuleFlightInfoDTOSSegmentPosition,
      stopArrTime: 'string',
      stopCity: 'string',
      stopDepTime: 'string',
    };
  }

  validate() {
    if(this.segmentPosition && typeof (this.segmentPosition as any).validate === 'function') {
      (this.segmentPosition as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightRefundDetailV2ResponseBodyModuleTravelerInfoDTOS extends $dara.Model {
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
  /**
   * @example
   * 张三
   */
  passengerName?: string;
  /**
   * @example
   * 0
   */
  passengerType?: number;
  /**
   * @example
   * 131****8888
   */
  phone?: string;
  /**
   * @example
   * 3243028
   */
  pid?: number;
  ticketNos?: string[];
  static names(): { [key: string]: string } {
    return {
      birthDate: 'birth_date',
      certNo: 'cert_no',
      certType: 'cert_type',
      gender: 'gender',
      originTicketNos: 'origin_ticket_nos',
      passengerId: 'passenger_id',
      passengerName: 'passenger_name',
      passengerType: 'passenger_type',
      phone: 'phone',
      pid: 'pid',
      ticketNos: 'ticket_nos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      birthDate: 'string',
      certNo: 'string',
      certType: 'number',
      gender: 'number',
      originTicketNos: { 'type': 'array', 'itemType': 'string' },
      passengerId: 'string',
      passengerName: 'string',
      passengerType: 'number',
      phone: 'string',
      pid: 'number',
      ticketNos: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.originTicketNos)) {
      $dara.Model.validateArray(this.originTicketNos);
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

export class FlightRefundDetailV2ResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 2023-08-19 17:18:19
   */
  applyTime?: string;
  contactInfoDTO?: FlightRefundDetailV2ResponseBodyModuleContactInfoDTO;
  flightInfoDTOS?: FlightRefundDetailV2ResponseBodyModuleFlightInfoDTOS[];
  /**
   * @example
   * 100
   */
  nonRefundableChangeServicePrice?: number;
  /**
   * @example
   * 100
   */
  nonRefundableChangeUpgradePrice?: number;
  /**
   * @example
   * 1002039195025156700
   */
  orderId?: number;
  /**
   * @example
   * 1002039195025156700
   */
  outOrderId?: string;
  /**
   * @example
   * 1019195836916039
   */
  outSubOrderId?: string;
  /**
   * @example
   * 我要改变行程计划、我不想飞
   */
  reason?: string;
  /**
   * @example
   * 1
   */
  reasonCode?: string;
  /**
   * @example
   * 退票失败原因
   */
  refundFailReason?: string;
  /**
   * @example
   * 100
   */
  refundHandlingFee?: number;
  /**
   * @example
   * 10000
   */
  refundMoney?: number;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 1000000000297003
   */
  subOrderId?: number;
  travelerInfoDTOS?: FlightRefundDetailV2ResponseBodyModuleTravelerInfoDTOS[];
  static names(): { [key: string]: string } {
    return {
      applyTime: 'apply_time',
      contactInfoDTO: 'contact_info_d_t_o',
      flightInfoDTOS: 'flight_info_d_t_o_s',
      nonRefundableChangeServicePrice: 'non_refundable_change_service_price',
      nonRefundableChangeUpgradePrice: 'non_refundable_change_upgrade_price',
      orderId: 'order_id',
      outOrderId: 'out_order_id',
      outSubOrderId: 'out_sub_order_id',
      reason: 'reason',
      reasonCode: 'reason_code',
      refundFailReason: 'refund_fail_reason',
      refundHandlingFee: 'refund_handling_fee',
      refundMoney: 'refund_money',
      status: 'status',
      subOrderId: 'sub_order_id',
      travelerInfoDTOS: 'traveler_info_d_t_o_s',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyTime: 'string',
      contactInfoDTO: FlightRefundDetailV2ResponseBodyModuleContactInfoDTO,
      flightInfoDTOS: { 'type': 'array', 'itemType': FlightRefundDetailV2ResponseBodyModuleFlightInfoDTOS },
      nonRefundableChangeServicePrice: 'number',
      nonRefundableChangeUpgradePrice: 'number',
      orderId: 'number',
      outOrderId: 'string',
      outSubOrderId: 'string',
      reason: 'string',
      reasonCode: 'string',
      refundFailReason: 'string',
      refundHandlingFee: 'number',
      refundMoney: 'number',
      status: 'number',
      subOrderId: 'number',
      travelerInfoDTOS: { 'type': 'array', 'itemType': FlightRefundDetailV2ResponseBodyModuleTravelerInfoDTOS },
    };
  }

  validate() {
    if(this.contactInfoDTO && typeof (this.contactInfoDTO as any).validate === 'function') {
      (this.contactInfoDTO as any).validate();
    }
    if(Array.isArray(this.flightInfoDTOS)) {
      $dara.Model.validateArray(this.flightInfoDTOS);
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

export class FlightRefundDetailV2ResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 成功
   */
  message?: string;
  module?: FlightRefundDetailV2ResponseBodyModule;
  /**
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
   * @example
   * 210e845f16785007404904300ddc92
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
      module: FlightRefundDetailV2ResponseBodyModule,
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

