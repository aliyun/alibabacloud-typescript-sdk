// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRouteTablesResponseBodyRouteTablesRouteTable } from "./DescribeRouteTablesResponseBodyRouteTablesRouteTable";


export class DescribeRouteTablesResponseBodyRouteTables extends $dara.Model {
  routeTable?: DescribeRouteTablesResponseBodyRouteTablesRouteTable[];
  static names(): { [key: string]: string } {
    return {
      routeTable: 'RouteTable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeTable: { 'type': 'array', 'itemType': DescribeRouteTablesResponseBodyRouteTablesRouteTable },
    };
  }

  validate() {
    if(Array.isArray(this.routeTable)) {
      $dara.Model.validateArray(this.routeTable);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

