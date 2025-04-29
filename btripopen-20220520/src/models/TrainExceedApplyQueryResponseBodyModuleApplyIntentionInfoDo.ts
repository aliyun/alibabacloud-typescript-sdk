// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainExceedApplyQueryResponseBodyModuleApplyIntentionInfoDO extends $dara.Model {
  /**
   * @example
   * BJS
   */
  arrCity?: string;
  arrCityName?: string;
  arrStation?: string;
  /**
   * @example
   * 2022-02-24T09:55Z
   */
  arrTime?: string;
  /**
   * @example
   * SHA
   */
  depCity?: string;
  depCityName?: string;
  depStation?: string;
  /**
   * @example
   * 2022-02-24T09:55Z
   */
  depTime?: string;
  /**
   * @example
   * 1000
   */
  price?: number;
  seatName?: string;
  /**
   * @example
   * G39
   */
  trainNo?: string;
  trainTypeDesc?: string;
  /**
   * @example
   * 32
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      arrCity: 'arr_city',
      arrCityName: 'arr_city_name',
      arrStation: 'arr_station',
      arrTime: 'arr_time',
      depCity: 'dep_city',
      depCityName: 'dep_city_name',
      depStation: 'dep_station',
      depTime: 'dep_time',
      price: 'price',
      seatName: 'seat_name',
      trainNo: 'train_no',
      trainTypeDesc: 'train_type_desc',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrCity: 'string',
      arrCityName: 'string',
      arrStation: 'string',
      arrTime: 'string',
      depCity: 'string',
      depCityName: 'string',
      depStation: 'string',
      depTime: 'string',
      price: 'number',
      seatName: 'string',
      trainNo: 'string',
      trainTypeDesc: 'string',
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

