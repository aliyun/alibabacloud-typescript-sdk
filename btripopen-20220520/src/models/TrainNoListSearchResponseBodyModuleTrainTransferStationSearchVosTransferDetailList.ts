// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TrainNoListSearchResponseBodyModuleTrainTransferStationSearchVOsTransferDetailListSeatInfos } from "./TrainNoListSearchResponseBodyModuleTrainTransferStationSearchVosTransferDetailListSeatInfos";


export class TrainNoListSearchResponseBodyModuleTrainTransferStationSearchVOsTransferDetailList extends $dara.Model {
  /**
   * @example
   * 1
   */
  arrDayTag?: string;
  /**
   * @example
   * 123344
   */
  arrStationCode?: string;
  arrStationName?: string;
  /**
   * @example
   * 2024-05-07 14:46:06
   */
  arrTime?: string;
  /**
   * @example
   * 234567
   */
  costTime?: string;
  /**
   * @example
   * 12334
   */
  depStationCode?: string;
  depStationName?: string;
  /**
   * @example
   * 2024-05-06 14:46:06
   */
  depTime?: string;
  /**
   * @example
   * 1
   */
  isEndStation?: number;
  /**
   * @example
   * 0
   */
  isStartStation?: number;
  /**
   * @example
   * 105000
   */
  price?: string;
  /**
   * @example
   * 1
   */
  saleFlag?: string;
  saleFlagMsg?: string;
  seatInfos?: TrainNoListSearchResponseBodyModuleTrainTransferStationSearchVOsTransferDetailListSeatInfos[];
  /**
   * @example
   * 0
   */
  segmentIndex?: string;
  /**
   * @example
   * K2345
   */
  trainNo?: string;
  /**
   * @example
   * 1
   */
  trainType?: string;
  static names(): { [key: string]: string } {
    return {
      arrDayTag: 'arr_day_tag',
      arrStationCode: 'arr_station_code',
      arrStationName: 'arr_station_name',
      arrTime: 'arr_time',
      costTime: 'cost_time',
      depStationCode: 'dep_station_code',
      depStationName: 'dep_station_name',
      depTime: 'dep_time',
      isEndStation: 'is_end_station',
      isStartStation: 'is_start_station',
      price: 'price',
      saleFlag: 'sale_flag',
      saleFlagMsg: 'sale_flag_msg',
      seatInfos: 'seat_infos',
      segmentIndex: 'segment_index',
      trainNo: 'train_no',
      trainType: 'train_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrDayTag: 'string',
      arrStationCode: 'string',
      arrStationName: 'string',
      arrTime: 'string',
      costTime: 'string',
      depStationCode: 'string',
      depStationName: 'string',
      depTime: 'string',
      isEndStation: 'number',
      isStartStation: 'number',
      price: 'string',
      saleFlag: 'string',
      saleFlagMsg: 'string',
      seatInfos: { 'type': 'array', 'itemType': TrainNoListSearchResponseBodyModuleTrainTransferStationSearchVOsTransferDetailListSeatInfos },
      segmentIndex: 'string',
      trainNo: 'string',
      trainType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.seatInfos)) {
      $dara.Model.validateArray(this.seatInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

