// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchRequestAirLegs extends $dara.Model {
  /**
   * @remarks
   * arrival airport [IATA airport code] list
   * 
   * @example
   * MFM
   */
  arrivalAirportList?: string[];
  /**
   * @remarks
   * arrival city code
   * 
   * @example
   * MFM
   */
  arrivalCity?: string;
  /**
   * @remarks
   * departure airport [IATA airport code] list
   * 
   * @example
   * PVG
   */
  departureAirportList?: string[];
  /**
   * @remarks
   * departure city code
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
   * excluded airlines list
   * 
   * @example
   * 7C
   */
  airlineExcludedList?: string[];
  /**
   * @remarks
   * preferred airlines list
   * 
   * @example
   * FD
   */
  airlinePreferList?: string[];
  /**
   * @remarks
   * service quality
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
   * adult passenger amount 1-9
   * 
   * @example
   * 2
   */
  adults?: number;
  /**
   * @remarks
   * itinerary list
   * 
   * This parameter is required.
   */
  airLegs?: SearchRequestAirLegs[];
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
   * search controls
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

