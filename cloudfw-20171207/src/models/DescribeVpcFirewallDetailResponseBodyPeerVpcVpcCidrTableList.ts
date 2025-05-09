// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVpcFirewallDetailResponseBodyPeerVpcVpcCidrTableListRouteEntryList } from "./DescribeVpcFirewallDetailResponseBodyPeerVpcVpcCidrTableListRouteEntryList";


export class DescribeVpcFirewallDetailResponseBodyPeerVpcVpcCidrTableList extends $dara.Model {
  /**
   * @remarks
   * The route entries of the peer VPC.
   */
  routeEntryList?: DescribeVpcFirewallDetailResponseBodyPeerVpcVpcCidrTableListRouteEntryList[];
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
      routeEntryList: { 'type': 'array', 'itemType': DescribeVpcFirewallDetailResponseBodyPeerVpcVpcCidrTableListRouteEntryList },
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

