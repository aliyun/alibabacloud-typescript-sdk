// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddGatewayRouteRequestPredicatesHeaderPredicates } from "./AddGatewayRouteRequestPredicatesHeaderPredicates";
import { AddGatewayRouteRequestPredicatesPathPredicates } from "./AddGatewayRouteRequestPredicatesPathPredicates";
import { AddGatewayRouteRequestPredicatesQueryPredicates } from "./AddGatewayRouteRequestPredicatesQueryPredicates";


export class AddGatewayRouteRequestPredicates extends $dara.Model {
  /**
   * @remarks
   * The information about header matching.
   */
  headerPredicates?: AddGatewayRouteRequestPredicatesHeaderPredicates[];
  /**
   * @remarks
   * The information about method matching.
   */
  methodPredicates?: string[];
  /**
   * @remarks
   * The information about route matching.
   */
  pathPredicates?: AddGatewayRouteRequestPredicatesPathPredicates;
  /**
   * @remarks
   * The information about URL parameter matching.
   */
  queryPredicates?: AddGatewayRouteRequestPredicatesQueryPredicates[];
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
      headerPredicates: { 'type': 'array', 'itemType': AddGatewayRouteRequestPredicatesHeaderPredicates },
      methodPredicates: { 'type': 'array', 'itemType': 'string' },
      pathPredicates: AddGatewayRouteRequestPredicatesPathPredicates,
      queryPredicates: { 'type': 'array', 'itemType': AddGatewayRouteRequestPredicatesQueryPredicates },
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

