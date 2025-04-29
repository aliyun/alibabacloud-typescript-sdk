// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightOrderDetailResponseBodyModuleJourneyListSegmentListLuggageDirectInfo extends $dara.Model {
  /**
   * @example
   * 0
   */
  depCityLuggageDirect?: number;
  /**
   * @example
   * 0
   */
  stopCityLuggageDirect?: number;
  static names(): { [key: string]: string } {
    return {
      depCityLuggageDirect: 'dep_city_luggage_direct',
      stopCityLuggageDirect: 'stop_city_luggage_direct',
    };
  }

  static types(): { [key: string]: any } {
    return {
      depCityLuggageDirect: 'number',
      stopCityLuggageDirect: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

