// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PAL7ConfigDnsConfig extends $dara.Model {
  dnsServers?: string[];
  static names(): { [key: string]: string } {
    return {
      dnsServers: 'DnsServers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsServers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.dnsServers)) {
      $dara.Model.validateArray(this.dnsServers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

