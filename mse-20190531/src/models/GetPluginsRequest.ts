// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPluginsRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the returned information. Valid values:
   * - zh: Chinese.
   * - en: English.
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The plug-in type. Valid values:
   * - 0: Custom.
   * - 1: Authentication and authorization.
   * - 2: Security protection.
   * - 3: Transport protocol.
   * - 4: Traffic control.
   * - 5: Traffic observability.
   * 
   * @example
   * 1
   */
  category?: number;
  /**
   * @remarks
   * Specifies whether the plug-in is enabled.
   * 
   * @example
   * true
   */
  enableOnly?: boolean;
  /**
   * @remarks
   * The gateway ID.
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

