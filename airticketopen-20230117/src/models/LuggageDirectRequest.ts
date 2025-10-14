// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LuggageDirectRequestFlightSegmentParamList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SIN
   */
  arrivalAirport?: string;
  /**
   * @example
   * T1
   */
  arrivalTerminal?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1705285430445
   */
  arrivalTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  codeShare?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HGH
   */
  departureAirport?: string;
  /**
   * @example
   * T1
   */
  departureTerminal?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1705285430445
   */
  departureTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CZ
   */
  marketingAirline?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CZ616
   */
  marketingFlightNo?: string;
  /**
   * @example
   * CZ
   */
  operatingAirline?: string;
  /**
   * @example
   * SEL,HKG
   */
  stopCityList?: string;
  /**
   * @example
   * CZ
   */
  ticketingAirline?: string;
  static names(): { [key: string]: string } {
    return {
      arrivalAirport: 'arrival_airport',
      arrivalTerminal: 'arrival_terminal',
      arrivalTime: 'arrival_time',
      codeShare: 'code_share',
      departureAirport: 'departure_airport',
      departureTerminal: 'departure_terminal',
      departureTime: 'departure_time',
      marketingAirline: 'marketing_airline',
      marketingFlightNo: 'marketing_flight_no',
      operatingAirline: 'operating_airline',
      stopCityList: 'stop_city_list',
      ticketingAirline: 'ticketing_airline',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrivalAirport: 'string',
      arrivalTerminal: 'string',
      arrivalTime: 'number',
      codeShare: 'boolean',
      departureAirport: 'string',
      departureTerminal: 'string',
      departureTime: 'number',
      marketingAirline: 'string',
      marketingFlightNo: 'string',
      operatingAirline: 'string',
      stopCityList: 'string',
      ticketingAirline: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LuggageDirectRequest extends $dara.Model {
  flightSegmentParamList?: LuggageDirectRequestFlightSegmentParamList[];
  static names(): { [key: string]: string } {
    return {
      flightSegmentParamList: 'flight_segment_param_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flightSegmentParamList: { 'type': 'array', 'itemType': LuggageDirectRequestFlightSegmentParamList },
    };
  }

  validate() {
    if(Array.isArray(this.flightSegmentParamList)) {
      $dara.Model.validateArray(this.flightSegmentParamList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

