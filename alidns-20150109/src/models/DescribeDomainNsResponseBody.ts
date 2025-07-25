// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainNsResponseBodyDnsServers extends $dara.Model {
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

export class DescribeDomainNsResponseBodyExpectDnsServers extends $dara.Model {
  expectDnsServer?: string[];
  static names(): { [key: string]: string } {
    return {
      expectDnsServer: 'ExpectDnsServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expectDnsServer: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.expectDnsServer)) {
      $dara.Model.validateArray(this.expectDnsServer);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainNsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether all the name servers are Alibaba Cloud DNS servers.
   * 
   * @example
   * true
   */
  allAliDns?: boolean;
  /**
   * @remarks
   * The cause code of the detection failure.
   * 
   * @example
   * DnsCheck.Failed
   */
  detectFailedReasonCode?: string;
  /**
   * @remarks
   * The DNS server names configured for the domain name.
   */
  dnsServers?: DescribeDomainNsResponseBodyDnsServers;
  /**
   * @remarks
   * The Domain Name System (DNS) server names assigned by Alibaba Cloud DNS.
   */
  expectDnsServers?: DescribeDomainNsResponseBodyExpectDnsServers;
  /**
   * @remarks
   * Indicates whether the name servers include Alibaba Cloud DNS servers.
   * 
   * @example
   * true
   */
  includeAliDns?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 16C7DC7A-2FA7-4D14-8B12-88A2BB6373DB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      allAliDns: 'AllAliDns',
      detectFailedReasonCode: 'DetectFailedReasonCode',
      dnsServers: 'DnsServers',
      expectDnsServers: 'ExpectDnsServers',
      includeAliDns: 'IncludeAliDns',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allAliDns: 'boolean',
      detectFailedReasonCode: 'string',
      dnsServers: DescribeDomainNsResponseBodyDnsServers,
      expectDnsServers: DescribeDomainNsResponseBodyExpectDnsServers,
      includeAliDns: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    if(this.dnsServers && typeof (this.dnsServers as any).validate === 'function') {
      (this.dnsServers as any).validate();
    }
    if(this.expectDnsServers && typeof (this.expectDnsServers as any).validate === 'function') {
      (this.expectDnsServers as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

