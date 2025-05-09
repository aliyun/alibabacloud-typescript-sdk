// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVpcFirewallCenListResponseBodyVpcFirewallsLocalVpcVpcCidrTableListRouteEntryList } from "./DescribeVpcFirewallCenListResponseBodyVpcFirewallsLocalVpcVpcCidrTableListRouteEntryList";


export class DescribeVpcFirewallCenListResponseBodyVpcFirewallsLocalVpcVpcCidrTableList extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the route entries for the VPC.
   */
  routeEntryList?: DescribeVpcFirewallCenListResponseBodyVpcFirewallsLocalVpcVpcCidrTableListRouteEntryList[];
  /**
   * @remarks
   * The route table ID of the VPC.
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
      routeEntryList: { 'type': 'array', 'itemType': DescribeVpcFirewallCenListResponseBodyVpcFirewallsLocalVpcVpcCidrTableListRouteEntryList },
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

