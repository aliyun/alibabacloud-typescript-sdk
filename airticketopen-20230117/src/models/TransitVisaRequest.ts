// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransitVisaRequestFlightSegmentParamList extends $dara.Model {
  /**
   * @remarks
   * The three-letter IATA code of the arrival airport.
   * 
   * This parameter is required.
   * 
   * @example
   * SIN
   */
  arrivalAirport?: string;
  /**
   * @remarks
   * The arrival terminal.
   * 
   * @example
   * T1
   */
  arrivalTerminal?: string;
  /**
   * @remarks
   * The arrival time. A 13-digit UNIX timestamp.
   * 
   * This parameter is required.
   * 
   * @example
   * 1705285430445
   */
  arrivalTime?: number;
  /**
   * @remarks
   * Indicates whether the flight is a codeshare flight.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  codeShare?: boolean;
  /**
   * @remarks
   * The three-letter IATA code of the departure airport.
   * 
   * This parameter is required.
   * 
   * @example
   * HGH
   */
  departureAirport?: string;
  /**
   * @remarks
   * The departure terminal.
   * 
   * @example
   * T1
   */
  departureTerminal?: string;
  /**
   * @remarks
   * The departure time. A 13-digit UNIX timestamp.
   * 
   * This parameter is required.
   * 
   * @example
   * 1705285430445
   */
  departureTime?: number;
  /**
   * @remarks
   * The marketing airline.
   * 
   * This parameter is required.
   * 
   * @example
   * CZ
   */
  marketingAirline?: string;
  /**
   * @remarks
   * The flight number.
   * 
   * This parameter is required.
   * 
   * @example
   * CZ616
   */
  marketingFlightNo?: string;
  /**
   * @remarks
   * The operating airline.
   * 
   * @example
   * CZ
   */
  operatingAirline?: string;
  /**
   * @remarks
   * The three-letter IATA codes of stopover cities.
   * 
   * @example
   * SEL,HKG
   */
  stopCityList?: string;
  /**
   * @remarks
   * The ticketing airline.
   * 
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

export class TransitVisaRequest extends $dara.Model {
  /**
   * @remarks
   * The list of flight segments that constitute an itinerary. Maximum size: 2.
   */
  flightSegmentParamList?: TransitVisaRequestFlightSegmentParamList[];
  static names(): { [key: string]: string } {
    return {
      flightSegmentParamList: 'flight_segment_param_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flightSegmentParamList: { 'type': 'array', 'itemType': TransitVisaRequestFlightSegmentParamList },
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

