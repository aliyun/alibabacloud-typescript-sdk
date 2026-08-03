// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeviceStatusDetailShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * List of device identification information.
   * 
   * This parameter is required.
   */
  deviceInfoShrink?: string;
  /**
   * @remarks
   * A collection of specified keys for device settings:  
   * Player: player  
   * Device volume: speaker  
   * Battery level: power
   * 
   * This parameter is required.
   */
  keysShrink?: string;
  static names(): { [key: string]: string } {
    return {
      deviceInfoShrink: 'DeviceInfo',
      keysShrink: 'Keys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfoShrink: 'string',
      keysShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

