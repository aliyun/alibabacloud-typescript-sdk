// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StandardSearchShrinkRequest extends $dara.Model {
  /**
   * @example
   * 2
   */
  adults?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  airLegsShrink?: string;
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

