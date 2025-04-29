// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightModifyOtaSearchV2ResponseBodyModuleFlightSegmentInfosDepAirportInfo } from "./FlightModifyOtaSearchV2responseBodyModuleFlightSegmentInfosDepAirportInfo";
import { FlightModifyOtaSearchV2ResponseBodyModuleFlightSegmentInfosArrAirportInfo } from "./FlightModifyOtaSearchV2responseBodyModuleFlightSegmentInfosArrAirportInfo";
import { FlightModifyOtaSearchV2ResponseBodyModuleFlightSegmentInfosAirlineInfo } from "./FlightModifyOtaSearchV2responseBodyModuleFlightSegmentInfosAirlineInfo";
import { FlightModifyOtaSearchV2ResponseBodyModuleFlightSegmentInfosFlightSharedInfo } from "./FlightModifyOtaSearchV2responseBodyModuleFlightSegmentInfosFlightSharedInfo";
import { FlightModifyOtaSearchV2ResponseBodyModuleFlightSegmentInfosFlightStopInfo } from "./FlightModifyOtaSearchV2responseBodyModuleFlightSegmentInfosFlightStopInfo";


export class FlightModifyOtaSearchV2ResponseBodyModuleFlightSegmentInfos extends $dara.Model {
  /**
   * @example
   * 0
   */
  journeySeq?: number;
  /**
   * @example
   * 0
   */
  segmentSeq?: number;
  /**
   * @example
   * CA1110
   */
  flightNo?: string;
  /**
   * @example
   * XIL
   */
  depCityCode?: string;
  /**
   * @example
   * BJS
   */
  arrCityCode?: string;
  depCityName?: string;
  arrCityName?: string;
  depAirportInfo?: FlightModifyOtaSearchV2ResponseBodyModuleFlightSegmentInfosDepAirportInfo;
  arrAirportInfo?: FlightModifyOtaSearchV2ResponseBodyModuleFlightSegmentInfosArrAirportInfo;
  /**
   * @example
   * 2023-09-18 09:10:00
   */
  depTime?: string;
  /**
   * @example
   * 2023-09-18 10:25:00
   */
  arrTime?: string;
  airlineInfo?: FlightModifyOtaSearchV2ResponseBodyModuleFlightSegmentInfosAirlineInfo;
  /**
   * @example
   * false
   */
  share?: boolean;
  flightSharedInfo?: FlightModifyOtaSearchV2ResponseBodyModuleFlightSegmentInfosFlightSharedInfo;
  /**
   * @example
   * false
   */
  stop?: boolean;
  flightStopInfo?: FlightModifyOtaSearchV2ResponseBodyModuleFlightSegmentInfosFlightStopInfo;
  /**
   * @example
   * 20
   */
  transferTime?: number;
  /**
   * @example
   * 75
   */
  duration?: number;
  manufacturer?: string;
  /**
   * @example
   * ARJ
   */
  flightType?: string;
  flightSize?: string;
  mealDesc?: string;
  onTimeRate?: string;
  static names(): { [key: string]: string } {
    return {
      journeySeq: 'journey_seq',
      segmentSeq: 'segment_seq',
      flightNo: 'flight_no',
      depCityCode: 'dep_city_code',
      arrCityCode: 'arr_city_code',
      depCityName: 'dep_city_name',
      arrCityName: 'arr_city_name',
      depAirportInfo: 'dep_airport_info',
      arrAirportInfo: 'arr_airport_info',
      depTime: 'dep_time',
      arrTime: 'arr_time',
      airlineInfo: 'airline_info',
      share: 'share',
      flightSharedInfo: 'flight_shared_info',
      stop: 'stop',
      flightStopInfo: 'flight_stop_info',
      transferTime: 'transfer_time',
      duration: 'duration',
      manufacturer: 'manufacturer',
      flightType: 'flight_type',
      flightSize: 'flight_size',
      mealDesc: 'meal_desc',
      onTimeRate: 'on_time_rate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      journeySeq: 'number',
      segmentSeq: 'number',
      flightNo: 'string',
      depCityCode: 'string',
      arrCityCode: 'string',
      depCityName: 'string',
      arrCityName: 'string',
      depAirportInfo: FlightModifyOtaSearchV2ResponseBodyModuleFlightSegmentInfosDepAirportInfo,
      arrAirportInfo: FlightModifyOtaSearchV2ResponseBodyModuleFlightSegmentInfosArrAirportInfo,
      depTime: 'string',
      arrTime: 'string',
      airlineInfo: FlightModifyOtaSearchV2ResponseBodyModuleFlightSegmentInfosAirlineInfo,
      share: 'boolean',
      flightSharedInfo: FlightModifyOtaSearchV2ResponseBodyModuleFlightSegmentInfosFlightSharedInfo,
      stop: 'boolean',
      flightStopInfo: FlightModifyOtaSearchV2ResponseBodyModuleFlightSegmentInfosFlightStopInfo,
      transferTime: 'number',
      duration: 'number',
      manufacturer: 'string',
      flightType: 'string',
      flightSize: 'string',
      mealDesc: 'string',
      onTimeRate: 'string',
    };
  }

  validate() {
    if(this.depAirportInfo && typeof (this.depAirportInfo as any).validate === 'function') {
      (this.depAirportInfo as any).validate();
    }
    if(this.arrAirportInfo && typeof (this.arrAirportInfo as any).validate === 'function') {
      (this.arrAirportInfo as any).validate();
    }
    if(this.airlineInfo && typeof (this.airlineInfo as any).validate === 'function') {
      (this.airlineInfo as any).validate();
    }
    if(this.flightSharedInfo && typeof (this.flightSharedInfo as any).validate === 'function') {
      (this.flightSharedInfo as any).validate();
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

