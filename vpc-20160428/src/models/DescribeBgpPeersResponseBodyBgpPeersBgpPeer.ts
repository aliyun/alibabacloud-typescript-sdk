// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBgpPeersResponseBodyBgpPeersBgpPeer extends $dara.Model {
  /**
   * @remarks
   * The number of advertised routes.
   * 
   * @example
   * 0
   */
  advertisedRouteCount?: number;
  /**
   * @remarks
   * The authentication key of the BGP group.
   * 
   * @example
   * !PWZ****
   */
  authKey?: string;
  /**
   * @remarks
   * The Bidirectional Forwarding Detection (BFD) hop count.
   * 
   * @example
   * 3
   */
  bfdMultiHop?: number;
  /**
   * @remarks
   * The ID of the BGP group.
   * 
   * @example
   * bgpg-2zev8h2wo414sfh****
   */
  bgpGroupId?: string;
  /**
   * @remarks
   * The ID of the BGP peer.
   * 
   * @example
   * bgp-2ze3un0ft1jd1xd****
   */
  bgpPeerId?: string;
  /**
   * @remarks
   * The status of the BGP connection. Valid values:
   * 
   * *   **Idle**: The BGP connection is not used.
   * *   **Connect**: The BGP connection is used.
   * *   **Active**: The BGP connection is available.
   * *   **Established**: The BGP connection is established.
   * *   **Down**: The BGP connection is unavailable.
   * 
   * @example
   * Connect
   */
  bgpStatus?: string;
  /**
   * @remarks
   * The description of the BGP group.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether BFD is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  enableBfd?: boolean;
  /**
   * @remarks
   * The time when the BGP peer is modified.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2022-05-20T07:29:08Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The hold time.
   * 
   * @example
   * 30
   */
  hold?: string;
  /**
   * @remarks
   * The version of the IP address.
   * 
   * @example
   * ipv4
   */
  ipVersion?: string;
  /**
   * @remarks
   * Indicates whether a fake autonomous system number (ASN) is used. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  isFake?: boolean;
  /**
   * @remarks
   * The Keepalive interval.
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
   * The name of the BGP peer.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The autonomous system number (ASN)of the BGP peer.
   * 
   * @example
   * 65515
   */
  peerAsn?: string;
  /**
   * @remarks
   * The IP address of the BGP peer.
   * 
   * @example
   * 116.62.XX.XX
   */
  peerIpAddress?: string;
  /**
   * @remarks
   * The number of received routes.
   * 
   * @example
   * 0
   */
  receivedRouteCount?: number;
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
   * The maximum number of routes.
   * 
   * @example
   * 110
   */
  routeLimit?: string;
  /**
   * @remarks
   * The Router ID.
   * 
   * @example
   * vbr-2zecmmvg5gvu8i4te****
   */
  routerId?: string;
  /**
   * @remarks
   * The status of the BGP peer. Valid values:
   * 
   * *   **Pending**
   * *   **Available**
   * *   **Modifying**
   * *   **Deleting**
   * *   **Deleted**
   * 
   * @example
   * Available
   */
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

