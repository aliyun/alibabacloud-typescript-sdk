// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TrainOrderQueryV2ResponseBodyModuleTrainOrderInfoTrainInfoListTrainTicketInfos } from "./TrainOrderQueryV2responseBodyModuleTrainOrderInfoTrainInfoListTrainTicketInfos";


export class TrainOrderQueryV2ResponseBodyModuleTrainOrderInfoTrainInfoList extends $dara.Model {
  arrTime?: string;
  depTime?: string;
  fromCityAdCode?: string;
  fromCityName?: string;
  fromStationName?: string;
  /**
   * @remarks
   * itemId
   * 
   * @example
   * 12312
   */
  itemId?: number;
  /**
   * @example
   * 120
   */
  runTime?: number;
  subFromCityAdCode?: string;
  subFromCityAdName?: string;
  subToCityCode?: string;
  subToCityName?: string;
  toCityAdCode?: string;
  toCityName?: string;
  toStationName?: string;
  /**
   * @example
   * D11
   */
  trainNo?: string;
  trainTicketInfos?: TrainOrderQueryV2ResponseBodyModuleTrainOrderInfoTrainInfoListTrainTicketInfos[];
  static names(): { [key: string]: string } {
    return {
      arrTime: 'arr_time',
      depTime: 'dep_time',
      fromCityAdCode: 'from_city_ad_code',
      fromCityName: 'from_city_name',
      fromStationName: 'from_station_name',
      itemId: 'item_id',
      runTime: 'run_time',
      subFromCityAdCode: 'sub_from_city_ad_code',
      subFromCityAdName: 'sub_from_city_ad_name',
      subToCityCode: 'sub_to_city_code',
      subToCityName: 'sub_to_city_name',
      toCityAdCode: 'to_city_ad_code',
      toCityName: 'to_city_name',
      toStationName: 'to_station_name',
      trainNo: 'train_no',
      trainTicketInfos: 'train_ticket_infos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrTime: 'string',
      depTime: 'string',
      fromCityAdCode: 'string',
      fromCityName: 'string',
      fromStationName: 'string',
      itemId: 'number',
      runTime: 'number',
      subFromCityAdCode: 'string',
      subFromCityAdName: 'string',
      subToCityCode: 'string',
      subToCityName: 'string',
      toCityAdCode: 'string',
      toCityName: 'string',
      toStationName: 'string',
      trainNo: 'string',
      trainTicketInfos: { 'type': 'array', 'itemType': TrainOrderQueryV2ResponseBodyModuleTrainOrderInfoTrainInfoListTrainTicketInfos },
    };
  }

  validate() {
    if(Array.isArray(this.trainTicketInfos)) {
      $dara.Model.validateArray(this.trainTicketInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

