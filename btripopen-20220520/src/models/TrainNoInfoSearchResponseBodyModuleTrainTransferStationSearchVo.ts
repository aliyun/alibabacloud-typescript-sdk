// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TrainNoInfoSearchResponseBodyModuleTrainTransferStationSearchVOTransferDetailList } from "./TrainNoInfoSearchResponseBodyModuleTrainTransferStationSearchVotransferDetailList";


export class TrainNoInfoSearchResponseBodyModuleTrainTransferStationSearchVO extends $dara.Model {
  transferDetailList?: TrainNoInfoSearchResponseBodyModuleTrainTransferStationSearchVOTransferDetailList[];
  /**
   * @example
   * 1
   */
  transferType?: string;
  static names(): { [key: string]: string } {
    return {
      transferDetailList: 'transfer_detail_list',
      transferType: 'transfer_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      transferDetailList: { 'type': 'array', 'itemType': TrainNoInfoSearchResponseBodyModuleTrainTransferStationSearchVOTransferDetailList },
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

