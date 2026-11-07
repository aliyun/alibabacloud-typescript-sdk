// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePluginConfigShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the returned information. Valid values:
   * 
   * - zh: Chinese.
   * - en: English.
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The configuration content of the plug-in. Use YAML for Wasm plug-ins and Lua code for Lua plug-ins.
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
   * 
   * - 0: Global.
   * 
   * - 1: Route.
   * 
   * - 2: Domain name.
   * 
   * @example
   * 0
   */
  configLevel?: number;
  /**
   * @remarks
   * Specifies whether to enable the plug-in.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The ID of the gateway.
   * 
   * @example
   * 1
   * 
   * @deprecated
   */
  gatewayId?: number;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-ubuwqygbq4783gqb2y3f87q****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1667309705000
   * 
   * @deprecated
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 1667309705000
   * 
   * @deprecated
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the plug-in configuration.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The ID of the gateway plug-in.
   * 
   * @example
   * 2
   */
  pluginId?: number;
  /**
   * @remarks
   * The list of domain name IDs or route IDs, which depends on the value of ConfigLevel.
   */
  resourceIdListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      config: 'Config',
      configLevel: 'ConfigLevel',
      enable: 'Enable',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
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
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
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

