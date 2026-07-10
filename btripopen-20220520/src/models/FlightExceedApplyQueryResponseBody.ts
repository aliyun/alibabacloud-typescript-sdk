// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightExceedApplyQueryResponseBodyModuleApplyIntentionInfoDo extends $dara.Model {
  arrAirportName?: string;
  arrCity?: string;
  arrCityName?: string;
  arrTime?: string;
  cabin?: string;
  cabinClass?: number;
  cabinClassStr?: string;
  depAirportName?: string;
  depCity?: string;
  depCityName?: string;
  depTime?: string;
  discount?: string;
  flightNo?: string;
  price?: number;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      arrAirportName: 'arr_airport_name',
      arrCity: 'arr_city',
      arrCityName: 'arr_city_name',
      arrTime: 'arr_time',
      cabin: 'cabin',
      cabinClass: 'cabin_class',
      cabinClassStr: 'cabin_class_str',
      depAirportName: 'dep_airport_name',
      depCity: 'dep_city',
      depCityName: 'dep_city_name',
      depTime: 'dep_time',
      discount: 'discount',
      flightNo: 'flight_no',
      price: 'price',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrAirportName: 'string',
      arrCity: 'string',
      arrCityName: 'string',
      arrTime: 'string',
      cabin: 'string',
      cabinClass: 'number',
      cabinClassStr: 'string',
      depAirportName: 'string',
      depCity: 'string',
      depCityName: 'string',
      depTime: 'string',
      discount: 'string',
      flightNo: 'string',
      price: 'number',
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

export class FlightExceedApplyQueryResponseBodyModuleApplyIntentionInfoDoList extends $dara.Model {
  arrAirportName?: string;
  arrCity?: string;
  arrCityName?: string;
  arrTime?: string;
  cabin?: string;
  cabinClass?: number;
  cabinClassStr?: string;
  depAirportName?: string;
  depCity?: string;
  depCityName?: string;
  depTime?: string;
  discount?: string;
  flightNo?: string;
  price?: number;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      arrAirportName: 'arr_airport_name',
      arrCity: 'arr_city',
      arrCityName: 'arr_city_name',
      arrTime: 'arr_time',
      cabin: 'cabin',
      cabinClass: 'cabin_class',
      cabinClassStr: 'cabin_class_str',
      depAirportName: 'dep_airport_name',
      depCity: 'dep_city',
      depCityName: 'dep_city_name',
      depTime: 'dep_time',
      discount: 'discount',
      flightNo: 'flight_no',
      price: 'price',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrAirportName: 'string',
      arrCity: 'string',
      arrCityName: 'string',
      arrTime: 'string',
      cabin: 'string',
      cabinClass: 'number',
      cabinClassStr: 'string',
      depAirportName: 'string',
      depCity: 'string',
      depCityName: 'string',
      depTime: 'string',
      discount: 'string',
      flightNo: 'string',
      price: 'number',
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

export class FlightExceedApplyQueryResponseBodyModuleApplyRecommendFlights extends $dara.Model {
  arrAirportName?: string;
  arrCityName?: string;
  arrTime?: string;
  cabin?: string;
  cabinClass?: number;
  cabinClassStr?: string;
  depAirportName?: string;
  depCityName?: string;
  depTime?: string;
  discount?: string;
  flightNo?: string;
  price?: number;
  transferAirportName?: string;
  static names(): { [key: string]: string } {
    return {
      arrAirportName: 'arr_airport_name',
      arrCityName: 'arr_city_name',
      arrTime: 'arr_time',
      cabin: 'cabin',
      cabinClass: 'cabin_class',
      cabinClassStr: 'cabin_class_str',
      depAirportName: 'dep_airport_name',
      depCityName: 'dep_city_name',
      depTime: 'dep_time',
      discount: 'discount',
      flightNo: 'flight_no',
      price: 'price',
      transferAirportName: 'transfer_airport_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrAirportName: 'string',
      arrCityName: 'string',
      arrTime: 'string',
      cabin: 'string',
      cabinClass: 'number',
      cabinClassStr: 'string',
      depAirportName: 'string',
      depCityName: 'string',
      depTime: 'string',
      discount: 'string',
      flightNo: 'string',
      price: 'number',
      transferAirportName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightExceedApplyQueryResponseBodyModule extends $dara.Model {
  applyId?: number;
  applyIntentionInfoDo?: FlightExceedApplyQueryResponseBodyModuleApplyIntentionInfoDo;
  applyIntentionInfoDoList?: FlightExceedApplyQueryResponseBodyModuleApplyIntentionInfoDoList[];
  applyRecommendFlights?: FlightExceedApplyQueryResponseBodyModuleApplyRecommendFlights;
  btripCause?: string;
  corpId?: string;
  exceedReason?: string;
  exceedType?: number;
  originStandard?: string;
  status?: number;
  submitTime?: string;
  thirdpartApplyId?: string;
  thirdpartCorpId?: string;
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
      applyIntentionInfoDo: 'apply_intention_info_do',
      applyIntentionInfoDoList: 'apply_intention_info_do_list',
      applyRecommendFlights: 'apply_recommend_flights',
      btripCause: 'btrip_cause',
      corpId: 'corp_id',
      exceedReason: 'exceed_reason',
      exceedType: 'exceed_type',
      originStandard: 'origin_standard',
      status: 'status',
      submitTime: 'submit_time',
      thirdpartApplyId: 'thirdpart_apply_id',
      thirdpartCorpId: 'thirdpart_corp_id',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'number',
      applyIntentionInfoDo: FlightExceedApplyQueryResponseBodyModuleApplyIntentionInfoDo,
      applyIntentionInfoDoList: { 'type': 'array', 'itemType': FlightExceedApplyQueryResponseBodyModuleApplyIntentionInfoDoList },
      applyRecommendFlights: FlightExceedApplyQueryResponseBodyModuleApplyRecommendFlights,
      btripCause: 'string',
      corpId: 'string',
      exceedReason: 'string',
      exceedType: 'number',
      originStandard: 'string',
      status: 'number',
      submitTime: 'string',
      thirdpartApplyId: 'string',
      thirdpartCorpId: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(this.applyIntentionInfoDo && typeof (this.applyIntentionInfoDo as any).validate === 'function') {
      (this.applyIntentionInfoDo as any).validate();
    }
    if(Array.isArray(this.applyIntentionInfoDoList)) {
      $dara.Model.validateArray(this.applyIntentionInfoDoList);
    }
    if(this.applyRecommendFlights && typeof (this.applyRecommendFlights as any).validate === 'function') {
      (this.applyRecommendFlights as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightExceedApplyQueryResponseBody extends $dara.Model {
  code?: string;
  message?: string;
  module?: FlightExceedApplyQueryResponseBodyModule;
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
      module: FlightExceedApplyQueryResponseBodyModule,
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

