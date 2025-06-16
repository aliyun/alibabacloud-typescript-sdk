// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListVpcPublishedRouteEntriesResponseBodyRouteEntriesRoutePublishTargets } from "./ListVpcPublishedRouteEntriesResponseBodyRouteEntriesRoutePublishTargets";


export class ListVpcPublishedRouteEntriesResponseBodyRouteEntries extends $dara.Model {
  /**
   * @example
   * 10.0.0.0/24
   */
  destinationCidrBlock?: string;
  /**
   * @example
   * rte-bp1mnnr2al0naomnpv****
   */
  routeEntryId?: string;
  routePublishTargets?: ListVpcPublishedRouteEntriesResponseBodyRouteEntriesRoutePublishTargets[];
  /**
   * @example
   * vtb-2ze3jgygk9bmsj23s****
   */
  routeTableId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidrBlock: 'DestinationCidrBlock',
      routeEntryId: 'RouteEntryId',
      routePublishTargets: 'RoutePublishTargets',
      routeTableId: 'RouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidrBlock: 'string',
      routeEntryId: 'string',
      routePublishTargets: { 'type': 'array', 'itemType': ListVpcPublishedRouteEntriesResponseBodyRouteEntriesRoutePublishTargets },
      routeTableId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.routePublishTargets)) {
      $dara.Model.validateArray(this.routePublishTargets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

