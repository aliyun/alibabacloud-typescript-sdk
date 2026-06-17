// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDnsFirewallPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The action that is performed on traffic that hits the DNS firewall policy. Valid values:
   * 
   * - **accept**: allows the traffic.
   * 
   * - **drop**: denies the traffic.
   * 
   * - **log**: monitors the traffic.
   * 
   * > If you do not specify this parameter, policies of all action types are queried.
   * 
   * @example
   * accept
   */
  aclAction?: string;
  /**
   * @remarks
   * The unique ID of the firewall rule.
   * 
   * @example
   * b6c8f905-2eb6-442a-ba35-9416e****
   */
  aclUuid?: string;
  /**
   * @remarks
   * The page number to return. Default value: 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The description of the DNS firewall policy.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The destination address in the DNS firewall policy. Fuzzy match is supported.
   * 
   * > The value of Destination can be a CIDR block, a domain name, or an address book.
   * 
   * @example
   * 10.2.XX.XX/24
   */
  destination?: string;
  /**
   * @remarks
   * The IP version that is supported. Valid values:
   * 
   * - **4**: IPv4
   * 
   * - **6**: IPv6
   * 
   * @example
   * 4
   */
  ipVersion?: string;
  /**
   * @remarks
   * The language of the response messages. Valid values: **zh** (Chinese) and **en** (English).
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The status of the access control policy. The policy is enabled by default after it is created. Valid values:
   * 
   * - **true**: enables the access control policy.
   * 
   * - **false**: disables the access control policy.
   * 
   * @example
   * true
   */
  release?: string;
  /**
   * @remarks
   * The source address in the DNS firewall policy. Fuzzy match is supported.
   * 
   * > The value of Source can be a CIDR block or an address book.
   * 
   * @example
   * 192.0.XX.XX/24
   */
  source?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 140.205.118.XXX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      aclAction: 'AclAction',
      aclUuid: 'AclUuid',
      currentPage: 'CurrentPage',
      description: 'Description',
      destination: 'Destination',
      ipVersion: 'IpVersion',
      lang: 'Lang',
      pageSize: 'PageSize',
      release: 'Release',
      source: 'Source',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclAction: 'string',
      aclUuid: 'string',
      currentPage: 'string',
      description: 'string',
      destination: 'string',
      ipVersion: 'string',
      lang: 'string',
      pageSize: 'string',
      release: 'string',
      source: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

