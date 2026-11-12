// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemovePolarClawDevicePairRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * The ID of the paired device to be removed. The physical device must first initiate pairing through the PolarClaw mobile app and be approved by calling ApprovePolarClawDevicePair. After approval, the device is added to the paired device list returned by ListPolarClawDevicePairs, from which you can obtain the DeviceId. Pairing initiation cannot be completed solely through API calls.
   * 
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

