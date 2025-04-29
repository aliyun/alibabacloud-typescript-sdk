// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyModifyRequestExternalTravelerStandardHotelCitys extends $dara.Model {
  /**
   * @example
   * 0
   */
  cityCode?: string;
  cityName?: string;
  /**
   * @example
   * 1001
   */
  fee?: number;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'city_code',
      cityName: 'city_name',
      fee: 'fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'string',
      cityName: 'string',
      fee: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

