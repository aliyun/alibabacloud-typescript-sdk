// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRouteTablesResponseBodyRouteTablesRouteTableRouteEntrysRouteEntryNextHops } from "./DescribeRouteTablesResponseBodyRouteTablesRouteTableRouteEntrysRouteEntryNextHops";


export class DescribeRouteTablesResponseBodyRouteTablesRouteTableRouteEntrysRouteEntry extends $dara.Model {
  destinationCidrBlock?: string;
  instanceId?: string;
  nextHopType?: string;
  nextHops?: DescribeRouteTablesResponseBodyRouteTablesRouteTableRouteEntrysRouteEntryNextHops;
  routeTableId?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidrBlock: 'DestinationCidrBlock',
      instanceId: 'InstanceId',
      nextHopType: 'NextHopType',
      nextHops: 'NextHops',
      routeTableId: 'RouteTableId',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidrBlock: 'string',
      instanceId: 'string',
      nextHopType: 'string',
      nextHops: DescribeRouteTablesResponseBodyRouteTablesRouteTableRouteEntrysRouteEntryNextHops,
      routeTableId: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.nextHops && typeof (this.nextHops as any).validate === 'function') {
      (this.nextHops as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

