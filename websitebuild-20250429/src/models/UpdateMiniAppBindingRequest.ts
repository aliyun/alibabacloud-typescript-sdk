// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMiniAppBindingRequest extends $dara.Model {
  /**
   * @remarks
   * The business ID.
   * 
   * @example
   * WS20250801154628000001
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
   * The configuration key.
   * 
   * @example
   * xxxx
   */
  settingKey?: string;
  /**
   * @remarks
   * The configuration value.
   * 
   * @example
   * xxxx
   */
  settingValue?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      channel: 'Channel',
      settingKey: 'SettingKey',
      settingValue: 'SettingValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      channel: 'string',
      settingKey: 'string',
      settingValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

