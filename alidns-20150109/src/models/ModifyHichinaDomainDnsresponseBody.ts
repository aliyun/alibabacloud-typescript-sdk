// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyHichinaDomainDNSResponseBodyNewDnsServers extends $dara.Model {
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

export class ModifyHichinaDomainDNSResponseBody extends $dara.Model {
  /**
   * @remarks
   * The DNS server names after modification.
   */
  newDnsServers?: ModifyHichinaDomainDNSResponseBodyNewDnsServers;
  /**
   * @remarks
   * The DNS server names before modification.
   */
  originalDnsServers?: ModifyHichinaDomainDNSResponseBodyOriginalDnsServers;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 536E9CAD-DB30-4647-AC87-AA5CC38C5382
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      newDnsServers: 'NewDnsServers',
      originalDnsServers: 'OriginalDnsServers',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newDnsServers: ModifyHichinaDomainDNSResponseBodyNewDnsServers,
      originalDnsServers: ModifyHichinaDomainDNSResponseBodyOriginalDnsServers,
      requestId: 'string',
    };
  }

  validate() {
    if(this.newDnsServers && typeof (this.newDnsServers as any).validate === 'function') {
      (this.newDnsServers as any).validate();
    }
    if(this.originalDnsServers && typeof (this.originalDnsServers as any).validate === 'function') {
      (this.originalDnsServers as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

