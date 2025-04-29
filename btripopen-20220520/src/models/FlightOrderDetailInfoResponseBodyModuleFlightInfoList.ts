// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightOrderDetailInfoResponseBodyModuleFlightInfoList extends $dara.Model {
  /**
   * @example
   * CA
   */
  airlineCode?: string;
  airlineName?: string;
  airlineSimpleName?: string;
  arrAirport?: string;
  /**
   * @example
   * LHW
   */
  arrAirportCode?: string;
  arrAirportCodeName?: string;
  /**
   * @example
   * HGH
   */
  arrCity?: string;
  /**
   * @example
   * LHW
   */
  arrCityCode?: string;
  arrTerminal?: string;
  /**
   * @example
   * 2000-00-00 00:00:00
   */
  arrTime?: string;
  /**
   * @example
   * “”
   */
  baggage?: string;
  /**
   * @example
   * 100
   */
  buildPrice?: number;
  cabin?: string;
  cabinClass?: string;
  /**
   * @example
   * "CA1351_PEK_CAN_2000-00-00 08:00
   */
  carrier?: string;
  depAirport?: string;
  /**
   * @example
   * NGB
   */
  depAirportCode?: string;
  depAirportCodeName?: string;
  /**
   * @example
   * BJS
   */
  depCity?: string;
  /**
   * @example
   * NGB
   */
  depCityCode?: string;
  depTerminal?: string;
  /**
   * @example
   * 2000-01-01 00:00:00
   */
  depTime?: string;
  /**
   * @example
   * CA1351
   */
  flightNo?: string;
  /**
   * @example
   * Y
   */
  lastCabin?: string;
  /**
   * @example
   * CA1351
   */
  lastFlightNo?: string;
  meal?: string;
  /**
   * @example
   * 100
   */
  oilPrice?: number;
  /**
   * @example
   * 0
   */
  segmentType?: number;
  /**
   * @example
   * 2000-00-00 00:00:00
   */
  stopArrTime?: string;
  /**
   * @example
   * CAN
   */
  stopCity?: string;
  /**
   * @example
   * 2000-00-00 00:00:00
   */
  stopDepTime?: string;
  /**
   * @example
   * 100
   */
  ticketPrice?: number;
  /**
   * @example
   * “”
   */
  tuigaiqianInfo?: string;
  static names(): { [key: string]: string } {
    return {
      airlineCode: 'airline_code',
      airlineName: 'airline_name',
      airlineSimpleName: 'airline_simple_name',
      arrAirport: 'arr_airport',
      arrAirportCode: 'arr_airport_code',
      arrAirportCodeName: 'arr_airport_code_name',
      arrCity: 'arr_city',
      arrCityCode: 'arr_city_code',
      arrTerminal: 'arr_terminal',
      arrTime: 'arr_time',
      baggage: 'baggage',
      buildPrice: 'build_price',
      cabin: 'cabin',
      cabinClass: 'cabin_class',
      carrier: 'carrier',
      depAirport: 'dep_airport',
      depAirportCode: 'dep_airport_code',
      depAirportCodeName: 'dep_airport_code_name',
      depCity: 'dep_city',
      depCityCode: 'dep_city_code',
      depTerminal: 'dep_terminal',
      depTime: 'dep_time',
      flightNo: 'flight_no',
      lastCabin: 'last_cabin',
      lastFlightNo: 'last_flight_no',
      meal: 'meal',
      oilPrice: 'oil_price',
      segmentType: 'segment_type',
      stopArrTime: 'stop_arr_time',
      stopCity: 'stop_city',
      stopDepTime: 'stop_dep_time',
      ticketPrice: 'ticket_price',
      tuigaiqianInfo: 'tuigaiqian_info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineCode: 'string',
      airlineName: 'string',
      airlineSimpleName: 'string',
      arrAirport: 'string',
      arrAirportCode: 'string',
      arrAirportCodeName: 'string',
      arrCity: 'string',
      arrCityCode: 'string',
      arrTerminal: 'string',
      arrTime: 'string',
      baggage: 'string',
      buildPrice: 'number',
      cabin: 'string',
      cabinClass: 'string',
      carrier: 'string',
      depAirport: 'string',
      depAirportCode: 'string',
      depAirportCodeName: 'string',
      depCity: 'string',
      depCityCode: 'string',
      depTerminal: 'string',
      depTime: 'string',
      flightNo: 'string',
      lastCabin: 'string',
      lastFlightNo: 'string',
      meal: 'string',
      oilPrice: 'number',
      segmentType: 'number',
      stopArrTime: 'string',
      stopCity: 'string',
      stopDepTime: 'string',
      ticketPrice: 'number',
      tuigaiqianInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

