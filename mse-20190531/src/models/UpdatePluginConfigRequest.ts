// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePluginConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * zh: Chinese en: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The plug-in configuration. Configurations of WebAssembly plug-ins are in the YAML format, and configurations of Lua plug-ins are in the Lua code.
   * 
   * @example
   * \\# Configure a check for the required fields of the plug-in, such as name, age, and friends. Sample configuration: name: John age: 18 friends: - David - Anne
   */
  config?: string;
  /**
   * @remarks
   * The application scope of the plug-in.
   * 
   * *   0: global
   * *   1: route
   * *   2: domain name
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
  resourceIdList?: number[];
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
      resourceIdList: 'ResourceIdList',
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
      resourceIdList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceIdList)) {
      $dara.Model.validateArray(this.resourceIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

