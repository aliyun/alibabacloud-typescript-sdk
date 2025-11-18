// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StandardSearchRequestAirLegs extends $dara.Model {
  /**
   * @example
   * MFM
   */
  arrivalAirportList?: string[];
  /**
   * @example
   * MFM
   */
  arrivalCity?: string;
  /**
   * @example
   * PVG
   */
  departureAirportList?: string[];
  /**
   * @example
   * SHA
   */
  departureCity?: string;
  /**
   * @remarks
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
   * @example
   * 7C
   */
  airlineExcludedList?: string[];
  /**
   * @example
   * FD
   */
  airlinePreferList?: string[];
  /**
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
   * @example
   * 2
   */
  adults?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  airLegs?: StandardSearchRequestAirLegs[];
  /**
   * @example
   * ALL_CABIN
   */
  cabinClass?: string;
  /**
   * @example
   * 1
   */
  children?: number;
  /**
   * @example
   * 1
   */
  infants?: number;
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

