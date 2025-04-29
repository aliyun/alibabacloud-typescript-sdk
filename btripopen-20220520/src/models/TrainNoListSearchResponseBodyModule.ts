// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TrainNoListSearchResponseBodyModuleTrainStationSearchVOS } from "./TrainNoListSearchResponseBodyModuleTrainStationSearchVos";
import { TrainNoListSearchResponseBodyModuleTrainTransferStationSearchVOs } from "./TrainNoListSearchResponseBodyModuleTrainTransferStationSearchVos";


export class TrainNoListSearchResponseBodyModule extends $dara.Model {
  trainStationSearchVOS?: TrainNoListSearchResponseBodyModuleTrainStationSearchVOS[];
  trainTransferStationSearchVOs?: TrainNoListSearchResponseBodyModuleTrainTransferStationSearchVOs[];
  static names(): { [key: string]: string } {
    return {
      trainStationSearchVOS: 'train_station_search_v_o_s',
      trainTransferStationSearchVOs: 'train_transfer_station_search_v_os',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trainStationSearchVOS: { 'type': 'array', 'itemType': TrainNoListSearchResponseBodyModuleTrainStationSearchVOS },
      trainTransferStationSearchVOs: { 'type': 'array', 'itemType': TrainNoListSearchResponseBodyModuleTrainTransferStationSearchVOs },
    };
  }

  validate() {
    if(Array.isArray(this.trainStationSearchVOS)) {
      $dara.Model.validateArray(this.trainStationSearchVOS);
    }
    if(Array.isArray(this.trainTransferStationSearchVOs)) {
      $dara.Model.validateArray(this.trainTransferStationSearchVOs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

