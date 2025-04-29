// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TrainOrderQueryV2ResponseBodyModuleTrainOrderInfoTrainInfoList } from "./TrainOrderQueryV2responseBodyModuleTrainOrderInfoTrainInfoList";
import { TrainOrderQueryV2ResponseBodyModuleTrainOrderInfoTrainTransferInfo } from "./TrainOrderQueryV2responseBodyModuleTrainOrderInfoTrainTransferInfo";


export class TrainOrderQueryV2ResponseBodyModuleTrainOrderInfo extends $dara.Model {
  trainInfoList?: TrainOrderQueryV2ResponseBodyModuleTrainOrderInfoTrainInfoList[];
  trainTransferInfo?: TrainOrderQueryV2ResponseBodyModuleTrainOrderInfoTrainTransferInfo;
  static names(): { [key: string]: string } {
    return {
      trainInfoList: 'train_info_list',
      trainTransferInfo: 'train_transfer_info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trainInfoList: { 'type': 'array', 'itemType': TrainOrderQueryV2ResponseBodyModuleTrainOrderInfoTrainInfoList },
      trainTransferInfo: TrainOrderQueryV2ResponseBodyModuleTrainOrderInfoTrainTransferInfo,
    };
  }

  validate() {
    if(Array.isArray(this.trainInfoList)) {
      $dara.Model.validateArray(this.trainInfoList);
    }
    if(this.trainTransferInfo && typeof (this.trainTransferInfo as any).validate === 'function') {
      (this.trainTransferInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

