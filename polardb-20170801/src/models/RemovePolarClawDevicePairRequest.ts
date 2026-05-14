// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemovePolarClawDevicePairRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * device-mac-789
   */
  deviceId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      deviceId: 'DeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
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

