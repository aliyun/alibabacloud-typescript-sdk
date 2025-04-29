// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssignPrivateIpAddressesResponseBodyAssignedPrivateIpAddressesSetIpv4PrefixSet extends $dara.Model {
  ipv4Prefixes?: string[];
  static names(): { [key: string]: string } {
    return {
      ipv4Prefixes: 'Ipv4Prefixes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv4Prefixes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ipv4Prefixes)) {
      $dara.Model.validateArray(this.ipv4Prefixes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

