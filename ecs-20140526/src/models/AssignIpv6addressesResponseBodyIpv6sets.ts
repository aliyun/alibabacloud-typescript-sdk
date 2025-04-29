// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssignIpv6AddressesResponseBodyIpv6Sets extends $dara.Model {
  ipv6Address?: string[];
  static names(): { [key: string]: string } {
    return {
      ipv6Address: 'Ipv6Address',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6Address: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ipv6Address)) {
      $dara.Model.validateArray(this.ipv6Address);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

