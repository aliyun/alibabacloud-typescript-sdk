// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCenterPolicyRequestDeviceRedirects extends $dara.Model {
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
   * *   deviceRedirect: device redirection
   * *   usbRedirect: USB redirection.
   * *   off: any type of redirection.
   * 
   * @example
   * deviceRedirect
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

