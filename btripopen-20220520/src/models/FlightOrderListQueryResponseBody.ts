// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightOrderListQueryResponseBodyModuleCostCenter extends $dara.Model {
  corpId?: string;
  id?: number;
  name?: string;
  number?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'corp_id',
      id: 'id',
      name: 'name',
      number: 'number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      id: 'number',
      name: 'string',
      number: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderListQueryResponseBodyModuleInsureInfoList extends $dara.Model {
  insureNo?: string;
  name?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      insureNo: 'insure_no',
      name: 'name',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      insureNo: 'string',
      name: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderListQueryResponseBodyModuleInvoice extends $dara.Model {
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

export class FlightOrderListQueryResponseBodyModulePriceInfoList extends $dara.Model {
  categoryCode?: number;
  categoryType?: number;
  changeFlightNo?: string;
  discount?: string;
  endTime?: string;
  gmtCreate?: string;
  originalTicketNo?: string;
  passengerName?: string;
  payType?: number;
  price?: number;
  startTime?: string;
  ticketNo?: string;
  tradeId?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      categoryCode: 'category_code',
      categoryType: 'category_type',
      changeFlightNo: 'change_flight_no',
      discount: 'discount',
      endTime: 'end_time',
      gmtCreate: 'gmt_create',
      originalTicketNo: 'original_ticket_no',
      passengerName: 'passenger_name',
      payType: 'pay_type',
      price: 'price',
      startTime: 'start_time',
      ticketNo: 'ticket_no',
      tradeId: 'trade_id',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryCode: 'number',
      categoryType: 'number',
      changeFlightNo: 'string',
      discount: 'string',
      endTime: 'string',
      gmtCreate: 'string',
      originalTicketNo: 'string',
      passengerName: 'string',
      payType: 'number',
      price: 'number',
      startTime: 'string',
      ticketNo: 'string',
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

export class FlightOrderListQueryResponseBodyModuleUserAffiliateList extends $dara.Model {
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderListQueryResponseBodyModule extends $dara.Model {
  applyId?: number;
  arrAirport?: string;
  arrAptPrefectureAdCode?: string;
  arrAptPrefectureName?: string;
  arrCity?: string;
  arrCityAdCode?: string;
  btripTitle?: string;
  cabinClass?: string;
  contactName?: string;
  corpId?: string;
  corpName?: string;
  costCenter?: FlightOrderListQueryResponseBodyModuleCostCenter;
  depAirport?: string;
  depAptPrefectureAdCode?: string;
  depAptPrefectureName?: string;
  depCity?: string;
  depCityAdCode?: string;
  depDate?: string;
  departId?: string;
  departName?: string;
  discount?: string;
  flightNo?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  insureInfoList?: FlightOrderListQueryResponseBodyModuleInsureInfoList[];
  invoice?: FlightOrderListQueryResponseBodyModuleInvoice;
  passengerCount?: number;
  passengerName?: string;
  priceInfoList?: FlightOrderListQueryResponseBodyModulePriceInfoList[];
  projectCode?: string;
  projectId?: number;
  projectTitle?: string;
  retDate?: string;
  status?: number;
  thirdPartProjectId?: string;
  thirdpartApplyId?: string;
  thirdpartBusinessId?: string;
  thirdpartItineraryId?: string;
  tripType?: number;
  userAffiliateList?: FlightOrderListQueryResponseBodyModuleUserAffiliateList[];
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
      arrAirport: 'arr_airport',
      arrAptPrefectureAdCode: 'arr_apt_prefecture_ad_code',
      arrAptPrefectureName: 'arr_apt_prefecture_name',
      arrCity: 'arr_city',
      arrCityAdCode: 'arr_city_ad_code',
      btripTitle: 'btrip_title',
      cabinClass: 'cabin_class',
      contactName: 'contact_name',
      corpId: 'corp_id',
      corpName: 'corp_name',
      costCenter: 'cost_center',
      depAirport: 'dep_airport',
      depAptPrefectureAdCode: 'dep_apt_prefecture_ad_code',
      depAptPrefectureName: 'dep_apt_prefecture_name',
      depCity: 'dep_city',
      depCityAdCode: 'dep_city_ad_code',
      depDate: 'dep_date',
      departId: 'depart_id',
      departName: 'depart_name',
      discount: 'discount',
      flightNo: 'flight_no',
      gmtCreate: 'gmt_create',
      gmtModified: 'gmt_modified',
      id: 'id',
      insureInfoList: 'insure_info_list',
      invoice: 'invoice',
      passengerCount: 'passenger_count',
      passengerName: 'passenger_name',
      priceInfoList: 'price_info_list',
      projectCode: 'project_code',
      projectId: 'project_id',
      projectTitle: 'project_title',
      retDate: 'ret_date',
      status: 'status',
      thirdPartProjectId: 'third_part_project_id',
      thirdpartApplyId: 'thirdpart_apply_id',
      thirdpartBusinessId: 'thirdpart_business_id',
      thirdpartItineraryId: 'thirdpart_itinerary_id',
      tripType: 'trip_type',
      userAffiliateList: 'user_affiliate_list',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'number',
      arrAirport: 'string',
      arrAptPrefectureAdCode: 'string',
      arrAptPrefectureName: 'string',
      arrCity: 'string',
      arrCityAdCode: 'string',
      btripTitle: 'string',
      cabinClass: 'string',
      contactName: 'string',
      corpId: 'string',
      corpName: 'string',
      costCenter: FlightOrderListQueryResponseBodyModuleCostCenter,
      depAirport: 'string',
      depAptPrefectureAdCode: 'string',
      depAptPrefectureName: 'string',
      depCity: 'string',
      depCityAdCode: 'string',
      depDate: 'string',
      departId: 'string',
      departName: 'string',
      discount: 'string',
      flightNo: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      insureInfoList: { 'type': 'array', 'itemType': FlightOrderListQueryResponseBodyModuleInsureInfoList },
      invoice: FlightOrderListQueryResponseBodyModuleInvoice,
      passengerCount: 'number',
      passengerName: 'string',
      priceInfoList: { 'type': 'array', 'itemType': FlightOrderListQueryResponseBodyModulePriceInfoList },
      projectCode: 'string',
      projectId: 'number',
      projectTitle: 'string',
      retDate: 'string',
      status: 'number',
      thirdPartProjectId: 'string',
      thirdpartApplyId: 'string',
      thirdpartBusinessId: 'string',
      thirdpartItineraryId: 'string',
      tripType: 'number',
      userAffiliateList: { 'type': 'array', 'itemType': FlightOrderListQueryResponseBodyModuleUserAffiliateList },
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(this.costCenter && typeof (this.costCenter as any).validate === 'function') {
      (this.costCenter as any).validate();
    }
    if(Array.isArray(this.insureInfoList)) {
      $dara.Model.validateArray(this.insureInfoList);
    }
    if(this.invoice && typeof (this.invoice as any).validate === 'function') {
      (this.invoice as any).validate();
    }
    if(Array.isArray(this.priceInfoList)) {
      $dara.Model.validateArray(this.priceInfoList);
    }
    if(Array.isArray(this.userAffiliateList)) {
      $dara.Model.validateArray(this.userAffiliateList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderListQueryResponseBodyPageInfo extends $dara.Model {
  page?: number;
  pageSize?: number;
  totalNumber?: number;
  static names(): { [key: string]: string } {
    return {
      page: 'page',
      pageSize: 'page_size',
      totalNumber: 'total_number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      pageSize: 'number',
      totalNumber: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderListQueryResponseBody extends $dara.Model {
  code?: string;
  message?: string;
  module?: FlightOrderListQueryResponseBodyModule[];
  pageInfo?: FlightOrderListQueryResponseBodyPageInfo;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      pageInfo: 'page_info',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: { 'type': 'array', 'itemType': FlightOrderListQueryResponseBodyModule },
      pageInfo: FlightOrderListQueryResponseBodyPageInfo,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.module)) {
      $dara.Model.validateArray(this.module);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

