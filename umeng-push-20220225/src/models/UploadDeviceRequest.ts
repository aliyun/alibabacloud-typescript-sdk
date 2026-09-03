// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadDeviceRequest extends $dara.Model {
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

