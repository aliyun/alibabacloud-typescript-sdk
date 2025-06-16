// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVpnConnectionAttributeResponseBodyVpnBgpConfig extends $dara.Model {
  /**
   * @remarks
   * Indicates whether BGP is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  enableBgp?: string;
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
   * The BGP IP address on the Alibaba Cloud side.
   * 
   * @example
   * 169.254.11.1
   */
  localBgpIp?: string;
  /**
   * @remarks
   * The ASN on the data center side.
   * 
   * @example
   * 65531
   */
  peerAsn?: number;
  /**
   * @remarks
   * The BGP IP address of the data center.
   * 
   * @example
   * 169.254.11.2
   */
  peerBgpIp?: string;
  /**
   * @remarks
   * The negotiation state of BGP. Valid values:
   * 
   * *   **success**: normal
   * *   **false**: abnormal
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The BGP CIDR block of the IPsec-VPN connection.
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
      status: 'Status',
      tunnelCidr: 'TunnelCidr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableBgp: 'string',
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

