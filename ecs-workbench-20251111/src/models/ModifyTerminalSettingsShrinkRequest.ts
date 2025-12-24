// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTerminalSettingsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * 免密登录配置
   * 
   * This parameter is required.
   */
  passwordlessLoginConfigShrink?: string;
  static names(): { [key: string]: string } {
    return {
      passwordlessLoginConfigShrink: 'PasswordlessLoginConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passwordlessLoginConfigShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

