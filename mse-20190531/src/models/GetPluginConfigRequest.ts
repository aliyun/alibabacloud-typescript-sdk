// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPluginConfigRequest extends $dara.Model {
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
   * 123
   */
  pluginId?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      gatewayUniqueId: 'GatewayUniqueId',
      pluginId: 'PluginId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      gatewayUniqueId: 'string',
      pluginId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

