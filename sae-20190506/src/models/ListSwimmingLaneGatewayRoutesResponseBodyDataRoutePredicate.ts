// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSwimmingLaneGatewayRoutesResponseBodyDataRoutePredicatePathPredicate } from "./ListSwimmingLaneGatewayRoutesResponseBodyDataRoutePredicatePathPredicate";


export class ListSwimmingLaneGatewayRoutesResponseBodyDataRoutePredicate extends $dara.Model {
  pathPredicate?: ListSwimmingLaneGatewayRoutesResponseBodyDataRoutePredicatePathPredicate;
  static names(): { [key: string]: string } {
    return {
      pathPredicate: 'PathPredicate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pathPredicate: ListSwimmingLaneGatewayRoutesResponseBodyDataRoutePredicatePathPredicate,
    };
  }

  validate() {
    if(this.pathPredicate && typeof (this.pathPredicate as any).validate === 'function') {
      (this.pathPredicate as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

