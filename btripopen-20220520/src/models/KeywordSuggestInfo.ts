// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class KeywordSuggestInfo extends $dara.Model {
  /**
   * @remarks
   * The address.
   * 
   * @example
   * 杭州湖墅南路XX号
   */
  address?: string;
  /**
   * @remarks
   * The business area.
   */
  businessAreaWithCity?: KeywordSuggestInfo;
  /**
   * @remarks
   * The city code.
   * 
   * @example
   * 300100
   */
  cityCode?: number;
  /**
   * @remarks
   * The city name.
   * 
   * @example
   * 杭州
   */
  cityName?: string;
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * 杭州JW万豪酒店
   */
  displayName?: string;
  /**
   * @remarks
   * The hotel ID.
   * 
   * @example
   * 53853318
   */
  hotelId?: string;
  /**
   * @remarks
   * The icon.
   * 
   * @example
   * https://gw.alicdn.com/imgextra/i3/O1CN01qKg25r1rKLOKxT3vB_!!6000000005612-2-tps-32-32.png
   */
  icon?: string;
  /**
   * @remarks
   * The rating.
   * 
   * @example
   * 4.8分
   */
  point?: string;
  /**
   * @remarks
   * The hotel starting price, in CNY.
   * 
   * @example
   * 524
   */
  price?: string;
  /**
   * @remarks
   * The region.
   * 
   * @example
   * 0
   */
  region?: number;
  /**
   * @remarks
   * The type.
   * 
   * @example
   * 10
   */
  type?: number;
  /**
   * @remarks
   * The type description.
   * 
   * @example
   * 酒店
   */
  typeDesc?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      businessAreaWithCity: 'business_area_with_city',
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
      businessAreaWithCity: KeywordSuggestInfo,
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
    if(this.businessAreaWithCity && typeof (this.businessAreaWithCity as any).validate === 'function') {
      (this.businessAreaWithCity as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

