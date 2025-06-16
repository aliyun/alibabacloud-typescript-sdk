// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayAccessMode } from "./DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayAccessMode";
import { DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayForwardTableIds } from "./DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayForwardTableIds";
import { DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayFullNatTableIds } from "./DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayFullNatTableIds";
import { DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayIpLists } from "./DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayIpLists";
import { DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayNatGatewayPrivateInfo } from "./DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayNatGatewayPrivateInfo";
import { DescribeNatGatewaysResponseBodyNatGatewaysNatGatewaySnatTableIds } from "./DescribeNatGatewaysResponseBodyNatGatewaysNatGatewaySnatTableIds";
import { DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayTags } from "./DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayTags";


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

