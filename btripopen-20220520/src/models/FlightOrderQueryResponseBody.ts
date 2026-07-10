// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightOrderQueryResponseBodyModuleFlightChangeTicketInfoList extends $dara.Model {
  applyId?: string;
  arrAirport?: string;
  arrAirportCode?: string;
  arrCity?: string;
  arrCityCode?: string;
  arrTime?: string;
  changeCabin?: string;
  changeCabinLevel?: string;
  changeFee?: number;
  changeFlightNo?: string;
  changeOrderId?: number;
  changeReason?: string;
  changeType?: number;
  depAirport?: string;
  depAirportCode?: string;
  depCity?: string;
  depCityCode?: string;
  depTime?: string;
  discount?: string;
  gmtCreate?: string;
  gmtModify?: string;
  journeyIndex?: number;
  originTicketNo?: string;
  outApplyId?: string;
  segmentIndex?: number;
  stopCity?: string;
  ticketNo?: string;
  ticketStatus?: string;
  ticketStatusCode?: number;
  upgradeFee?: number;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
      arrAirport: 'arr_airport',
      arrAirportCode: 'arr_airport_code',
      arrCity: 'arr_city',
      arrCityCode: 'arr_city_code',
      arrTime: 'arr_time',
      changeCabin: 'change_cabin',
      changeCabinLevel: 'change_cabin_level',
      changeFee: 'change_fee',
      changeFlightNo: 'change_flight_no',
      changeOrderId: 'change_order_id',
      changeReason: 'change_reason',
      changeType: 'change_type',
      depAirport: 'dep_airport',
      depAirportCode: 'dep_airport_code',
      depCity: 'dep_city',
      depCityCode: 'dep_city_code',
      depTime: 'dep_time',
      discount: 'discount',
      gmtCreate: 'gmt_create',
      gmtModify: 'gmt_modify',
      journeyIndex: 'journey_index',
      originTicketNo: 'origin_ticket_no',
      outApplyId: 'out_apply_id',
      segmentIndex: 'segment_index',
      stopCity: 'stop_city',
      ticketNo: 'ticket_no',
      ticketStatus: 'ticket_status',
      ticketStatusCode: 'ticket_status_code',
      upgradeFee: 'upgrade_fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'string',
      arrAirport: 'string',
      arrAirportCode: 'string',
      arrCity: 'string',
      arrCityCode: 'string',
      arrTime: 'string',
      changeCabin: 'string',
      changeCabinLevel: 'string',
      changeFee: 'number',
      changeFlightNo: 'string',
      changeOrderId: 'number',
      changeReason: 'string',
      changeType: 'number',
      depAirport: 'string',
      depAirportCode: 'string',
      depCity: 'string',
      depCityCode: 'string',
      depTime: 'string',
      discount: 'string',
      gmtCreate: 'string',
      gmtModify: 'string',
      journeyIndex: 'number',
      originTicketNo: 'string',
      outApplyId: 'string',
      segmentIndex: 'number',
      stopCity: 'string',
      ticketNo: 'string',
      ticketStatus: 'string',
      ticketStatusCode: 'number',
      upgradeFee: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderQueryResponseBodyModuleFlightInfoListArrAirportCityCounty extends $dara.Model {
  adcode?: string;
  airportCityCode?: string;
  airportCityName?: string;
  airportCode?: string;
  airportName?: string;
  airportParentCityName?: string;
  countyCityAdcode?: string;
  countyCityName?: string;
  prefectureCityAdcode?: string;
  prefectureCityName?: string;
  static names(): { [key: string]: string } {
    return {
      adcode: 'adcode',
      airportCityCode: 'airport_city_code',
      airportCityName: 'airport_city_name',
      airportCode: 'airport_code',
      airportName: 'airport_name',
      airportParentCityName: 'airport_parent_city_name',
      countyCityAdcode: 'county_city_adcode',
      countyCityName: 'county_city_name',
      prefectureCityAdcode: 'prefecture_city_adcode',
      prefectureCityName: 'prefecture_city_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adcode: 'string',
      airportCityCode: 'string',
      airportCityName: 'string',
      airportCode: 'string',
      airportName: 'string',
      airportParentCityName: 'string',
      countyCityAdcode: 'string',
      countyCityName: 'string',
      prefectureCityAdcode: 'string',
      prefectureCityName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderQueryResponseBodyModuleFlightInfoListDepAirportCityCounty extends $dara.Model {
  adcode?: string;
  airportCityCode?: string;
  airportCityName?: string;
  airportCode?: string;
  airportName?: string;
  airportParentCityName?: string;
  countyCityAdcode?: string;
  countyCityName?: string;
  prefectureCityAdcode?: string;
  prefectureCityName?: string;
  static names(): { [key: string]: string } {
    return {
      adcode: 'adcode',
      airportCityCode: 'airport_city_code',
      airportCityName: 'airport_city_name',
      airportCode: 'airport_code',
      airportName: 'airport_name',
      airportParentCityName: 'airport_parent_city_name',
      countyCityAdcode: 'county_city_adcode',
      countyCityName: 'county_city_name',
      prefectureCityAdcode: 'prefecture_city_adcode',
      prefectureCityName: 'prefecture_city_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adcode: 'string',
      airportCityCode: 'string',
      airportCityName: 'string',
      airportCode: 'string',
      airportName: 'string',
      airportParentCityName: 'string',
      countyCityAdcode: 'string',
      countyCityName: 'string',
      prefectureCityAdcode: 'string',
      prefectureCityName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderQueryResponseBodyModuleFlightInfoListStopCityInfoListStopAirportCityCounty extends $dara.Model {
  adcode?: string;
  airportCityCode?: string;
  airportCityName?: string;
  airportCode?: string;
  airportName?: string;
  airportParentCityName?: string;
  countyCityAdcode?: string;
  countyCityName?: string;
  prefectureCityAdcode?: string;
  prefectureCityName?: string;
  static names(): { [key: string]: string } {
    return {
      adcode: 'adcode',
      airportCityCode: 'airport_city_code',
      airportCityName: 'airport_city_name',
      airportCode: 'airport_code',
      airportName: 'airport_name',
      airportParentCityName: 'airport_parent_city_name',
      countyCityAdcode: 'county_city_adcode',
      countyCityName: 'county_city_name',
      prefectureCityAdcode: 'prefecture_city_adcode',
      prefectureCityName: 'prefecture_city_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adcode: 'string',
      airportCityCode: 'string',
      airportCityName: 'string',
      airportCode: 'string',
      airportName: 'string',
      airportParentCityName: 'string',
      countyCityAdcode: 'string',
      countyCityName: 'string',
      prefectureCityAdcode: 'string',
      prefectureCityName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderQueryResponseBodyModuleFlightInfoListStopCityInfoList extends $dara.Model {
  stopAirportCityCounty?: FlightOrderQueryResponseBodyModuleFlightInfoListStopCityInfoListStopAirportCityCounty;
  stopAirportCode?: string;
  static names(): { [key: string]: string } {
    return {
      stopAirportCityCounty: 'stop_airport_city_county',
      stopAirportCode: 'stop_airport_code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stopAirportCityCounty: FlightOrderQueryResponseBodyModuleFlightInfoListStopCityInfoListStopAirportCityCounty,
      stopAirportCode: 'string',
    };
  }

  validate() {
    if(this.stopAirportCityCounty && typeof (this.stopAirportCityCounty as any).validate === 'function') {
      (this.stopAirportCityCounty as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderQueryResponseBodyModuleFlightInfoList extends $dara.Model {
  airlineCode?: string;
  airlineName?: string;
  arrAirportCityCounty?: FlightOrderQueryResponseBodyModuleFlightInfoListArrAirportCityCounty;
  arrAirportCode?: string;
  arrAirportName?: string;
  arrCityAdCode?: string;
  arrCityCode?: string;
  arrCityName?: string;
  arrTerminal?: string;
  arrTime?: string;
  cabin?: string;
  cabinLevel?: string;
  depAirportCityCounty?: FlightOrderQueryResponseBodyModuleFlightInfoListDepAirportCityCounty;
  depAirportCode?: string;
  depAirportName?: string;
  depCityAdCode?: string;
  depCityCode?: string;
  depCityName?: string;
  depTerminal?: string;
  depTime?: string;
  flightMile?: number;
  flightNo?: string;
  journeyIndex?: number;
  segmentIndex?: number;
  stopCity?: string[];
  stopCityInfoList?: FlightOrderQueryResponseBodyModuleFlightInfoListStopCityInfoList[];
  static names(): { [key: string]: string } {
    return {
      airlineCode: 'airline_code',
      airlineName: 'airline_name',
      arrAirportCityCounty: 'arr_airport_city_county',
      arrAirportCode: 'arr_airport_code',
      arrAirportName: 'arr_airport_name',
      arrCityAdCode: 'arr_city_ad_code',
      arrCityCode: 'arr_city_code',
      arrCityName: 'arr_city_name',
      arrTerminal: 'arr_terminal',
      arrTime: 'arr_time',
      cabin: 'cabin',
      cabinLevel: 'cabin_level',
      depAirportCityCounty: 'dep_airport_city_county',
      depAirportCode: 'dep_airport_code',
      depAirportName: 'dep_airport_name',
      depCityAdCode: 'dep_city_ad_code',
      depCityCode: 'dep_city_code',
      depCityName: 'dep_city_name',
      depTerminal: 'dep_terminal',
      depTime: 'dep_time',
      flightMile: 'flight_mile',
      flightNo: 'flight_no',
      journeyIndex: 'journey_index',
      segmentIndex: 'segment_index',
      stopCity: 'stop_city',
      stopCityInfoList: 'stop_city_info_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineCode: 'string',
      airlineName: 'string',
      arrAirportCityCounty: FlightOrderQueryResponseBodyModuleFlightInfoListArrAirportCityCounty,
      arrAirportCode: 'string',
      arrAirportName: 'string',
      arrCityAdCode: 'string',
      arrCityCode: 'string',
      arrCityName: 'string',
      arrTerminal: 'string',
      arrTime: 'string',
      cabin: 'string',
      cabinLevel: 'string',
      depAirportCityCounty: FlightOrderQueryResponseBodyModuleFlightInfoListDepAirportCityCounty,
      depAirportCode: 'string',
      depAirportName: 'string',
      depCityAdCode: 'string',
      depCityCode: 'string',
      depCityName: 'string',
      depTerminal: 'string',
      depTime: 'string',
      flightMile: 'number',
      flightNo: 'string',
      journeyIndex: 'number',
      segmentIndex: 'number',
      stopCity: { 'type': 'array', 'itemType': 'string' },
      stopCityInfoList: { 'type': 'array', 'itemType': FlightOrderQueryResponseBodyModuleFlightInfoListStopCityInfoList },
    };
  }

  validate() {
    if(this.arrAirportCityCounty && typeof (this.arrAirportCityCounty as any).validate === 'function') {
      (this.arrAirportCityCounty as any).validate();
    }
    if(this.depAirportCityCounty && typeof (this.depAirportCityCounty as any).validate === 'function') {
      (this.depAirportCityCounty as any).validate();
    }
    if(Array.isArray(this.stopCity)) {
      $dara.Model.validateArray(this.stopCity);
    }
    if(Array.isArray(this.stopCityInfoList)) {
      $dara.Model.validateArray(this.stopCityInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderQueryResponseBodyModuleFlightRefundTicketInfoList extends $dara.Model {
  applyId?: string;
  arrAirport?: string;
  arrAirportCode?: string;
  arrCity?: string;
  arrCityCode?: string;
  companyRefundTicketFee?: number;
  depAirport?: string;
  depAirportCode?: string;
  depCity?: string;
  depCityCode?: string;
  flightNo?: string;
  gmtCreate?: string;
  gmtModify?: string;
  journeyIndex?: number;
  outApplyId?: string;
  personalRefundTicketFee?: number;
  refundOrderId?: number;
  refundReason?: string;
  refundTicketFee?: number;
  refundType?: number;
  segmentIndex?: number;
  ticketNo?: string;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
      arrAirport: 'arr_airport',
      arrAirportCode: 'arr_airport_code',
      arrCity: 'arr_city',
      arrCityCode: 'arr_city_code',
      companyRefundTicketFee: 'company_refund_ticket_fee',
      depAirport: 'dep_airport',
      depAirportCode: 'dep_airport_code',
      depCity: 'dep_city',
      depCityCode: 'dep_city_code',
      flightNo: 'flight_no',
      gmtCreate: 'gmt_create',
      gmtModify: 'gmt_modify',
      journeyIndex: 'journey_index',
      outApplyId: 'out_apply_id',
      personalRefundTicketFee: 'personal_refund_ticket_fee',
      refundOrderId: 'refund_order_id',
      refundReason: 'refund_reason',
      refundTicketFee: 'refund_ticket_fee',
      refundType: 'refund_type',
      segmentIndex: 'segment_index',
      ticketNo: 'ticket_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'string',
      arrAirport: 'string',
      arrAirportCode: 'string',
      arrCity: 'string',
      arrCityCode: 'string',
      companyRefundTicketFee: 'number',
      depAirport: 'string',
      depAirportCode: 'string',
      depCity: 'string',
      depCityCode: 'string',
      flightNo: 'string',
      gmtCreate: 'string',
      gmtModify: 'string',
      journeyIndex: 'number',
      outApplyId: 'string',
      personalRefundTicketFee: 'number',
      refundOrderId: 'number',
      refundReason: 'string',
      refundTicketFee: 'number',
      refundType: 'number',
      segmentIndex: 'number',
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

export class FlightOrderQueryResponseBodyModuleFlightTicketInfoList extends $dara.Model {
  arrAirport?: string;
  arrAirportCode?: string;
  arrCity?: string;
  arrCityCode?: string;
  buildPrice?: number;
  changed?: boolean;
  depAirport?: string;
  depAirportCode?: string;
  depCity?: string;
  depCityCode?: string;
  discount?: number;
  flightNo?: string;
  gmtCreate?: string;
  gmtModify?: string;
  journeyIndex?: number;
  oilPrice?: number;
  payType?: number;
  personalPrice?: number;
  segmentIndex?: number;
  settlePrice?: number;
  ticketNo?: string;
  ticketPrice?: number;
  ticketStatus?: string;
  ticketStatusCode?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      arrAirport: 'arr_airport',
      arrAirportCode: 'arr_airport_code',
      arrCity: 'arr_city',
      arrCityCode: 'arr_city_code',
      buildPrice: 'build_price',
      changed: 'changed',
      depAirport: 'dep_airport',
      depAirportCode: 'dep_airport_code',
      depCity: 'dep_city',
      depCityCode: 'dep_city_code',
      discount: 'discount',
      flightNo: 'flight_no',
      gmtCreate: 'gmt_create',
      gmtModify: 'gmt_modify',
      journeyIndex: 'journey_index',
      oilPrice: 'oil_price',
      payType: 'pay_type',
      personalPrice: 'personal_price',
      segmentIndex: 'segment_index',
      settlePrice: 'settle_price',
      ticketNo: 'ticket_no',
      ticketPrice: 'ticket_price',
      ticketStatus: 'ticket_status',
      ticketStatusCode: 'ticket_status_code',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrAirport: 'string',
      arrAirportCode: 'string',
      arrCity: 'string',
      arrCityCode: 'string',
      buildPrice: 'number',
      changed: 'boolean',
      depAirport: 'string',
      depAirportCode: 'string',
      depCity: 'string',
      depCityCode: 'string',
      discount: 'number',
      flightNo: 'string',
      gmtCreate: 'string',
      gmtModify: 'string',
      journeyIndex: 'number',
      oilPrice: 'number',
      payType: 'number',
      personalPrice: 'number',
      segmentIndex: 'number',
      settlePrice: 'number',
      ticketNo: 'string',
      ticketPrice: 'number',
      ticketStatus: 'string',
      ticketStatusCode: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderQueryResponseBodyModuleInsuranceInfoList extends $dara.Model {
  amount?: number;
  insuranceNo?: string;
  name?: string;
  status?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      insuranceNo: 'insurance_no',
      name: 'name',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      insuranceNo: 'string',
      name: 'string',
      status: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderQueryResponseBodyModuleInvoiceInfo extends $dara.Model {
  id?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderQueryResponseBodyModuleOrderBaseInfo extends $dara.Model {
  applyId?: string;
  btripTitle?: string;
  contactName?: string;
  corpId?: string;
  corpName?: string;
  departId?: string;
  departName?: string;
  exceedApplyId?: string;
  exceedThirdPartApplyId?: string;
  gmtCreate?: string;
  gmtModify?: string;
  itineraryId?: string;
  orderId?: number;
  orderStatus?: number;
  supplier?: string;
  thirdpartApplyId?: string;
  thirdpartBusinessId?: string;
  thirdpartCorpId?: string;
  thirdpartItineraryId?: string;
  tripType?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
      btripTitle: 'btrip_title',
      contactName: 'contact_name',
      corpId: 'corp_id',
      corpName: 'corp_name',
      departId: 'depart_id',
      departName: 'depart_name',
      exceedApplyId: 'exceed_apply_id',
      exceedThirdPartApplyId: 'exceed_third_part_apply_id',
      gmtCreate: 'gmt_create',
      gmtModify: 'gmt_modify',
      itineraryId: 'itinerary_id',
      orderId: 'order_id',
      orderStatus: 'order_status',
      supplier: 'supplier',
      thirdpartApplyId: 'thirdpart_apply_id',
      thirdpartBusinessId: 'thirdpart_business_id',
      thirdpartCorpId: 'thirdpart_corp_id',
      thirdpartItineraryId: 'thirdpart_itinerary_id',
      tripType: 'trip_type',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'string',
      btripTitle: 'string',
      contactName: 'string',
      corpId: 'string',
      corpName: 'string',
      departId: 'string',
      departName: 'string',
      exceedApplyId: 'string',
      exceedThirdPartApplyId: 'string',
      gmtCreate: 'string',
      gmtModify: 'string',
      itineraryId: 'string',
      orderId: 'number',
      orderStatus: 'number',
      supplier: 'string',
      thirdpartApplyId: 'string',
      thirdpartBusinessId: 'string',
      thirdpartCorpId: 'string',
      thirdpartItineraryId: 'string',
      tripType: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderQueryResponseBodyModulePassengerInfoList extends $dara.Model {
  costCenterId?: number;
  costCenterName?: string;
  costCenterNumber?: string;
  projectCode?: string;
  projectId?: number;
  projectTitle?: string;
  thirdpartProjectId?: string;
  userId?: string;
  userName?: string;
  userType?: number;
  static names(): { [key: string]: string } {
    return {
      costCenterId: 'cost_center_id',
      costCenterName: 'cost_center_name',
      costCenterNumber: 'cost_center_number',
      projectCode: 'project_code',
      projectId: 'project_id',
      projectTitle: 'project_title',
      thirdpartProjectId: 'thirdpart_project_id',
      userId: 'user_id',
      userName: 'user_name',
      userType: 'user_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costCenterId: 'number',
      costCenterName: 'string',
      costCenterNumber: 'string',
      projectCode: 'string',
      projectId: 'number',
      projectTitle: 'string',
      thirdpartProjectId: 'string',
      userId: 'string',
      userName: 'string',
      userType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderQueryResponseBodyModulePriceInfoList extends $dara.Model {
  categoryCode?: number;
  gmtCreate?: string;
  passengerName?: string;
  payType?: number;
  price?: number;
  tradeId?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      categoryCode: 'category_code',
      gmtCreate: 'gmt_create',
      passengerName: 'passenger_name',
      payType: 'pay_type',
      price: 'price',
      tradeId: 'trade_id',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryCode: 'number',
      gmtCreate: 'string',
      passengerName: 'string',
      payType: 'number',
      price: 'number',
      tradeId: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderQueryResponseBodyModule extends $dara.Model {
  flightChangeTicketInfoList?: FlightOrderQueryResponseBodyModuleFlightChangeTicketInfoList[];
  flightInfoList?: FlightOrderQueryResponseBodyModuleFlightInfoList[];
  flightRefundTicketInfoList?: FlightOrderQueryResponseBodyModuleFlightRefundTicketInfoList[];
  flightTicketInfoList?: FlightOrderQueryResponseBodyModuleFlightTicketInfoList[];
  insuranceInfoList?: FlightOrderQueryResponseBodyModuleInsuranceInfoList[];
  invoiceInfo?: FlightOrderQueryResponseBodyModuleInvoiceInfo;
  orderBaseInfo?: FlightOrderQueryResponseBodyModuleOrderBaseInfo;
  passengerInfoList?: FlightOrderQueryResponseBodyModulePassengerInfoList[];
  priceInfoList?: FlightOrderQueryResponseBodyModulePriceInfoList[];
  static names(): { [key: string]: string } {
    return {
      flightChangeTicketInfoList: 'flight_change_ticket_info_list',
      flightInfoList: 'flight_info_list',
      flightRefundTicketInfoList: 'flight_refund_ticket_info_list',
      flightTicketInfoList: 'flight_ticket_info_list',
      insuranceInfoList: 'insurance_info_list',
      invoiceInfo: 'invoice_info',
      orderBaseInfo: 'order_base_info',
      passengerInfoList: 'passenger_info_list',
      priceInfoList: 'price_info_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flightChangeTicketInfoList: { 'type': 'array', 'itemType': FlightOrderQueryResponseBodyModuleFlightChangeTicketInfoList },
      flightInfoList: { 'type': 'array', 'itemType': FlightOrderQueryResponseBodyModuleFlightInfoList },
      flightRefundTicketInfoList: { 'type': 'array', 'itemType': FlightOrderQueryResponseBodyModuleFlightRefundTicketInfoList },
      flightTicketInfoList: { 'type': 'array', 'itemType': FlightOrderQueryResponseBodyModuleFlightTicketInfoList },
      insuranceInfoList: { 'type': 'array', 'itemType': FlightOrderQueryResponseBodyModuleInsuranceInfoList },
      invoiceInfo: FlightOrderQueryResponseBodyModuleInvoiceInfo,
      orderBaseInfo: FlightOrderQueryResponseBodyModuleOrderBaseInfo,
      passengerInfoList: { 'type': 'array', 'itemType': FlightOrderQueryResponseBodyModulePassengerInfoList },
      priceInfoList: { 'type': 'array', 'itemType': FlightOrderQueryResponseBodyModulePriceInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.flightChangeTicketInfoList)) {
      $dara.Model.validateArray(this.flightChangeTicketInfoList);
    }
    if(Array.isArray(this.flightInfoList)) {
      $dara.Model.validateArray(this.flightInfoList);
    }
    if(Array.isArray(this.flightRefundTicketInfoList)) {
      $dara.Model.validateArray(this.flightRefundTicketInfoList);
    }
    if(Array.isArray(this.flightTicketInfoList)) {
      $dara.Model.validateArray(this.flightTicketInfoList);
    }
    if(Array.isArray(this.insuranceInfoList)) {
      $dara.Model.validateArray(this.insuranceInfoList);
    }
    if(this.invoiceInfo && typeof (this.invoiceInfo as any).validate === 'function') {
      (this.invoiceInfo as any).validate();
    }
    if(this.orderBaseInfo && typeof (this.orderBaseInfo as any).validate === 'function') {
      (this.orderBaseInfo as any).validate();
    }
    if(Array.isArray(this.passengerInfoList)) {
      $dara.Model.validateArray(this.passengerInfoList);
    }
    if(Array.isArray(this.priceInfoList)) {
      $dara.Model.validateArray(this.priceInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderQueryResponseBody extends $dara.Model {
  code?: string;
  message?: string;
  module?: FlightOrderQueryResponseBodyModule;
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
      module: FlightOrderQueryResponseBodyModule,
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

