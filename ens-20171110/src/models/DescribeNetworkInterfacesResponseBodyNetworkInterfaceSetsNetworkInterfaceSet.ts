// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetIpv6Sets } from "./DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetIpv6sets";
import { DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetPrivateIpSets } from "./DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetPrivateIpSets";
import { DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetSecurityGroupIds } from "./DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetSecurityGroupIds";


export class DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSet extends $dara.Model {
  /**
   * @remarks
   * The time when the ENI was created. Specify the time in the ISO 8601 standard in the yyyy-MM-ddThh:mmZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-02-22T03:53:25Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of ENI.
   * 
   * @example
   * test-description
   */
  description?: string;
  /**
   * @remarks
   * The ID of the edge node.
   * 
   * @example
   * id-jakarta-1
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The ID of the instance to which the ENI is bound.
   * 
   * @example
   * i-5siavnr3
   */
  instanceId?: string;
  /**
   * @remarks
   * The IPv6 addresses of the ENIs.
   */
  ipv6Sets?: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetIpv6Sets;
  /**
   * @remarks
   * The MAC address of the ENI.
   * 
   * @example
   * 00:16:3e:08:60:0a
   */
  macAddress?: string;
  /**
   * @remarks
   * The ID of the network.
   * 
   * @example
   * n-5w0qd03adw****
   */
  networkId?: string;
  /**
   * @remarks
   * The ID of the ENI.
   * 
   * @example
   * eni-uf686a5
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * The ENI name.
   * 
   * @example
   * primaryTest
   */
  networkInterfaceName?: string;
  /**
   * @remarks
   * The private IP address of the server.
   * 
   * @example
   * 12.23.3.4
   */
  primaryIp?: string;
  /**
   * @remarks
   * The primary private IP address. Valid values:
   * 
   * *   **Public**: public IP address.
   * *   **Private**: internal IP address.
   * 
   * @example
   * private
   */
  primaryIpType?: string;
  /**
   * @remarks
   * Details about the private IP address.
   */
  privateIpSets?: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetPrivateIpSets;
  /**
   * @remarks
   * The ID of the security group.
   */
  securityGroupIds?: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetSecurityGroupIds;
  /**
   * @remarks
   * The status of the ENI. Valid values:
   * 
   * *   Available: The ENI is available.
   * *   Attaching: The ENI is being attached to an instance.
   * *   InUse: The ENI is attached to an instance.
   * *   Detaching: The ENI is being detached from an instance.
   * *   Deleting: The ENI is being deleted.
   * 
   * @example
   * In_use
   */
  status?: string;
  /**
   * @remarks
   * The type of the ENI. Valid values:
   * 
   * *   Primary
   * *   Secondary
   * 
   * @example
   * Primary
   */
  type?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-5rqswx1trlsj9
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      description: 'Description',
      ensRegionId: 'EnsRegionId',
      instanceId: 'InstanceId',
      ipv6Sets: 'Ipv6Sets',
      macAddress: 'MacAddress',
      networkId: 'NetworkId',
      networkInterfaceId: 'NetworkInterfaceId',
      networkInterfaceName: 'NetworkInterfaceName',
      primaryIp: 'PrimaryIp',
      primaryIpType: 'PrimaryIpType',
      privateIpSets: 'PrivateIpSets',
      securityGroupIds: 'SecurityGroupIds',
      status: 'Status',
      type: 'Type',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      description: 'string',
      ensRegionId: 'string',
      instanceId: 'string',
      ipv6Sets: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetIpv6Sets,
      macAddress: 'string',
      networkId: 'string',
      networkInterfaceId: 'string',
      networkInterfaceName: 'string',
      primaryIp: 'string',
      primaryIpType: 'string',
      privateIpSets: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetPrivateIpSets,
      securityGroupIds: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetSecurityGroupIds,
      status: 'string',
      type: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    if(this.ipv6Sets && typeof (this.ipv6Sets as any).validate === 'function') {
      (this.ipv6Sets as any).validate();
    }
    if(this.privateIpSets && typeof (this.privateIpSets as any).validate === 'function') {
      (this.privateIpSets as any).validate();
    }
    if(this.securityGroupIds && typeof (this.securityGroupIds as any).validate === 'function') {
      (this.securityGroupIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

