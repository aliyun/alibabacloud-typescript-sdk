// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssignIpv6AddressesResponseBodyIpv6PrefixSets extends $dara.Model {
  ipv6Prefix?: string[];
  static names(): { [key: string]: string } {
    return {
      ipv6Prefix: 'Ipv6Prefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6Prefix: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ipv6Prefix)) {
      $dara.Model.validateArray(this.ipv6Prefix);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

