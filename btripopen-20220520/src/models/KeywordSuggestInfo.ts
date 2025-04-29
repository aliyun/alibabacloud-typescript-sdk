// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class KeywordSuggestInfo extends $dara.Model {
  address?: string;
  businessAreaWithCity?: KeywordSuggestInfo;
  /**
   * @example
   * 300100
   */
  cityCode?: number;
  /**
   * @example
   * 杭州
   */
  cityName?: string;
  /**
   * @example
   * 杭州东站
   */
  displayName?: string;
  /**
   * @example
   * 53853318
   */
  hotelId?: string;
  icon?: string;
  /**
   * @example
   * 4.8分
   */
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
  type?: number;
  /**
   * @example
   * 景点
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

