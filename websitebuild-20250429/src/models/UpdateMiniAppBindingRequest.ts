// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMiniAppBindingRequest extends $dara.Model {
  /**
   * @remarks
   * Business ID
   * 
   * @example
   * WS20250801154628000001
   */
  bizId?: string;
  /**
   * @remarks
   * Channel
   * 
   * @example
   * WECHAT
   */
  channel?: string;
  /**
   * @remarks
   * Configuration key
   * 
   * @example
   * xxxx
   */
  settingKey?: string;
  /**
   * @remarks
   * Configuration value
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

