// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListGatewayRouteResponseBodyDataResultRoutePredicatesHeaderPredicates } from "./ListGatewayRouteResponseBodyDataResultRoutePredicatesHeaderPredicates";
import { ListGatewayRouteResponseBodyDataResultRoutePredicatesPathPredicates } from "./ListGatewayRouteResponseBodyDataResultRoutePredicatesPathPredicates";
import { ListGatewayRouteResponseBodyDataResultRoutePredicatesQueryPredicates } from "./ListGatewayRouteResponseBodyDataResultRoutePredicatesQueryPredicates";


export class ListGatewayRouteResponseBodyDataResultRoutePredicates extends $dara.Model {
  /**
   * @remarks
   * The headers used for route matching.
   */
  headerPredicates?: ListGatewayRouteResponseBodyDataResultRoutePredicatesHeaderPredicates[];
  /**
   * @remarks
   * The HTTP methods used for route matching.
   */
  methodPredicates?: string[];
  /**
   * @remarks
   * The path used for route matching.
   */
  pathPredicates?: ListGatewayRouteResponseBodyDataResultRoutePredicatesPathPredicates;
  /**
   * @remarks
   * The parameters used for route matching.
   */
  queryPredicates?: ListGatewayRouteResponseBodyDataResultRoutePredicatesQueryPredicates[];
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
      headerPredicates: { 'type': 'array', 'itemType': ListGatewayRouteResponseBodyDataResultRoutePredicatesHeaderPredicates },
      methodPredicates: { 'type': 'array', 'itemType': 'string' },
      pathPredicates: ListGatewayRouteResponseBodyDataResultRoutePredicatesPathPredicates,
      queryPredicates: { 'type': 'array', 'itemType': ListGatewayRouteResponseBodyDataResultRoutePredicatesQueryPredicates },
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

