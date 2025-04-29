// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelCityCodeListResponseBodyModuleCitysDistricts extends $dara.Model {
  /**
   * @example
   * 330000
   */
  districtCode?: string;
  districtName?: string;
  static names(): { [key: string]: string } {
    return {
      districtCode: 'district_code',
      districtName: 'district_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      districtCode: 'string',
      districtName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

