// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVccResponseBodyContentVbrInfosVbrBgpPeers extends $dara.Model {
  /**
   * @remarks
   * BGP Group ID
   * 
   * @example
   * bgpg-2ze2sit2vakrkapvy****
   */
  bgpGroupId?: string;
  /**
   * @remarks
   * BGP peer ID
   * 
   * @example
   * bgp-uf6heugif9enu48rj****
   */
  bgpPeerId?: string;
  /**
   * @remarks
   * Peer AS No.
   * 
   * @example
   * 98765****
   */
  peerAsn?: string;
  /**
   * @remarks
   * BGP peer IP address
   * 
   * @example
   * 169.254.****
   */
  peerIpAddress?: string;
  /**
   * @remarks
   * The status of the BGP peer. Valid values:
   * 
   * *   Pending: pending
   * *   Available: The route is available.
   * *   Modifying: being modified
   * *   Deleting: The IPv4 gateway is being deleted.
   * *   Deleted
   * *   Not Available
   * 
   * @example
   * Available
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      bgpGroupId: 'BgpGroupId',
      bgpPeerId: 'BgpPeerId',
      peerAsn: 'PeerAsn',
      peerIpAddress: 'PeerIpAddress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bgpGroupId: 'string',
      bgpPeerId: 'string',
      peerAsn: 'string',
      peerIpAddress: 'string',
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

