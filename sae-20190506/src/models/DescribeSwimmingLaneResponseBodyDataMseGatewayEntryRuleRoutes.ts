// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSwimmingLaneResponseBodyDataMseGatewayEntryRuleRoutesRoutePredicate } from "./DescribeSwimmingLaneResponseBodyDataMseGatewayEntryRuleRoutesRoutePredicate";


export class DescribeSwimmingLaneResponseBodyDataMseGatewayEntryRuleRoutes extends $dara.Model {
  /**
   * @example
   * 9504
   */
  routeId?: number;
  /**
   * @example
   * demo
   */
  routeName?: string;
  routePredicate?: DescribeSwimmingLaneResponseBodyDataMseGatewayEntryRuleRoutesRoutePredicate;
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
      routePredicate: DescribeSwimmingLaneResponseBodyDataMseGatewayEntryRuleRoutesRoutePredicate,
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

