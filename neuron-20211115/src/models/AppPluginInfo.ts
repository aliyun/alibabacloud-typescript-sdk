// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MobiPluginConfig } from "./MobiPluginConfig";


export class AppPluginInfo extends $dara.Model {
  appId?: number;
  appVersion?: string;
  appVersionId?: number;
  config?: MobiPluginConfig;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  /**
   * @example
   * MULTIPLEMALL_CONSOLE_LAYOUT_APPSTORE
   */
  pluginKey?: string;
  /**
   * @example
   * PAGE
   */
  pluginType?: string;
  /**
   * @example
   * MOBI
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      appVersion: 'appVersion',
      appVersionId: 'appVersionId',
      config: 'config',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      pluginKey: 'pluginKey',
      pluginType: 'pluginType',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appVersion: 'string',
      appVersionId: 'number',
      config: MobiPluginConfig,
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      pluginKey: 'string',
      pluginType: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

