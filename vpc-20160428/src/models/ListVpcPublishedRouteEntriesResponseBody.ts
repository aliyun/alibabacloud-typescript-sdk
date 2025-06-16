// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListVpcPublishedRouteEntriesResponseBodyRouteEntries } from "./ListVpcPublishedRouteEntriesResponseBodyRouteEntries";


export class ListVpcPublishedRouteEntriesResponseBody extends $dara.Model {
  /**
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @example
   * 1D0971B2-A35A-42C1-A44C-E91360C36C0B
   */
  requestId?: string;
  routeEntries?: ListVpcPublishedRouteEntriesResponseBodyRouteEntries[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      routeEntries: 'RouteEntries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      routeEntries: { 'type': 'array', 'itemType': ListVpcPublishedRouteEntriesResponseBodyRouteEntries },
    };
  }

  validate() {
    if(Array.isArray(this.routeEntries)) {
      $dara.Model.validateArray(this.routeEntries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

