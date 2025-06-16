// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRouteTablesResponseBodyRouteTablesRouteTableRouteEntrysRouteEntry } from "./DescribeRouteTablesResponseBodyRouteTablesRouteTableRouteEntrysRouteEntry";


export class DescribeRouteTablesResponseBodyRouteTablesRouteTableRouteEntrys extends $dara.Model {
  routeEntry?: DescribeRouteTablesResponseBodyRouteTablesRouteTableRouteEntrysRouteEntry[];
  static names(): { [key: string]: string } {
    return {
      routeEntry: 'RouteEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeEntry: { 'type': 'array', 'itemType': DescribeRouteTablesResponseBodyRouteTablesRouteTableRouteEntrysRouteEntry },
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

