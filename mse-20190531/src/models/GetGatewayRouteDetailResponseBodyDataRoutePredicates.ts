// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetGatewayRouteDetailResponseBodyDataRoutePredicatesHeaderPredicates } from "./GetGatewayRouteDetailResponseBodyDataRoutePredicatesHeaderPredicates";
import { GetGatewayRouteDetailResponseBodyDataRoutePredicatesPathPredicates } from "./GetGatewayRouteDetailResponseBodyDataRoutePredicatesPathPredicates";
import { GetGatewayRouteDetailResponseBodyDataRoutePredicatesQueryPredicates } from "./GetGatewayRouteDetailResponseBodyDataRoutePredicatesQueryPredicates";


export class GetGatewayRouteDetailResponseBodyDataRoutePredicates extends $dara.Model {
  /**
   * @remarks
   * The information about header matching.
   */
  headerPredicates?: GetGatewayRouteDetailResponseBodyDataRoutePredicatesHeaderPredicates[];
  /**
   * @remarks
   * The information about method matching.
   */
  methodPredicates?: string[];
  /**
   * @remarks
   * The information about route matching.
   */
  pathPredicates?: GetGatewayRouteDetailResponseBodyDataRoutePredicatesPathPredicates;
  /**
   * @remarks
   * The information about parameter matching.
   */
  queryPredicates?: GetGatewayRouteDetailResponseBodyDataRoutePredicatesQueryPredicates[];
  static names(): { [key: string]: string } {
    return {
      headerPredicates: 'HeaderPredicates',
      methodPredicates: 'MethodPredicates',
      pathPredicates: 'PathPredicates',
      queryPredicates: 'QueryPredicates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headerPredicates: { 'type': 'array', 'itemType': GetGatewayRouteDetailResponseBodyDataRoutePredicatesHeaderPredicates },
      methodPredicates: { 'type': 'array', 'itemType': 'string' },
      pathPredicates: GetGatewayRouteDetailResponseBodyDataRoutePredicatesPathPredicates,
      queryPredicates: { 'type': 'array', 'itemType': GetGatewayRouteDetailResponseBodyDataRoutePredicatesQueryPredicates },
    };
  }

  validate() {
    if(Array.isArray(this.headerPredicates)) {
      $dara.Model.validateArray(this.headerPredicates);
    }
    if(Array.isArray(this.methodPredicates)) {
      $dara.Model.validateArray(this.methodPredicates);
    }
    if(this.pathPredicates && typeof (this.pathPredicates as any).validate === 'function') {
      (this.pathPredicates as any).validate();
    }
    if(Array.isArray(this.queryPredicates)) {
      $dara.Model.validateArray(this.queryPredicates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

