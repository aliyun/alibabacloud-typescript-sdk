// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListGatewayRouteOnAuthResponseBodyDataRoutePredicatesPathPredicates } from "./ListGatewayRouteOnAuthResponseBodyDataRoutePredicatesPathPredicates";


export class ListGatewayRouteOnAuthResponseBodyDataRoutePredicates extends $dara.Model {
  /**
   * @remarks
   * The information about route matching.
   */
  pathPredicates?: ListGatewayRouteOnAuthResponseBodyDataRoutePredicatesPathPredicates;
  static names(): { [key: string]: string } {
    return {
      pathPredicates: 'PathPredicates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pathPredicates: ListGatewayRouteOnAuthResponseBodyDataRoutePredicatesPathPredicates,
    };
  }

  validate() {
    if(this.pathPredicates && typeof (this.pathPredicates as any).validate === 'function') {
      (this.pathPredicates as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

