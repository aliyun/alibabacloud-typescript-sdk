// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TrainFeeCalculateChangeResponseBodyModuleChangeTrainDetails } from "./TrainFeeCalculateChangeResponseBodyModuleChangeTrainDetails";


export class TrainFeeCalculateChangeResponseBodyModule extends $dara.Model {
  changeTrainDetails?: TrainFeeCalculateChangeResponseBodyModuleChangeTrainDetails[];
  /**
   * @example
   * 123456
   */
  distributeOrderId?: string;
  /**
   * @example
   * 1683901850297448200
   */
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      changeTrainDetails: 'change_train_details',
      distributeOrderId: 'distribute_order_id',
      orderId: 'order_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeTrainDetails: { 'type': 'array', 'itemType': TrainFeeCalculateChangeResponseBodyModuleChangeTrainDetails },
      distributeOrderId: 'string',
      orderId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.changeTrainDetails)) {
      $dara.Model.validateArray(this.changeTrainDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

