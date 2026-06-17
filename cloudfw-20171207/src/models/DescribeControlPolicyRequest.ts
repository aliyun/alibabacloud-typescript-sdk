// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeControlPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The action that Cloud Firewall performs on the traffic. Valid values:
   * 
   * - **accept**: Allow
   * 
   * - **drop**: Deny
   * 
   * - **log**: Monitor
   * 
   * > If you do not set this parameter, all action types are queried.
   * 
   * @example
   * accept
   */
  aclAction?: string;
  /**
   * @remarks
   * The unique ID of the access control policy.
   * 
   * @example
   * 00281255-d220-4db1-8f4f-c4df221a****
   */
  aclUuid?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * Default value: 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The description of the access control policy. Fuzzy queries are supported.
   * 
   * > If you do not set this parameter, the descriptions of all policies are queried.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The destination address in the access control policy. Fuzzy queries are supported. The value of this parameter varies based on the value of the \\`DestinationType\\` parameter.
   * 
   * - If \\`DestinationType\\` is \\`net\\`, the value of this parameter is a CIDR block. Example: 10.0.3.0/24.
   * 
   * - If \\`DestinationType\\` is \\`domain\\`, the value of this parameter is a domain name. Example: aliyun.
   * 
   * - If \\`DestinationType\\` is \\`group\\`, the value of this parameter is the name of an address book. Example: db_group.
   * 
   * - If \\`DestinationType\\` is \\`location\\`, the value of this parameter is a region name. For more information about region codes, see AddControlPolicy. Example: \\`["BJ11", "ZB"]\\`.
   * 
   * > If you do not set this parameter, all types of destination addresses are queried.
   * 
   * @example
   * 192.0.XX.XX
   */
  destination?: string;
  /**
   * @remarks
   * The traffic direction that the access control policy controls. Valid values:
   * 
   * - **in**: Inbound traffic from an external source to an internal destination.
   * 
   * - **out**: Outbound traffic from an internal source to an external destination.
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @remarks
   * The IP version supported. Valid values:
   * 
   * - **4** (default): IPv4 address
   * 
   * - **6**: IPv6 address
   * 
   * @example
   * 6
   */
  ipVersion?: string;
  /**
   * @remarks
   * The language of the response message. Valid values:
   * 
   * - **zh** (default): Chinese
   * 
   * - **en**: English
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
   * The protocol type of the traffic in the access control policy. Valid values:
   * 
   * - **TCP**
   * 
   * - **UDP**
   * 
   * - **ICMP**
   * 
   * - **ANY** (all protocol types)
   * 
   * > If you do not set this parameter, all protocol types are queried.
   * 
   * @example
   * TCP
   */
  proto?: string;
  /**
   * @remarks
   * The status of the access control policy. Valid values:
   * 
   * - **true**: The access control policy is enabled.
   * 
   * - **false**: The access control policy is disabled.
   * 
   * @example
   * true
   */
  release?: string;
  /**
   * @remarks
   * The recurrence type for the policy validity period of the access control policy. Valid values:
   * 
   * - **Permanent** (default): Always
   * 
   * - **None**: One-time
   * 
   * - **Daily**: Daily
   * 
   * - **Weekly**: Weekly
   * 
   * - **Monthly**: Monthly
   * 
   * @example
   * Permanent
   */
  repeatType?: string;
  /**
   * @remarks
   * The source address in the access control policy. Fuzzy queries are supported. The value of this parameter varies based on the value of the \\`SourceType\\` parameter.
   * 
   * - If \\`SourceType\\` is \\`net\\`, the value of this parameter is a CIDR block. Example: 192.0.XX.XX/24.
   * 
   * - If \\`SourceType\\` is \\`group\\`, the value of this parameter is the name of a source address book. Example: \\`db_group\\`. If you leave this parameter empty, all source addresses are queried.
   * 
   * - If \\`SourceType\\` is \\`location\\`, the value of this parameter is a source region. Example: \\`Beijing\\` or \\`beijing\\`. You can use either the Chinese name or the English name for the query.
   * 
   * > If you do not set this parameter, all types of source addresses are queried.
   * 
   * @example
   * 192.0.XX.XX
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      aclAction: 'AclAction',
      aclUuid: 'AclUuid',
      currentPage: 'CurrentPage',
      description: 'Description',
      destination: 'Destination',
      direction: 'Direction',
      ipVersion: 'IpVersion',
      lang: 'Lang',
      pageSize: 'PageSize',
      proto: 'Proto',
      release: 'Release',
      repeatType: 'RepeatType',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclAction: 'string',
      aclUuid: 'string',
      currentPage: 'string',
      description: 'string',
      destination: 'string',
      direction: 'string',
      ipVersion: 'string',
      lang: 'string',
      pageSize: 'string',
      proto: 'string',
      release: 'string',
      repeatType: 'string',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

