// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCenterPolicyRequestDeviceRedirects extends $dara.Model {
  /**
   * @remarks
   * The peripheral type.
   * 
   * Valid values:
   * 
   * *   printer
   * *   scanner
   * *   serialport
   * *   camera
   * *   adb
   * 
   * @example
   * camera
   */
  deviceType?: string;
  /**
   * @remarks
   * The redirection type.
   * 
   * Valid values:
   * 
   * *   deviceRedirect: enables device redirection.
   * *   usbRedirect: enables USB redirection.
   * *   off: disables any type of redirection.
   * 
   * @example
   * usbRedirect
   */
  redirectType?: string;
  static names(): { [key: string]: string } {
    return {
      deviceType: 'DeviceType',
      redirectType: 'RedirectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceType: 'string',
      redirectType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

