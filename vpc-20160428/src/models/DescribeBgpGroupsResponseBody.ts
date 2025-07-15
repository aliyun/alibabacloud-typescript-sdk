// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBgpGroupsResponseBodyBgpGroupsBgpGroup extends $dara.Model {
  /**
   * @remarks
   * The key used by the BGP group.
   * 
   * @example
   * !PWZ****
   */
  authKey?: string;
  /**
   * @remarks
   * The ID of the BGP group.
   * 
   * @example
   * bgpg-bp1k25cyp26cllath****
   */
  bgpGroupId?: string;
  /**
   * @remarks
   * The description of the BGP group.
   * 
   * @example
   * The description of the BGP group.
   */
  description?: string;
  /**
   * @remarks
   * The hold time to receive BGP messages. Unit: seconds.
   * 
   * >  If no message is received within the hold time, the BGP peer is considered disconnected.
   * 
   * @example
   * 30
   */
  hold?: string;
  /**
   * @remarks
   * The IP version of the BGP group. Valid values:
   * 
   * *   **ipv4**: IPv4
   * *   **ipv6**: IPv6. IPv6 is supported only if the VBR of the BGP group has IPv6 enabled.
   * 
   * @example
   * IPv4
   */
  ipVersion?: string;
  /**
   * @remarks
   * Indicates whether the ASN is fake. Valid values:
   * 
   * *   **false**
   * *   **true**
   * 
   * @example
   * true
   */
  isFake?: string;
  /**
   * @remarks
   * The keepalive time. Unit: seconds.
   * 
   * @example
   * 10
   */
  keepalive?: string;
  /**
   * @remarks
   * The ASN of the device on the Alibaba Cloud side.
   * 
   * @example
   * 45104
   */
  localAsn?: string;
  /**
   * @remarks
   * The name of the BGP group.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The autonomous system number (ASN) of the on-premises device in the data center.
   * 
   * @example
   * 1****
   */
  peerAsn?: string;
  /**
   * @remarks
   * The ID of the region to which the BGP group belongs.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The maximum number of route entries for BGP dynamic route learning.
   * 
   * @example
   * 99
   */
  routeLimit?: string;
  /**
   * @remarks
   * The ID of the VBR.
   * 
   * @example
   * vbr-bp1ctxy813985gkuk****
   */
  routerId?: string;
  /**
   * @remarks
   * The status of the BGP group.
   * 
   * @example
   * Available
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      authKey: 'AuthKey',
      bgpGroupId: 'BgpGroupId',
      description: 'Description',
      hold: 'Hold',
      ipVersion: 'IpVersion',
      isFake: 'IsFake',
      keepalive: 'Keepalive',
      localAsn: 'LocalAsn',
      name: 'Name',
      peerAsn: 'PeerAsn',
      regionId: 'RegionId',
      routeLimit: 'RouteLimit',
      routerId: 'RouterId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authKey: 'string',
      bgpGroupId: 'string',
      description: 'string',
      hold: 'string',
      ipVersion: 'string',
      isFake: 'string',
      keepalive: 'string',
      localAsn: 'string',
      name: 'string',
      peerAsn: 'string',
      regionId: 'string',
      routeLimit: 'string',
      routerId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBgpGroupsResponseBodyBgpGroups extends $dara.Model {
  bgpGroup?: DescribeBgpGroupsResponseBodyBgpGroupsBgpGroup[];
  static names(): { [key: string]: string } {
    return {
      bgpGroup: 'BgpGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bgpGroup: { 'type': 'array', 'itemType': DescribeBgpGroupsResponseBodyBgpGroupsBgpGroup },
    };
  }

  validate() {
    if(Array.isArray(this.bgpGroup)) {
      $dara.Model.validateArray(this.bgpGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBgpGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed information about the BGP group.
   */
  bgpGroups?: DescribeBgpGroupsResponseBodyBgpGroups;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1D0971B2-A35A-42C1-A44C-E91360C36C0B
   */
  requestId?: string;
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      bgpGroups: 'BgpGroups',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bgpGroups: DescribeBgpGroupsResponseBodyBgpGroups,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.bgpGroups && typeof (this.bgpGroups as any).validate === 'function') {
      (this.bgpGroups as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

