// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNetworkInterfaceResponseBodyIpv6PrefixSetsIpv6PrefixSet extends $dara.Model {
  /**
   * @remarks
   * The IPv6 prefix assigned to the ENI.
   * 
   * @example
   * hide
   */
  ipv6Prefix?: string;
  static names(): { [key: string]: string } {
    return {
      ipv6Prefix: 'Ipv6Prefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6Prefix: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

