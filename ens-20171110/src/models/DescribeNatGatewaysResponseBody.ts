// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNatGatewaysResponseBodyNatGatewaysIpLists extends $dara.Model {
  /**
   * @remarks
   * The ID of the EIP.
   * 
   * @example
   * eip-50g****
   */
  allocationId?: string;
  /**
   * @remarks
   * The EIP.
   * 
   * @example
   * 8.XX.XX.162
   */
  ipAddress?: string;
  /**
   * @remarks
   * The association between the EIP and the Internet NAT gateway. Valid values:
   * 
   * *   **UsedByForwardTable**: The EIP is specified in a DNAT entry.
   * *   **UsedBySnatTable**: The EIP is specified in an SNAT entry.
   * *   **Idle**: The EIP is not specified in an SNAT entry or a DNAT entry.
   * 
   * @example
   * Idle
   */
  usingStatus?: string;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      ipAddress: 'IpAddress',
      usingStatus: 'UsingStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      ipAddress: 'string',
      usingStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatGatewaysResponseBodyNatGatewaysTags extends $dara.Model {
  /**
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @example
   * TestKey
   * 
   * @deprecated
   */
  tagKey?: string;
  /**
   * @example
   * TestValue
   * 
   * @deprecated
   */
  tagValue?: string;
  /**
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      tagKey: 'string',
      tagValue: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class DescribeNatGatewaysResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the NAT gateways.
   */
  natGateways?: DescribeNatGatewaysResponseBodyNatGateways[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2818A8F4-5E2B-5611-8732-5ACF7B677059
   */
  requestId?: string;
  /**
   * @remarks
   * The number of NAT gateways that are returned.
   * 
   * @example
   * 49
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      natGateways: 'NatGateways',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      natGateways: { 'type': 'array', 'itemType': DescribeNatGatewaysResponseBodyNatGateways },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.natGateways)) {
      $dara.Model.validateArray(this.natGateways);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

