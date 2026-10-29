// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetNetworkBlacklistRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name blacklist.
   * 
   * > A maximum of 200 domain names are supported.
   */
  domainBlacklist?: string[];
  /**
   * @remarks
   * The IP address blacklist.
   * > A maximum of 200 IP addresses or CIDR blocks are supported.
   */
  ipBlacklist?: string[];
  static names(): { [key: string]: string } {
    return {
      domainBlacklist: 'DomainBlacklist',
      ipBlacklist: 'IpBlacklist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainBlacklist: { 'type': 'array', 'itemType': 'string' },
      ipBlacklist: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.domainBlacklist)) {
      $dara.Model.validateArray(this.domainBlacklist);
    }
    if(Array.isArray(this.ipBlacklist)) {
      $dara.Model.validateArray(this.ipBlacklist);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

