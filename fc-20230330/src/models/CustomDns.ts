// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DNSOption } from "./Dnsoption";


export class CustomDNS extends $dara.Model {
  dnsOptions?: DNSOption[];
  nameServers?: string[];
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

