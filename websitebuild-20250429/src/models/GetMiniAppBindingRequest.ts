// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMiniAppBindingRequest extends $dara.Model {
  /**
   * @remarks
   * The site ID.
   * 
   * @example
   * WS20250814102215000001
   */
  bizId?: string;
  /**
   * @remarks
   * The channel.
   * 
   * @example
   * WECHAT
   */
  channel?: string;
  /**
   * @remarks
   * The list of extension information keys.
   * 
   * @example
   * SERVER_DOMAIN
   */
  settingKeys?: string[];
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      channel: 'Channel',
      settingKeys: 'SettingKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      channel: 'string',
      settingKeys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.settingKeys)) {
      $dara.Model.validateArray(this.settingKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

