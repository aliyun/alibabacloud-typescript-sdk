// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnrichRequestJourneyParamListSegmentParamList extends $dara.Model {
  /**
   * @remarks
   * Flight arrival airport three-letter code (uppercase)
   * 
   * @example
   * MFM
   */
  arrivalAirport?: string;
  /**
   * @remarks
   * Flight arrival city three-letter code (uppercase)
   * 
   * @example
   * MFM
   */
  arrivalCity?: string;
  /**
   * @remarks
   * Cabin
   * 
   * @example
   * V
   */
  cabin?: string;
  /**
   * @remarks
   * Child cabin
   * 
   * @example
   * E
   */
  childCabin?: string;
  /**
   * @remarks
   * Flight departure airport three-letter code (uppercase)
   * 
   * @example
   * PVG
   */
  departureAirport?: string;
  /**
   * @remarks
   * Flight departure city three-letter code (uppercase)
   * 
   * @example
   * SHA
   */
  departureCity?: string;
  /**
   * @remarks
   * String, flight departure date (yyyy-MM-dd), either departure_date or departure_time, with departure_time preferred for greater accuracy
   * 
   * @example
   * 2023-03-10
   */
  departureDate?: string;
  /**
   * @remarks
   * String, flight departure date and time (yyyy-MM-dd HH:mm:ss)
   * 
   * @example
   * 2023-03-10 07:55:00
   */
  departureTime?: string;
  /**
   * @remarks
   * Marketing flight number (e.g., KA5809)
   * 
   * This parameter is required.
   * 
   * @example
   * HO1295
   */
  marketingFlightNo?: string;
  static names(): { [key: string]: string } {
    return {
      arrivalAirport: 'arrival_airport',
      arrivalCity: 'arrival_city',
      cabin: 'cabin',
      childCabin: 'child_cabin',
      departureAirport: 'departure_airport',
      departureCity: 'departure_city',
      departureDate: 'departure_date',
      departureTime: 'departure_time',
      marketingFlightNo: 'marketing_flight_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrivalAirport: 'string',
      arrivalCity: 'string',
      cabin: 'string',
      childCabin: 'string',
      departureAirport: 'string',
      departureCity: 'string',
      departureDate: 'string',
      departureTime: 'string',
      marketingFlightNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnrichRequestJourneyParamList extends $dara.Model {
  /**
   * @remarks
   * Arrival city three-letter code (uppercase)
   * 
   * This parameter is required.
   * 
   * @example
   * MFM
   */
  arrivalCity?: string;
  /**
   * @remarks
   * Departure city three-letter code (uppercase)
   * 
   * This parameter is required.
   * 
   * @example
   * SHA
   */
  departureCity?: string;
  /**
   * @remarks
   * Departure date (yyyyMMdd)
   * 
   * This parameter is required.
   * 
   * @example
   * 20230310
   */
  departureDate?: string;
  /**
   * @remarks
   * Specified segment information for this trip
   * 
   * This parameter is required.
   */
  segmentParamList?: EnrichRequestJourneyParamListSegmentParamList[];
  static names(): { [key: string]: string } {
    return {
      arrivalCity: 'arrival_city',
      departureCity: 'departure_city',
      departureDate: 'departure_date',
      segmentParamList: 'segment_param_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrivalCity: 'string',
      departureCity: 'string',
      departureDate: 'string',
      segmentParamList: { 'type': 'array', 'itemType': EnrichRequestJourneyParamListSegmentParamList },
    };
  }

  validate() {
    if(Array.isArray(this.segmentParamList)) {
      $dara.Model.validateArray(this.segmentParamList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnrichRequest extends $dara.Model {
  /**
   * @remarks
   * Number of adult passengers (1-9)
   * 
   * @example
   * 1
   */
  adults?: number;
  /**
   * @remarks
   * Cabin class: ALL_CABIN: All cabin classes; Y: Economy; FC: First Class and Business Class; S: Premium Economy; YS: Economy and Premium Economy; YSC: Economy, Premium Economy, and Business Class;
   * 
   * @example
   * ALL_CABIN
   */
  cabinClass?: string;
  /**
   * @remarks
   * Number of child passengers (0-9)
   * 
   * @example
   * 1
   */
  children?: number;
  /**
   * @remarks
   * Number of infant passengers (0-9)
   * 
   * @example
   * 1
   */
  infants?: number;
  /**
   * @remarks
   * Trip information
   */
  journeyParamList?: EnrichRequestJourneyParamList[];
  /**
   * @remarks
   * The `solution_id` returned by the Search interface
   * 
   * @example
   * eJwz8DeySEo0NjQ01TU3TU7TNTFINNO1SE5O0jVKM0hKNjEwTElLNYwz0A32cNT1dfPVNTIwMjYwNjRQ8/A3NLI01Q0Ic0cRBwBVFxJJ
   */
  solutionId?: string;
  static names(): { [key: string]: string } {
    return {
      adults: 'adults',
      cabinClass: 'cabin_class',
      children: 'children',
      infants: 'infants',
      journeyParamList: 'journey_param_list',
      solutionId: 'solution_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adults: 'number',
      cabinClass: 'string',
      children: 'number',
      infants: 'number',
      journeyParamList: { 'type': 'array', 'itemType': EnrichRequestJourneyParamList },
      solutionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.journeyParamList)) {
      $dara.Model.validateArray(this.journeyParamList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

