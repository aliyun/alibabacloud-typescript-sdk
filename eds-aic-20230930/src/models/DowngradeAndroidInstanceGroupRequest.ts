// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DowngradeAndroidInstanceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the cloud phone instances that you want to delete.
   */
  androidInstanceIds?: string[];
  /**
   * @remarks
   * Specifies whether to enable the auto-payment feature. Default value: false.
   * 
   * Valid values:
   * 
   * *   true: enables the auto-payment feature. Ensure your account has sufficient balance to use this feature.
   * *   false: disables the auto-payment feature. This requires manual payment each time you place an order.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The ID of the instance group.
   * 
   * This parameter is required.
   * 
   * @example
   * ag-cuv4scs4obxhs****
   */
  instanceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      androidInstanceIds: 'AndroidInstanceIds',
      autoPay: 'AutoPay',
      instanceGroupId: 'InstanceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceIds: { 'type': 'array', 'itemType': 'string' },
      autoPay: 'boolean',
      instanceGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.androidInstanceIds)) {
      $dara.Model.validateArray(this.androidInstanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

