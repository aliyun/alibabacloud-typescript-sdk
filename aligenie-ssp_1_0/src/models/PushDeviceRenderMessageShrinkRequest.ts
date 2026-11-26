// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushDeviceRenderMessageShrinkRequest extends $dara.Model {
  accessToken?: string;
  deviceInfoShrink?: string;
  payloadShrink?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      deviceInfoShrink: 'DeviceInfo',
      payloadShrink: 'Payload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      deviceInfoShrink: 'string',
      payloadShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

