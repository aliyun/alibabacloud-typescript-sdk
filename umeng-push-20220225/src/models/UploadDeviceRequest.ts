// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadDeviceRequest extends $dara.Model {
  /**
   * @example
   * device_token_1\\ndevice_token_2\\ndevice_token_3\\n...
   * alias1\\nalias2\\nalias3\\n...
   */
  deviceTokens?: string;
  static names(): { [key: string]: string } {
    return {
      deviceTokens: 'DeviceTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceTokens: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

