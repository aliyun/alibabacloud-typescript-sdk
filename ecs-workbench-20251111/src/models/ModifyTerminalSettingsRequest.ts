// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTerminalSettingsRequestPasswordlessLoginConfig extends $dara.Model {
  /**
   * @remarks
   * 免密功能开关
   * 
   * @example
   * true
   */
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTerminalSettingsRequest extends $dara.Model {
  /**
   * @remarks
   * 免密登录配置
   * 
   * This parameter is required.
   */
  passwordlessLoginConfig?: ModifyTerminalSettingsRequestPasswordlessLoginConfig;
  static names(): { [key: string]: string } {
    return {
      passwordlessLoginConfig: 'PasswordlessLoginConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passwordlessLoginConfig: ModifyTerminalSettingsRequestPasswordlessLoginConfig,
    };
  }

  validate() {
    if(this.passwordlessLoginConfig && typeof (this.passwordlessLoginConfig as any).validate === 'function') {
      (this.passwordlessLoginConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

