// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateVpnConnectionRequestTunnelOptionsSpecificationTunnelBgpConfig } from "./CreateVpnConnectionRequestTunnelOptionsSpecificationTunnelBgpConfig";
import { CreateVpnConnectionRequestTunnelOptionsSpecificationTunnelIkeConfig } from "./CreateVpnConnectionRequestTunnelOptionsSpecificationTunnelIkeConfig";
import { CreateVpnConnectionRequestTunnelOptionsSpecificationTunnelIpsecConfig } from "./CreateVpnConnectionRequestTunnelOptionsSpecificationTunnelIpsecConfig";


export class CreateVpnConnectionRequestTunnelOptionsSpecification extends $dara.Model {
  /**
   * @remarks
   * The ID of the customer gateway that is associated with the tunnel.
   * 
   * > - This parameter is required when you create an IPsec-VPN connection in dual-tunnel mode.
   * > - You can specify parameters in the **TunnelOptionsSpecification** array when you create an IPsec-VPN connection in dual tunnel mode.
   * > - When you create an IPsec-VPN connection in dual tunnel mode, you must add configurations of the active and standby tunnels for the IPsec-VPN connection. Each IPsec-VPN connection supports only one active tunnel and one standby tunnel.
   * 
   * @example
   * cgw-p0wy363lucf1uyae8****
   */
  customerGatewayId?: string;
  /**
   * @remarks
   * Specifies whether to enable the Dead Peer Detection (DPD) feature for the tunnel. Valid values:
   * 
   * *   **true** (default): enables DPD. The initiator of the IPsec-VPN connection sends DPD packets to check the existence and availability of the peer. If no feedback is received from the peer within the specified period of time, the connection fails. In this case, ISAKMP SA and IPsec SA are deleted. The security tunnel is also deleted.
   * *   **false**: disables DPD. The initiator of the IPsec-VPN connection does not send DPD packets.
   * 
   * @example
   * true
   */
  enableDpd?: boolean;
  /**
   * @remarks
   * Specifies whether to enable NAT traversal for the tunnel. Valid values:
   * 
   * *   **true** (default): enables NAT traversal. After NAT traversal is enabled, the initiator does not check the UDP ports during IKE negotiations and can automatically discover NAT gateway devices along the IPsec-VPN tunnel.
   * *   **false**: disables NAT traversal.
   * 
   * @example
   * true
   */
  enableNatTraversal?: boolean;
  /**
   * @remarks
   * If the VPN gateway uses an SM certificate, you need to configure the CA certificate used by the IPsec peer.
   * 
   * *   If the VPN gateway uses an SM certificate, this parameter is required.
   * *   If the VPN gateway does not use an SM certificate, leave this parameter empty.
   * 
   * @example
   * -----BEGIN CERTIFICATE----- MIIB7zCCAZW**** -----END CERTIFICATE-----
   */
  remoteCaCertificate?: string;
  /**
   * @remarks
   * The role of the tunnel. Valid values:
   * 
   * *   **master**: The tunnel is an active tunnel.
   * *   **slave**: The tunnel is a standby tunnel.
   * 
   * @example
   * master
   */
  role?: string;
  /**
   * @remarks
   * The Border Gateway Protocol (BGP) configurations of the tunnel.
   */
  tunnelBgpConfig?: CreateVpnConnectionRequestTunnelOptionsSpecificationTunnelBgpConfig;
  /**
   * @remarks
   * The configurations of Phase 1 negotiations.
   */
  tunnelIkeConfig?: CreateVpnConnectionRequestTunnelOptionsSpecificationTunnelIkeConfig;
  /**
   * @remarks
   * The configurations of Phase 2 negotiations.
   */
  tunnelIpsecConfig?: CreateVpnConnectionRequestTunnelOptionsSpecificationTunnelIpsecConfig;
  static names(): { [key: string]: string } {
    return {
      customerGatewayId: 'CustomerGatewayId',
      enableDpd: 'EnableDpd',
      enableNatTraversal: 'EnableNatTraversal',
      remoteCaCertificate: 'RemoteCaCertificate',
      role: 'Role',
      tunnelBgpConfig: 'TunnelBgpConfig',
      tunnelIkeConfig: 'TunnelIkeConfig',
      tunnelIpsecConfig: 'TunnelIpsecConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerGatewayId: 'string',
      enableDpd: 'boolean',
      enableNatTraversal: 'boolean',
      remoteCaCertificate: 'string',
      role: 'string',
      tunnelBgpConfig: CreateVpnConnectionRequestTunnelOptionsSpecificationTunnelBgpConfig,
      tunnelIkeConfig: CreateVpnConnectionRequestTunnelOptionsSpecificationTunnelIkeConfig,
      tunnelIpsecConfig: CreateVpnConnectionRequestTunnelOptionsSpecificationTunnelIpsecConfig,
    };
  }

  validate() {
    if(this.tunnelBgpConfig && typeof (this.tunnelBgpConfig as any).validate === 'function') {
      (this.tunnelBgpConfig as any).validate();
    }
    if(this.tunnelIkeConfig && typeof (this.tunnelIkeConfig as any).validate === 'function') {
      (this.tunnelIkeConfig as any).validate();
    }
    if(this.tunnelIpsecConfig && typeof (this.tunnelIpsecConfig as any).validate === 'function') {
      (this.tunnelIpsecConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

