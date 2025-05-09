// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVpcFirewallCenDetailResponseBodyLocalVpcVpcCidrTableListRouteEntryList } from "./DescribeVpcFirewallCenDetailResponseBodyLocalVpcVpcCidrTableListRouteEntryList";


export class DescribeVpcFirewallCenDetailResponseBodyLocalVpcVpcCidrTableList extends $dara.Model {
  /**
   * @remarks
   * The route entries for the VPC.
   */
  routeEntryList?: DescribeVpcFirewallCenDetailResponseBodyLocalVpcVpcCidrTableListRouteEntryList[];
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
      routeEntryList: { 'type': 'array', 'itemType': DescribeVpcFirewallCenDetailResponseBodyLocalVpcVpcCidrTableListRouteEntryList },
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

