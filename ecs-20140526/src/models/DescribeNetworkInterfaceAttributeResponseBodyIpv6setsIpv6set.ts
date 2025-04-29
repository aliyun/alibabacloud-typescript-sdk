// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkInterfaceAttributeResponseBodyIpv6SetsIpv6Set extends $dara.Model {
  /**
   * @remarks
   * The IPv6 address of the ENI.
   * 
   * @example
   * 2001:db8:1234:1a00::****
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

