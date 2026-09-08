// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetAgentStateRequest extends $dara.Model {
  /**
   * @remarks
   * A string that identifies the device. The value is not processed by the system and can be any string.
   * 
   * @example
   * device
   */
  deviceId?: string;
  /**
   * @remarks
   * The ID of the Cloud Call Center (CCC) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the agent. This parameter is optional. If omitted, the agent mapped to the current RAM account is reset.
   * 
   * @example
   * agent@ccc-test
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      instanceId: 'InstanceId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

