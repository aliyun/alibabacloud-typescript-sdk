// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ActivateEdgeMobileAgentRequest extends $dara.Model {
  /**
   * @remarks
   * The device class. Valid values: BOX, PHONE, PAD, and OTHER.
   * 
   * @example
   * BOX
   */
  deviceClass?: string;
  /**
   * @remarks
   * The unique identifier of the device.
   * 
   * This parameter is required.
   * 
   * @example
   * sn-0001eevqa6jeapl*****
   */
  deviceId?: string;
  /**
   * @remarks
   * The extended metadata of the device. The value is a JSON string that contains information such as fingerprint, deviceModel, and firmwareVersion.
   * 
   * @example
   * {"frmwareVersion": "1.0.0"}
   */
  deviceMeta?: string;
  /**
   * @remarks
   * The license key.
   * 
   * This parameter is required.
   * 
   * @example
   * lic-ez197xvdf0j5eo0*****
   */
  licenseKey?: string;
  static names(): { [key: string]: string } {
    return {
      deviceClass: 'DeviceClass',
      deviceId: 'DeviceId',
      deviceMeta: 'DeviceMeta',
      licenseKey: 'LicenseKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceClass: 'string',
      deviceId: 'string',
      deviceMeta: 'string',
      licenseKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

