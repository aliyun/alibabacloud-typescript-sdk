// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfacesIpv6SetsIpv6Set extends $dara.Model {
  /**
   * @remarks
   * IPv6 addresses N of the ENI. You can specify multiple IPv6 addresses. Valid values of N: 1 to 100.
   * 
   * @example
   * 2408:4005:396:3200:****:6609:821e:df7a
   */
  ipv6Address?: string;
  static names(): { [key: string]: string } {
    return {
      ipv6Address: 'Ipv6Address',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6Address: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

