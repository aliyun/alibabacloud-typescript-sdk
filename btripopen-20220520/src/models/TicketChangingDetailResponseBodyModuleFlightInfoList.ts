// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TicketChangingDetailResponseBodyModuleFlightInfoList extends $dara.Model {
  /**
   * @example
   * MU
   */
  airlineCode?: string;
  airlineName?: string;
  airlineSimpleName?: string;
  arrAirport?: string;
  /**
   * @example
   * HGH
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
  /**
   * @example
   * T3
   */
  arrTerminal?: string;
  /**
   * @example
   * 2000-00-00 00:00:00
   */
  arrTime?: string;
  baggage?: string;
  /**
   * @example
   * 100
   */
  buildPrice?: number;
  /**
   * @example
   * V
   */
  cabin?: string;
  cabinClass?: string;
  /**
   * @example
   * MU3849
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
  /**
   * @example
   * T4
   */
  depTerminal?: string;
  /**
   * @example
   * 2000-01-01 00:00:00
   */
  depTime?: string;
  /**
   * @example
   * MU3849
   */
  flightNo?: string;
  /**
   * @example
   * Y
   */
  lastCabin?: string;
  /**
   * @example
   * CA1982
   */
  lastFlightNo?: string;
  /**
   * @example
   * 3
   */
  meal?: string;
  /**
   * @example
   * 100
   */
  oilPrice?: number;
  segmentType?: number;
  /**
   * @example
   * 2000-00-00 00:00:00
   */
  stopArrTime?: string;
  /**
   * @example
   * NGB
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

