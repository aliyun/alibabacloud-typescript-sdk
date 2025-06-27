// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyHichinaDomainDNSResponseBodyOriginalDnsServers extends $dara.Model {
  dnsServer?: string[];
  static names(): { [key: string]: string } {
    return {
      dnsServer: 'DnsServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsServer: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.dnsServer)) {
      $dara.Model.validateArray(this.dnsServer);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

