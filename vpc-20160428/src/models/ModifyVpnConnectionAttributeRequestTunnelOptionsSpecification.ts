// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyVpnConnectionAttributeRequestTunnelOptionsSpecificationTunnelBgpConfig } from "./ModifyVpnConnectionAttributeRequestTunnelOptionsSpecificationTunnelBgpConfig";
import { ModifyVpnConnectionAttributeRequestTunnelOptionsSpecificationTunnelIkeConfig } from "./ModifyVpnConnectionAttributeRequestTunnelOptionsSpecificationTunnelIkeConfig";
import { ModifyVpnConnectionAttributeRequestTunnelOptionsSpecificationTunnelIpsecConfig } from "./ModifyVpnConnectionAttributeRequestTunnelOptionsSpecificationTunnelIpsecConfig";


export class ModifyVpnConnectionAttributeRequestTunnelOptionsSpecification extends $dara.Model {
  /**
   * @remarks
   * The ID of the customer gateway associated with the tunnel.
   * 
   * @example
   * cgw-1nmwbpgrp7ssqm1yn****
   */
  customerGatewayId?: string;
  /**
   * @remarks
   * Specifies whether to enable the Dead Peer Detection (DPD) feature for the tunnel. Valid values:
   * 
   * *   **true**: enables DPD. The initiator of the IPsec-VPN connection sends DPD packets to check the existence and availability of the peer. If no feedback is received from the peer within the specified period of time, the connection fails. In this case, ISAKMP SA and IPsec SA are deleted. The security tunnel is also deleted.
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
   * *   **true**: enables NAT traversal. After NAT traversal is enabled, the initiator does not check the UDP ports during IKE negotiations and can automatically discover NAT gateway devices along the IPsec-VPN tunnel.
   * *   **false**: disables NAT traversal.
   * 
   * @example
   * true
   */
  enableNatTraversal?: boolean;
  /**
   * @remarks
   * If the VPN gateway uses an SM certificate, you can modify the CA certificate used by the IPsec peer.
   * 
   * If the VPN gateway does not use an SM certificate, this parameter is not supported.
   * 
   * @example
   * -----BEGIN CERTIFICATE----- MIIB7zCCAZW**** -----END CERTIFICATE-----
   */
  remoteCaCertificate?: string;
  /**
   * @remarks
   * The tunnel role. Valid values:
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
  tunnelBgpConfig?: ModifyVpnConnectionAttributeRequestTunnelOptionsSpecificationTunnelBgpConfig;
  /**
   * @remarks
   * The tunnel ID.
   * 
   * @example
   * tun-opsqc4d97wni27****
   */
  tunnelId?: string;
  /**
   * @remarks
   * The configurations of Phase 1 negotiations.
   */
  tunnelIkeConfig?: ModifyVpnConnectionAttributeRequestTunnelOptionsSpecificationTunnelIkeConfig;
  /**
   * @remarks
   * The configurations of Phase 2 negotiations.
   */
  tunnelIpsecConfig?: ModifyVpnConnectionAttributeRequestTunnelOptionsSpecificationTunnelIpsecConfig;
  static names(): { [key: string]: string } {
    return {
      customerGatewayId: 'CustomerGatewayId',
      enableDpd: 'EnableDpd',
      enableNatTraversal: 'EnableNatTraversal',
      remoteCaCertificate: 'RemoteCaCertificate',
      role: 'Role',
      tunnelBgpConfig: 'TunnelBgpConfig',
      tunnelId: 'TunnelId',
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
      tunnelBgpConfig: ModifyVpnConnectionAttributeRequestTunnelOptionsSpecificationTunnelBgpConfig,
      tunnelId: 'string',
      tunnelIkeConfig: ModifyVpnConnectionAttributeRequestTunnelOptionsSpecificationTunnelIkeConfig,
      tunnelIpsecConfig: ModifyVpnConnectionAttributeRequestTunnelOptionsSpecificationTunnelIpsecConfig,
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

