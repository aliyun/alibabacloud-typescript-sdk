// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeviceSettingShrinkRequest extends $dara.Model {
  deviceInfoShrink?: string;
  /**
   * @remarks
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

