// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOriginProtectionResponseBodyCurrentIPWhitelist extends $dara.Model {
  /**
   * @remarks
   * The IP whitelist for origin protection used by the website, specified as IPv4 addresses or CIDR blocks.
   */
  IPv4?: string[];
  /**
   * @remarks
   * The IP whitelist for origin protection used by the website, specified as IPv6 addresses or CIDR blocks.
   */
  IPv6?: string[];
  static names(): { [key: string]: string } {
    return {
      IPv4: 'IPv4',
      IPv6: 'IPv6',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IPv4: { 'type': 'array', 'itemType': 'string' },
      IPv6: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.IPv4)) {
      $dara.Model.validateArray(this.IPv4);
    }
    if(Array.isArray(this.IPv6)) {
      $dara.Model.validateArray(this.IPv6);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

