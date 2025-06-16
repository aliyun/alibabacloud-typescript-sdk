// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVpnAttachmentAttributeResponseBodyVpnBgpConfig extends $dara.Model {
  /**
   * @remarks
   * Indicates whether BGP is enabled for the IPsec-VPN connection. Valid values:
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
   * 45104
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
   * 65535
   */
  peerAsn?: number;
  /**
   * @remarks
   * The BGP IP address on the data center side.
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
   * false
   */
  status?: string;
  /**
   * @remarks
   * The CIDR block of the IPsec tunnel.
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

