// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnrichRequestJourneyParamListSegmentParamList extends $dara.Model {
  /**
   * @remarks
   * arrival airport code (capitalized)
   * 
   * @example
   * MFM
   */
  arrivalAirport?: string;
  /**
   * @remarks
   * arrival city code (capitalized)
   * 
   * This parameter is required.
   * 
   * @example
   * MFM
   */
  arrivalCity?: string;
  /**
   * @remarks
   * RBD
   * 
   * @example
   * V
   */
  cabin?: string;
  /**
   * @remarks
   * child RBD
   * 
   * @example
   * E
   */
  childCabin?: string;
  /**
   * @remarks
   * departure airport code (capitalized)
   * 
   * @example
   * PVG
   */
  departureAirport?: string;
  /**
   * @remarks
   * departure city code (capitalized)
   * 
   * This parameter is required.
   * 
   * @example
   * SHA
   */
  departureCity?: string;
  /**
   * @remarks
   * departure time in string format (yyyy-MM-dd HH:mm:ss)
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-03-10 07:55:00
   */
  departureTime?: string;
  /**
   * @remarks
   * marketing flight no. (eg: KA5809)
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
   * arrival city code (capitalized)
   * 
   * This parameter is required.
   * 
   * @example
   * MFM
   */
  arrivalCity?: string;
  /**
   * @remarks
   * departure city code (capitalized)
   * 
   * This parameter is required.
   * 
   * @example
   * SHA
   */
  departureCity?: string;
  /**
   * @remarks
   * departure date (eg: yyyyMMdd)
   * 
   * This parameter is required.
   * 
   * @example
   * 20230310
   */
  departureDate?: string;
  /**
   * @remarks
   * segement param list
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
   * adult passenger amount 1-9
   * 
   * @example
   * 1
   */
  adults?: number;
  /**
   * @remarks
   * cabin class
   * 1. **ALL_CABIN** : all cabin class
   * 2. **Y** : economy class
   * 3. **FC** : first class and business class
   * 4. **S** : premium economy class
   * 5. **YS** : economy class and premium economy class
   * 6. **YSC** : economy class, premium economy class and business class
   * 
   * @example
   * ALL_CABIN
   */
  cabinClass?: string;
  /**
   * @remarks
   * child passenger amount 0-9
   * 
   * @example
   * 1
   */
  children?: number;
  /**
   * @remarks
   * infant passenger amount 0-9
   * 
   * @example
   * 1
   */
  infants?: number;
  /**
   * @remarks
   * journey list
   */
  journeyParamList?: EnrichRequestJourneyParamList[];
  /**
   * @remarks
   * solution_id returned by Search
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

