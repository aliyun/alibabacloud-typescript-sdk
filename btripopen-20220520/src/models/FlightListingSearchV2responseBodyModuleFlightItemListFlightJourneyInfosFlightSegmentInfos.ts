// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightListingSearchV2ResponseBodyModuleFlightItemListFlightJourneyInfosFlightSegmentInfosAirlineInfo } from "./FlightListingSearchV2responseBodyModuleFlightItemListFlightJourneyInfosFlightSegmentInfosAirlineInfo";
import { FlightListingSearchV2ResponseBodyModuleFlightItemListFlightJourneyInfosFlightSegmentInfosArrAirportInfo } from "./FlightListingSearchV2responseBodyModuleFlightItemListFlightJourneyInfosFlightSegmentInfosArrAirportInfo";
import { FlightListingSearchV2ResponseBodyModuleFlightItemListFlightJourneyInfosFlightSegmentInfosDepAirportInfo } from "./FlightListingSearchV2responseBodyModuleFlightItemListFlightJourneyInfosFlightSegmentInfosDepAirportInfo";
import { FlightListingSearchV2ResponseBodyModuleFlightItemListFlightJourneyInfosFlightSegmentInfosFlightShareInfo } from "./FlightListingSearchV2responseBodyModuleFlightItemListFlightJourneyInfosFlightSegmentInfosFlightShareInfo";
import { FlightListingSearchV2ResponseBodyModuleFlightItemListFlightJourneyInfosFlightSegmentInfosFlightStopInfo } from "./FlightListingSearchV2responseBodyModuleFlightItemListFlightJourneyInfosFlightSegmentInfosFlightStopInfo";


export class FlightListingSearchV2ResponseBodyModuleFlightItemListFlightJourneyInfosFlightSegmentInfos extends $dara.Model {
  airlineInfo?: FlightListingSearchV2ResponseBodyModuleFlightItemListFlightJourneyInfosFlightSegmentInfosAirlineInfo;
  arrAirportInfo?: FlightListingSearchV2ResponseBodyModuleFlightItemListFlightJourneyInfosFlightSegmentInfosArrAirportInfo;
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
  depAirportInfo?: FlightListingSearchV2ResponseBodyModuleFlightItemListFlightJourneyInfosFlightSegmentInfosDepAirportInfo;
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
  flightShareInfo?: FlightListingSearchV2ResponseBodyModuleFlightItemListFlightJourneyInfosFlightSegmentInfosFlightShareInfo;
  flightSize?: string;
  flightStopInfo?: FlightListingSearchV2ResponseBodyModuleFlightItemListFlightJourneyInfosFlightSegmentInfosFlightStopInfo;
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
      airlineInfo: FlightListingSearchV2ResponseBodyModuleFlightItemListFlightJourneyInfosFlightSegmentInfosAirlineInfo,
      arrAirportInfo: FlightListingSearchV2ResponseBodyModuleFlightItemListFlightJourneyInfosFlightSegmentInfosArrAirportInfo,
      arrCityCode: 'string',
      arrCityName: 'string',
      arrTime: 'string',
      baggageDesc: 'string',
      depAirportInfo: FlightListingSearchV2ResponseBodyModuleFlightItemListFlightJourneyInfosFlightSegmentInfosDepAirportInfo,
      depCityCode: 'string',
      depCityName: 'string',
      depTime: 'string',
      duration: 'number',
      extraInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      flightNo: 'string',
      flightShareInfo: FlightListingSearchV2ResponseBodyModuleFlightItemListFlightJourneyInfosFlightSegmentInfosFlightShareInfo,
      flightSize: 'string',
      flightStopInfo: FlightListingSearchV2ResponseBodyModuleFlightItemListFlightJourneyInfosFlightSegmentInfosFlightStopInfo,
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

