// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CarApplyAddRequestTravelerStandardCarCitySet extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  cityCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
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

