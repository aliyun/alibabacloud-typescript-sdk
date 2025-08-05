// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDnsFirewallPolicyResponseBodyPolicys extends $dara.Model {
  /**
   * @example
   * accept
   */
  aclAction?: string;
  /**
   * @example
   * 01281255-d220-4db1-8f4f-c4df221a****
   */
  aclUuid?: string;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * x.x.x.x/32
   */
  destination?: string;
  destinationAddrs?: string[];
  /**
   * @example
   * ip
   */
  destinationGroupType?: string;
  /**
   * @example
   * net
   */
  destinationType?: string;
  /**
   * @example
   * in
   */
  direction?: string;
  /**
   * @example
   * 1579261141
   */
  hitLastTime?: number;
  /**
   * @example
   * 100
   */
  hitTimes?: number;
  /**
   * @example
   * 6
   */
  ipVersion?: number;
  /**
   * @example
   * 110
   */
  priority?: number;
  /**
   * @example
   * true
   */
  release?: string;
  /**
   * @example
   * 192.0.XX.XX/24
   */
  source?: string;
  sourceAddrs?: string[];
  /**
   * @example
   * ip
   */
  sourceGroupType?: string;
  /**
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
   * @example
   * 1
   */
  pageNo?: string;
  /**
   * @example
   * 10
   */
  pageSize?: string;
  policys?: DescribeDnsFirewallPolicyResponseBodyPolicys[];
  /**
   * @example
   * 0A4ACDE9-9F9F-56C1-B3B7-60971BA1****
   */
  requestId?: string;
  /**
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

