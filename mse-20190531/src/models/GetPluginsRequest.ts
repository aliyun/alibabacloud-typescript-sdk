// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPluginsRequest extends $dara.Model {
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
   * The type of the plug-in. Valid values:
   * 
   * *   0: custom
   * *   1: permission authorization
   * *   2: security protection
   * *   3: transmission protocol
   * *   4: traffic control
   * *   5: traffic observation
   * 
   * @example
   * 1
   */
  category?: number;
  /**
   * @remarks
   * Specifies whether to enable the plug-in.
   * 
   * @example
   * true
   */
  enableOnly?: boolean;
  /**
   * @remarks
   * The ID of the gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * gw-0adf3ad751284cc69fcf9669fba*****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The name of the plug-in.
   * 
   * @example
   * key-auth
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      category: 'Category',
      enableOnly: 'EnableOnly',
      gatewayUniqueId: 'GatewayUniqueId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      category: 'number',
      enableOnly: 'boolean',
      gatewayUniqueId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

