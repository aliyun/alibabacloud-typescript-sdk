// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePluginConfigShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The language in which you want to display the results. Valid values: zh and en. zh indicates Chinese, which is the default value. en indicates English.
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  config?: string;
  /**
   * @remarks
   * The application scope of the plug-in. Valid values:
   * 
   * *   0: global
   * *   1: route
   * *   2: domain name
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  configLevel?: number;
  /**
   * @remarks
   * Indicates whether the plug-in is enabled.
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
   * The gateway plug-in ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pluginId?: number;
  /**
   * @remarks
   * The domain IDs or route IDs. They are distinguished based on ConfigLevel.
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

