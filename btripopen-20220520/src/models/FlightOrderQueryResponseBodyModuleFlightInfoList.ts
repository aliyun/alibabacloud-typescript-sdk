// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightOrderQueryResponseBodyModuleFlightInfoListArrAirportCityCounty } from "./FlightOrderQueryResponseBodyModuleFlightInfoListArrAirportCityCounty";
import { FlightOrderQueryResponseBodyModuleFlightInfoListDepAirportCityCounty } from "./FlightOrderQueryResponseBodyModuleFlightInfoListDepAirportCityCounty";
import { FlightOrderQueryResponseBodyModuleFlightInfoListStopCityInfoList } from "./FlightOrderQueryResponseBodyModuleFlightInfoListStopCityInfoList";


export class FlightOrderQueryResponseBodyModuleFlightInfoList extends $dara.Model {
  /**
   * @example
   * MU
   */
  airlineCode?: string;
  airlineName?: string;
  arrAirportCityCounty?: FlightOrderQueryResponseBodyModuleFlightInfoListArrAirportCityCounty;
  /**
   * @example
   * LHW
   */
  arrAirportCode?: string;
  arrAirportName?: string;
  arrCityAdCode?: string;
  /**
   * @example
   * LHW
   */
  arrCityCode?: string;
  arrCityName?: string;
  arrTerminal?: string;
  /**
   * @example
   * 2022-07-20T10:40Z
   */
  arrTime?: string;
  /**
   * @example
   * V
   */
  cabin?: string;
  /**
   * @example
   * Y
   */
  cabinLevel?: string;
  depAirportCityCounty?: FlightOrderQueryResponseBodyModuleFlightInfoListDepAirportCityCounty;
  /**
   * @example
   * NGB
   */
  depAirportCode?: string;
  depAirportName?: string;
  depCityAdCode?: string;
  /**
   * @example
   * NGB
   */
  depCityCode?: string;
  depCityName?: string;
  depTerminal?: string;
  /**
   * @example
   * 2022-07-20T10:40Z
   */
  depTime?: string;
  /**
   * @example
   * 900
   */
  flightMile?: number;
  /**
   * @example
   * MU3849
   */
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

