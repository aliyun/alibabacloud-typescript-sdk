// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightListingSearchRequest extends $dara.Model {
  airlineCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  arrCityCode?: string;
  cabinClass?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  depCityCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  depDate?: string;
  static names(): { [key: string]: string } {
    return {
      airlineCode: 'airline_code',
      arrCityCode: 'arr_city_code',
      cabinClass: 'cabin_class',
      depCityCode: 'dep_city_code',
      depDate: 'dep_date',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineCode: 'string',
      arrCityCode: 'string',
      cabinClass: 'string',
      depCityCode: 'string',
      depDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

