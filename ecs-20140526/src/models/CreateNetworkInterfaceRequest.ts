// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateNetworkInterfaceRequestConnectionTrackingConfiguration } from "./CreateNetworkInterfaceRequestConnectionTrackingConfiguration";
import { CreateNetworkInterfaceRequestEnhancedNetwork } from "./CreateNetworkInterfaceRequestEnhancedNetwork";
import { CreateNetworkInterfaceRequestNetworkInterfaceTrafficConfig } from "./CreateNetworkInterfaceRequestNetworkInterfaceTrafficConfig";
import { CreateNetworkInterfaceRequestTag } from "./CreateNetworkInterfaceRequestTag";


export class CreateNetworkInterfaceRequest extends $dara.Model {
  /**
   * @remarks
   * > This parameter is no longer used.
   * 
   * @example
   * null
   */
  businessType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The **token** can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The connection tracking configurations of the ENI.
   * 
   * Before you use this parameter, learn about how to manage connection timeout periods. For more information, see [Manage connection timeout periods](https://help.aliyun.com/document_detail/2865958.html).
   */
  connectionTrackingConfiguration?: CreateNetworkInterfaceRequestConnectionTrackingConfiguration;
  /**
   * @remarks
   * Specifies whether to release the ENI when the associated instance is released. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  deleteOnRelease?: boolean;
  /**
   * @remarks
   * The description of the ENI. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * This parameter is empty by default.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * >  This parameter is not publicly available.
   */
  enhancedNetwork?: CreateNetworkInterfaceRequestEnhancedNetwork;
  /**
   * @remarks
   * The type of the ENI. Valid values:
   * 
   * *   Secondary: secondary ENI.
   * *   Trunk: trunk ENI. This value is in invitational preview.
   * 
   * Default value: Secondary.
   * 
   * @example
   * null
   */
  instanceType?: string;
  /**
   * @remarks
   * IPv4 prefixes to assign to the ENI. Valid values of N: 1 to 10.
   * 
   * >  To assign IPv4 prefixes to the ENI, you must specify the Ipv4Prefix.N or Ipv4PrefixCount parameter, but not both.
   */
  ipv4Prefix?: string[];
  /**
   * @remarks
   * The number of IPv4 prefixes to assign to the ENI. Valid values: 1 to 10.
   * 
   * >  To assign IPv4 prefixes to the ENI, you must specify the Ipv4Prefix.N or Ipv4PrefixCount parameter, but not both.
   * 
   * @example
   * hide
   */
  ipv4PrefixCount?: number;
  /**
   * @remarks
   * IPv6 addresses to assign to the ENI. Valid values of N: 1 to 10.
   * 
   * Example: Ipv6Address.1=2001:db8:1234:1a00::\\*\\*\\*\\*
   * 
   * >  To assign IPv6 addresses to the ENI, you must specify the `Ipv6Addresses.N` or `Ipv6AddressCount` parameter, but not both.
   * 
   * @example
   * 2001:db8:1234:1a00::****
   */
  ipv6Address?: string[];
  /**
   * @remarks
   * The number of IPv6 addresses to randomly generate for the ENI. Valid values: 1 to 10.
   * 
   * >  To assign IPv6 addresses to the ENI, you must specify the `Ipv6Addresses.N` or `Ipv6AddressCount` parameter, but not both.
   * 
   * @example
   * 1
   */
  ipv6AddressCount?: number;
  /**
   * @remarks
   * IPv6 prefixes to assign to the ENI. Valid values of N: 1 to 10.
   * 
   * >  To assign IPv6 prefixes to the ENI, you must specify the Ipv6Prefix.N or Ipv6PrefixCount parameter, but not both.
   */
  ipv6Prefix?: string[];
  /**
   * @remarks
   * The number of IPv6 prefixes to assign to the ENI. Valid values: 1 to 10.
   * 
   * >  To assign IPv6 prefixes to the ENI, you must specify the Ipv6Prefix.N or Ipv6PrefixCount parameter, but not both.
   * 
   * @example
   * hide
   */
  ipv6PrefixCount?: number;
  /**
   * @remarks
   * The name of the ENI. The name must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * This parameter is left empty by default.
   * 
   * @example
   * testNetworkInterfaceName
   */
  networkInterfaceName?: string;
  /**
   * @remarks
   * The communication settings of the ENI.
   */
  networkInterfaceTrafficConfig?: CreateNetworkInterfaceRequestNetworkInterfaceTrafficConfig;
  /**
   * @remarks
   * The communication mode of the ENI. Valid values:
   * 
   * *   Standard: uses the TCP communication mode.
   * *   HighPerformance: uses the remote direct memory access (RDMA) communication mode with Elastic RDMA Interface (ERI) enabled.
   * 
   * >  ENIs in RDMA mode can be attached only to instances of the instance types that support ERIs. The number of ENIs in RDMA mode that are attached to an instance cannot exceed the maximum number of ENIs that the instance type supports. For more information, see [Overview of ECS instance families](https://help.aliyun.com/document_detail/25378.html) and [Configure eRDMA on an enterprise-level instance](https://help.aliyun.com/document_detail/336853.html).
   * 
   * Default value: Standard.
   * 
   * @example
   * Standard
   */
  networkInterfaceTrafficMode?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The primary private IP address of the ENI.
   * 
   * The specified IP address must be an idle IP address within the CIDR block of the vSwitch. If you do not specify this parameter, a random idle IP address within the vSwitch CIDR block is assigned to the ENI.
   * 
   * @example
   * ``172.17.**.**``
   */
  primaryIpAddress?: string;
  /**
   * @remarks
   * Secondary private IP addresses to assign to the ENI. The IP addresses must be idle IP addresses in the CIDR block of the vSwitch with which to associate the ENI. Valid values of N: 0 to 10.
   * 
   * >  To assign secondary private IP addresses to the ENI, you can specify the `PrivateIpAddress.N` or `SecondaryPrivateIpAddressCount` parameter, but not both.
   * 
   * @example
   * ``172.17.**.**``
   */
  privateIpAddress?: string[];
  /**
   * @remarks
   * The number of queues supported by the ENI. Valid values: 1 to 2048.
   * 
   * When you attach the ENI to an instance, make sure that the value of this parameter is less than the maximum number of queues per ENI that is allowed for the instance type. To view the maximum number of queues per ENI allowed for an instance type, you can call the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) operation and then check the return value of `MaximumQueueNumberPerEni`.
   * 
   * This parameter is left empty by default. If you do not specify this parameter, the default number of queues per ENI for the instance type of an instance is used when you attach the ENI to the instance. To view the default number of queues per ENI for an instance type, you can call the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) operation and then check the return value of `SecondaryEniQueueNumber`.
   * 
   * @example
   * 1
   */
  queueNumber?: number;
  /**
   * @remarks
   * The number of queue pairs (QPs) supported by the elastic RDMA interface (ERI).
   * 
   * If you want to attach multiple ERIs to an instance, we recommend that you specify QueuePairNumber for each ERI based on the value of `QueuePairNumber` supported by the instance type and the number of ERIs that you want to use. Make sure that the total number of QPs of all ERIs does not exceed the maximum number of QPs supported by the instance type. For information about the maximum number of QPs supported by an instance type, see [DescribeInstanceTypes](https://help.aliyun.com/document_detail/2679699.html).
   * 
   * >  If you do not specify QueuePairNumber for an ERI, the maximum number of QPs supported by the instance type may be used as the number of QPs supported by the ERI. In this case, you cannot attach an additional ERI to the instance. However, you can attach other types of ENIs to the instance.
   * 
   * @example
   * 22
   */
  queuePairNumber?: number;
  /**
   * @remarks
   * The region in which to create the ENI. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which you want to assign the ENI. You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html) operation to query the most recent resource group list.
   * 
   * @example
   * rg-bp67acfmxazb4ph****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The receive (Rx) queue depth of the ENI.
   * 
   * When you specify this parameter, take note of the following items:
   * 
   * *   The Rx queue depth of an ENI must be the same as the Tx queue depth of the ENI. Valid values: powers of 2 in the range of 8192 to 16384.
   * *   A larger Rx queue depth yields higher inbound throughput but consumes more memory.
   * 
   * >  This parameter is not publicly available.
   * 
   * @example
   * 8192
   */
  rxQueueSize?: number;
  /**
   * @remarks
   * The number of private IP addresses to be assigned by ECS. Valid values: 1 to 49.
   * 
   * @example
   * 1
   */
  secondaryPrivateIpAddressCount?: number;
  /**
   * @remarks
   * The ID of the security group to which to assign the ENI. The security group and the ENI must belong to the same VPC.
   * 
   * > You must specify `SecurityGroupId` or `SecurityGroupIds.N` but not both.
   * 
   * @example
   * sg-bp1fg655nh68xyz9i****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The IDs of security groups to which to assign the ENI. The security groups and the ENI must belong to the same VPC. The valid values of N are determined based on the maximum number of security groups to which an ENI can be assigned. For more information, see [Limits](https://help.aliyun.com/document_detail/25412.html).
   * 
   * >  You must specify `SecurityGroupId` or `SecurityGroupIds.N` but not both.
   * 
   * @example
   * sg-bp1fg655nh68xyz9i****
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * >  This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * false
   */
  sourceDestCheck?: boolean;
  /**
   * @remarks
   * The tags to add to the ENI.
   */
  tag?: CreateNetworkInterfaceRequestTag[];
  /**
   * @remarks
   * The transmit (Tx) queue depth of the ENI.
   * 
   * When you specify this parameter, take note of the following items:
   * 
   * *   The Tx queue depth of an ENI must be the same as the Rx queue depth of the ENI. Valid values: powers of 2 in the range of 8192 to 16384.
   * *   A larger Tx queue depth yields higher outbound throughput but consumes more memory.
   * 
   * >  This parameter is not publicly available.
   * 
   * @example
   * 8192
   */
  txQueueSize?: number;
  /**
   * @remarks
   * The ID of the vSwitch to which to connect the ENI. Private IP addresses are assigned to the ENI from within the CIDR block of the vSwitch.
   * 
   * >  A secondary ENI can be attached to only an instance that is in the same zone as the ENI. The instance and the ENI can be connected to different vSwitches.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-bp1s5fnvk4gn2tws03****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * > This parameter is no longer used.
   * 
   * @example
   * null
   */
  visible?: boolean;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      clientToken: 'ClientToken',
      connectionTrackingConfiguration: 'ConnectionTrackingConfiguration',
      deleteOnRelease: 'DeleteOnRelease',
      description: 'Description',
      enhancedNetwork: 'EnhancedNetwork',
      instanceType: 'InstanceType',
      ipv4Prefix: 'Ipv4Prefix',
      ipv4PrefixCount: 'Ipv4PrefixCount',
      ipv6Address: 'Ipv6Address',
      ipv6AddressCount: 'Ipv6AddressCount',
      ipv6Prefix: 'Ipv6Prefix',
      ipv6PrefixCount: 'Ipv6PrefixCount',
      networkInterfaceName: 'NetworkInterfaceName',
      networkInterfaceTrafficConfig: 'NetworkInterfaceTrafficConfig',
      networkInterfaceTrafficMode: 'NetworkInterfaceTrafficMode',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      primaryIpAddress: 'PrimaryIpAddress',
      privateIpAddress: 'PrivateIpAddress',
      queueNumber: 'QueueNumber',
      queuePairNumber: 'QueuePairNumber',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      rxQueueSize: 'RxQueueSize',
      secondaryPrivateIpAddressCount: 'SecondaryPrivateIpAddressCount',
      securityGroupId: 'SecurityGroupId',
      securityGroupIds: 'SecurityGroupIds',
      sourceDestCheck: 'SourceDestCheck',
      tag: 'Tag',
      txQueueSize: 'TxQueueSize',
      vSwitchId: 'VSwitchId',
      visible: 'Visible',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      clientToken: 'string',
      connectionTrackingConfiguration: CreateNetworkInterfaceRequestConnectionTrackingConfiguration,
      deleteOnRelease: 'boolean',
      description: 'string',
      enhancedNetwork: CreateNetworkInterfaceRequestEnhancedNetwork,
      instanceType: 'string',
      ipv4Prefix: { 'type': 'array', 'itemType': 'string' },
      ipv4PrefixCount: 'number',
      ipv6Address: { 'type': 'array', 'itemType': 'string' },
      ipv6AddressCount: 'number',
      ipv6Prefix: { 'type': 'array', 'itemType': 'string' },
      ipv6PrefixCount: 'number',
      networkInterfaceName: 'string',
      networkInterfaceTrafficConfig: CreateNetworkInterfaceRequestNetworkInterfaceTrafficConfig,
      networkInterfaceTrafficMode: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      primaryIpAddress: 'string',
      privateIpAddress: { 'type': 'array', 'itemType': 'string' },
      queueNumber: 'number',
      queuePairNumber: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      rxQueueSize: 'number',
      secondaryPrivateIpAddressCount: 'number',
      securityGroupId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      sourceDestCheck: 'boolean',
      tag: { 'type': 'array', 'itemType': CreateNetworkInterfaceRequestTag },
      txQueueSize: 'number',
      vSwitchId: 'string',
      visible: 'boolean',
    };
  }

  validate() {
    if(this.connectionTrackingConfiguration && typeof (this.connectionTrackingConfiguration as any).validate === 'function') {
      (this.connectionTrackingConfiguration as any).validate();
    }
    if(this.enhancedNetwork && typeof (this.enhancedNetwork as any).validate === 'function') {
      (this.enhancedNetwork as any).validate();
    }
    if(Array.isArray(this.ipv4Prefix)) {
      $dara.Model.validateArray(this.ipv4Prefix);
    }
    if(Array.isArray(this.ipv6Address)) {
      $dara.Model.validateArray(this.ipv6Address);
    }
    if(Array.isArray(this.ipv6Prefix)) {
      $dara.Model.validateArray(this.ipv6Prefix);
    }
    if(this.networkInterfaceTrafficConfig && typeof (this.networkInterfaceTrafficConfig as any).validate === 'function') {
      (this.networkInterfaceTrafficConfig as any).validate();
    }
    if(Array.isArray(this.privateIpAddress)) {
      $dara.Model.validateArray(this.privateIpAddress);
    }
    if(Array.isArray(this.securityGroupIds)) {
      $dara.Model.validateArray(this.securityGroupIds);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

