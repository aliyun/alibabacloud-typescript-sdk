// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TrainNoInfoSearchResponseBodyModuleTrainStationSearchVO } from "./TrainNoInfoSearchResponseBodyModuleTrainStationSearchVo";
import { TrainNoInfoSearchResponseBodyModuleTrainTransferStationSearchVO } from "./TrainNoInfoSearchResponseBodyModuleTrainTransferStationSearchVo";


export class TrainNoInfoSearchResponseBodyModule extends $dara.Model {
  trainStationSearchVO?: TrainNoInfoSearchResponseBodyModuleTrainStationSearchVO;
  trainTransferStationSearchVO?: TrainNoInfoSearchResponseBodyModuleTrainTransferStationSearchVO;
  static names(): { [key: string]: string } {
    return {
      trainStationSearchVO: 'train_station_search_v_o',
      trainTransferStationSearchVO: 'train_transfer_station_search_v_o',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trainStationSearchVO: TrainNoInfoSearchResponseBodyModuleTrainStationSearchVO,
      trainTransferStationSearchVO: TrainNoInfoSearchResponseBodyModuleTrainTransferStationSearchVO,
    };
  }

  validate() {
    if(this.trainStationSearchVO && typeof (this.trainStationSearchVO as any).validate === 'function') {
      (this.trainStationSearchVO as any).validate();
    }
    if(this.trainTransferStationSearchVO && typeof (this.trainTransferStationSearchVO as any).validate === 'function') {
      (this.trainTransferStationSearchVO as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

