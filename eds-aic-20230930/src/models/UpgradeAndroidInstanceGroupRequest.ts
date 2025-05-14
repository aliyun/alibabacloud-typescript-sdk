// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeAndroidInstanceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the auto-payment feature.
   * 
   * Valid values:
   * 
   * *   true: enables the auto-payment feature. Make sure that your Alibaba Cloud account has sufficient balance.
   * *   false: disables the auto-payment feature. You need to manually complete the payment process.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The number of instances that you want to increase.
   * 
   * @example
   * 10
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
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      increaseNumberOfInstance: 'IncreaseNumberOfInstance',
      instanceGroupId: 'InstanceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      increaseNumberOfInstance: 'number',
      instanceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

