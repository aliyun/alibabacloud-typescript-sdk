// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeAndroidInstanceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The number of instances to add to the instance group.
   * 
   * @example
   * 2
   */
  increaseNumberOfInstance?: number;
  /**
   * @remarks
   * The ID of the instance group.
   * 
   * @example
   * ag-asguicdjh****
   */
  instanceGroupId?: string;
  paidCallBackUrl?: string;
  /**
   * @remarks
   * The promotion ID.
   */
  promotionId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      increaseNumberOfInstance: 'IncreaseNumberOfInstance',
      instanceGroupId: 'InstanceGroupId',
      paidCallBackUrl: 'PaidCallBackUrl',
      promotionId: 'PromotionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      increaseNumberOfInstance: 'number',
      instanceGroupId: 'string',
      paidCallBackUrl: 'string',
      promotionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

