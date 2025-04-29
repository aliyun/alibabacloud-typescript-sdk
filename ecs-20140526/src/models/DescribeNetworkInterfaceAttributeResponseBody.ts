// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNetworkInterfaceAttributeResponseBodyAssociatedPublicIp } from "./DescribeNetworkInterfaceAttributeResponseBodyAssociatedPublicIp";
import { DescribeNetworkInterfaceAttributeResponseBodyAttachment } from "./DescribeNetworkInterfaceAttributeResponseBodyAttachment";
import { DescribeNetworkInterfaceAttributeResponseBodyBondInterfaceSpecification } from "./DescribeNetworkInterfaceAttributeResponseBodyBondInterfaceSpecification";
import { DescribeNetworkInterfaceAttributeResponseBodyConnectionTrackingConfiguration } from "./DescribeNetworkInterfaceAttributeResponseBodyConnectionTrackingConfiguration";
import { DescribeNetworkInterfaceAttributeResponseBodyEnhancedNetwork } from "./DescribeNetworkInterfaceAttributeResponseBodyEnhancedNetwork";
import { DescribeNetworkInterfaceAttributeResponseBodyIpv4PrefixSets } from "./DescribeNetworkInterfaceAttributeResponseBodyIpv4prefixSets";
import { DescribeNetworkInterfaceAttributeResponseBodyIpv6PrefixSets } from "./DescribeNetworkInterfaceAttributeResponseBodyIpv6prefixSets";
import { DescribeNetworkInterfaceAttributeResponseBodyIpv6Sets } from "./DescribeNetworkInterfaceAttributeResponseBodyIpv6sets";
import { DescribeNetworkInterfaceAttributeResponseBodyNetworkInterfaceTrafficConfig } from "./DescribeNetworkInterfaceAttributeResponseBodyNetworkInterfaceTrafficConfig";
import { DescribeNetworkInterfaceAttributeResponseBodyPrivateIpSets } from "./DescribeNetworkInterfaceAttributeResponseBodyPrivateIpSets";
import { DescribeNetworkInterfaceAttributeResponseBodySecurityGroupIds } from "./DescribeNetworkInterfaceAttributeResponseBodySecurityGroupIds";
import { DescribeNetworkInterfaceAttributeResponseBodySlaveInterfaceSpecification } from "./DescribeNetworkInterfaceAttributeResponseBodySlaveInterfaceSpecification";
import { DescribeNetworkInterfaceAttributeResponseBodyTags } from "./DescribeNetworkInterfaceAttributeResponseBodyTags";


export class DescribeNetworkInterfaceAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the elastic IP address (EIP) that is associated with the secondary private IP address of the ENI.
   */
  associatedPublicIp?: DescribeNetworkInterfaceAttributeResponseBodyAssociatedPublicIp;
  /**
   * @remarks
   * >  This parameter is in invitational preview and unavailable for general users.
   */
  attachment?: DescribeNetworkInterfaceAttributeResponseBodyAttachment;
  /**
   * @remarks
   * >  This parameter is in invitational preview and unavailable for general users.
   */
  bondInterfaceSpecification?: DescribeNetworkInterfaceAttributeResponseBodyBondInterfaceSpecification;
  /**
   * @remarks
   * The connection tracking configurations of the ENI.
   * 
   * Before you use this parameter, learn about how to manage connection timeout periods. For more information, see [Manage connection timeout periods](https://help.aliyun.com/document_detail/2865958.html).
   * 
   * >  This parameter is returned only if `Attribute` is set to `connectionTrackingConfiguration`.
   */
  connectionTrackingConfiguration?: DescribeNetworkInterfaceAttributeResponseBodyConnectionTrackingConfiguration;
  /**
   * @remarks
   * The time when the ENI was created.
   * 
   * @example
   * 2019-12-25T12:31:31Z
   */
  creationTime?: string;
  /**
   * @remarks
   * Indicates whether to retain the ENI when the associated instance is released. Valid values:
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
   * The description of the ENI.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * This parameter is not publicly available.
   */
  enhancedNetwork?: DescribeNetworkInterfaceAttributeResponseBodyEnhancedNetwork;
  /**
   * @remarks
   * The ID of the instance to which the ENI is attached.
   * 
   * >  If the ENI is managed and controlled by other Alibaba Cloud services, no instance ID is returned.
   * 
   * @example
   * i-bp1e2l6djkndyuli****
   */
  instanceId?: string;
  /**
   * @remarks
   * The IPv4 prefixes of the ENI.
   */
  ipv4PrefixSets?: DescribeNetworkInterfaceAttributeResponseBodyIpv4PrefixSets;
  /**
   * @remarks
   * The IPv6 prefixes of the ENI.
   */
  ipv6PrefixSets?: DescribeNetworkInterfaceAttributeResponseBodyIpv6PrefixSets;
  /**
   * @remarks
   * The IPv6 addresses of the ENI.
   */
  ipv6Sets?: DescribeNetworkInterfaceAttributeResponseBodyIpv6Sets;
  /**
   * @remarks
   * The media access control (MAC) address of the ENI.
   * 
   * @example
   * 00:16:3e:12:**:**
   */
  macAddress?: string;
  /**
   * @remarks
   * The ID of the ENI.
   * 
   * @example
   * eni-bp125p95hhdhn3ot****
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * The name of the ENI.
   * 
   * @example
   * my-eni-name
   */
  networkInterfaceName?: string;
  /**
   * @remarks
   * The communication settings of the ENI.
   */
  networkInterfaceTrafficConfig?: DescribeNetworkInterfaceAttributeResponseBodyNetworkInterfaceTrafficConfig;
  /**
   * @remarks
   * The communication mode of the ENI. Valid values:
   * 
   * *   Standard: The TCP communication mode is used.
   * *   HighPerformance: The Elastic RDMA Interface (ERI) feature is enabled and the remote direct memory access (RDMA) communication mode is used.
   * 
   * >  This parameter can have a value of HighPerformance only when the ENI is attached to a c7re RDMA-enhanced instance.
   * 
   * @example
   * Standard
   */
  networkInterfaceTrafficMode?: string;
  /**
   * @remarks
   * The ID of the account to which the ENI belongs.
   * 
   * @example
   * 123456****
   */
  ownerId?: string;
  /**
   * @remarks
   * The private IP address of the ENI.
   * 
   * @example
   * ``10.1.**.**``
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The private IP addresses of the ENI.
   */
  privateIpSets?: DescribeNetworkInterfaceAttributeResponseBodyPrivateIpSets;
  /**
   * @remarks
   * The number of queues supported by the ENI.
   * 
   * *   For a primary ENI: The default number of queues that the instance type supports for the ENI is returned.
   * 
   * *   For a secondary ENI:
   * 
   *     *   When the ENI is in the InUse state, the following situations occur for the QueueNumber parameter:
   * 
   *         *   If the number of queues supported by the ENI has not been modified, the default number of queues that the instance type supports for the ENI is returned.
   *         *   If the number of queues supported by the ENI has been modified, the new number of queues is returned.
   * 
   *     *   When the ENI is in the Available state, the following situations occur for the QueueNumber parameter:
   * 
   *         *   If the number of queues supported by the ENI has not been modified, the return value is empty.
   *         *   If the number of queues supported by the ENI has been modified, the new number of queues is returned.
   * 
   * @example
   * 8
   */
  queueNumber?: number;
  /**
   * @remarks
   * >  This parameter is in invitational preview and unavailable for general users.
   * 
   * @example
   * 22
   */
  queuePairNumber?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs. If this parameter is specified to query ENIs, up to 1,000 ENIs that belong to the specified resource group can be displayed in the response.
   * 
   * >  ENIs in the default resource group are displayed in the response regardless of how this parameter is set.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The IDs of the security groups to which the ENI belongs.
   */
  securityGroupIds?: DescribeNetworkInterfaceAttributeResponseBodySecurityGroupIds;
  /**
   * @remarks
   * The ID of the distributor to which the ENI belongs.
   * 
   * @example
   * 12345678910
   */
  serviceID?: number;
  /**
   * @remarks
   * Indicates whether the user of the ENI is an Alibaba Cloud service or a distributor.
   * 
   * @example
   * true
   */
  serviceManaged?: boolean;
  /**
   * @remarks
   * >  This parameter is in invitational preview and unavailable for general users.
   */
  slaveInterfaceSpecification?: DescribeNetworkInterfaceAttributeResponseBodySlaveInterfaceSpecification;
  /**
   * @remarks
   * This parameter is not publicly available.
   * 
   * @example
   * false
   */
  sourceDestCheck?: boolean;
  /**
   * @remarks
   * The state of the ENI. Valid values:
   * 
   * *   Available: The ENI is not attached to an instance.
   * *   Attaching: The ENI is being attached to an instance.
   * *   InUse: The ENI is attached to an instance.
   * *   Detaching: The ENI is being detached from an instance.
   * *   Deleting: The ENI is being deleted.
   * 
   * This parameter is empty by default, which indicates that all states are queried.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The tags of the ENI.
   */
  tags?: DescribeNetworkInterfaceAttributeResponseBodyTags;
  /**
   * @remarks
   * >  This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * null
   */
  tcpOptionAddressEnabled?: string;
  /**
   * @remarks
   * The type of the ENI. Valid values:
   * 
   * *   Primary
   * *   Secondary
   * 
   * @example
   * Secondary
   */
  type?: string;
  /**
   * @remarks
   * The ID of the vSwitch to which the ENI is connected.
   * 
   * @example
   * vsw-bp1s5fnvk4gn2tws0****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) to which the ENI belongs.
   * 
   * @example
   * vpc-bp67acfmxazb4p****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID of the ENI.
   * 
   * @example
   * cn-hangzhou-g
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      associatedPublicIp: 'AssociatedPublicIp',
      attachment: 'Attachment',
      bondInterfaceSpecification: 'BondInterfaceSpecification',
      connectionTrackingConfiguration: 'ConnectionTrackingConfiguration',
      creationTime: 'CreationTime',
      deleteOnRelease: 'DeleteOnRelease',
      description: 'Description',
      enhancedNetwork: 'EnhancedNetwork',
      instanceId: 'InstanceId',
      ipv4PrefixSets: 'Ipv4PrefixSets',
      ipv6PrefixSets: 'Ipv6PrefixSets',
      ipv6Sets: 'Ipv6Sets',
      macAddress: 'MacAddress',
      networkInterfaceId: 'NetworkInterfaceId',
      networkInterfaceName: 'NetworkInterfaceName',
      networkInterfaceTrafficConfig: 'NetworkInterfaceTrafficConfig',
      networkInterfaceTrafficMode: 'NetworkInterfaceTrafficMode',
      ownerId: 'OwnerId',
      privateIpAddress: 'PrivateIpAddress',
      privateIpSets: 'PrivateIpSets',
      queueNumber: 'QueueNumber',
      queuePairNumber: 'QueuePairNumber',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      securityGroupIds: 'SecurityGroupIds',
      serviceID: 'ServiceID',
      serviceManaged: 'ServiceManaged',
      slaveInterfaceSpecification: 'SlaveInterfaceSpecification',
      sourceDestCheck: 'SourceDestCheck',
      status: 'Status',
      tags: 'Tags',
      tcpOptionAddressEnabled: 'TcpOptionAddressEnabled',
      type: 'Type',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedPublicIp: DescribeNetworkInterfaceAttributeResponseBodyAssociatedPublicIp,
      attachment: DescribeNetworkInterfaceAttributeResponseBodyAttachment,
      bondInterfaceSpecification: DescribeNetworkInterfaceAttributeResponseBodyBondInterfaceSpecification,
      connectionTrackingConfiguration: DescribeNetworkInterfaceAttributeResponseBodyConnectionTrackingConfiguration,
      creationTime: 'string',
      deleteOnRelease: 'boolean',
      description: 'string',
      enhancedNetwork: DescribeNetworkInterfaceAttributeResponseBodyEnhancedNetwork,
      instanceId: 'string',
      ipv4PrefixSets: DescribeNetworkInterfaceAttributeResponseBodyIpv4PrefixSets,
      ipv6PrefixSets: DescribeNetworkInterfaceAttributeResponseBodyIpv6PrefixSets,
      ipv6Sets: DescribeNetworkInterfaceAttributeResponseBodyIpv6Sets,
      macAddress: 'string',
      networkInterfaceId: 'string',
      networkInterfaceName: 'string',
      networkInterfaceTrafficConfig: DescribeNetworkInterfaceAttributeResponseBodyNetworkInterfaceTrafficConfig,
      networkInterfaceTrafficMode: 'string',
      ownerId: 'string',
      privateIpAddress: 'string',
      privateIpSets: DescribeNetworkInterfaceAttributeResponseBodyPrivateIpSets,
      queueNumber: 'number',
      queuePairNumber: 'number',
      requestId: 'string',
      resourceGroupId: 'string',
      securityGroupIds: DescribeNetworkInterfaceAttributeResponseBodySecurityGroupIds,
      serviceID: 'number',
      serviceManaged: 'boolean',
      slaveInterfaceSpecification: DescribeNetworkInterfaceAttributeResponseBodySlaveInterfaceSpecification,
      sourceDestCheck: 'boolean',
      status: 'string',
      tags: DescribeNetworkInterfaceAttributeResponseBodyTags,
      tcpOptionAddressEnabled: 'string',
      type: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.associatedPublicIp && typeof (this.associatedPublicIp as any).validate === 'function') {
      (this.associatedPublicIp as any).validate();
    }
    if(this.attachment && typeof (this.attachment as any).validate === 'function') {
      (this.attachment as any).validate();
    }
    if(this.bondInterfaceSpecification && typeof (this.bondInterfaceSpecification as any).validate === 'function') {
      (this.bondInterfaceSpecification as any).validate();
    }
    if(this.connectionTrackingConfiguration && typeof (this.connectionTrackingConfiguration as any).validate === 'function') {
      (this.connectionTrackingConfiguration as any).validate();
    }
    if(this.enhancedNetwork && typeof (this.enhancedNetwork as any).validate === 'function') {
      (this.enhancedNetwork as any).validate();
    }
    if(this.ipv4PrefixSets && typeof (this.ipv4PrefixSets as any).validate === 'function') {
      (this.ipv4PrefixSets as any).validate();
    }
    if(this.ipv6PrefixSets && typeof (this.ipv6PrefixSets as any).validate === 'function') {
      (this.ipv6PrefixSets as any).validate();
    }
    if(this.ipv6Sets && typeof (this.ipv6Sets as any).validate === 'function') {
      (this.ipv6Sets as any).validate();
    }
    if(this.networkInterfaceTrafficConfig && typeof (this.networkInterfaceTrafficConfig as any).validate === 'function') {
      (this.networkInterfaceTrafficConfig as any).validate();
    }
    if(this.privateIpSets && typeof (this.privateIpSets as any).validate === 'function') {
      (this.privateIpSets as any).validate();
    }
    if(this.securityGroupIds && typeof (this.securityGroupIds as any).validate === 'function') {
      (this.securityGroupIds as any).validate();
    }
    if(this.slaveInterfaceSpecification && typeof (this.slaveInterfaceSpecification as any).validate === 'function') {
      (this.slaveInterfaceSpecification as any).validate();
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

