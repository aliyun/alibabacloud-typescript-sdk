// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePluginConfigShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The language in which the response is displayed. Valid values:
   * - zh: Chinese. This is the default value.
   * - en: English.
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The plug-in configuration. The configuration content of a Wasm plug-in is in YAML format, and the configuration content of a Lua plug-in is Lua code.
   * 
   * @example
   * name: John
   * age: 18
   * friends:
   * - David
   * - Anne
   */
  config?: string;
  /**
   * @remarks
   * The application scope of the plug-in. Valid values:
   * - 0: Global.
   * - 1: Route.
   * - 2: Domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  configLevel?: number;
  /**
   * @remarks
   * Specifies whether to enable the plug-in.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * gw-ubuwqygbq4783gqb2y3f87q****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The ID of the gateway plug-in.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pluginId?: number;
  /**
   * @remarks
   * The list of domain name IDs or route IDs. The specific type depends on the value of ConfigLevel.
   */
  resourceIdListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      config: 'Config',
      configLevel: 'ConfigLevel',
      enable: 'Enable',
      gatewayUniqueId: 'GatewayUniqueId',
      pluginId: 'PluginId',
      resourceIdListShrink: 'ResourceIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      config: 'string',
      configLevel: 'number',
      enable: 'boolean',
      gatewayUniqueId: 'string',
      pluginId: 'number',
      resourceIdListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

