// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MealApplyAddRequestItineraryListCities extends $dara.Model {
  /**
   * @example
   * 330702
   */
  cityCode?: string;
  cityName?: string;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'city_code',
      cityName: 'city_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'string',
      cityName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

