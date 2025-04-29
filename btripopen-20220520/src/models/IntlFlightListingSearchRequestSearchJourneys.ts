// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IntlFlightListingSearchRequestSearchJourneysSelectedFlights } from "./IntlFlightListingSearchRequestSearchJourneysSelectedFlights";


export class IntlFlightListingSearchRequestSearchJourneys extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MEL
   */
  arrCityCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HKG
   */
  depCityCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2023-12-28
   */
  depDate?: string;
  selectedFlights?: IntlFlightListingSearchRequestSearchJourneysSelectedFlights[];
  static names(): { [key: string]: string } {
    return {
      arrCityCode: 'arr_city_code',
      depCityCode: 'dep_city_code',
      depDate: 'dep_date',
      selectedFlights: 'selected_flights',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrCityCode: 'string',
      depCityCode: 'string',
      depDate: 'string',
      selectedFlights: { 'type': 'array', 'itemType': IntlFlightListingSearchRequestSearchJourneysSelectedFlights },
    };
  }

  validate() {
    if(Array.isArray(this.selectedFlights)) {
      $dara.Model.validateArray(this.selectedFlights);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

