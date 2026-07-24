// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StandardSearchRequestAirLegs extends $dara.Model {
  /**
   * @remarks
   * Arrival airport three-letter code
   * 
   * @example
   * MFM
   */
  arrivalAirportList?: string[];
  /**
   * @remarks
   * Arrival city three-letter code
   * 
   * @example
   * MFM
   */
  arrivalCity?: string;
  /**
   * @remarks
   * Departure airport three-letter code
   * 
   * @example
   * PVG
   */
  departureAirportList?: string[];
  /**
   * @remarks
   * Departure city three-letter code
   * 
   * @example
   * SHA
   */
  departureCity?: string;
  /**
   * @remarks
   * Departure date (e.g.: yyyyMMdd)
   * 
   * This parameter is required.
   * 
   * @example
   * 20230320
   */
  departureDate?: string;
  static names(): { [key: string]: string } {
    return {
      arrivalAirportList: 'arrival_airport_list',
      arrivalCity: 'arrival_city',
      departureAirportList: 'departure_airport_list',
      departureCity: 'departure_city',
      departureDate: 'departure_date',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrivalAirportList: { 'type': 'array', 'itemType': 'string' },
      arrivalCity: 'string',
      departureAirportList: { 'type': 'array', 'itemType': 'string' },
      departureCity: 'string',
      departureDate: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.arrivalAirportList)) {
      $dara.Model.validateArray(this.arrivalAirportList);
    }
    if(Array.isArray(this.departureAirportList)) {
      $dara.Model.validateArray(this.departureAirportList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StandardSearchRequestSearchControlOptions extends $dara.Model {
  /**
   * @remarks
   * Excluded airlines list
   * 
   * @example
   * 7C
   */
  airlineExcludedList?: string[];
  /**
   * @remarks
   * Preferred airlines list
   * 
   * @example
   * FD
   */
  airlinePreferList?: string[];
  /**
   * @remarks
   * Ticketing service quality
   * 
   * @example
   * A1
   */
  serviceQuality?: string;
  static names(): { [key: string]: string } {
    return {
      airlineExcludedList: 'airline_excluded_list',
      airlinePreferList: 'airline_prefer_list',
      serviceQuality: 'service_quality',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineExcludedList: { 'type': 'array', 'itemType': 'string' },
      airlinePreferList: { 'type': 'array', 'itemType': 'string' },
      serviceQuality: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.airlineExcludedList)) {
      $dara.Model.validateArray(this.airlineExcludedList);
    }
    if(Array.isArray(this.airlinePreferList)) {
      $dara.Model.validateArray(this.airlinePreferList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StandardSearchRequest extends $dara.Model {
  /**
   * @remarks
   * Number of adult passengers, range 1-9
   * 
   * @example
   * 2
   */
  adults?: number;
  /**
   * @remarks
   * Journey array. At least one of departure_city and departure_airport_list must be non-empty; when departure_airport_list has values, they must belong to the same city. At least one of arrival_city and arrival_airport_list must be non-empty; when arrival_airport_list has values, they must belong to the same city.
   * 
   * This parameter is required.
   */
  airLegs?: StandardSearchRequestAirLegs[];
  /**
   * @remarks
   * Defaults to ALL_CABIN if not specified. Cabin class ALL_CABIN: All cabin classes; Y: Economy class; FC: First class and Business class; S: Premium Economy class; YS: Economy class and Premium Economy class; YSC: Economy class, Premium Economy class, and Business class;
   * 
   * @example
   * ALL_CABIN
   */
  cabinClass?: string;
  /**
   * @remarks
   * Number of child passengers, range 0-9
   * 
   * @example
   * 1
   */
  children?: number;
  /**
   * @remarks
   * Number of infant passengers, range 0-9
   * 
   * @example
   * 1
   */
  infants?: number;
  /**
   * @remarks
   * Search control options, optional
   */
  searchControlOptions?: StandardSearchRequestSearchControlOptions;
  static names(): { [key: string]: string } {
    return {
      adults: 'adults',
      airLegs: 'air_legs',
      cabinClass: 'cabin_class',
      children: 'children',
      infants: 'infants',
      searchControlOptions: 'search_control_options',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adults: 'number',
      airLegs: { 'type': 'array', 'itemType': StandardSearchRequestAirLegs },
      cabinClass: 'string',
      children: 'number',
      infants: 'number',
      searchControlOptions: StandardSearchRequestSearchControlOptions,
    };
  }

  validate() {
    if(Array.isArray(this.airLegs)) {
      $dara.Model.validateArray(this.airLegs);
    }
    if(this.searchControlOptions && typeof (this.searchControlOptions as any).validate === 'function') {
      (this.searchControlOptions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

