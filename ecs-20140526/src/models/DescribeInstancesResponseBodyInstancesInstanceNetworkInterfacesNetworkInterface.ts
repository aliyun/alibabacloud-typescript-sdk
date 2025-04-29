// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfaceIpv4PrefixSets } from "./DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfaceIpv4prefixSets";
import { DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfaceIpv6PrefixSets } from "./DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfaceIpv6prefixSets";
import { DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfaceIpv6Sets } from "./DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfaceIpv6sets";
import { DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfacePrivateIpSets } from "./DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfacePrivateIpSets";


export class DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterface extends $dara.Model {
  /**
   * @remarks
   * The IPv4 prefixes of the ENI. This parameter has a value only when `AdditionalAttributes.N` is set to `NETWORK_PRIMARY_ENI_IP`.
   */
  ipv4PrefixSets?: DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfaceIpv4PrefixSets;
  /**
   * @remarks
   * The IPv6 prefixes of the ENI. This parameter has a value only when `AdditionalAttributes.N` is set to `NETWORK_PRIMARY_ENI_IP`.
   */
  ipv6PrefixSets?: DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfaceIpv6PrefixSets;
  /**
   * @remarks
   * The IPv6 addresses of the ENI. This parameter has a value only when `AdditionalAttributes.N` is set to `NETWORK_PRIMARY_ENI_IP`.
   */
  ipv6Sets?: DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfaceIpv6Sets;
  /**
   * @remarks
   * The MAC address of the ENI.
   * 
   * @example
   * 00:16:3e:32:b4:**
   */
  macAddress?: string;
  /**
   * @remarks
   * The ID of the ENI.
   * 
   * @example
   * eni-2zeh9atclduxvf1z****
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * The primary private IP address of the ENI.
   * 
   * @example
   * ``172.17.**.**``*
   */
  primaryIpAddress?: string;
  /**
   * @remarks
   * The private IP addresses of the ENI.
   */
  privateIpSets?: DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfacePrivateIpSets;
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
  static names(): { [key: string]: string } {
    return {
      ipv4PrefixSets: 'Ipv4PrefixSets',
      ipv6PrefixSets: 'Ipv6PrefixSets',
      ipv6Sets: 'Ipv6Sets',
      macAddress: 'MacAddress',
      networkInterfaceId: 'NetworkInterfaceId',
      primaryIpAddress: 'PrimaryIpAddress',
      privateIpSets: 'PrivateIpSets',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv4PrefixSets: DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfaceIpv4PrefixSets,
      ipv6PrefixSets: DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfaceIpv6PrefixSets,
      ipv6Sets: DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfaceIpv6Sets,
      macAddress: 'string',
      networkInterfaceId: 'string',
      primaryIpAddress: 'string',
      privateIpSets: DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfacePrivateIpSets,
      type: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

