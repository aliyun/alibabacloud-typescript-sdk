// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightOtaSearchV2ResponseBodyModuleFlightJourneyInfosFlightSegmentInfosAirlineInfo } from "./FlightOtaSearchV2responseBodyModuleFlightJourneyInfosFlightSegmentInfosAirlineInfo";
import { FlightOtaSearchV2ResponseBodyModuleFlightJourneyInfosFlightSegmentInfosArrAirportInfo } from "./FlightOtaSearchV2responseBodyModuleFlightJourneyInfosFlightSegmentInfosArrAirportInfo";
import { FlightOtaSearchV2ResponseBodyModuleFlightJourneyInfosFlightSegmentInfosDepAirportInfo } from "./FlightOtaSearchV2responseBodyModuleFlightJourneyInfosFlightSegmentInfosDepAirportInfo";
import { FlightOtaSearchV2ResponseBodyModuleFlightJourneyInfosFlightSegmentInfosFlightShareInfo } from "./FlightOtaSearchV2responseBodyModuleFlightJourneyInfosFlightSegmentInfosFlightShareInfo";
import { FlightOtaSearchV2ResponseBodyModuleFlightJourneyInfosFlightSegmentInfosFlightStopInfo } from "./FlightOtaSearchV2responseBodyModuleFlightJourneyInfosFlightSegmentInfosFlightStopInfo";


export class FlightOtaSearchV2ResponseBodyModuleFlightJourneyInfosFlightSegmentInfos extends $dara.Model {
  airlineInfo?: FlightOtaSearchV2ResponseBodyModuleFlightJourneyInfosFlightSegmentInfosAirlineInfo;
  arrAirportInfo?: FlightOtaSearchV2ResponseBodyModuleFlightJourneyInfosFlightSegmentInfosArrAirportInfo;
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
  depAirportInfo?: FlightOtaSearchV2ResponseBodyModuleFlightJourneyInfosFlightSegmentInfosDepAirportInfo;
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
   * @remarks
   * duration
   * 
   * @example
   * 140
   */
  duration?: number;
  extraInfo?: { [key: string]: any };
  /**
   * @example
   * MU5131
   */
  flightNo?: string;
  flightShareInfo?: FlightOtaSearchV2ResponseBodyModuleFlightJourneyInfosFlightSegmentInfosFlightShareInfo;
  flightSize?: string;
  flightStopInfo?: FlightOtaSearchV2ResponseBodyModuleFlightJourneyInfosFlightSegmentInfosFlightStopInfo;
  /**
   * @example
   * 320
   */
  flightType?: string;
  manufacturer?: string;
  mealDesc?: string;
  miles?: number;
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
      extraInfo: 'extra_info',
      flightNo: 'flight_no',
      flightShareInfo: 'flight_share_info',
      flightSize: 'flight_size',
      flightStopInfo: 'flight_stop_info',
      flightType: 'flight_type',
      manufacturer: 'manufacturer',
      mealDesc: 'meal_desc',
      miles: 'miles',
      onTimeRate: 'on_time_rate',
      oneMore: 'one_more',
      oneMoreShow: 'one_more_show',
      segmentIndex: 'segment_index',
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
      airlineInfo: FlightOtaSearchV2ResponseBodyModuleFlightJourneyInfosFlightSegmentInfosAirlineInfo,
      arrAirportInfo: FlightOtaSearchV2ResponseBodyModuleFlightJourneyInfosFlightSegmentInfosArrAirportInfo,
      arrCityCode: 'string',
      arrCityName: 'string',
      arrTime: 'string',
      baggageDesc: 'string',
      depAirportInfo: FlightOtaSearchV2ResponseBodyModuleFlightJourneyInfosFlightSegmentInfosDepAirportInfo,
      depCityCode: 'string',
      depCityName: 'string',
      depTime: 'string',
      duration: 'number',
      extraInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      flightNo: 'string',
      flightShareInfo: FlightOtaSearchV2ResponseBodyModuleFlightJourneyInfosFlightSegmentInfosFlightShareInfo,
      flightSize: 'string',
      flightStopInfo: FlightOtaSearchV2ResponseBodyModuleFlightJourneyInfosFlightSegmentInfosFlightStopInfo,
      flightType: 'string',
      manufacturer: 'string',
      mealDesc: 'string',
      miles: 'number',
      onTimeRate: 'string',
      oneMore: 'number',
      oneMoreShow: 'string',
      segmentIndex: 'number',
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
    if(this.extraInfo) {
      $dara.Model.validateMap(this.extraInfo);
    }
    if(this.flightShareInfo && typeof (this.flightShareInfo as any).validate === 'function') {
      (this.flightShareInfo as any).validate();
    }
    if(this.flightStopInfo && typeof (this.flightStopInfo as any).validate === 'function') {
      (this.flightStopInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

