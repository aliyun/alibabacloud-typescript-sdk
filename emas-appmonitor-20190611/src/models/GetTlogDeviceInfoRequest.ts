// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTlogDeviceInfoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 233588686
   */
  appKey?: number;
  /**
   * @example
   * ad-0008ane9g0qcyu90bpm1-829
   */
  deviceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * android
   */
  os?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      deviceId: 'DeviceId',
      os: 'Os',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      deviceId: 'string',
      os: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

