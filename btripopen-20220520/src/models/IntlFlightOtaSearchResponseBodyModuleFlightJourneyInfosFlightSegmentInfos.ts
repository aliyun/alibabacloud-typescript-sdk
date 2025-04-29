// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IntlFlightOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosAirlineInfo } from "./IntlFlightOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosAirlineInfo";
import { IntlFlightOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosArrAirportInfo } from "./IntlFlightOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosArrAirportInfo";
import { IntlFlightOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosDepAirportInfo } from "./IntlFlightOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosDepAirportInfo";
import { IntlFlightOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosFlightShareInfo } from "./IntlFlightOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosFlightShareInfo";
import { IntlFlightOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosFlightStopInfo } from "./IntlFlightOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosFlightStopInfo";
import { IntlFlightOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosLuggageDirectInfo } from "./IntlFlightOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosLuggageDirectInfo";
import { IntlFlightOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosSegmentVisaRemark } from "./IntlFlightOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosSegmentVisaRemark";


export class IntlFlightOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfos extends $dara.Model {
  airlineInfo?: IntlFlightOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosAirlineInfo;
  arrAirportInfo?: IntlFlightOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosArrAirportInfo;
  /**
   * @example
   * BJS
   */
  arrCityCode?: string;
  arrCityName?: string;
  /**
   * @example
   * 2023-08-13 09:45
   */
  arrTime?: string;
  baggageDesc?: string;
  depAirportInfo?: IntlFlightOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosDepAirportInfo;
  /**
   * @example
   * HGH
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
   * 140
   */
  duration?: number;
  /**
   * @example
   * MU5131
   */
  flightNo?: string;
  flightShareInfo?: IntlFlightOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosFlightShareInfo;
  flightSize?: string;
  flightStopInfo?: IntlFlightOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosFlightStopInfo;
  /**
   * @example
   * 320
   */
  flightType?: string;
  luggageDirectInfo?: IntlFlightOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosLuggageDirectInfo;
  manufacturer?: string;
  mealDesc?: string;
  /**
   * @example
   * 1200
   */
  miles?: number;
  /**
   * @example
   * 80%
   */
  onTimeRate?: string;
  /**
   * @example
   * 0
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
   * KN6728HGHPKX0725
   */
  segmentKey?: string;
  segmentVisaRemark?: IntlFlightOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosSegmentVisaRemark;
  /**
   * @example
   * false
   */
  share?: boolean;
  shortFlightSize?: string;
  /**
   * @example
   * false
   */
  stop?: boolean;
  totalTime?: string;
  transferTime?: string;
  /**
   * @example
   * 120
   */
  transferTimeNumber?: number;
  static names(): { [key: string]: string } {
    return {
      airlineInfo: 'airline_info',
      arrAirportInfo: 'arr_airport_info',
      arrCityCode: 'arr_city_code',
      arrCityName: 'arr_city_name',
      arrTime: 'arr_time',
      baggageDesc: 'baggage_desc',
      depAirportInfo: 'dep_airport_info',
      depCityCode: 'dep_city_code',
      depCityName: 'dep_city_name',
      depTime: 'dep_time',
      duration: 'duration',
      flightNo: 'flight_no',
      flightShareInfo: 'flight_share_info',
      flightSize: 'flight_size',
      flightStopInfo: 'flight_stop_info',
      flightType: 'flight_type',
      luggageDirectInfo: 'luggage_direct_info',
      manufacturer: 'manufacturer',
      mealDesc: 'meal_desc',
      miles: 'miles',
      onTimeRate: 'on_time_rate',
      oneMore: 'one_more',
      oneMoreShow: 'one_more_show',
      segmentIndex: 'segment_index',
      segmentKey: 'segment_key',
      segmentVisaRemark: 'segment_visa_remark',
      share: 'share',
      shortFlightSize: 'short_flight_size',
      stop: 'stop',
      totalTime: 'total_time',
      transferTime: 'transfer_time',
      transferTimeNumber: 'transfer_time_number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineInfo: IntlFlightOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosAirlineInfo,
      arrAirportInfo: IntlFlightOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosArrAirportInfo,
      arrCityCode: 'string',
      arrCityName: 'string',
      arrTime: 'string',
      baggageDesc: 'string',
      depAirportInfo: IntlFlightOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosDepAirportInfo,
      depCityCode: 'string',
      depCityName: 'string',
      depTime: 'string',
      duration: 'number',
      flightNo: 'string',
      flightShareInfo: IntlFlightOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosFlightShareInfo,
      flightSize: 'string',
      flightStopInfo: IntlFlightOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosFlightStopInfo,
      flightType: 'string',
      luggageDirectInfo: IntlFlightOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosLuggageDirectInfo,
      manufacturer: 'string',
      mealDesc: 'string',
      miles: 'number',
      onTimeRate: 'string',
      oneMore: 'number',
      oneMoreShow: 'string',
      segmentIndex: 'number',
      segmentKey: 'string',
      segmentVisaRemark: IntlFlightOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosSegmentVisaRemark,
      share: 'boolean',
      shortFlightSize: 'string',
      stop: 'boolean',
      totalTime: 'string',
      transferTime: 'string',
      transferTimeNumber: 'number',
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
    if(this.flightStopInfo && typeof (this.flightStopInfo as any).validate === 'function') {
      (this.flightStopInfo as any).validate();
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

