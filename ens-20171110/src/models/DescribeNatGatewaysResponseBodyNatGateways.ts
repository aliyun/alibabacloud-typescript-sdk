// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNatGatewaysResponseBodyNatGatewaysIpLists } from "./DescribeNatGatewaysResponseBodyNatGatewaysIpLists";
import { DescribeNatGatewaysResponseBodyNatGatewaysTags } from "./DescribeNatGatewaysResponseBodyNatGatewaysTags";


export class DescribeNatGatewaysResponseBodyNatGateways extends $dara.Model {
  /**
   * @remarks
   * The time when the NAT gateway was created. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2021-11-22T07:03:32Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The ID of the ENS node.
   * 
   * @example
   * cn-xiangyang-5
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The EIPs that are associated with the NAT gateway.
   */
  ipLists?: DescribeNatGatewaysResponseBodyNatGatewaysIpLists[];
  /**
   * @remarks
   * The name of the NAT gateway.
   * 
   * @example
   * test0
   */
  name?: string;
  /**
   * @remarks
   * The ID of the NAT gateway.
   * 
   * @example
   * nat-5t7nh1cfm6kxiszlttr38****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The ID of the network.
   * 
   * @example
   * n-5s2ml1olj0kzaws9n1yrj****
   */
  networkId?: string;
  /**
   * @remarks
   * The type of the NAT gateway.
   * 
   * @example
   * enat.default
   */
  spec?: string;
  /**
   * @remarks
   * The status of the NAT gateway. Valid values:
   * 
   * *   **Creating**: After you send a request to create a NAT gateway, the system creates the NAT gateway in the background. The NAT gateway remains in the Creating state until the operation is completed.
   * *   **Available**: The NAT gateway is in the Available state after the creation is complete.
   * *   **Deleting**: After you send a request to delete a NAT gateway, the system deletes the NAT gateway in the background. The NAT gateway remains in the Deleting state until the operation is completed.
   * 
   * @example
   * Available
   */
  status?: string;
  tags?: DescribeNatGatewaysResponseBodyNatGatewaysTags[];
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-5szpp1os9m55myirbflfw****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      ensRegionId: 'EnsRegionId',
      ipLists: 'IpLists',
      name: 'Name',
      natGatewayId: 'NatGatewayId',
      networkId: 'NetworkId',
      spec: 'Spec',
      status: 'Status',
      tags: 'Tags',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      ensRegionId: 'string',
      ipLists: { 'type': 'array', 'itemType': DescribeNatGatewaysResponseBodyNatGatewaysIpLists },
      name: 'string',
      natGatewayId: 'string',
      networkId: 'string',
      spec: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': DescribeNatGatewaysResponseBodyNatGatewaysTags },
      vSwitchId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ipLists)) {
      $dara.Model.validateArray(this.ipLists);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

