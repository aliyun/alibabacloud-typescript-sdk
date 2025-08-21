// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeviceByUserIdAndChanelShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  channelInfoShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      channelInfoShrink: 'ChannelInfo',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelInfoShrink: 'string',
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

