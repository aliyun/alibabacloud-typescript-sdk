// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateGatewayRouteRequestPredicatesHeaderPredicates } from "./UpdateGatewayRouteRequestPredicatesHeaderPredicates";
import { UpdateGatewayRouteRequestPredicatesPathPredicates } from "./UpdateGatewayRouteRequestPredicatesPathPredicates";
import { UpdateGatewayRouteRequestPredicatesQueryPredicates } from "./UpdateGatewayRouteRequestPredicatesQueryPredicates";


export class UpdateGatewayRouteRequestPredicates extends $dara.Model {
  /**
   * @remarks
   * The information about header matching.
   */
  headerPredicates?: UpdateGatewayRouteRequestPredicatesHeaderPredicates[];
  /**
   * @remarks
   * The information about method matching.
   */
  methodPredicates?: string[];
  /**
   * @remarks
   * The information about path matching.
   */
  pathPredicates?: UpdateGatewayRouteRequestPredicatesPathPredicates;
  /**
   * @remarks
   * The information about parameter matching.
   */
  queryPredicates?: UpdateGatewayRouteRequestPredicatesQueryPredicates[];
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
      headerPredicates: { 'type': 'array', 'itemType': UpdateGatewayRouteRequestPredicatesHeaderPredicates },
      methodPredicates: { 'type': 'array', 'itemType': 'string' },
      pathPredicates: UpdateGatewayRouteRequestPredicatesPathPredicates,
      queryPredicates: { 'type': 'array', 'itemType': UpdateGatewayRouteRequestPredicatesQueryPredicates },
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

