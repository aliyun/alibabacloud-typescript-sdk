// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EditPluginConfigRequest extends $dara.Model {
  /**
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @example
   * {}
   */
  pluginConfig?: string;
  /**
   * @example
   * 通义万相通过文字描述生成图片
   */
  pluginDesc?: string;
  /**
   * @example
   * aliplayer-react
   */
  pluginId?: string;
  /**
   * @example
   * alisecguard
   */
  pluginName?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      pluginConfig: 'PluginConfig',
      pluginDesc: 'PluginDesc',
      pluginId: 'PluginId',
      pluginName: 'PluginName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      pluginConfig: 'string',
      pluginDesc: 'string',
      pluginId: 'string',
      pluginName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

