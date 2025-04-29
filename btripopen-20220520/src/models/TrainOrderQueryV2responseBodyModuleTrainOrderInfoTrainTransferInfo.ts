// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainOrderQueryV2ResponseBodyModuleTrainOrderInfoTrainTransferInfo extends $dara.Model {
  /**
   * @example
   * 200
   */
  costTime?: string;
  /**
   * @example
   * 2022-11-15 00:00:00
   */
  endTime?: string;
  fromCityAdCode?: string;
  fromCityName?: string;
  fromStationName?: string;
  middleCity?: string;
  middleCityAdCode?: string;
  /**
   * @example
   * 2023-01-29 18:10:00
   */
  middleDate?: string;
  middleStation?: string;
  middleType?: string;
  /**
   * @example
   * 2022-11-01 00:00:00
   */
  startTime?: string;
  subFromCityAdCode?: string;
  subFromCityAdName?: string;
  subMiddleCityCode?: string;
  subMiddleCityName?: string;
  subToCityCode?: string;
  subToCityName?: string;
  toCityAdCode?: string;
  toCityName?: string;
  toStationName?: string;
  /**
   * @example
   * 60
   */
  waitTime?: string;
  static names(): { [key: string]: string } {
    return {
      costTime: 'cost_time',
      endTime: 'end_time',
      fromCityAdCode: 'from_city_ad_code',
      fromCityName: 'from_city_name',
      fromStationName: 'from_station_name',
      middleCity: 'middle_city',
      middleCityAdCode: 'middle_city_ad_code',
      middleDate: 'middle_date',
      middleStation: 'middle_station',
      middleType: 'middle_type',
      startTime: 'start_time',
      subFromCityAdCode: 'sub_from_city_ad_code',
      subFromCityAdName: 'sub_from_city_ad_name',
      subMiddleCityCode: 'sub_middle_city_code',
      subMiddleCityName: 'sub_middle_city_name',
      subToCityCode: 'sub_to_city_code',
      subToCityName: 'sub_to_city_name',
      toCityAdCode: 'to_city_ad_code',
      toCityName: 'to_city_name',
      toStationName: 'to_station_name',
      waitTime: 'wait_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costTime: 'string',
      endTime: 'string',
      fromCityAdCode: 'string',
      fromCityName: 'string',
      fromStationName: 'string',
      middleCity: 'string',
      middleCityAdCode: 'string',
      middleDate: 'string',
      middleStation: 'string',
      middleType: 'string',
      startTime: 'string',
      subFromCityAdCode: 'string',
      subFromCityAdName: 'string',
      subMiddleCityCode: 'string',
      subMiddleCityName: 'string',
      subToCityCode: 'string',
      subToCityName: 'string',
      toCityAdCode: 'string',
      toCityName: 'string',
      toStationName: 'string',
      waitTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

