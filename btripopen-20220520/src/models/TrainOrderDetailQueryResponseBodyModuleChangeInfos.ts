// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TrainOrderDetailQueryResponseBodyModuleChangeInfosChangeTrainInfos } from "./TrainOrderDetailQueryResponseBodyModuleChangeInfosChangeTrainInfos";


export class TrainOrderDetailQueryResponseBodyModuleChangeInfos extends $dara.Model {
  /**
   * @example
   * 1234567890
   */
  changeApplyId?: string;
  changeTrainInfos?: TrainOrderDetailQueryResponseBodyModuleChangeInfosChangeTrainInfos[];
  /**
   * @example
   * 2024-05-06 15:19:01
   */
  limitPayTime?: string;
  /**
   * @example
   * 12345
   */
  outChangeApplyId?: string;
  /**
   * @example
   * 1
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      changeApplyId: 'change_apply_id',
      changeTrainInfos: 'change_train_infos',
      limitPayTime: 'limit_pay_time',
      outChangeApplyId: 'out_change_apply_id',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeApplyId: 'string',
      changeTrainInfos: { 'type': 'array', 'itemType': TrainOrderDetailQueryResponseBodyModuleChangeInfosChangeTrainInfos },
      limitPayTime: 'string',
      outChangeApplyId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.changeTrainInfos)) {
      $dara.Model.validateArray(this.changeTrainInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

