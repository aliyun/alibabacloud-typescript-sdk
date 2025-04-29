// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetAssociatedPublicIp } from "./DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetAssociatedPublicIp";
import { DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetAttachment } from "./DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetAttachment";
import { DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetIpv4PrefixSets } from "./DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetIpv4prefixSets";
import { DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetIpv6PrefixSets } from "./DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetIpv6prefixSets";
import { DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetIpv6Sets } from "./DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetIpv6sets";
import { DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetPrivateIpSets } from "./DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetPrivateIpSets";
import { DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetSecurityGroupIds } from "./DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetSecurityGroupIds";
import { DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetTags } from "./DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetTags";


export class DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSet extends $dara.Model {
  /**
   * @remarks
   * The EIPs that are associated with the secondary private IP addresses of the ENI.
   */
  associatedPublicIp?: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetAssociatedPublicIp;
  /**
   * @remarks
   * >  This parameter is in invitational preview and is not publicly available.
   */
  attachment?: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetAttachment;
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
   * DescriptionTest
   */
  description?: string;
  /**
   * @remarks
   * The ID of the Elastic Compute Service (ECS) instance to which the ENI is attached.
   * 
   * >  If the ENI is managed by other Alibaba Cloud services, no instance ID is returned.
   * 
   * @example
   * i-bp1e2l6djkndyuli****
   */
  instanceId?: string;
  /**
   * @remarks
   * The IPv4 prefixes of the ENI.
   */
  ipv4PrefixSets?: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetIpv4PrefixSets;
  /**
   * @remarks
   * The IPv6 prefixes of the ENI.
   */
  ipv6PrefixSets?: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetIpv6PrefixSets;
  /**
   * @remarks
   * The IPv6 addresses of the ENI.
   */
  ipv6Sets?: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetIpv6Sets;
  /**
   * @remarks
   * The MAC address of the ENI.
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
   * The communication mode of the ENI. Valid values:
   * 
   * *   Standard: The TCP communication mode is used.
   * *   HighPerformance: The Elastic RDMA Interface (ERI) is enabled and the remote direct memory access (RDMA) communication mode is used.
   * 
   * >  This parameter can have a value of HighPerformance only when the ENI is attached to a c7re RDMA-enhanced instance that resides in Beijing Zone K.
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
   * The primary private IP address of the ENI.
   * 
   * @example
   * ``172.17.**.**``
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * Details about the private IP addresses of the ENI.
   */
  privateIpSets?: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetPrivateIpSets;
  /**
   * @remarks
   * The number of queues supported by the ENI.
   * 
   * *   If the ENI is a secondary ENI in the InUse state and the number of queues supported by the ENI has never been modified, the default number of queues per secondary ENI that the instance type supports is returned.
   * *   If the ENI is a secondary ENI and the number of queues supported by the ENI has been modified, the new number of queues is returned.
   * *   If the ENI is a secondary ENI in the Available state and the number of queues supported by the ENI has never been modified, an empty value is returned.
   * *   If the ENI is a primary ENI, the default number of queues per primary ENI that the instance type supports is returned.
   * 
   * @example
   * 8
   */
  queueNumber?: number;
  /**
   * @remarks
   * >  This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * 0
   */
  queuePairNumber?: number;
  /**
   * @remarks
   * The ID of the resource group to which the ENI belongs.
   * 
   * @example
   * rg-2ze88m67qx5z****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The security groups to which the ENI belongs.
   */
  securityGroupIds?: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetSecurityGroupIds;
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
   * >  This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * false
   */
  sourceDestCheck?: boolean;
  /**
   * @remarks
   * The state of the ENI.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The tags of the ENI.
   */
  tags?: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetTags;
  /**
   * @remarks
   * The type of the ENI.
   * 
   * @example
   * Secondary
   */
  type?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-bp16usj2p27htro3****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC to which the ENI belongs.
   * 
   * @example
   * vpc-bp1j7w3gc1cexjqd****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID of the ENI.
   * 
   * @example
   * cn-hangzhou-e
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      associatedPublicIp: 'AssociatedPublicIp',
      attachment: 'Attachment',
      creationTime: 'CreationTime',
      deleteOnRelease: 'DeleteOnRelease',
      description: 'Description',
      instanceId: 'InstanceId',
      ipv4PrefixSets: 'Ipv4PrefixSets',
      ipv6PrefixSets: 'Ipv6PrefixSets',
      ipv6Sets: 'Ipv6Sets',
      macAddress: 'MacAddress',
      networkInterfaceId: 'NetworkInterfaceId',
      networkInterfaceName: 'NetworkInterfaceName',
      networkInterfaceTrafficMode: 'NetworkInterfaceTrafficMode',
      ownerId: 'OwnerId',
      privateIpAddress: 'PrivateIpAddress',
      privateIpSets: 'PrivateIpSets',
      queueNumber: 'QueueNumber',
      queuePairNumber: 'QueuePairNumber',
      resourceGroupId: 'ResourceGroupId',
      securityGroupIds: 'SecurityGroupIds',
      serviceID: 'ServiceID',
      serviceManaged: 'ServiceManaged',
      sourceDestCheck: 'SourceDestCheck',
      status: 'Status',
      tags: 'Tags',
      type: 'Type',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedPublicIp: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetAssociatedPublicIp,
      attachment: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetAttachment,
      creationTime: 'string',
      deleteOnRelease: 'boolean',
      description: 'string',
      instanceId: 'string',
      ipv4PrefixSets: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetIpv4PrefixSets,
      ipv6PrefixSets: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetIpv6PrefixSets,
      ipv6Sets: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetIpv6Sets,
      macAddress: 'string',
      networkInterfaceId: 'string',
      networkInterfaceName: 'string',
      networkInterfaceTrafficMode: 'string',
      ownerId: 'string',
      privateIpAddress: 'string',
      privateIpSets: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetPrivateIpSets,
      queueNumber: 'number',
      queuePairNumber: 'number',
      resourceGroupId: 'string',
      securityGroupIds: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetSecurityGroupIds,
      serviceID: 'number',
      serviceManaged: 'boolean',
      sourceDestCheck: 'boolean',
      status: 'string',
      tags: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetTags,
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
    if(this.ipv4PrefixSets && typeof (this.ipv4PrefixSets as any).validate === 'function') {
      (this.ipv4PrefixSets as any).validate();
    }
    if(this.ipv6PrefixSets && typeof (this.ipv6PrefixSets as any).validate === 'function') {
      (this.ipv6PrefixSets as any).validate();
    }
    if(this.ipv6Sets && typeof (this.ipv6Sets as any).validate === 'function') {
      (this.ipv6Sets as any).validate();
    }
    if(this.privateIpSets && typeof (this.privateIpSets as any).validate === 'function') {
      (this.privateIpSets as any).validate();
    }
    if(this.securityGroupIds && typeof (this.securityGroupIds as any).validate === 'function') {
      (this.securityGroupIds as any).validate();
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

