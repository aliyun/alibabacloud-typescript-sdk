// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCodeEnhanceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Activation Channel, such as WeChat mini program or third-party app.
   * 
   * This parameter is required.
   */
  channelInfoShrink?: string;
  /**
   * @remarks
   * List of User Identifier information.
   * 
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

