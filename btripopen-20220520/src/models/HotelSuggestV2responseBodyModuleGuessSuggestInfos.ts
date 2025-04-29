// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelSuggestV2ResponseBodyModuleGuessSuggestInfos extends $dara.Model {
  address?: string;
  /**
   * @example
   * 300100
   */
  cityCode?: number;
  cityName?: string;
  displayName?: string;
  /**
   * @example
   * 53853318
   */
  hotelId?: string;
  /**
   * @example
   * https://gw.alicdn.com/imgextra/i3/O1CN01qKg25r1rKLOKxT3vB_!!6000000005612-2-tps-32-32.png
   */
  icon?: string;
  point?: string;
  /**
   * @example
   * 524
   */
  price?: string;
  /**
   * @example
   * 0
   */
  region?: number;
  /**
   * @example
   * 10
   */
  type?: number;
  typeDesc?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      cityCode: 'city_code',
      cityName: 'city_name',
      displayName: 'display_name',
      hotelId: 'hotel_id',
      icon: 'icon',
      point: 'point',
      price: 'price',
      region: 'region',
      type: 'type',
      typeDesc: 'type_desc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      cityCode: 'number',
      cityName: 'string',
      displayName: 'string',
      hotelId: 'string',
      icon: 'string',
      point: 'string',
      price: 'string',
      region: 'number',
      type: 'number',
      typeDesc: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

