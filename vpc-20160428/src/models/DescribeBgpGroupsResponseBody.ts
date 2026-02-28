// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBgpGroupsResponseBodyBgpGroupsBgpGroup extends $dara.Model {
  authKey?: string;
  bgpGroupId?: string;
  description?: string;
  hold?: string;
  ipVersion?: string;
  isFake?: string;
  keepalive?: string;
  localAsn?: string;
  name?: string;
  peerAsn?: string;
  regionId?: string;
  routeLimit?: string;
  routerId?: string;
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

