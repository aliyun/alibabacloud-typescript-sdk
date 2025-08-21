// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MobileRecommendShrinkRequest extends $dara.Model {
  /**
   * @example
   * 10
   */
  botId?: string;
  /**
   * @example
   * 6
   */
  count?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  deviceInfoShrink?: string;
  style?: string;
  /**
   * @example
   * DAILY_REC
   */
  type?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      botId: 'BotId',
      count: 'Count',
      deviceInfoShrink: 'DeviceInfo',
      style: 'Style',
      type: 'Type',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      botId: 'string',
      count: 'string',
      deviceInfoShrink: 'string',
      style: 'string',
      type: 'string',
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

