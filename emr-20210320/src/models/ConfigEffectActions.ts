// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigEffectActions extends $dara.Model {
  /**
   * @remarks
   * 配置生效动作。
   * 
   * @example
   * restart
   */
  configEffectAction?: string;
  /**
   * @remarks
   * 配置生效配置文件。
   * 
   * @example
   * null
   */
  configFiles?: string[];
  static names(): { [key: string]: string } {
    return {
      configEffectAction: 'ConfigEffectAction',
      configFiles: 'ConfigFiles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configEffectAction: 'string',
      configFiles: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.configFiles)) {
      $dara.Model.validateArray(this.configFiles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

