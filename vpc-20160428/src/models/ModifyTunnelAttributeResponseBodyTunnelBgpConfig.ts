// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTunnelAttributeResponseBodyTunnelBgpConfig extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the BGP feature is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  enableBgp?: boolean;
  /**
   * @remarks
   * The local ASN.
   * 
   * @example
   * 65530
   */
  localAsn?: number;
  /**
   * @remarks
   * The BGP IP address of the tunnel.
   * 
   * @example
   * 169.254.11.1
   */
  localBgpIp?: string;
  /**
   * @remarks
   * The peer ASN.
   * 
   * @example
   * 65531
   */
  peerAsn?: number;
  /**
   * @remarks
   * The BGP IP address of the peer.
   * 
   * @example
   * 169.254.11.2
   */
  peerBgpIp?: string;
  /**
   * @remarks
   * The CIDR block to which the tunnel BGP IP address belongs.
   * 
   * @example
   * 169.254.11.0/30
   */
  tunnelCidr?: string;
  static names(): { [key: string]: string } {
    return {
      enableBgp: 'EnableBgp',
      localAsn: 'LocalAsn',
      localBgpIp: 'LocalBgpIp',
      peerAsn: 'PeerAsn',
      peerBgpIp: 'PeerBgpIp',
      tunnelCidr: 'TunnelCidr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableBgp: 'boolean',
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

