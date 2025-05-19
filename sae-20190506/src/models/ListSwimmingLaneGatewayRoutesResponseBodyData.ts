// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSwimmingLaneGatewayRoutesResponseBodyDataRoutePredicate } from "./ListSwimmingLaneGatewayRoutesResponseBodyDataRoutePredicate";


export class ListSwimmingLaneGatewayRoutesResponseBodyData extends $dara.Model {
  /**
   * @example
   * 16933
   */
  routeId?: number;
  /**
   * @example
   * test-route
   */
  routeName?: string;
  routePredicate?: ListSwimmingLaneGatewayRoutesResponseBodyDataRoutePredicate;
  static names(): { [key: string]: string } {
    return {
      routeId: 'RouteId',
      routeName: 'RouteName',
      routePredicate: 'RoutePredicate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeId: 'number',
      routeName: 'string',
      routePredicate: ListSwimmingLaneGatewayRoutesResponseBodyDataRoutePredicate,
    };
  }

  validate() {
    if(this.routePredicate && typeof (this.routePredicate as any).validate === 'function') {
      (this.routePredicate as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

