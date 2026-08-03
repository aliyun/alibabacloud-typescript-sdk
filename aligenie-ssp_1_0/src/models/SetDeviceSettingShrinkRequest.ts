// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDeviceSettingShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * List of user identifier information.
   * 
   * This parameter is required.
   */
  deviceInfoShrink?: string;
  /**
   * @remarks
   * The collection of keys specified for device settings:  
   * Do Not Disturb mode: nightMode
   * 
   * This parameter is required.
   * 
   * @example
   * nightMode
   */
  key?: string;
  /**
   * @remarks
   * Attribute Value
   * 
   * @example
   * {"enable":true}
   */
  value?: any;
  static names(): { [key: string]: string } {
    return {
      deviceInfoShrink: 'DeviceInfo',
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfoShrink: 'string',
      key: 'string',
      value: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

