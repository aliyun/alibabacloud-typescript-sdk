// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDomainResponseBodyDnsServers extends $dara.Model {
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

export class AddDomainResponseBody extends $dara.Model {
  dnsServers?: AddDomainResponseBodyDnsServers;
  /**
   * @remarks
   * The ID of the domain name.
   * 
   * @example
   * xxxxx6615cf240c697f9f7e207xxxxxx
   */
  domainId?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The ID of the domain name group.
   * 
   * @example
   * defaultGroup
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the domain name group.
   * 
   * @example
   * MyGroup
   */
  groupName?: string;
  /**
   * @remarks
   * The Punycode for the Chinese domain name. This parameter is returned only for Chinese domain names.
   * 
   * @example
   * xn--fsq270a.com
   */
  punyCode?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * xxx508EF-00FD-xxx9-95A4-1E10BACxxxxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dnsServers: 'DnsServers',
      domainId: 'DomainId',
      domainName: 'DomainName',
      groupId: 'GroupId',
      groupName: 'GroupName',
      punyCode: 'PunyCode',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsServers: AddDomainResponseBodyDnsServers,
      domainId: 'string',
      domainName: 'string',
      groupId: 'string',
      groupName: 'string',
      punyCode: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.dnsServers && typeof (this.dnsServers as any).validate === 'function') {
      (this.dnsServers as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

