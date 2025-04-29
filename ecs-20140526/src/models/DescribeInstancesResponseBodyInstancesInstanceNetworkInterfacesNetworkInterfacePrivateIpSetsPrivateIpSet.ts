// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfacePrivateIpSetsPrivateIpSet extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the IP address is the primary private IP address. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  primary?: boolean;
  /**
   * @remarks
   * The private domain name of the instance.
   * 
   * >  This parameter has a value in a specific format only if `HostnameType` is set to `IpBased` or `InstanceIdBased`.
   * 
   * @example
   * dnsTestName
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
      primary: 'Primary',
      privateDnsName: 'PrivateDnsName',
      privateIpAddress: 'PrivateIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      primary: 'boolean',
      privateDnsName: 'string',
      privateIpAddress: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

