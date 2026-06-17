// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDnsFirewallPolicyResponseBodyPolicys extends $dara.Model {
  /**
   * @remarks
   * The action that is performed on traffic that matches the access control policy. Valid values:
   * 
   * - **accept**: allows the traffic.
   * 
   * - **drop**: denies the traffic.
   * 
   * - **log**: monitors the traffic.
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
   * The description of the access control policy.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The destination address in the access control policy. Valid values:
   * 
   * - If **DestinationType** is `net`, the value of this parameter is a destination CIDR block.
   * 
   * - If **DestinationType** is `domain`, the value of this parameter is a destination domain.
   * 
   * - If **DestinationType** is `group`, the value of this parameter is the name of a destination address book.
   * 
   * @example
   * x.x.x.x/32
   */
  destination?: string;
  /**
   * @remarks
   * The destination addresses in the address book.
   */
  destinationAddrs?: string[];
  /**
   * @remarks
   * The type of the destination address book in the access control policy. Valid values:
   * 
   * - **ip**: an IP address book
   * 
   * - **domain**: a domain address book
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
   * 
   * - **group**: destination address book
   * 
   * - **domain**: destination domain
   * 
   * - **location**: destination location
   * 
   * @example
   * net
   */
  destinationType?: string;
  /**
   * @remarks
   * The direction of the traffic to which the access control policy applies. Valid values:
   * 
   * - **in**: inbound traffic
   * 
   * - **out**: outbound traffic
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @remarks
   * The last time the policy was hit. The value is a UNIX timestamp. Unit: seconds.
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
   * The IP version supported by the access control policy. Valid values:
   * 
   * - **4**: IPv4
   * 
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
   * Indicates whether the access control policy is enabled. After a policy is created, it is enabled by default. Valid values:
   * 
   * - **true**: enabled
   * 
   * - **false**: disabled
   * 
   * @example
   * true
   */
  release?: string;
  /**
   * @remarks
   * The source address in the access control policy. Valid values:
   * 
   * - If **SourceType** is `net`, the value of this parameter is a source CIDR block. Example: 192.0.XX.XX/24.
   * 
   * - If **SourceType** is `group`, the value of this parameter is the name of a source address book. Example: db_group.
   * 
   * - If **SourceType** is `location`, the value of this parameter is a location. For more information about the valid values of this parameter, see [AddControlPolicy](https://help.aliyun.com/document_detail/138867.html). Example: ["BJ11", "ZB"].
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
   * - **ip**: an IP address book
   * 
   * - **tag**: a tag address book
   * 
   * - **domain**: a domain address book
   * 
   * - **threat**: a threat intelligence address book
   * 
   * - **backsrc**: a back-to-origin address book
   * 
   * @example
   * ip
   */
  sourceGroupType?: string;
  /**
   * @remarks
   * The type of the source address in the access control policy. Valid values:
   * 
   * - **net**: a source CIDR block
   * 
   * - **group**: a source address book
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
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The DNS firewall access control policies.
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
   * The total number of entries.
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

