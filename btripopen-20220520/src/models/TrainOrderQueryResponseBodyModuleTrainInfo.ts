// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainOrderQueryResponseBodyModuleTrainInfo extends $dara.Model {
  /**
   * @example
   * 2022-05-15T22:27Z
   */
  arrTime?: string;
  /**
   * @example
   * 2022-05-15T22:27Z
   */
  depTime?: string;
  fromCityAdCode?: string;
  fromStationName?: string;
  /**
   * @example
   * 100
   */
  runTime?: number;
  toCityAdCode?: string;
  toStationName?: string;
  /**
   * @example
   * CS-150
   */
  trainNo?: string;
  static names(): { [key: string]: string } {
    return {
      arrTime: 'arr_time',
      depTime: 'dep_time',
      fromCityAdCode: 'from_city_ad_code',
      fromStationName: 'from_station_name',
      runTime: 'run_time',
      toCityAdCode: 'to_city_ad_code',
      toStationName: 'to_station_name',
      trainNo: 'train_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrTime: 'string',
      depTime: 'string',
      fromCityAdCode: 'string',
      fromStationName: 'string',
      runTime: 'number',
      toCityAdCode: 'string',
      toStationName: 'string',
      trainNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

