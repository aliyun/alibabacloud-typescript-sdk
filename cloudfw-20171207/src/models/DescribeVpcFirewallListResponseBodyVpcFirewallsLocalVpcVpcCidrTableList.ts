// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVpcFirewallListResponseBodyVpcFirewallsLocalVpcVpcCidrTableListRouteEntryList } from "./DescribeVpcFirewallListResponseBodyVpcFirewallsLocalVpcVpcCidrTableListRouteEntryList";


export class DescribeVpcFirewallListResponseBodyVpcFirewallsLocalVpcVpcCidrTableList extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the route entries of the local VPC.
   */
  routeEntryList?: DescribeVpcFirewallListResponseBodyVpcFirewallsLocalVpcVpcCidrTableListRouteEntryList[];
  /**
   * @remarks
   * The ID of the route table for the local VPC.
   * 
   * @example
   * vtb-1234
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
      routeEntryList: { 'type': 'array', 'itemType': DescribeVpcFirewallListResponseBodyVpcFirewallsLocalVpcVpcCidrTableListRouteEntryList },
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

