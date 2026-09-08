// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLoginDetailsRequest extends $dara.Model {
  /**
   * @remarks
   * Chat Device ID.
   * 
   * @example
   * 4c51c9116c36537cb850dc1081d745df
   */
  chatDeviceId?: string;
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
   * Agent ID. This parameter is optional. If not specified, the agent mapped to the current RAM account is used by default.
   * 
   * @example
   * agent@ccc-test
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      chatDeviceId: 'ChatDeviceId',
      instanceId: 'InstanceId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatDeviceId: 'string',
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

