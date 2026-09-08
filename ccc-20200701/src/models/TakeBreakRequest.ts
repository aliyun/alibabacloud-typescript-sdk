// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TakeBreakRequest extends $dara.Model {
  /**
   * @remarks
   * Break status code. Customers can define any custom break status.
   * 
   * This parameter is required.
   * 
   * @example
   * lunchtime
   */
  code?: string;
  /**
   * @remarks
   * Device ID. This parameter is meaningless and can be filled with any value.
   * 
   * @example
   * device
   */
  deviceId?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * Agent ID. If not specified, the agent mapped to the current RAM account is used by default.
   * 
   * @example
   * agent@ccc-test
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      deviceId: 'DeviceId',
      instanceId: 'InstanceId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      deviceId: 'string',
      instanceId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

