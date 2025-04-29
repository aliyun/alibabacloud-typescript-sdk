// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRouteTablesResponseBodyRouteTablesRouteTableRouteEntrys } from "./DescribeRouteTablesResponseBodyRouteTablesRouteTableRouteEntrys";


export class DescribeRouteTablesResponseBodyRouteTablesRouteTable extends $dara.Model {
  creationTime?: string;
  resourceGroupId?: string;
  routeEntrys?: DescribeRouteTablesResponseBodyRouteTablesRouteTableRouteEntrys;
  routeTableId?: string;
  routeTableType?: string;
  VRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      resourceGroupId: 'ResourceGroupId',
      routeEntrys: 'RouteEntrys',
      routeTableId: 'RouteTableId',
      routeTableType: 'RouteTableType',
      VRouterId: 'VRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      resourceGroupId: 'string',
      routeEntrys: DescribeRouteTablesResponseBodyRouteTablesRouteTableRouteEntrys,
      routeTableId: 'string',
      routeTableType: 'string',
      VRouterId: 'string',
    };
  }

  validate() {
    if(this.routeEntrys && typeof (this.routeEntrys as any).validate === 'function') {
      (this.routeEntrys as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

