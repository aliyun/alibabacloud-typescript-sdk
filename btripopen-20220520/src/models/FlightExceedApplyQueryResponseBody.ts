// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightExceedApplyQueryResponseBodyModuleApplyIntentionInfoDo extends $dara.Model {
  arrAirportName?: string;
  /**
   * @example
   * SHA
   */
  arrCity?: string;
  arrCityName?: string;
  /**
   * @example
   * 2022-01-12T16:47Z
   */
  arrTime?: string;
  /**
   * @example
   * F
   */
  cabin?: string;
  /**
   * @example
   * 1
   */
  cabinClass?: number;
  cabinClassStr?: string;
  depAirportName?: string;
  /**
   * @example
   * SHA
   */
  depCity?: string;
  depCityName?: string;
  /**
   * @example
   * 2022-01-12T16:47Z
   */
  depTime?: string;
  /**
   * @example
   * 4
   */
  discount?: string;
  /**
   * @example
   * MU2759
   */
  flightNo?: string;
  /**
   * @example
   * 300
   */
  price?: number;
  /**
   * @example
   * 1
   */
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
  /**
   * @example
   * 1231
   */
  applyId?: number;
  applyIntentionInfoDo?: FlightExceedApplyQueryResponseBodyModuleApplyIntentionInfoDo;
  applyIntentionInfoDoList?: FlightExceedApplyQueryResponseBodyModuleApplyIntentionInfoDoList[];
  applyRecommendFlights?: FlightExceedApplyQueryResponseBodyModuleApplyRecommendFlights;
  btripCause?: string;
  /**
   * @example
   * 123
   */
  corpId?: string;
  exceedReason?: string;
  /**
   * @example
   * 1
   */
  exceedType?: number;
  originStandard?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 2022-01-12T16:47Z
   */
  submitTime?: string;
  /**
   * @example
   * 0001A1100000007EX08O
   */
  thirdpartApplyId?: string;
  /**
   * @example
   * test_corp
   */
  thirdpartCorpId?: string;
  /**
   * @example
   * user1
   */
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
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  message?: string;
  module?: FlightExceedApplyQueryResponseBodyModule;
  /**
   * @example
   * B72B39C8-32DE-558D-AD1C-D53F11F6ADFE
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
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

