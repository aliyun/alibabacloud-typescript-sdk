// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HotelCityCodeListResponseBodyModuleCitys } from "./HotelCityCodeListResponseBodyModuleCitys";


export class HotelCityCodeListResponseBodyModule extends $dara.Model {
  citys?: HotelCityCodeListResponseBodyModuleCitys[];
  /**
   * @example
   * 108800
   */
  proviceCode?: string;
  provinceName?: string;
  static names(): { [key: string]: string } {
    return {
      citys: 'citys',
      proviceCode: 'provice_code',
      provinceName: 'province_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      citys: { 'type': 'array', 'itemType': HotelCityCodeListResponseBodyModuleCitys },
      proviceCode: 'string',
      provinceName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.citys)) {
      $dara.Model.validateArray(this.citys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

