// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HotelCityCodeListResponseBodyModuleCitysDistricts } from "./HotelCityCodeListResponseBodyModuleCitysDistricts";


export class HotelCityCodeListResponseBodyModuleCitys extends $dara.Model {
  /**
   * @example
   * 445222
   */
  cityCode?: string;
  cityName?: string;
  districts?: HotelCityCodeListResponseBodyModuleCitysDistricts[];
  static names(): { [key: string]: string } {
    return {
      cityCode: 'city_code',
      cityName: 'city_name',
      districts: 'districts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'string',
      cityName: 'string',
      districts: { 'type': 'array', 'itemType': HotelCityCodeListResponseBodyModuleCitysDistricts },
    };
  }

  validate() {
    if(Array.isArray(this.districts)) {
      $dara.Model.validateArray(this.districts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

