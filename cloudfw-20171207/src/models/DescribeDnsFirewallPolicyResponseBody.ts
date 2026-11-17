// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDnsFirewallPolicyResponseBodyPolicys extends $dara.Model {
  /**
   * @remarks
   * The action that Cloud Firewall performs on the traffic in the access control policy. Valid values:
   * 
   * - **accept**: Allow
   * - **drop**: Deny
   * - **log**: Monitor
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
   * 01281255-d220-4db1-8f4f-c4df221a****
   */
  aclUuid?: string;
  /**
   * @remarks
   * The description of the access control policy of the DNS border firewall.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The destination address in the access control policy of the DNS border firewall. Valid values:
   * 
   * - If **DestinationType** is set to `net`, the value of Destination is the destination CIDR block.
   * 
   * - If **DestinationType** is set to `domain`, the value of Destination is the destination domain name.
   * 
   * - If **DestinationType** is set to `group`, the value of Destination is the name of the destination address book.
   * 
   * @example
   * x.x.x.x/32
   */
  destination?: string;
  /**
   * @remarks
   * The list of addresses in the destination address book.
   */
  destinationAddrs?: string[];
  /**
   * @remarks
   * The type of the destination address book in the access control policy. Valid values:
   * 
   * - **ip**: IP address book, which contains one or more CIDR blocks
   * - **domain**: domain name address book, which contains one or more domain names
   * 
   * @example
   * ip
   */
  destinationGroupType?: string;
  /**
   * @remarks
   * The type of the destination address in the access control policy. Valid values:
   * 
   * - **net**: destination CIDR block
   * - **group**: destination address book
   * - **domain**: destination domain name
   * - **location**: destination region
   * 
   * @example
   * net
   */
  destinationType?: string;
  /**
   * @remarks
   * The traffic direction of the access control policy. Valid values:
   * 
   * - **in**: inbound traffic
   * - **out**: outbound traffic
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @remarks
   * The latest hit UNIX timestamp. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1579261141
   */
  hitLastTime?: number;
  /**
   * @remarks
   * The number of hits for the access control policy.
   * 
   * @example
   * 100
   */
  hitTimes?: number;
  /**
   * @remarks
   * The IP address version. Valid values:
   * 
   * - **4**: IPv4
   * - **6**: IPv6
   * 
   * @example
   * 6
   */
  ipVersion?: number;
  /**
   * @remarks
   * The priority of the access control policy. A smaller value indicates a higher priority.
   * 
   * @example
   * 110
   */
  priority?: number;
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
   * The source address in the access control policy. Valid values:
   * 
   * - If **SourceType** is set to `net`, the source address is a CIDR block. Example: 192.0.XX.XX/24.
   * - If **SourceType** is set to `group`, the source address is the name of the source address book. Example: db_group.
   * - If **SourceType** is set to `location`, the source address is an area. For more information about the specific area positional encoding, see [AddControlPolicy](https://help.aliyun.com/document_detail/138867.html). Example: ["BJ11", "ZB"\\].
   * 
   * @example
   * 192.0.XX.XX/24
   */
  source?: string;
  /**
   * @remarks
   * The source addresses.
   */
  sourceAddrs?: string[];
  /**
   * @remarks
   * The type of the source address book in the access control policy. Valid values:
   * 
   * - **ip**: IP address book, which contains one or more CIDR blocks.
   * 
   * - **tag**: ECS tag-based address book, which contains the IP addresses of one or more ECS tags.
   * 
   * - **domain**: domain name address book, which contains one or more domain names.
   * 
   * - **threat**: threat intelligence address book, which contains one or more malicious IP addresses or domain names.
   * 
   * - **backsrc**: back-to-origin address book, which contains the back-to-origin IP addresses of one or more Anti-DDoS or WAF instances.
   * 
   * @example
   * ip
   */
  sourceGroupType?: string;
  /**
   * @remarks
   * The type of the source address in the access control policy of the DNS border firewall. Valid values:
   * 
   * - **net**: source CIDR block
   * - **group**: source address book
   * 
   * @example
   * net
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      aclAction: 'AclAction',
      aclUuid: 'AclUuid',
      description: 'Description',
      destination: 'Destination',
      destinationAddrs: 'DestinationAddrs',
      destinationGroupType: 'DestinationGroupType',
      destinationType: 'DestinationType',
      direction: 'Direction',
      hitLastTime: 'HitLastTime',
      hitTimes: 'HitTimes',
      ipVersion: 'IpVersion',
      priority: 'Priority',
      release: 'Release',
      source: 'Source',
      sourceAddrs: 'SourceAddrs',
      sourceGroupType: 'SourceGroupType',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclAction: 'string',
      aclUuid: 'string',
      description: 'string',
      destination: 'string',
      destinationAddrs: { 'type': 'array', 'itemType': 'string' },
      destinationGroupType: 'string',
      destinationType: 'string',
      direction: 'string',
      hitLastTime: 'number',
      hitTimes: 'number',
      ipVersion: 'number',
      priority: 'number',
      release: 'string',
      source: 'string',
      sourceAddrs: { 'type': 'array', 'itemType': 'string' },
      sourceGroupType: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.destinationAddrs)) {
      $dara.Model.validateArray(this.destinationAddrs);
    }
    if(Array.isArray(this.sourceAddrs)) {
      $dara.Model.validateArray(this.sourceAddrs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsFirewallPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNo?: string;
  /**
   * @remarks
   * The number of entries to return in the current query.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The information about the access control policy of the DNS firewall.
   */
  policys?: DescribeDnsFirewallPolicyResponseBodyPolicys[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0A4ACDE9-9F9F-56C1-B3B7-60971BA1****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 10
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      policys: 'Policys',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'string',
      pageSize: 'string',
      policys: { 'type': 'array', 'itemType': DescribeDnsFirewallPolicyResponseBodyPolicys },
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policys)) {
      $dara.Model.validateArray(this.policys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

