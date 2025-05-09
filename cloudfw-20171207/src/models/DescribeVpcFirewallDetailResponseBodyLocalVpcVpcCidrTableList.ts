// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVpcFirewallDetailResponseBodyLocalVpcVpcCidrTableListRouteEntryList } from "./DescribeVpcFirewallDetailResponseBodyLocalVpcVpcCidrTableListRouteEntryList";


export class DescribeVpcFirewallDetailResponseBodyLocalVpcVpcCidrTableList extends $dara.Model {
  /**
   * @remarks
   * The route entries of the local VPC.
   */
  routeEntryList?: DescribeVpcFirewallDetailResponseBodyLocalVpcVpcCidrTableListRouteEntryList[];
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
      routeEntryList: { 'type': 'array', 'itemType': DescribeVpcFirewallDetailResponseBodyLocalVpcVpcCidrTableListRouteEntryList },
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

