// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EditPluginConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Business ID
   * 
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @remarks
   * Plugin configuration
   * 
   * @example
   * {}
   */
  pluginConfig?: string;
  /**
   * @remarks
   * Plugin description
   * 
   * @example
   * 根据关键字查询相关的Github Repositories
   */
  pluginDesc?: string;
  /**
   * @remarks
   * Plugin ID
   * 
   * @example
   * aliplayer-react
   */
  pluginId?: string;
  /**
   * @remarks
   * Plugin name
   * 
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

