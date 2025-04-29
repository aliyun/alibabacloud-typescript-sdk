// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainFeeCalculateChangeShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  changeTrainDetailsShrink?: string;
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
      changeTrainDetailsShrink: 'change_train_details',
      distributeOrderId: 'distribute_order_id',
      orderId: 'order_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeTrainDetailsShrink: 'string',
      distributeOrderId: 'string',
      orderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

