// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchShrinkRequest extends $dara.Model {
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
  airLegsShrink?: string;
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

