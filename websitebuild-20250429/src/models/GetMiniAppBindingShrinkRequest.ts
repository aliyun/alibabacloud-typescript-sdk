// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMiniAppBindingShrinkRequest extends $dara.Model {
  /**
   * @example
   * WS20250814102215000001
   */
  bizId?: string;
  /**
   * @example
   * WECHAT
   */
  channel?: string;
  settingKeysShrink?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      channel: 'Channel',
      settingKeysShrink: 'SettingKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      channel: 'string',
      settingKeysShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

