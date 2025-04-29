// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TrainFeeCalculateChangeRequestChangeTrainDetails } from "./TrainFeeCalculateChangeRequestChangeTrainDetails";


export class TrainFeeCalculateChangeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  changeTrainDetails?: TrainFeeCalculateChangeRequestChangeTrainDetails[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  distributeOrderId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2627694109810885616
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
      changeTrainDetails: { 'type': 'array', 'itemType': TrainFeeCalculateChangeRequestChangeTrainDetails },
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

