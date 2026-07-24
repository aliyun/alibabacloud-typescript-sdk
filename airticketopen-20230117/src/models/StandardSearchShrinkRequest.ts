// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StandardSearchShrinkRequest extends $dara.Model {
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
  airLegsShrink?: string;
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
  searchControlOptionsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      adults: 'adults',
      airLegsShrink: 'air_legs',
      cabinClass: 'cabin_class',
      children: 'children',
      infants: 'infants',
      searchControlOptionsShrink: 'search_control_options',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adults: 'number',
      airLegsShrink: 'string',
      cabinClass: 'string',
      children: 'number',
      infants: 'number',
      searchControlOptionsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

