// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayRouteAuthShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The authentication configurations.
   * 
   * This parameter is required.
   */
  authJSONShrink?: string;
  /**
   * @remarks
   * The gateway ID.
   * 
   * @example
   * 102
   */
  gatewayId?: number;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * gw-0adf3ad751284cc69fcf9669fba*****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The route ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 109
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      authJSONShrink: 'AuthJSON',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      authJSONShrink: 'string',
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

