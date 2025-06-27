// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddDomainResponseBodyDnsServers } from "./AddDomainResponseBodyDnsServers";


export class AddDomainResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Domain Name System (DNS) servers configured for the domain name.
   */
  dnsServers?: AddDomainResponseBodyDnsServers;
  /**
   * @remarks
   * The ID of the domain name.
   * 
   * @example
   * 00efd71a-770e-4255-b54e-6fe5659baffe
   */
  domainId?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * dns-example.top
   */
  domainName?: string;
  /**
   * @remarks
   * The ID of the domain name group.
   * 
   * @example
   * 2223
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
   * The Punycode for the domain name. This parameter is returned only for Chinese domain names.
   * 
   * @example
   * xn--fsq270a.com
   */
  punyCode?: string;
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

