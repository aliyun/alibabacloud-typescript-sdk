// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfacesIpv6Sets } from "./DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfacesIpv6sets";
import { DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfacesPrivateIpSets } from "./DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfacesPrivateIpSets";


export class DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfaces extends $dara.Model {
  /**
   * @remarks
   * The IPv6 addresses of the ENI. This parameter has a value only when `AdditionalAttributes.N` is set to `NETWORK_PRIMARY_ENI_IP`.
   */
  ipv6Sets?: DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfacesIpv6Sets;
  /**
   * @remarks
   * The MAC address of the ENI.
   * 
   * @example
   * 00:16:3e:4f:5f:ca
   */
  macAddress?: string;
  /**
   * @remarks
   * The ID of the ENI.
   * 
   * @example
   * eni-0wlonoy6jo8532gfzuama****
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * The primary IP address of the ENI.
   * 
   * @example
   * ***************
   */
  primaryIpAddress?: string;
  /**
   * @remarks
   * The private IP addresses of the ENI.
   */
  privateIpSets?: DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfacesPrivateIpSets;
  /**
   * @remarks
   * The type of the disk. Valid values:
   * 
   * *   system: system disk.
   * *   data: data disk.
   * 
   * @example
   * Secondary
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
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
      ipv6Sets: DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfacesIpv6Sets,
      macAddress: 'string',
      networkInterfaceId: 'string',
      primaryIpAddress: 'string',
      privateIpSets: DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfacesPrivateIpSets,
      type: 'string',
    };
  }

  validate() {
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

