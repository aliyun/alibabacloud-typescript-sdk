// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckDeviceRequest extends $dara.Model {
  /**
   * @remarks
   * The AppKey value.
   * 
   * This parameter is required.
   * 
   * @example
   * 23419851
   */
  appKey?: number;
  /**
   * @remarks
   * The unique identity of the device in Push. It is 32 characters long and contains only digits and lowercase letters.
   * 
   * This parameter is required.
   * 
   * @example
   * ae296f3b04a58a05b30c95f****
   */
  deviceId?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      deviceId: 'DeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      deviceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

