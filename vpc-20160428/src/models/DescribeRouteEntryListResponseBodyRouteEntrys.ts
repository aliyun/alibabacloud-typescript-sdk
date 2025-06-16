// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRouteEntryListResponseBodyRouteEntrysRouteEntry } from "./DescribeRouteEntryListResponseBodyRouteEntrysRouteEntry";


export class DescribeRouteEntryListResponseBodyRouteEntrys extends $dara.Model {
  routeEntry?: DescribeRouteEntryListResponseBodyRouteEntrysRouteEntry[];
  static names(): { [key: string]: string } {
    return {
      routeEntry: 'RouteEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeEntry: { 'type': 'array', 'itemType': DescribeRouteEntryListResponseBodyRouteEntrysRouteEntry },
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

