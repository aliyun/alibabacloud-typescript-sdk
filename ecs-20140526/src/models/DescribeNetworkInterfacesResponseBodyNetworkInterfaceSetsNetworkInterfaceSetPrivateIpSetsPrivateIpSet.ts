// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetPrivateIpSetsPrivateIpSetAssociatedPublicIp } from "./DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetPrivateIpSetsPrivateIpSetAssociatedPublicIp";


export class DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetPrivateIpSetsPrivateIpSet extends $dara.Model {
  /**
   * @remarks
   * The elastic IP address (EIP) that is associated with the private IP address.
   */
  associatedPublicIp?: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetPrivateIpSetsPrivateIpSetAssociatedPublicIp;
  /**
   * @remarks
   * Indicates whether the private IP address is the primary private IP address. Valid values:
   * 
   * *   true: The IP address is the primary private IP address.
   * *   false: The IP address is a secondary private IP address.
   * 
   * @example
   * true
   */
  primary?: boolean;
  /**
   * @remarks
   * The private domain name of the ECS instance.
   * 
   * >  A private domain name can be returned in a specific format only when `HostnameType` is set to `IP` or `InstanceId`.
   * 
   * @example
   * DnsTestName
   */
  privateDnsName?: string;
  /**
   * @remarks
   * The private IP address of the ENI.
   * 
   * @example
   * ``172.17.**.**``
   */
  privateIpAddress?: string;
  static names(): { [key: string]: string } {
    return {
      associatedPublicIp: 'AssociatedPublicIp',
      primary: 'Primary',
      privateDnsName: 'PrivateDnsName',
      privateIpAddress: 'PrivateIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedPublicIp: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetPrivateIpSetsPrivateIpSetAssociatedPublicIp,
      primary: 'boolean',
      privateDnsName: 'string',
      privateIpAddress: 'string',
    };
  }

  validate() {
    if(this.associatedPublicIp && typeof (this.associatedPublicIp as any).validate === 'function') {
      (this.associatedPublicIp as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

