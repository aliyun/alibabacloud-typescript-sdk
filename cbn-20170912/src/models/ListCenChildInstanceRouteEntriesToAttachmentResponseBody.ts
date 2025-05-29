// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCenChildInstanceRouteEntriesToAttachmentResponseBodyRouteEntry } from "./ListCenChildInstanceRouteEntriesToAttachmentResponseBodyRouteEntry";


export class ListCenChildInstanceRouteEntriesToAttachmentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The token that determines the start point of the next query. Valid values:
   * 
   * *   If **NextToken** is not returned, it indicates that no additional results exist.
   * *   If **NextToken** was returned in the previous query, specify the value to obtain the next set of results.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * 530BC816-F575-412A-AAB2-435125D26328
   */
  requestId?: string;
  /**
   * @remarks
   * The detailed information about the route.
   */
  routeEntry?: ListCenChildInstanceRouteEntriesToAttachmentResponseBodyRouteEntry[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      routeEntry: 'RouteEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      routeEntry: { 'type': 'array', 'itemType': ListCenChildInstanceRouteEntriesToAttachmentResponseBodyRouteEntry },
    };
  }

  validate() {
    if(Array.isArray(this.routeEntry)) {
      $dara.Model.validateArray(this.routeEntry);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

