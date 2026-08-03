// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MobileRecommendShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Bot ID.
   * 
   * @example
   * 10
   */
  botId?: string;
  /**
   * @remarks
   * Quantity of recommended Result
   * 
   * @example
   * 6
   */
  count?: string;
  /**
   * @remarks
   * Device identification information.
   * 
   * This parameter is required.
   */
  deviceInfoShrink?: string;
  /**
   * @remarks
   * Required when the request type is STYLE.
   * 
   * @example
   * 轻音乐
   */
  style?: string;
  /**
   * @remarks
   * Request Type: Obtain daily recommendations, hot songs, or genre-based playlists.
   * 
   * @example
   * DAILY_REC
   */
  type?: string;
  /**
   * @remarks
   * User information – userId
   * 
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

