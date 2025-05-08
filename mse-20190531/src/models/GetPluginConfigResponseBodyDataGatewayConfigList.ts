// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetPluginConfigResponseBodyDataGatewayConfigListResourceList } from "./GetPluginConfigResponseBodyDataGatewayConfigListResourceList";


export class GetPluginConfigResponseBodyDataGatewayConfigList extends $dara.Model {
  /**
   * @remarks
   * The plug-in configuration.
   * 
   * @example
   * \\# Configure a check for the required fields of the plug-in, such as name, age, and friends. Sample configuration: name: John age: 18 friends: - David - Anne
   */
  config?: string;
  /**
   * @remarks
   * The application scope of the plug-in. Valid values:
   * 
   * 0: global
   * 
   * 1: domain names
   * 
   * 2: routes
   * 
   * @example
   * 0
   */
  configLevel?: number;
  /**
   * @remarks
   * Indicates whether the plug-in is enabled.
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
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 1667309705000
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
   * 1
   */
  pluginId?: number;
  resourceList?: GetPluginConfigResponseBodyDataGatewayConfigListResourceList[];
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      configLevel: 'ConfigLevel',
      enable: 'Enable',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      pluginId: 'PluginId',
      resourceList: 'ResourceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      configLevel: 'number',
      enable: 'boolean',
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      pluginId: 'number',
      resourceList: { 'type': 'array', 'itemType': GetPluginConfigResponseBodyDataGatewayConfigListResourceList },
    };
  }

  validate() {
    if(Array.isArray(this.resourceList)) {
      $dara.Model.validateArray(this.resourceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

