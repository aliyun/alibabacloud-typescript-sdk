// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCurrentPlayingItemShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Device identification information
   * 
   * This parameter is required.
   */
  deviceInfoShrink?: string;
  /**
   * @remarks
   * User identification information
   * 
   * This parameter is required.
   */
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      deviceInfoShrink: 'DeviceInfo',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfoShrink: 'string',
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

