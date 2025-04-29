// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelCityCodeListRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  countryCode?: string;
  static names(): { [key: string]: string } {
    return {
      countryCode: 'country_code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      countryCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

