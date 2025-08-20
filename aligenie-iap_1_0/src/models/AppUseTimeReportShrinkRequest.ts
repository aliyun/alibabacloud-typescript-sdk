// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AppUseTimeReportShrinkRequest extends $dara.Model {
  deviceInfoShrink?: string;
  payloadShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      deviceInfoShrink: 'DeviceInfo',
      payloadShrink: 'Payload',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfoShrink: 'string',
      payloadShrink: 'string',
      userInfoShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

