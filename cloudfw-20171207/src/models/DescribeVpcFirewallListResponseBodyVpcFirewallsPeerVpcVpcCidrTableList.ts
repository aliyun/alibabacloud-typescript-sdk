// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVpcFirewallListResponseBodyVpcFirewallsPeerVpcVpcCidrTableListRouteEntryList } from "./DescribeVpcFirewallListResponseBodyVpcFirewallsPeerVpcVpcCidrTableListRouteEntryList";


export class DescribeVpcFirewallListResponseBodyVpcFirewallsPeerVpcVpcCidrTableList extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the route entries of the peer VPC.
   */
  routeEntryList?: DescribeVpcFirewallListResponseBodyVpcFirewallsPeerVpcVpcCidrTableListRouteEntryList[];
  /**
   * @remarks
   * The ID of the route table for the peer VPC.
   * 
   * @example
   * vtb-1256
   */
  routeTableId?: string;
  static names(): { [key: string]: string } {
    return {
      routeEntryList: 'RouteEntryList',
      routeTableId: 'RouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeEntryList: { 'type': 'array', 'itemType': DescribeVpcFirewallListResponseBodyVpcFirewallsPeerVpcVpcCidrTableListRouteEntryList },
      routeTableId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.routeEntryList)) {
      $dara.Model.validateArray(this.routeEntryList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

