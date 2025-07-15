// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayAccessMode extends $dara.Model {
  modeValue?: string;
  tunnelType?: string;
  static names(): { [key: string]: string } {
    return {
      modeValue: 'ModeValue',
      tunnelType: 'TunnelType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modeValue: 'string',
      tunnelType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayForwardTableIds extends $dara.Model {
  forwardTableId?: string[];
  static names(): { [key: string]: string } {
    return {
      forwardTableId: 'ForwardTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardTableId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.forwardTableId)) {
      $dara.Model.validateArray(this.forwardTableId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayFullNatTableIds extends $dara.Model {
  fullNatTableId?: string[];
  static names(): { [key: string]: string } {
    return {
      fullNatTableId: 'FullNatTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fullNatTableId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.fullNatTableId)) {
      $dara.Model.validateArray(this.fullNatTableId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayIpListsIpList extends $dara.Model {
  /**
   * @remarks
   * The ID of the EIP associated with the NAT gateway.
   * 
   * @example
   * eip-m5egzuvp3dgixen6****
   */
  allocationId?: string;
  /**
   * @remarks
   * The IP address of the EIP associated with the NAT gateway.
   * 
   * @example
   * 116.62.XX.XX
   */
  ipAddress?: string;
  /**
   * @remarks
   * The private IP address of the NAT gateway.
   * 
   * @example
   * 192.168.XX.XX
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * Indicates whether IP addresses that are used in DNAT entries can be specified in SNAT entries. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * false
   */
  snatEntryEnabled?: boolean;
  /**
   * @remarks
   * The association between the EIP and the Internet NAT gateway. Valid values:
   * 
   * *   **UsedByForwardTable**: The EIP is specified in a DNAT entry.
   * *   **UsedBySnatTable**: The EIP is specified in an SNAT entry.
   * *   **UsedByForwardSnatTable**: The EIP is specified in both an SNAT entry and a DNAT entry.
   * *   **Idle**: The EIP is not specified in a DNAT or SNAT entry.
   * 
   * @example
   * UsedByForwardTable
   */
  usingStatus?: string;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      ipAddress: 'IpAddress',
      privateIpAddress: 'PrivateIpAddress',
      snatEntryEnabled: 'SnatEntryEnabled',
      usingStatus: 'UsingStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      ipAddress: 'string',
      privateIpAddress: 'string',
      snatEntryEnabled: 'boolean',
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

export class DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayIpLists extends $dara.Model {
  ipList?: DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayIpListsIpList[];
  static names(): { [key: string]: string } {
    return {
      ipList: 'IpList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipList: { 'type': 'array', 'itemType': DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayIpListsIpList },
    };
  }

  validate() {
    if(Array.isArray(this.ipList)) {
      $dara.Model.validateArray(this.ipList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayNatGatewayPrivateInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the elastic network interface (ENI).
   * 
   * @example
   * eni-m5eg4ozy5st8q3q4****
   */
  eniInstanceId?: string;
  /**
   * @remarks
   * The mode in which the ENI is associated with the NAT gateway.
   * 
   * *   **indirect**: non-cut-through mode
   * *   If an empty value is returned, it indicates that the cut-through mode is used.
   * 
   * @example
   * indirect
   */
  eniType?: string;
  /**
   * @remarks
   * The zone to which the NAT gateway belongs.
   * 
   * @example
   * cn-hangzhou-b
   */
  izNo?: string;
  /**
   * @remarks
   * The maximum bandwidth. Unit: Mbit/s.
   * 
   * @example
   * 5120
   */
  maxBandwidth?: number;
  /**
   * @remarks
   * The number of new connections to the NAT gateway. Unit: connections per second.
   * 
   * @example
   * 100000
   */
  maxSessionEstablishRate?: number;
  /**
   * @remarks
   * The number of concurrent connections to the NAT gateway. Unit: connections.
   * 
   * @example
   * 2000000
   */
  maxSessionQuota?: number;
  /**
   * @remarks
   * The private IP address.
   * 
   * @example
   * 192.168.XX.XX
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The ID of the vSwitch to which the NAT gateway belongs.
   * 
   * @example
   * vsw-bp1s2laxhdf9ayjbo****
   */
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      eniInstanceId: 'EniInstanceId',
      eniType: 'EniType',
      izNo: 'IzNo',
      maxBandwidth: 'MaxBandwidth',
      maxSessionEstablishRate: 'MaxSessionEstablishRate',
      maxSessionQuota: 'MaxSessionQuota',
      privateIpAddress: 'PrivateIpAddress',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eniInstanceId: 'string',
      eniType: 'string',
      izNo: 'string',
      maxBandwidth: 'number',
      maxSessionEstablishRate: 'number',
      maxSessionQuota: 'number',
      privateIpAddress: 'string',
      vswitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatGatewaysResponseBodyNatGatewaysNatGatewaySnatTableIds extends $dara.Model {
  snatTableId?: string[];
  static names(): { [key: string]: string } {
    return {
      snatTableId: 'SnatTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snatTableId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.snatTableId)) {
      $dara.Model.validateArray(this.snatTableId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayTagsTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the instance.
   * 
   * @example
   * KeyTest
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value of the instance.
   * 
   * @example
   * valueTest
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayTags extends $dara.Model {
  tag?: DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayTagsTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatGatewaysResponseBodyNatGatewaysNatGateway extends $dara.Model {
  accessMode?: DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayAccessMode;
  /**
   * @remarks
   * Indicates whether automatic payment is enabled. Valid values:
   * 
   * *   **false**: no
   * *   **true**: yes
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The status of the NAT gateway. Valid values:
   * 
   * *   **Normal**: normal
   * *   **FinancialLocked**: locked due to overdue payments
   * 
   * @example
   * Normal
   */
  businessStatus?: string;
  /**
   * @remarks
   * The time when the NAT gateway was created.
   * 
   * @example
   * 2021-06-08T12:20:20Z
   */
  creationTime?: string;
  /**
   * @remarks
   * Indicates whether the deletion protection feature is enabled. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The description of the NAT gateway.
   * 
   * @example
   * NAT
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the traffic monitoring feature is enabled. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  ecsMetricEnabled?: boolean;
  /**
   * @remarks
   * The mode in which the NAT gateway is associated with an elastic IP address (EIP). Valid values:
   * 
   * *   **MULTI_BINDED**: multi-EIP-to-ENI mode
   * *   **NAT**: NAT mode, which is compatible with IPv4 addresses.
   * 
   * >  Note: If you use the NAT mode, the EIP occupies one private IP address on the vSwitch of the NAT gateway. Make sure that the vSwitch has sufficient private IP addresses. Otherwise, the NAT gateway fails to be associated with the EIP. In NAT mode, you can associate a NAT gateway with up to 50 EIPs.
   * 
   * @example
   * MULTI_BINDED
   */
  eipBindMode?: string;
  enableSessionLog?: string;
  /**
   * @remarks
   * The time when the NAT gateway expires.
   * 
   * @example
   * 2021-08-26T16:00Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The ID of the DNAT table.
   */
  forwardTableIds?: DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayForwardTableIds;
  /**
   * @remarks
   * The ID of the FULLNAT table.
   */
  fullNatTableIds?: DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayFullNatTableIds;
  /**
   * @remarks
   * Indicates whether the ICMP non-retrieval feature is enabled. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * false
   */
  icmpReplyEnabled?: boolean;
  /**
   * @remarks
   * The billing method of the NAT gateway. The value is set to **PostPaid**, which indicates the pay-as-you-go billing method.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The metering method of the NAT gateway. Valid values:
   * 
   * *   **PayBySpec**: pay-by-specification
   * *   **PayByLcu**: pay-by-CU
   * 
   * @example
   * PayByLcu
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The list of elastic IP addresses (EIPs) that are associated with the Internet NAT gateway.
   */
  ipLists?: DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayIpLists;
  /**
   * @remarks
   * The name of the NAT gateway.
   * 
   * @example
   * abc
   */
  name?: string;
  /**
   * @remarks
   * The ID of the NAT gateway.
   * 
   * @example
   * ngw-bp1047e2d4z7kf2ki****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The private network information about the enhanced Internet NAT gateway.
   * 
   * >  If **NatType** is set to **Normal**, all parameters returned in this list are empty.
   */
  natGatewayPrivateInfo?: DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayNatGatewayPrivateInfo;
  /**
   * @remarks
   * The type of the NAT gateway. The value is set to **Enhanced** (enhanced NAT gateway).
   * 
   * @example
   * Enhanced
   */
  natType?: string;
  /**
   * @remarks
   * The type of NAT gateway. Valid values:
   * 
   * *   **internet**: an Internet NAT gateway
   * *   **intranet**: a VPC NAT gateway
   * 
   * @example
   * internet
   */
  networkType?: string;
  /**
   * @remarks
   * Indicates whether the NAT gateway supports PrivateLink. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  privateLinkEnabled?: boolean;
  /**
   * @remarks
   * The mode that is used by PrivateLink. Valid values:
   * 
   * *   **FullNat**: the FULLNAT mode
   * *   **Geneve**: the GENEVE mode
   * 
   * @example
   * FullNat
   */
  privateLinkMode?: string;
  /**
   * @remarks
   * The ID of the region where the NAT gateway is deployed.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the contiguous EIP group belongs.
   * 
   * @example
   * rg-bp67acfmxazb4ph****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Indicates whether the firewall feature is enabled. Valid values:
   * 
   * *   **false**: no
   * *   **true**: yes
   * 
   * @example
   * false
   */
  securityProtectionEnabled?: boolean;
  /**
   * @remarks
   * The ID of the SNAT table of the NAT gateway.
   */
  snatTableIds?: DescribeNatGatewaysResponseBodyNatGatewaysNatGatewaySnatTableIds;
  /**
   * @remarks
   * The size of the NAT gateway. An empty value is returned for the parameter.
   * 
   * If **InternetChargeType** is set to **PayByLcu**, an empty value is returned.
   * 
   * @example
   * Small
   */
  spec?: string;
  /**
   * @remarks
   * The status of the NAT gateway. Valid values:
   * 
   * *   **Creating**: After you send a request to create a NAT gateway, the system creates the NAT gateway in the background. The NAT gateway remains in the Creating state until the operation is completed.
   * *   **Available**: The NAT gateway remains in a stable state after the NAT gateway is created.
   * *   **Modifying**: After you send a request to modify a NAT gateway, the system modifies the NAT gateway in the background. The NAT gateway remains in the Modifying state until the operation is completed.
   * *   **Deleting**: After you send a request to delete a NAT gateway, the system deletes the NAT gateway in the background. The NAT gateway remains in the Deleting state until the operation is completed.
   * *   **Converting**: After you send a request to upgrade a standard NAT gateway to an enhanced NAT gateway, the system upgrades the NAT gateway in the background. The NAT gateway remains in the Converting state until the operation is completed.
   * 
   * @example
   * Creating
   */
  status?: string;
  /**
   * @remarks
   * The tags that are added to the resource group.
   */
  tags?: DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayTags;
  /**
   * @remarks
   * The ID of the VPC where the NAT gateway is deployed.
   * 
   * @example
   * vpc-bp15zckdt37pq72z****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      accessMode: 'AccessMode',
      autoPay: 'AutoPay',
      businessStatus: 'BusinessStatus',
      creationTime: 'CreationTime',
      deletionProtection: 'DeletionProtection',
      description: 'Description',
      ecsMetricEnabled: 'EcsMetricEnabled',
      eipBindMode: 'EipBindMode',
      enableSessionLog: 'EnableSessionLog',
      expiredTime: 'ExpiredTime',
      forwardTableIds: 'ForwardTableIds',
      fullNatTableIds: 'FullNatTableIds',
      icmpReplyEnabled: 'IcmpReplyEnabled',
      instanceChargeType: 'InstanceChargeType',
      internetChargeType: 'InternetChargeType',
      ipLists: 'IpLists',
      name: 'Name',
      natGatewayId: 'NatGatewayId',
      natGatewayPrivateInfo: 'NatGatewayPrivateInfo',
      natType: 'NatType',
      networkType: 'NetworkType',
      privateLinkEnabled: 'PrivateLinkEnabled',
      privateLinkMode: 'PrivateLinkMode',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      securityProtectionEnabled: 'SecurityProtectionEnabled',
      snatTableIds: 'SnatTableIds',
      spec: 'Spec',
      status: 'Status',
      tags: 'Tags',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessMode: DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayAccessMode,
      autoPay: 'boolean',
      businessStatus: 'string',
      creationTime: 'string',
      deletionProtection: 'boolean',
      description: 'string',
      ecsMetricEnabled: 'boolean',
      eipBindMode: 'string',
      enableSessionLog: 'string',
      expiredTime: 'string',
      forwardTableIds: DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayForwardTableIds,
      fullNatTableIds: DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayFullNatTableIds,
      icmpReplyEnabled: 'boolean',
      instanceChargeType: 'string',
      internetChargeType: 'string',
      ipLists: DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayIpLists,
      name: 'string',
      natGatewayId: 'string',
      natGatewayPrivateInfo: DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayNatGatewayPrivateInfo,
      natType: 'string',
      networkType: 'string',
      privateLinkEnabled: 'boolean',
      privateLinkMode: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      securityProtectionEnabled: 'boolean',
      snatTableIds: DescribeNatGatewaysResponseBodyNatGatewaysNatGatewaySnatTableIds,
      spec: 'string',
      status: 'string',
      tags: DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayTags,
      vpcId: 'string',
    };
  }

  validate() {
    if(this.accessMode && typeof (this.accessMode as any).validate === 'function') {
      (this.accessMode as any).validate();
    }
    if(this.forwardTableIds && typeof (this.forwardTableIds as any).validate === 'function') {
      (this.forwardTableIds as any).validate();
    }
    if(this.fullNatTableIds && typeof (this.fullNatTableIds as any).validate === 'function') {
      (this.fullNatTableIds as any).validate();
    }
    if(this.ipLists && typeof (this.ipLists as any).validate === 'function') {
      (this.ipLists as any).validate();
    }
    if(this.natGatewayPrivateInfo && typeof (this.natGatewayPrivateInfo as any).validate === 'function') {
      (this.natGatewayPrivateInfo as any).validate();
    }
    if(this.snatTableIds && typeof (this.snatTableIds as any).validate === 'function') {
      (this.snatTableIds as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatGatewaysResponseBodyNatGateways extends $dara.Model {
  natGateway?: DescribeNatGatewaysResponseBodyNatGatewaysNatGateway[];
  static names(): { [key: string]: string } {
    return {
      natGateway: 'NatGateway',
    };
  }

  static types(): { [key: string]: any } {
    return {
      natGateway: { 'type': 'array', 'itemType': DescribeNatGatewaysResponseBodyNatGatewaysNatGateway },
    };
  }

  validate() {
    if(Array.isArray(this.natGateway)) {
      $dara.Model.validateArray(this.natGateway);
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
   * The details about the NAT gateway.
   */
  natGateways?: DescribeNatGatewaysResponseBodyNatGateways;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 10
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
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
   * 4EC47282-1B74-4534-BD0E-403F3EE64CAF
   */
  requestId?: string;
  /**
   * @remarks
   * The number of NAT gateway entries that are returned.
   * 
   * @example
   * 1
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
      natGateways: DescribeNatGatewaysResponseBodyNatGateways,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.natGateways && typeof (this.natGateways as any).validate === 'function') {
      (this.natGateways as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

