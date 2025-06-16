// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVpnAttachmentAttributeResponseBodyTunnelOptionsSpecificationTunnelBgpConfig extends $dara.Model {
  /**
   * @remarks
   * The ASN on the Alibaba Cloud side.
   * 
   * @example
   * 65530
   */
  localAsn?: number;
  /**
   * @remarks
   * The BGP IP address of the tunnel on the Alibaba Cloud side.
   * 
   * @example
   * 169.254.10.1
   */
  localBgpIp?: string;
  /**
   * @remarks
   * The ASN of the tunnel peer.
   * 
   * @example
   * 65531
   */
  peerAsn?: number;
  /**
   * @remarks
   * The BGP IP address of the tunnel peer.
   * 
   * @example
   * 169.254.10.2
   */
  peerBgpIp?: string;
  /**
   * @remarks
   * The BGP CIDR block of the tunnel.
   * 
   * @example
   * 169.254.10.0/30
   */
  tunnelCidr?: string;
  static names(): { [key: string]: string } {
    return {
      localAsn: 'LocalAsn',
      localBgpIp: 'LocalBgpIp',
      peerAsn: 'PeerAsn',
      peerBgpIp: 'PeerBgpIp',
      tunnelCidr: 'TunnelCidr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localAsn: 'number',
      localBgpIp: 'string',
      peerAsn: 'number',
      peerBgpIp: 'string',
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

