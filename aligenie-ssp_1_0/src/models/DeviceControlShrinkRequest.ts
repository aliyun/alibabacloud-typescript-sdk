// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeviceControlShrinkRequest extends $dara.Model {
  controlRequestShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  deviceInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      controlRequestShrink: 'ControlRequest',
      deviceInfoShrink: 'DeviceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      controlRequestShrink: 'string',
      deviceInfoShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

