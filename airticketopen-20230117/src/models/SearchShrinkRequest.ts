// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchShrinkRequest extends $dara.Model {
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
  airLegsShrink?: string;
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

