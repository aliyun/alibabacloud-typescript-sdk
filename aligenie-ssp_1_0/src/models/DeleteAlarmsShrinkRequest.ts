// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAlarmsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Device identity information
   * 
   * This parameter is required.
   */
  deviceInfoShrink?: string;
  /**
   * @remarks
   * Input parameters for the service request
   * 
   * This parameter is required.
   */
  payloadShrink?: string;
  /**
   * @remarks
   * User Identifier information
   * 
   * This parameter is required.
   */
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      deviceInfoShrink: 'DeviceInfo',
      payloadShrink: 'Payload',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfoShrink: 'string',
      payloadShrink: 'string',
      userInfoShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

