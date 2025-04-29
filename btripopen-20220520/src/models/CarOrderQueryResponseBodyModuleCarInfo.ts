// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CarOrderQueryResponseBodyModuleCarInfo extends $dara.Model {
  /**
   * @example
   * TRAVEL
   */
  businessCategory?: string;
  /**
   * @example
   * 1669274251000
   */
  cancelTime?: number;
  carInfo?: string;
  /**
   * @example
   * 601
   */
  carLevel?: number;
  driverCard?: string;
  /**
   * @example
   * 1669274251000
   */
  driverConfirmTime?: number;
  driverName?: string;
  /**
   * @example
   * 2900
   */
  estimatePrice?: number;
  fromAddress?: string;
  fromCityAdCode?: string;
  fromCityName?: string;
  /**
   * @example
   * true
   */
  isSpecial?: boolean;
  memo?: string;
  /**
   * @example
   * 1669274251000
   */
  payTime?: number;
  /**
   * @example
   * 1669274251000
   */
  publishTime?: number;
  realFromAddress?: string;
  realFromCityAdCode?: string;
  realFromCityName?: string;
  realToAddress?: string;
  realToCityAdCode?: string;
  realToCityName?: string;
  /**
   * @example
   * 3
   */
  serviceType?: number;
  /**
   * @example
   * v_sp_t_1,v_sp_t_2,v_sp_t_3,v_sp_t_4,v_sp_t_5
   */
  specialTypes?: string;
  /**
   * @example
   * 1669274251000
   */
  takenTime?: number;
  toAddress?: string;
  toCityAdCode?: string;
  toCityName?: string;
  /**
   * @example
   * 12
   */
  travelDistance?: string;
  static names(): { [key: string]: string } {
    return {
      businessCategory: 'business_category',
      cancelTime: 'cancel_time',
      carInfo: 'car_info',
      carLevel: 'car_level',
      driverCard: 'driver_card',
      driverConfirmTime: 'driver_confirm_time',
      driverName: 'driver_name',
      estimatePrice: 'estimate_price',
      fromAddress: 'from_address',
      fromCityAdCode: 'from_city_ad_code',
      fromCityName: 'from_city_name',
      isSpecial: 'is_special',
      memo: 'memo',
      payTime: 'pay_time',
      publishTime: 'publish_time',
      realFromAddress: 'real_from_address',
      realFromCityAdCode: 'real_from_city_ad_code',
      realFromCityName: 'real_from_city_name',
      realToAddress: 'real_to_address',
      realToCityAdCode: 'real_to_city_ad_code',
      realToCityName: 'real_to_city_name',
      serviceType: 'service_type',
      specialTypes: 'special_types',
      takenTime: 'taken_time',
      toAddress: 'to_address',
      toCityAdCode: 'to_city_ad_code',
      toCityName: 'to_city_name',
      travelDistance: 'travel_distance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessCategory: 'string',
      cancelTime: 'number',
      carInfo: 'string',
      carLevel: 'number',
      driverCard: 'string',
      driverConfirmTime: 'number',
      driverName: 'string',
      estimatePrice: 'number',
      fromAddress: 'string',
      fromCityAdCode: 'string',
      fromCityName: 'string',
      isSpecial: 'boolean',
      memo: 'string',
      payTime: 'number',
      publishTime: 'number',
      realFromAddress: 'string',
      realFromCityAdCode: 'string',
      realFromCityName: 'string',
      realToAddress: 'string',
      realToCityAdCode: 'string',
      realToCityName: 'string',
      serviceType: 'number',
      specialTypes: 'string',
      takenTime: 'number',
      toAddress: 'string',
      toCityAdCode: 'string',
      toCityName: 'string',
      travelDistance: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

