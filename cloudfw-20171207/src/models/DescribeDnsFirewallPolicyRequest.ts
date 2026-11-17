// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDnsFirewallPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The action that Cloud Firewall performs on the traffic in the access control policy of the DNS border firewall. Valid values:
   * 
   * - **accept**: Allow
   * - **drop**: Deny
   * - **log**: Monitor
   * 
   * > If you do not specify this parameter, all actions are queried.
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
   * The page number of the current page for a paging query. Default value: 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The description of the DNS border firewall policy.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The destination address in the access control policy of the DNS border firewall. Fuzzy match is supported.
   * 
   * > Destination can be a single CIDR block, a domain name, or an address book name.
   * 
   * @example
   * 10.2.XX.XX/24
   */
  destination?: string;
  /**
   * @remarks
   * The IP address version. Valid values:
   * 
   * - **4**: IPv4
   * - **6**: IPv6
   * 
   * @example
   * 4
   */
  ipVersion?: string;
  /**
   * @remarks
   * The language of the request and response. Valid values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries to return in the current query.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The status of the access control policy. By default, the policy is enabled after it is created. Valid values:
   * 
   * - **true**: Enabled
   * 
   * - **false**: Disabled
   * 
   * @example
   * true
   */
  release?: string;
  /**
   * @remarks
   * The source address in the access control policy of the DNS border firewall. Fuzzy match is supported.
   * 
   * > Source can be a single CIDR block or an address book name.
   * 
   * @example
   * 192.0.XX.XX/24
   */
  source?: string;
  /**
   * @remarks
   * The source IP address of the requester.
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

