// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DNSOption } from "./Dnsoption";


export class CustomDNS extends $dara.Model {
  /**
   * @remarks
   * The DNS resolution configurations in the resolv.conf file. Each item corresponds to a key-value pair in the key:value format, in which the key is required.
   */
  dnsOptions?: DNSOption[];
  /**
   * @remarks
   * The IP addresses of the DNS server.
   */
  nameServers?: string[];
  /**
   * @remarks
   * The search domains of DNS server.
   */
  searches?: string[];
  static names(): { [key: string]: string } {
    return {
      dnsOptions: 'dnsOptions',
      nameServers: 'nameServers',
      searches: 'searches',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsOptions: { 'type': 'array', 'itemType': DNSOption },
      nameServers: { 'type': 'array', 'itemType': 'string' },
      searches: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.dnsOptions)) {
      $dara.Model.validateArray(this.dnsOptions);
    }
    if(Array.isArray(this.nameServers)) {
      $dara.Model.validateArray(this.nameServers);
    }
    if(Array.isArray(this.searches)) {
      $dara.Model.validateArray(this.searches);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

