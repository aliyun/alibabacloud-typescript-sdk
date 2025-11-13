// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ActiveAiRtcLicenseRequest extends $dara.Model {
  /**
   * @example
   * iU1IeJech7***
   */
  authCode?: string;
  /**
   * @example
   * device-***
   */
  deviceId?: string;
  /**
   * @example
   * 17712***
   */
  licenseItemId?: string;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      deviceId: 'DeviceId',
      licenseItemId: 'LicenseItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCode: 'string',
      deviceId: 'string',
      licenseItemId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

