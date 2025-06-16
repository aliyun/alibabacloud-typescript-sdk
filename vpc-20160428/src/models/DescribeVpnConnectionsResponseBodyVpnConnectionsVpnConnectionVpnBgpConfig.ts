// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionVpnBgpConfig extends $dara.Model {
  /**
   * @remarks
   * The authentication key of the BGP routing protocol.
   * 
   * @example
   * AuthKey****
   */
  authKey?: string;
  /**
   * @remarks
   * The ASN on the Alibaba Cloud side.
   * 
   * @example
   * 65531
   */
  localAsn?: number;
  /**
   * @remarks
   * The BGP IP address on the Alibaba Cloud side.
   * 
   * @example
   * 169.254.10.2
   */
  localBgpIp?: string;
  /**
   * @remarks
   * The ASN of the peer.
   * 
   * @example
   * 65530
   */
  peerAsn?: number;
  /**
   * @remarks
   * The BGP IP address of the peer.
   * 
   * @example
   * 169.254.10.1
   */
  peerBgpIp?: string;
  /**
   * @remarks
   * The negotiation state of the BGP routing protocol. Valid values:
   * 
   * *   **success**
   * *   **false**
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The BGP CIDR block of the IPsec-VPN connection. The CIDR block falls within 169.254.0.0/16. The subnet mask of the CIDR block must be 30 bits in length.
   * 
   * @example
   * 169.254.10.0/30
   */
  tunnelCidr?: string;
  static names(): { [key: string]: string } {
    return {
      authKey: 'AuthKey',
      localAsn: 'LocalAsn',
      localBgpIp: 'LocalBgpIp',
      peerAsn: 'PeerAsn',
      peerBgpIp: 'PeerBgpIp',
      status: 'Status',
      tunnelCidr: 'TunnelCidr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authKey: 'string',
      localAsn: 'number',
      localBgpIp: 'string',
      peerAsn: 'number',
      peerBgpIp: 'string',
      status: 'string',
      tunnelCidr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

