// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateNetworkInterfaceResponseBodyIpv4PrefixSets } from "./CreateNetworkInterfaceResponseBodyIpv4prefixSets";
import { CreateNetworkInterfaceResponseBodyIpv6PrefixSets } from "./CreateNetworkInterfaceResponseBodyIpv6prefixSets";
import { CreateNetworkInterfaceResponseBodyIpv6Sets } from "./CreateNetworkInterfaceResponseBodyIpv6sets";
import { CreateNetworkInterfaceResponseBodyPrivateIpSets } from "./CreateNetworkInterfaceResponseBodyPrivateIpSets";
import { CreateNetworkInterfaceResponseBodySecurityGroupIds } from "./CreateNetworkInterfaceResponseBodySecurityGroupIds";
import { CreateNetworkInterfaceResponseBodyTags } from "./CreateNetworkInterfaceResponseBodyTags";


export class CreateNetworkInterfaceResponseBody extends $dara.Model {
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
   * The IPv4 prefixes assigned to the ENI.
   */
  ipv4PrefixSets?: CreateNetworkInterfaceResponseBodyIpv4PrefixSets;
  /**
   * @remarks
   * The IPv6 prefixes assigned to the ENI.
   */
  ipv6PrefixSets?: CreateNetworkInterfaceResponseBodyIpv6PrefixSets;
  /**
   * @remarks
   * The IPv6 addresses assigned to the ENI.
   */
  ipv6Sets?: CreateNetworkInterfaceResponseBodyIpv6Sets;
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
   * eni-bp14v2sdd3v8htln****
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
   * ``172.17.**.**``
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The private IP addresses.
   */
  privateIpSets?: CreateNetworkInterfaceResponseBodyPrivateIpSets;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
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
   * The IDs of the security groups to which the ENI belongs.
   */
  securityGroupIds?: CreateNetworkInterfaceResponseBodySecurityGroupIds;
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
  tags?: CreateNetworkInterfaceResponseBodyTags;
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
   * The ID of the vSwitch to which the ENI is connected.
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
      description: 'Description',
      ipv4PrefixSets: 'Ipv4PrefixSets',
      ipv6PrefixSets: 'Ipv6PrefixSets',
      ipv6Sets: 'Ipv6Sets',
      macAddress: 'MacAddress',
      networkInterfaceId: 'NetworkInterfaceId',
      networkInterfaceName: 'NetworkInterfaceName',
      ownerId: 'OwnerId',
      privateIpAddress: 'PrivateIpAddress',
      privateIpSets: 'PrivateIpSets',
      requestId: 'RequestId',
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
      description: 'string',
      ipv4PrefixSets: CreateNetworkInterfaceResponseBodyIpv4PrefixSets,
      ipv6PrefixSets: CreateNetworkInterfaceResponseBodyIpv6PrefixSets,
      ipv6Sets: CreateNetworkInterfaceResponseBodyIpv6Sets,
      macAddress: 'string',
      networkInterfaceId: 'string',
      networkInterfaceName: 'string',
      ownerId: 'string',
      privateIpAddress: 'string',
      privateIpSets: CreateNetworkInterfaceResponseBodyPrivateIpSets,
      requestId: 'string',
      resourceGroupId: 'string',
      securityGroupIds: CreateNetworkInterfaceResponseBodySecurityGroupIds,
      serviceID: 'number',
      serviceManaged: 'boolean',
      sourceDestCheck: 'boolean',
      status: 'string',
      tags: CreateNetworkInterfaceResponseBodyTags,
      type: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
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

