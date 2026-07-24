// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchRequestAirLegs extends $dara.Model {
  /**
   * @remarks
   * The list of three-letter codes of arrival airports.
   * 
   * @example
   * MFM
   */
  arrivalAirportList?: string[];
  /**
   * @remarks
   * The three-letter code of the arrival city.
   * 
   * @example
   * MFM
   */
  arrivalCity?: string;
  /**
   * @remarks
   * The list of three-letter codes of departure airports.
   * 
   * @example
   * PVG
   */
  departureAirportList?: string[];
  /**
   * @remarks
   * The three-letter code of the departure city.
   * 
   * @example
   * SHA
   */
  departureCity?: string;
  /**
   * @remarks
   * The departure date (for example, yyyyMMdd).
   * 
   * This parameter is required.
   * 
   * @example
   * 20230310
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

export class SearchRequestSearchControlOptions extends $dara.Model {
  /**
   * @remarks
   * The list of excluded airlines.
   * 
   * @example
   * 7C
   */
  airlineExcludedList?: string[];
  /**
   * @remarks
   * The list of preferred airlines.
   * 
   * @example
   * FD
   */
  airlinePreferList?: string[];
  /**
   * @remarks
   * The service quality identifier.
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

export class SearchRequest extends $dara.Model {
  /**
   * @remarks
   * The number of adult passengers. Valid values: 1 to 9.
   * 
   * @example
   * 2
   */
  adults?: number;
  /**
   * @remarks
   * The journey array.
   * 
   * This parameter is required.
   */
  airLegs?: SearchRequestAirLegs[];
  /**
   * @remarks
   * The cabin class. Valid values: ALL_CABIN: all cabin classes. Y: economy class. FC: first class and business class. S: premium economy class. YS: economy class and premium economy class. YSC: economy class, premium economy class, and business class.
   * 
   * @example
   * ALL_CABIN
   */
  cabinClass?: string;
  /**
   * @remarks
   * The number of child passengers. Valid values: 0 to 9.
   * 
   * @example
   * 1
   */
  children?: number;
  /**
   * @remarks
   * The number of infant passengers. Valid values: 0 to 9.
   * 
   * @example
   * 1
   */
  infants?: number;
  /**
   * @remarks
   * The search control options. This parameter is optional.
   */
  searchControlOptions?: SearchRequestSearchControlOptions;
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
      airLegs: { 'type': 'array', 'itemType': SearchRequestAirLegs },
      cabinClass: 'string',
      children: 'number',
      infants: 'number',
      searchControlOptions: SearchRequestSearchControlOptions,
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

