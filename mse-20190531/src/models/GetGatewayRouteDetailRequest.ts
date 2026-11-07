// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGatewayRouteDetailRequest extends $dara.Model {
  /**
   * @remarks
   * Language type of the returned information:
   * 
   * - zh: Chinese
   * 
   * - en: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * Gateway unique identifier ID.
   * 
   * @example
   * gw-5d3a78a53ec947aa928212d671d400ac
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * Route ID.
   * 
   * @example
   * 1050
   */
  routeId?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      gatewayUniqueId: 'GatewayUniqueId',
      routeId: 'RouteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
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

