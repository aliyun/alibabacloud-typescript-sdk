// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetNetworkBlacklistRequest extends $dara.Model {
  /**
   * @remarks
   * Domain name blacklist.
   * 
   * > Supports a maximum of 200 domain names.
   */
  domainBlacklist?: string[];
  /**
   * @remarks
   * IP address blacklist.
   * 
   * > Supports a maximum of 200 IP addresses or IP address segments.
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

