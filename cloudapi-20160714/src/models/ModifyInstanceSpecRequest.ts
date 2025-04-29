// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceSpecRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether payment is automatically made during renewal. Valid values:
   * 
   * *   **True**: Automatic payment is enabled. Make sure that your Alibaba Cloud account has adequate balance.
   * *   **False**: Automatic payment is disabled. You have to manually pay in the console. Log on to the console. In the upper-right corner, choose **Expenses > User Center**. In the left-side navigation pane, click **Orders**. On the page that appears, find your order and complete the payment.
   * 
   * Default value: **False**.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * apigateway-cn-v6419k43xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The specifications of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * api.s1.small
   */
  instanceSpec?: string;
  /**
   * @remarks
   * Specifies whether to upgrade or downgrade the instance. Valid values:
   * 
   * *   **UPGRADE**
   * *   **DOWNGRADE**
   * 
   * Default value: **UPGRADE**.
   * 
   * @example
   * UPGRADE
   */
  modifyAction?: string;
  /**
   * @remarks
   * Specifies whether to skip the Waiting for Traffic Switchover state. During the upgrade or downgrade, a new outbound IP address may be added to the API Gateway instance. The Waiting for Traffic Switchover state is used to remind users of adding the new outbound IP address to the whitelist. If you set the SkipWaitSwitch parameter to true, the instance does not enter the Waiting for Traffic Switchover state when a new outbound IP address is available. Instead, the system sends internal messages to the user.
   * 
   * @example
   * false
   */
  skipWaitSwitch?: boolean;
  /**
   * @remarks
   * The password.
   * 
   * This parameter is required.
   * 
   * @example
   * b5845042-2f2f-4e96-bd5c-36c6e5c2a68c
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      instanceId: 'InstanceId',
      instanceSpec: 'InstanceSpec',
      modifyAction: 'ModifyAction',
      skipWaitSwitch: 'SkipWaitSwitch',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      instanceId: 'string',
      instanceSpec: 'string',
      modifyAction: 'string',
      skipWaitSwitch: 'boolean',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

