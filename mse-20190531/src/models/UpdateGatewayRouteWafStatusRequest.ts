// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayRouteWafStatusRequest extends $dara.Model {
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
   * Specifies whether to activate Web Application Firewall (WAF).
   * 
   * @example
   * true
   */
  enableWaf?: boolean;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-86575c0bc9f04ecfbacb92b8e392****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The ID of the route.
   * 
   * @example
   * 645
   */
  routeId?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      enableWaf: 'EnableWaf',
      gatewayUniqueId: 'GatewayUniqueId',
      routeId: 'RouteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      enableWaf: 'boolean',
      gatewayUniqueId: 'string',
      routeId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

