// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelExceedApplyQueryResponseBodyModuleApplyIntentionInfoDo extends $dara.Model {
  /**
   * @example
   * 2021-07-08
   */
  checkIn?: string;
  /**
   * @example
   * 2021-07-08
   */
  checkOut?: string;
  /**
   * @example
   * SHA
   */
  cityCode?: string;
  cityName?: string;
  /**
   * @example
   * 10000
   */
  price?: number;
  /**
   * @example
   * true
   */
  together?: boolean;
  /**
   * @example
   * 16
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      checkIn: 'check_in',
      checkOut: 'check_out',
      cityCode: 'city_code',
      cityName: 'city_name',
      price: 'price',
      together: 'together',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkIn: 'string',
      checkOut: 'string',
      cityCode: 'string',
      cityName: 'string',
      price: 'number',
      together: 'boolean',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

