// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TrainNoListSearchResponseBodyModuleTrainTransferStationSearchVOsTransferDetailList } from "./TrainNoListSearchResponseBodyModuleTrainTransferStationSearchVosTransferDetailList";


export class TrainNoListSearchResponseBodyModuleTrainTransferStationSearchVOs extends $dara.Model {
  arrStation?: string;
  depStation?: string;
  lineKey?: string;
  middleStation?: string;
  transferDetailList?: TrainNoListSearchResponseBodyModuleTrainTransferStationSearchVOsTransferDetailList[];
  /**
   * @example
   * 1
   */
  transferType?: string;
  static names(): { [key: string]: string } {
    return {
      arrStation: 'arr_station',
      depStation: 'dep_station',
      lineKey: 'line_key',
      middleStation: 'middle_station',
      transferDetailList: 'transfer_detail_list',
      transferType: 'transfer_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrStation: 'string',
      depStation: 'string',
      lineKey: 'string',
      middleStation: 'string',
      transferDetailList: { 'type': 'array', 'itemType': TrainNoListSearchResponseBodyModuleTrainTransferStationSearchVOsTransferDetailList },
      transferType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.transferDetailList)) {
      $dara.Model.validateArray(this.transferDetailList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

