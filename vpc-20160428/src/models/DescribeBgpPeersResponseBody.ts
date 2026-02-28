// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBgpPeersResponseBodyBgpPeersBgpPeer extends $dara.Model {
  advertisedRouteCount?: number;
  authKey?: string;
  bfdMultiHop?: number;
  bgpGroupId?: string;
  bgpPeerId?: string;
  bgpStatus?: string;
  description?: string;
  enableBfd?: boolean;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   */
  gmtModified?: string;
  hold?: string;
  ipVersion?: string;
  isFake?: boolean;
  keepalive?: string;
  localAsn?: string;
  name?: string;
  peerAsn?: string;
  peerIpAddress?: string;
  receivedRouteCount?: number;
  regionId?: string;
  routeLimit?: string;
  routerId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      advertisedRouteCount: 'AdvertisedRouteCount',
      authKey: 'AuthKey',
      bfdMultiHop: 'BfdMultiHop',
      bgpGroupId: 'BgpGroupId',
      bgpPeerId: 'BgpPeerId',
      bgpStatus: 'BgpStatus',
      description: 'Description',
      enableBfd: 'EnableBfd',
      gmtModified: 'GmtModified',
      hold: 'Hold',
      ipVersion: 'IpVersion',
      isFake: 'IsFake',
      keepalive: 'Keepalive',
      localAsn: 'LocalAsn',
      name: 'Name',
      peerAsn: 'PeerAsn',
      peerIpAddress: 'PeerIpAddress',
      receivedRouteCount: 'ReceivedRouteCount',
      regionId: 'RegionId',
      routeLimit: 'RouteLimit',
      routerId: 'RouterId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advertisedRouteCount: 'number',
      authKey: 'string',
      bfdMultiHop: 'number',
      bgpGroupId: 'string',
      bgpPeerId: 'string',
      bgpStatus: 'string',
      description: 'string',
      enableBfd: 'boolean',
      gmtModified: 'string',
      hold: 'string',
      ipVersion: 'string',
      isFake: 'boolean',
      keepalive: 'string',
      localAsn: 'string',
      name: 'string',
      peerAsn: 'string',
      peerIpAddress: 'string',
      receivedRouteCount: 'number',
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

export class DescribeBgpPeersResponseBodyBgpPeers extends $dara.Model {
  bgpPeer?: DescribeBgpPeersResponseBodyBgpPeersBgpPeer[];
  static names(): { [key: string]: string } {
    return {
      bgpPeer: 'BgpPeer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bgpPeer: { 'type': 'array', 'itemType': DescribeBgpPeersResponseBodyBgpPeersBgpPeer },
    };
  }

  validate() {
    if(Array.isArray(this.bgpPeer)) {
      $dara.Model.validateArray(this.bgpPeer);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBgpPeersResponseBody extends $dara.Model {
  bgpPeers?: DescribeBgpPeersResponseBodyBgpPeers;
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
   * DE77A7F3-3B74-41C0-A5BC-CAFD188C28B6
   */
  requestId?: string;
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      bgpPeers: 'BgpPeers',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bgpPeers: DescribeBgpPeersResponseBodyBgpPeers,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.bgpPeers && typeof (this.bgpPeers as any).validate === 'function') {
      (this.bgpPeers as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

