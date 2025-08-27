// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightReShopDetailResponseBodyModuleBaggageRule extends $dara.Model {
  baggageRuleDesc?: string;
  static names(): { [key: string]: string } {
    return {
      baggageRuleDesc: 'baggage_rule_desc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baggageRuleDesc: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightReShopDetailResponseBodyModuleJourneyListFlightSegmentInfosAirlineInfo extends $dara.Model {
  /**
   * @example
   * NS
   */
  airlineCode?: string;
  airlineName?: string;
  shortName?: string;
  static names(): { [key: string]: string } {
    return {
      airlineCode: 'airline_code',
      airlineName: 'airline_name',
      shortName: 'short_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineCode: 'string',
      airlineName: 'string',
      shortName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightReShopDetailResponseBodyModuleJourneyListFlightSegmentInfosArrAirportInfo extends $dara.Model {
  /**
   * @example
   * DLC
   */
  airportCode?: string;
  airportName?: string;
  airportShortName?: string;
  /**
   * @example
   * T1
   */
  terminal?: string;
  static names(): { [key: string]: string } {
    return {
      airportCode: 'airport_code',
      airportName: 'airport_name',
      airportShortName: 'airport_short_name',
      terminal: 'terminal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airportCode: 'string',
      airportName: 'string',
      airportShortName: 'string',
      terminal: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightReShopDetailResponseBodyModuleJourneyListFlightSegmentInfosDepAirportInfo extends $dara.Model {
  /**
   * @example
   * PEK
   */
  airportCode?: string;
  airportName?: string;
  airportShortName?: string;
  /**
   * @example
   * T1
   */
  terminal?: string;
  static names(): { [key: string]: string } {
    return {
      airportCode: 'airport_code',
      airportName: 'airport_name',
      airportShortName: 'airport_short_name',
      terminal: 'terminal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airportCode: 'string',
      airportName: 'string',
      airportShortName: 'string',
      terminal: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightReShopDetailResponseBodyModuleJourneyListFlightSegmentInfosFlightShareInfoOperatingAirlineInfo extends $dara.Model {
  /**
   * @example
   * CA
   */
  airlineCode?: string;
  airlineName?: string;
  shortName?: string;
  static names(): { [key: string]: string } {
    return {
      airlineCode: 'airline_code',
      airlineName: 'airline_name',
      shortName: 'short_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineCode: 'string',
      airlineName: 'string',
      shortName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightReShopDetailResponseBodyModuleJourneyListFlightSegmentInfosFlightShareInfo extends $dara.Model {
  operatingAirlineInfo?: IntlFlightReShopDetailResponseBodyModuleJourneyListFlightSegmentInfosFlightShareInfoOperatingAirlineInfo;
  /**
   * @example
   * CA1234
   */
  operatingFlightNo?: string;
  static names(): { [key: string]: string } {
    return {
      operatingAirlineInfo: 'operating_airline_info',
      operatingFlightNo: 'operating_flight_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operatingAirlineInfo: IntlFlightReShopDetailResponseBodyModuleJourneyListFlightSegmentInfosFlightShareInfoOperatingAirlineInfo,
      operatingFlightNo: 'string',
    };
  }

  validate() {
    if(this.operatingAirlineInfo && typeof (this.operatingAirlineInfo as any).validate === 'function') {
      (this.operatingAirlineInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightReShopDetailResponseBodyModuleJourneyListFlightSegmentInfosFlightStopInfoList extends $dara.Model {
  /**
   * @example
   * PEK
   */
  stopAirport?: string;
  stopAirportName?: string;
  /**
   * @example
   * T3
   */
  stopArrTerm?: string;
  /**
   * @example
   * 2024-01-01 05:00
   */
  stopArrTime?: string;
  /**
   * @example
   * BJS
   */
  stopCityCode?: string;
  stopCityName?: string;
  /**
   * @example
   * T2
   */
  stopDepTerm?: string;
  /**
   * @example
   * 2024-01-01 07:00
   */
  stopDepTime?: string;
  /**
   * @example
   * 120
   */
  stopTime?: string;
  static names(): { [key: string]: string } {
    return {
      stopAirport: 'stop_airport',
      stopAirportName: 'stop_airport_name',
      stopArrTerm: 'stop_arr_term',
      stopArrTime: 'stop_arr_time',
      stopCityCode: 'stop_city_code',
      stopCityName: 'stop_city_name',
      stopDepTerm: 'stop_dep_term',
      stopDepTime: 'stop_dep_time',
      stopTime: 'stop_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stopAirport: 'string',
      stopAirportName: 'string',
      stopArrTerm: 'string',
      stopArrTime: 'string',
      stopCityCode: 'string',
      stopCityName: 'string',
      stopDepTerm: 'string',
      stopDepTime: 'string',
      stopTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightReShopDetailResponseBodyModuleJourneyListFlightSegmentInfosLuggageDirectInfo extends $dara.Model {
  /**
   * @example
   * 1
   */
  depCityLuggageDirect?: number;
  /**
   * @example
   * 1
   */
  stopCityLuggageDirect?: number;
  static names(): { [key: string]: string } {
    return {
      depCityLuggageDirect: 'dep_city_luggage_direct',
      stopCityLuggageDirect: 'stop_city_luggage_direct',
    };
  }

  static types(): { [key: string]: any } {
    return {
      depCityLuggageDirect: 'number',
      stopCityLuggageDirect: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightReShopDetailResponseBodyModuleJourneyListFlightSegmentInfosSegmentVisaRemark extends $dara.Model {
  depCityVisaRemark?: string;
  /**
   * @example
   * 1
   */
  depCityVisaType?: number;
  stopCityVisaRemarks?: string[];
  stopCityVisaTypes?: number[];
  static names(): { [key: string]: string } {
    return {
      depCityVisaRemark: 'dep_city_visa_remark',
      depCityVisaType: 'dep_city_visa_type',
      stopCityVisaRemarks: 'stop_city_visa_remarks',
      stopCityVisaTypes: 'stop_city_visa_types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      depCityVisaRemark: 'string',
      depCityVisaType: 'number',
      stopCityVisaRemarks: { 'type': 'array', 'itemType': 'string' },
      stopCityVisaTypes: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.stopCityVisaRemarks)) {
      $dara.Model.validateArray(this.stopCityVisaRemarks);
    }
    if(Array.isArray(this.stopCityVisaTypes)) {
      $dara.Model.validateArray(this.stopCityVisaTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightReShopDetailResponseBodyModuleJourneyListFlightSegmentInfos extends $dara.Model {
  airlineInfo?: IntlFlightReShopDetailResponseBodyModuleJourneyListFlightSegmentInfosAirlineInfo;
  arrAirportInfo?: IntlFlightReShopDetailResponseBodyModuleJourneyListFlightSegmentInfosArrAirportInfo;
  /**
   * @example
   * HKG
   */
  arrCityCode?: string;
  arrCityName?: string;
  /**
   * @example
   * 2025-01-01 02:00
   */
  arrTime?: string;
  depAirportInfo?: IntlFlightReShopDetailResponseBodyModuleJourneyListFlightSegmentInfosDepAirportInfo;
  /**
   * @example
   * BJS
   */
  depCityCode?: string;
  depCityName?: string;
  /**
   * @example
   * 2025-01-01 01:00
   */
  depTime?: string;
  /**
   * @example
   * 130
   */
  duration?: number;
  /**
   * @example
   * NS8210
   */
  flightNo?: string;
  flightShareInfo?: IntlFlightReShopDetailResponseBodyModuleJourneyListFlightSegmentInfosFlightShareInfo;
  flightSize?: string;
  flightStopInfoList?: IntlFlightReShopDetailResponseBodyModuleJourneyListFlightSegmentInfosFlightStopInfoList[];
  /**
   * @example
   * 737
   */
  flightType?: string;
  /**
   * @example
   * 0
   */
  journeyIndex?: number;
  luggageDirectInfo?: IntlFlightReShopDetailResponseBodyModuleJourneyListFlightSegmentInfosLuggageDirectInfo;
  manufacturer?: string;
  mealDesc?: string;
  /**
   * @example
   * 0
   */
  oneMore?: number;
  /**
   * @example
   * -
   */
  oneMoreShow?: string;
  /**
   * @example
   * 0
   */
  segmentIndex?: number;
  /**
   * @example
   * NS8210XIYHGH0501
   */
  segmentKey?: string;
  segmentVisaRemark?: IntlFlightReShopDetailResponseBodyModuleJourneyListFlightSegmentInfosSegmentVisaRemark;
  /**
   * @example
   * true
   */
  share?: boolean;
  shortFlightSize?: string;
  /**
   * @example
   * true
   */
  stop?: boolean;
  totalTime?: string;
  static names(): { [key: string]: string } {
    return {
      airlineInfo: 'airline_info',
      arrAirportInfo: 'arr_airport_info',
      arrCityCode: 'arr_city_code',
      arrCityName: 'arr_city_name',
      arrTime: 'arr_time',
      depAirportInfo: 'dep_airport_info',
      depCityCode: 'dep_city_code',
      depCityName: 'dep_city_name',
      depTime: 'dep_time',
      duration: 'duration',
      flightNo: 'flight_no',
      flightShareInfo: 'flight_share_info',
      flightSize: 'flight_size',
      flightStopInfoList: 'flight_stop_info_list',
      flightType: 'flight_type',
      journeyIndex: 'journey_index',
      luggageDirectInfo: 'luggage_direct_info',
      manufacturer: 'manufacturer',
      mealDesc: 'meal_desc',
      oneMore: 'one_more',
      oneMoreShow: 'one_more_show',
      segmentIndex: 'segment_index',
      segmentKey: 'segment_key',
      segmentVisaRemark: 'segment_visa_remark',
      share: 'share',
      shortFlightSize: 'short_flight_size',
      stop: 'stop',
      totalTime: 'total_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineInfo: IntlFlightReShopDetailResponseBodyModuleJourneyListFlightSegmentInfosAirlineInfo,
      arrAirportInfo: IntlFlightReShopDetailResponseBodyModuleJourneyListFlightSegmentInfosArrAirportInfo,
      arrCityCode: 'string',
      arrCityName: 'string',
      arrTime: 'string',
      depAirportInfo: IntlFlightReShopDetailResponseBodyModuleJourneyListFlightSegmentInfosDepAirportInfo,
      depCityCode: 'string',
      depCityName: 'string',
      depTime: 'string',
      duration: 'number',
      flightNo: 'string',
      flightShareInfo: IntlFlightReShopDetailResponseBodyModuleJourneyListFlightSegmentInfosFlightShareInfo,
      flightSize: 'string',
      flightStopInfoList: { 'type': 'array', 'itemType': IntlFlightReShopDetailResponseBodyModuleJourneyListFlightSegmentInfosFlightStopInfoList },
      flightType: 'string',
      journeyIndex: 'number',
      luggageDirectInfo: IntlFlightReShopDetailResponseBodyModuleJourneyListFlightSegmentInfosLuggageDirectInfo,
      manufacturer: 'string',
      mealDesc: 'string',
      oneMore: 'number',
      oneMoreShow: 'string',
      segmentIndex: 'number',
      segmentKey: 'string',
      segmentVisaRemark: IntlFlightReShopDetailResponseBodyModuleJourneyListFlightSegmentInfosSegmentVisaRemark,
      share: 'boolean',
      shortFlightSize: 'string',
      stop: 'boolean',
      totalTime: 'string',
    };
  }

  validate() {
    if(this.airlineInfo && typeof (this.airlineInfo as any).validate === 'function') {
      (this.airlineInfo as any).validate();
    }
    if(this.arrAirportInfo && typeof (this.arrAirportInfo as any).validate === 'function') {
      (this.arrAirportInfo as any).validate();
    }
    if(this.depAirportInfo && typeof (this.depAirportInfo as any).validate === 'function') {
      (this.depAirportInfo as any).validate();
    }
    if(this.flightShareInfo && typeof (this.flightShareInfo as any).validate === 'function') {
      (this.flightShareInfo as any).validate();
    }
    if(Array.isArray(this.flightStopInfoList)) {
      $dara.Model.validateArray(this.flightStopInfoList);
    }
    if(this.luggageDirectInfo && typeof (this.luggageDirectInfo as any).validate === 'function') {
      (this.luggageDirectInfo as any).validate();
    }
    if(this.segmentVisaRemark && typeof (this.segmentVisaRemark as any).validate === 'function') {
      (this.segmentVisaRemark as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightReShopDetailResponseBodyModuleJourneyList extends $dara.Model {
  /**
   * @example
   * HKG
   */
  arrCityCode?: string;
  arrCityName?: string;
  /**
   * @example
   * 2025-01-01 02:00
   */
  arrTime?: string;
  /**
   * @example
   * BJS
   */
  depCityCode?: string;
  depCityName?: string;
  /**
   * @example
   * 2025-01-01 01:00
   */
  depTime?: string;
  /**
   * @example
   * 60
   */
  duration?: number;
  flightSegmentInfos?: IntlFlightReShopDetailResponseBodyModuleJourneyListFlightSegmentInfos[];
  /**
   * @example
   * 0
   */
  journeyIndex?: number;
  /**
   * @example
   * 0
   */
  transferTime?: number;
  static names(): { [key: string]: string } {
    return {
      arrCityCode: 'arr_city_code',
      arrCityName: 'arr_city_name',
      arrTime: 'arr_time',
      depCityCode: 'dep_city_code',
      depCityName: 'dep_city_name',
      depTime: 'dep_time',
      duration: 'duration',
      flightSegmentInfos: 'flight_segment_infos',
      journeyIndex: 'journey_index',
      transferTime: 'transfer_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrCityCode: 'string',
      arrCityName: 'string',
      arrTime: 'string',
      depCityCode: 'string',
      depCityName: 'string',
      depTime: 'string',
      duration: 'number',
      flightSegmentInfos: { 'type': 'array', 'itemType': IntlFlightReShopDetailResponseBodyModuleJourneyListFlightSegmentInfos },
      journeyIndex: 'number',
      transferTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.flightSegmentInfos)) {
      $dara.Model.validateArray(this.flightSegmentInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightReShopDetailResponseBodyModuleOriginJourneyListFlightSegmentInfosAirlineInfo extends $dara.Model {
  /**
   * @example
   * CA
   */
  airlineCode?: string;
  airlineName?: string;
  shortName?: string;
  static names(): { [key: string]: string } {
    return {
      airlineCode: 'airline_code',
      airlineName: 'airline_name',
      shortName: 'short_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineCode: 'string',
      airlineName: 'string',
      shortName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightReShopDetailResponseBodyModuleOriginJourneyListFlightSegmentInfosArrAirportInfo extends $dara.Model {
  /**
   * @example
   * HKG
   */
  airportCode?: string;
  airportName?: string;
  airportShortName?: string;
  /**
   * @example
   * T3
   */
  terminal?: string;
  static names(): { [key: string]: string } {
    return {
      airportCode: 'airport_code',
      airportName: 'airport_name',
      airportShortName: 'airport_short_name',
      terminal: 'terminal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airportCode: 'string',
      airportName: 'string',
      airportShortName: 'string',
      terminal: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightReShopDetailResponseBodyModuleOriginJourneyListFlightSegmentInfosDepAirportInfo extends $dara.Model {
  /**
   * @example
   * PEK
   */
  airportCode?: string;
  airportName?: string;
  airportShortName?: string;
  /**
   * @example
   * T1
   */
  terminal?: string;
  static names(): { [key: string]: string } {
    return {
      airportCode: 'airport_code',
      airportName: 'airport_name',
      airportShortName: 'airport_short_name',
      terminal: 'terminal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airportCode: 'string',
      airportName: 'string',
      airportShortName: 'string',
      terminal: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightReShopDetailResponseBodyModuleOriginJourneyListFlightSegmentInfosFlightShareInfoOperatingAirlineInfo extends $dara.Model {
  /**
   * @example
   * MU
   */
  airlineCode?: string;
  airlineName?: string;
  shortName?: string;
  static names(): { [key: string]: string } {
    return {
      airlineCode: 'airline_code',
      airlineName: 'airline_name',
      shortName: 'short_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineCode: 'string',
      airlineName: 'string',
      shortName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightReShopDetailResponseBodyModuleOriginJourneyListFlightSegmentInfosFlightShareInfo extends $dara.Model {
  operatingAirlineInfo?: IntlFlightReShopDetailResponseBodyModuleOriginJourneyListFlightSegmentInfosFlightShareInfoOperatingAirlineInfo;
  /**
   * @example
   * CA0001
   */
  operatingFlightNo?: string;
  static names(): { [key: string]: string } {
    return {
      operatingAirlineInfo: 'operating_airline_info',
      operatingFlightNo: 'operating_flight_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operatingAirlineInfo: IntlFlightReShopDetailResponseBodyModuleOriginJourneyListFlightSegmentInfosFlightShareInfoOperatingAirlineInfo,
      operatingFlightNo: 'string',
    };
  }

  validate() {
    if(this.operatingAirlineInfo && typeof (this.operatingAirlineInfo as any).validate === 'function') {
      (this.operatingAirlineInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightReShopDetailResponseBodyModuleOriginJourneyListFlightSegmentInfosFlightStopInfoList extends $dara.Model {
  /**
   * @example
   * HGH
   */
  stopAirport?: string;
  stopAirportName?: string;
  /**
   * @example
   * T1
   */
  stopArrTerm?: string;
  /**
   * @example
   * 2023-08-13 07:25
   */
  stopArrTime?: string;
  /**
   * @example
   * HGH
   */
  stopCityCode?: string;
  stopCityName?: string;
  /**
   * @example
   * T1
   */
  stopDepTerm?: string;
  /**
   * @example
   * 2023-08-13 09:25
   */
  stopDepTime?: string;
  /**
   * @example
   * 20
   */
  stopTime?: string;
  static names(): { [key: string]: string } {
    return {
      stopAirport: 'stop_airport',
      stopAirportName: 'stop_airport_name',
      stopArrTerm: 'stop_arr_term',
      stopArrTime: 'stop_arr_time',
      stopCityCode: 'stop_city_code',
      stopCityName: 'stop_city_name',
      stopDepTerm: 'stop_dep_term',
      stopDepTime: 'stop_dep_time',
      stopTime: 'stop_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stopAirport: 'string',
      stopAirportName: 'string',
      stopArrTerm: 'string',
      stopArrTime: 'string',
      stopCityCode: 'string',
      stopCityName: 'string',
      stopDepTerm: 'string',
      stopDepTime: 'string',
      stopTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightReShopDetailResponseBodyModuleOriginJourneyListFlightSegmentInfosLuggageDirectInfo extends $dara.Model {
  /**
   * @example
   * 1
   */
  depCityLuggageDirect?: number;
  /**
   * @example
   * 1
   */
  stopCityLuggageDirect?: number;
  static names(): { [key: string]: string } {
    return {
      depCityLuggageDirect: 'dep_city_luggage_direct',
      stopCityLuggageDirect: 'stop_city_luggage_direct',
    };
  }

  static types(): { [key: string]: any } {
    return {
      depCityLuggageDirect: 'number',
      stopCityLuggageDirect: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightReShopDetailResponseBodyModuleOriginJourneyListFlightSegmentInfosSegmentVisaRemark extends $dara.Model {
  depCityVisaRemark?: string;
  /**
   * @example
   * 1
   */
  depCityVisaType?: number;
  stopCityVisaRemarks?: string[];
  stopCityVisaTypes?: number[];
  static names(): { [key: string]: string } {
    return {
      depCityVisaRemark: 'dep_city_visa_remark',
      depCityVisaType: 'dep_city_visa_type',
      stopCityVisaRemarks: 'stop_city_visa_remarks',
      stopCityVisaTypes: 'stop_city_visa_types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      depCityVisaRemark: 'string',
      depCityVisaType: 'number',
      stopCityVisaRemarks: { 'type': 'array', 'itemType': 'string' },
      stopCityVisaTypes: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.stopCityVisaRemarks)) {
      $dara.Model.validateArray(this.stopCityVisaRemarks);
    }
    if(Array.isArray(this.stopCityVisaTypes)) {
      $dara.Model.validateArray(this.stopCityVisaTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightReShopDetailResponseBodyModuleOriginJourneyListFlightSegmentInfos extends $dara.Model {
  airlineInfo?: IntlFlightReShopDetailResponseBodyModuleOriginJourneyListFlightSegmentInfosAirlineInfo;
  arrAirportInfo?: IntlFlightReShopDetailResponseBodyModuleOriginJourneyListFlightSegmentInfosArrAirportInfo;
  /**
   * @example
   * HKG
   */
  arrCityCode?: string;
  arrCityName?: string;
  /**
   * @example
   * 2023-08-13 09:25
   */
  arrTime?: string;
  depAirportInfo?: IntlFlightReShopDetailResponseBodyModuleOriginJourneyListFlightSegmentInfosDepAirportInfo;
  /**
   * @example
   * BJS
   */
  depCityCode?: string;
  depCityName?: string;
  /**
   * @example
   * 2023-08-13 07:25
   */
  depTime?: string;
  /**
   * @example
   * 120
   */
  duration?: number;
  /**
   * @example
   * NS8210
   */
  flightNo?: string;
  flightShareInfo?: IntlFlightReShopDetailResponseBodyModuleOriginJourneyListFlightSegmentInfosFlightShareInfo;
  flightSize?: string;
  flightStopInfoList?: IntlFlightReShopDetailResponseBodyModuleOriginJourneyListFlightSegmentInfosFlightStopInfoList[];
  /**
   * @example
   * 738
   */
  flightType?: string;
  /**
   * @example
   * 0
   */
  journeyIndex?: number;
  luggageDirectInfo?: IntlFlightReShopDetailResponseBodyModuleOriginJourneyListFlightSegmentInfosLuggageDirectInfo;
  manufacturer?: string;
  mealDesc?: string;
  /**
   * @example
   * 1
   */
  oneMore?: number;
  oneMoreShow?: string;
  /**
   * @example
   * 0
   */
  segmentIndex?: number;
  /**
   * @example
   * NS8210XIYHGH0501
   */
  segmentKey?: string;
  segmentVisaRemark?: IntlFlightReShopDetailResponseBodyModuleOriginJourneyListFlightSegmentInfosSegmentVisaRemark;
  /**
   * @example
   * true
   */
  share?: boolean;
  shortFlightSize?: string;
  /**
   * @example
   * true
   */
  stop?: boolean;
  totalTime?: string;
  static names(): { [key: string]: string } {
    return {
      airlineInfo: 'airline_info',
      arrAirportInfo: 'arr_airport_info',
      arrCityCode: 'arr_city_code',
      arrCityName: 'arr_city_name',
      arrTime: 'arr_time',
      depAirportInfo: 'dep_airport_info',
      depCityCode: 'dep_city_code',
      depCityName: 'dep_city_name',
      depTime: 'dep_time',
      duration: 'duration',
      flightNo: 'flight_no',
      flightShareInfo: 'flight_share_info',
      flightSize: 'flight_size',
      flightStopInfoList: 'flight_stop_info_list',
      flightType: 'flight_type',
      journeyIndex: 'journey_index',
      luggageDirectInfo: 'luggage_direct_info',
      manufacturer: 'manufacturer',
      mealDesc: 'meal_desc',
      oneMore: 'one_more',
      oneMoreShow: 'one_more_show',
      segmentIndex: 'segment_index',
      segmentKey: 'segment_key',
      segmentVisaRemark: 'segment_visa_remark',
      share: 'share',
      shortFlightSize: 'short_flight_size',
      stop: 'stop',
      totalTime: 'total_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineInfo: IntlFlightReShopDetailResponseBodyModuleOriginJourneyListFlightSegmentInfosAirlineInfo,
      arrAirportInfo: IntlFlightReShopDetailResponseBodyModuleOriginJourneyListFlightSegmentInfosArrAirportInfo,
      arrCityCode: 'string',
      arrCityName: 'string',
      arrTime: 'string',
      depAirportInfo: IntlFlightReShopDetailResponseBodyModuleOriginJourneyListFlightSegmentInfosDepAirportInfo,
      depCityCode: 'string',
      depCityName: 'string',
      depTime: 'string',
      duration: 'number',
      flightNo: 'string',
      flightShareInfo: IntlFlightReShopDetailResponseBodyModuleOriginJourneyListFlightSegmentInfosFlightShareInfo,
      flightSize: 'string',
      flightStopInfoList: { 'type': 'array', 'itemType': IntlFlightReShopDetailResponseBodyModuleOriginJourneyListFlightSegmentInfosFlightStopInfoList },
      flightType: 'string',
      journeyIndex: 'number',
      luggageDirectInfo: IntlFlightReShopDetailResponseBodyModuleOriginJourneyListFlightSegmentInfosLuggageDirectInfo,
      manufacturer: 'string',
      mealDesc: 'string',
      oneMore: 'number',
      oneMoreShow: 'string',
      segmentIndex: 'number',
      segmentKey: 'string',
      segmentVisaRemark: IntlFlightReShopDetailResponseBodyModuleOriginJourneyListFlightSegmentInfosSegmentVisaRemark,
      share: 'boolean',
      shortFlightSize: 'string',
      stop: 'boolean',
      totalTime: 'string',
    };
  }

  validate() {
    if(this.airlineInfo && typeof (this.airlineInfo as any).validate === 'function') {
      (this.airlineInfo as any).validate();
    }
    if(this.arrAirportInfo && typeof (this.arrAirportInfo as any).validate === 'function') {
      (this.arrAirportInfo as any).validate();
    }
    if(this.depAirportInfo && typeof (this.depAirportInfo as any).validate === 'function') {
      (this.depAirportInfo as any).validate();
    }
    if(this.flightShareInfo && typeof (this.flightShareInfo as any).validate === 'function') {
      (this.flightShareInfo as any).validate();
    }
    if(Array.isArray(this.flightStopInfoList)) {
      $dara.Model.validateArray(this.flightStopInfoList);
    }
    if(this.luggageDirectInfo && typeof (this.luggageDirectInfo as any).validate === 'function') {
      (this.luggageDirectInfo as any).validate();
    }
    if(this.segmentVisaRemark && typeof (this.segmentVisaRemark as any).validate === 'function') {
      (this.segmentVisaRemark as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightReShopDetailResponseBodyModuleOriginJourneyList extends $dara.Model {
  /**
   * @example
   * HKG
   */
  arrCityCode?: string;
  arrCityName?: string;
  /**
   * @example
   * 2025-01-01 02:00
   */
  arrTime?: string;
  /**
   * @example
   * BJS
   */
  depCityCode?: string;
  depCityName?: string;
  /**
   * @example
   * 2025-01-01 01:00
   */
  depTime?: string;
  /**
   * @example
   * 60
   */
  duration?: number;
  flightSegmentInfos?: IntlFlightReShopDetailResponseBodyModuleOriginJourneyListFlightSegmentInfos[];
  /**
   * @example
   * 0
   */
  journeyIndex?: number;
  /**
   * @example
   * 0
   */
  transferTime?: number;
  static names(): { [key: string]: string } {
    return {
      arrCityCode: 'arr_city_code',
      arrCityName: 'arr_city_name',
      arrTime: 'arr_time',
      depCityCode: 'dep_city_code',
      depCityName: 'dep_city_name',
      depTime: 'dep_time',
      duration: 'duration',
      flightSegmentInfos: 'flight_segment_infos',
      journeyIndex: 'journey_index',
      transferTime: 'transfer_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrCityCode: 'string',
      arrCityName: 'string',
      arrTime: 'string',
      depCityCode: 'string',
      depCityName: 'string',
      depTime: 'string',
      duration: 'number',
      flightSegmentInfos: { 'type': 'array', 'itemType': IntlFlightReShopDetailResponseBodyModuleOriginJourneyListFlightSegmentInfos },
      journeyIndex: 'number',
      transferTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.flightSegmentInfos)) {
      $dara.Model.validateArray(this.flightSegmentInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightReShopDetailResponseBodyModulePassengerList extends $dara.Model {
  /**
   * @example
   * ZHANG/SAN
   */
  fullName?: string;
  /**
   * @example
   * 0
   */
  gender?: number;
  /**
   * @example
   * 76230022
   */
  jobNo?: string;
  nationality?: string;
  /**
   * @example
   * CN
   */
  nationalityCode?: string;
  /**
   * @example
   * 8432002
   */
  passengerId?: number;
  /**
   * @example
   * 0
   */
  type?: number;
  /**
   * @example
   * btrip8432002
   */
  userId?: string;
  /**
   * @example
   * 0
   */
  userType?: number;
  static names(): { [key: string]: string } {
    return {
      fullName: 'full_name',
      gender: 'gender',
      jobNo: 'job_no',
      nationality: 'nationality',
      nationalityCode: 'nationality_code',
      passengerId: 'passenger_id',
      type: 'type',
      userId: 'user_id',
      userType: 'user_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fullName: 'string',
      gender: 'number',
      jobNo: 'string',
      nationality: 'string',
      nationalityCode: 'string',
      passengerId: 'number',
      type: 'number',
      userId: 'string',
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

export class IntlFlightReShopDetailResponseBodyModulePassengerPriceInfoListPriceInfo extends $dara.Model {
  /**
   * @example
   * 4000
   */
  handlingAmount?: number;
  /**
   * @example
   * 0
   */
  taxDiffAmount?: number;
  /**
   * @example
   * 125000
   */
  totalAmount?: number;
  /**
   * @example
   * 2000
   */
  upgradeAmount?: number;
  static names(): { [key: string]: string } {
    return {
      handlingAmount: 'handling_amount',
      taxDiffAmount: 'tax_diff_amount',
      totalAmount: 'total_amount',
      upgradeAmount: 'upgrade_amount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handlingAmount: 'number',
      taxDiffAmount: 'number',
      totalAmount: 'number',
      upgradeAmount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightReShopDetailResponseBodyModulePassengerPriceInfoList extends $dara.Model {
  /**
   * @example
   * 100001
   */
  passengerId?: number;
  priceInfo?: IntlFlightReShopDetailResponseBodyModulePassengerPriceInfoListPriceInfo;
  static names(): { [key: string]: string } {
    return {
      passengerId: 'passenger_id',
      priceInfo: 'price_info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passengerId: 'number',
      priceInfo: IntlFlightReShopDetailResponseBodyModulePassengerPriceInfoListPriceInfo,
    };
  }

  validate() {
    if(this.priceInfo && typeof (this.priceInfo as any).validate === 'function') {
      (this.priceInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightReShopDetailResponseBodyModulePassengerTicketListTicketListTicketSegmentList extends $dara.Model {
  /**
   * @example
   * G
   */
  cabin?: string;
  /**
   * @example
   * Y
   */
  cabinClass?: string;
  /**
   * @example
   * false
   */
  modified?: boolean;
  /**
   * @example
   * OPEN_FOR_USE
   */
  openTicketStatus?: string;
  /**
   * @example
   * false
   */
  refunded?: boolean;
  /**
   * @example
   * HX236HKGPVG0509
   */
  segmentKey?: string;
  static names(): { [key: string]: string } {
    return {
      cabin: 'cabin',
      cabinClass: 'cabin_class',
      modified: 'modified',
      openTicketStatus: 'open_ticket_status',
      refunded: 'refunded',
      segmentKey: 'segment_key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cabin: 'string',
      cabinClass: 'string',
      modified: 'boolean',
      openTicketStatus: 'string',
      refunded: 'boolean',
      segmentKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightReShopDetailResponseBodyModulePassengerTicketListTicketList extends $dara.Model {
  /**
   * @example
   * 2025-01-01 00:00:09
   */
  issueTime?: string;
  /**
   * @example
   * P123456
   */
  pnrNo?: string;
  segmentKeyList?: string[];
  /**
   * @example
   * 781-9574833593
   */
  ticketNo?: string;
  ticketSegmentList?: IntlFlightReShopDetailResponseBodyModulePassengerTicketListTicketListTicketSegmentList[];
  static names(): { [key: string]: string } {
    return {
      issueTime: 'issue_time',
      pnrNo: 'pnr_no',
      segmentKeyList: 'segment_key_list',
      ticketNo: 'ticket_no',
      ticketSegmentList: 'ticket_segment_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      issueTime: 'string',
      pnrNo: 'string',
      segmentKeyList: { 'type': 'array', 'itemType': 'string' },
      ticketNo: 'string',
      ticketSegmentList: { 'type': 'array', 'itemType': IntlFlightReShopDetailResponseBodyModulePassengerTicketListTicketListTicketSegmentList },
    };
  }

  validate() {
    if(Array.isArray(this.segmentKeyList)) {
      $dara.Model.validateArray(this.segmentKeyList);
    }
    if(Array.isArray(this.ticketSegmentList)) {
      $dara.Model.validateArray(this.ticketSegmentList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightReShopDetailResponseBodyModulePassengerTicketList extends $dara.Model {
  /**
   * @example
   * 2345678
   */
  passengerId?: number;
  ticketList?: IntlFlightReShopDetailResponseBodyModulePassengerTicketListTicketList[];
  static names(): { [key: string]: string } {
    return {
      passengerId: 'passenger_id',
      ticketList: 'ticket_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passengerId: 'number',
      ticketList: { 'type': 'array', 'itemType': IntlFlightReShopDetailResponseBodyModulePassengerTicketListTicketList },
    };
  }

  validate() {
    if(Array.isArray(this.ticketList)) {
      $dara.Model.validateArray(this.ticketList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightReShopDetailResponseBodyModulePriceInfo extends $dara.Model {
  /**
   * @example
   * 4000
   */
  handlingAmount?: number;
  /**
   * @example
   * 0
   */
  taxDiffAmount?: number;
  /**
   * @example
   * 125000
   */
  totalAmount?: number;
  /**
   * @example
   * 2000
   */
  upgradeAmount?: number;
  static names(): { [key: string]: string } {
    return {
      handlingAmount: 'handling_amount',
      taxDiffAmount: 'tax_diff_amount',
      totalAmount: 'total_amount',
      upgradeAmount: 'upgrade_amount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handlingAmount: 'number',
      taxDiffAmount: 'number',
      totalAmount: 'number',
      upgradeAmount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightReShopDetailResponseBodyModuleRefundChangeRule extends $dara.Model {
  refundChangeRuleDesc?: string;
  static names(): { [key: string]: string } {
    return {
      refundChangeRuleDesc: 'refund_change_rule_desc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      refundChangeRuleDesc: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightReShopDetailResponseBodyModule extends $dara.Model {
  baggageRule?: IntlFlightReShopDetailResponseBodyModuleBaggageRule;
  closeReason?: string;
  /**
   * @example
   * 2024-03-06 15:00:35
   */
  closeTime?: string;
  /**
   * @example
   * 1
   */
  closeType?: number;
  journeyList?: IntlFlightReShopDetailResponseBodyModuleJourneyList[];
  /**
   * @example
   * 1017124195788186048
   */
  orderId?: number;
  originJourneyList?: IntlFlightReShopDetailResponseBodyModuleOriginJourneyList[];
  /**
   * @example
   * F11552194294228713472
   */
  outOrderId?: string;
  /**
   * @example
   * JPM20241024354
   */
  outReShopApplyId?: string;
  passengerList?: IntlFlightReShopDetailResponseBodyModulePassengerList[];
  passengerPriceInfoList?: IntlFlightReShopDetailResponseBodyModulePassengerPriceInfoList[];
  passengerTicketList?: IntlFlightReShopDetailResponseBodyModulePassengerTicketList[];
  /**
   * @example
   * 2024-03-06 15:35:00
   */
  payLatestTime?: string;
  /**
   * @example
   * 0
   */
  payStatus?: number;
  priceInfo?: IntlFlightReShopDetailResponseBodyModulePriceInfo;
  /**
   * @example
   * 1017035199374643191
   */
  reShopApplyId?: number;
  /**
   * @example
   * 0
   */
  reShopReasonCode?: string;
  reShopReasonDesc?: string;
  refundChangeRule?: IntlFlightReShopDetailResponseBodyModuleRefundChangeRule;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 2024-03-06 15:01:35
   */
  successTime?: string;
  userIntentionMemo?: string;
  static names(): { [key: string]: string } {
    return {
      baggageRule: 'baggage_rule',
      closeReason: 'close_reason',
      closeTime: 'close_time',
      closeType: 'close_type',
      journeyList: 'journey_list',
      orderId: 'order_id',
      originJourneyList: 'origin_journey_list',
      outOrderId: 'out_order_id',
      outReShopApplyId: 'out_re_shop_apply_id',
      passengerList: 'passenger_list',
      passengerPriceInfoList: 'passenger_price_info_list',
      passengerTicketList: 'passenger_ticket_list',
      payLatestTime: 'pay_latest_time',
      payStatus: 'pay_status',
      priceInfo: 'price_info',
      reShopApplyId: 're_shop_apply_id',
      reShopReasonCode: 're_shop_reason_code',
      reShopReasonDesc: 're_shop_reason_desc',
      refundChangeRule: 'refund_change_rule',
      status: 'status',
      successTime: 'success_time',
      userIntentionMemo: 'user_intention_memo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baggageRule: IntlFlightReShopDetailResponseBodyModuleBaggageRule,
      closeReason: 'string',
      closeTime: 'string',
      closeType: 'number',
      journeyList: { 'type': 'array', 'itemType': IntlFlightReShopDetailResponseBodyModuleJourneyList },
      orderId: 'number',
      originJourneyList: { 'type': 'array', 'itemType': IntlFlightReShopDetailResponseBodyModuleOriginJourneyList },
      outOrderId: 'string',
      outReShopApplyId: 'string',
      passengerList: { 'type': 'array', 'itemType': IntlFlightReShopDetailResponseBodyModulePassengerList },
      passengerPriceInfoList: { 'type': 'array', 'itemType': IntlFlightReShopDetailResponseBodyModulePassengerPriceInfoList },
      passengerTicketList: { 'type': 'array', 'itemType': IntlFlightReShopDetailResponseBodyModulePassengerTicketList },
      payLatestTime: 'string',
      payStatus: 'number',
      priceInfo: IntlFlightReShopDetailResponseBodyModulePriceInfo,
      reShopApplyId: 'number',
      reShopReasonCode: 'string',
      reShopReasonDesc: 'string',
      refundChangeRule: IntlFlightReShopDetailResponseBodyModuleRefundChangeRule,
      status: 'number',
      successTime: 'string',
      userIntentionMemo: 'string',
    };
  }

  validate() {
    if(this.baggageRule && typeof (this.baggageRule as any).validate === 'function') {
      (this.baggageRule as any).validate();
    }
    if(Array.isArray(this.journeyList)) {
      $dara.Model.validateArray(this.journeyList);
    }
    if(Array.isArray(this.originJourneyList)) {
      $dara.Model.validateArray(this.originJourneyList);
    }
    if(Array.isArray(this.passengerList)) {
      $dara.Model.validateArray(this.passengerList);
    }
    if(Array.isArray(this.passengerPriceInfoList)) {
      $dara.Model.validateArray(this.passengerPriceInfoList);
    }
    if(Array.isArray(this.passengerTicketList)) {
      $dara.Model.validateArray(this.passengerTicketList);
    }
    if(this.priceInfo && typeof (this.priceInfo as any).validate === 'function') {
      (this.priceInfo as any).validate();
    }
    if(this.refundChangeRule && typeof (this.refundChangeRule as any).validate === 'function') {
      (this.refundChangeRule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightReShopDetailResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @example
   * 成功
   */
  message?: string;
  module?: IntlFlightReShopDetailResponseBodyModule;
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
   * 210bc4b116835992457938931db4de
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
      module: IntlFlightReShopDetailResponseBodyModule,
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

