// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnbindPhoneRequest extends $dara.Model {
  /**
   * @remarks
   * AppKey information.
   * 
   * This parameter is required.
   * 
   * @example
   * 23267207
   */
  appKey?: number;
  /**
   * @remarks
   * The unique identity of the device. It is 32 characters long and consists of digits and lowercase letters.
   * 
   * This parameter is required.
   * 
   * @example
   * eb5f741d83d04d34807d229999eefa52
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

