// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeviceBasicInfoShrinkRequest extends $dara.Model {
  deviceInfosShrink?: string;
  static names(): { [key: string]: string } {
    return {
      deviceInfosShrink: 'DeviceInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfosShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

