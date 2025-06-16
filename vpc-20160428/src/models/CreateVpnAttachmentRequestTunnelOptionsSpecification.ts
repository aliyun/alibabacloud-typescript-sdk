// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateVpnAttachmentRequestTunnelOptionsSpecificationTunnelBgpConfig } from "./CreateVpnAttachmentRequestTunnelOptionsSpecificationTunnelBgpConfig";
import { CreateVpnAttachmentRequestTunnelOptionsSpecificationTunnelIkeConfig } from "./CreateVpnAttachmentRequestTunnelOptionsSpecificationTunnelIkeConfig";
import { CreateVpnAttachmentRequestTunnelOptionsSpecificationTunnelIpsecConfig } from "./CreateVpnAttachmentRequestTunnelOptionsSpecificationTunnelIpsecConfig";


export class CreateVpnAttachmentRequestTunnelOptionsSpecification extends $dara.Model {
  /**
   * @remarks
   * The ID of the customer gateway that is associated with the tunnel.
   * 
   * >  This parameter is required when you create a dual-tunnel IPsec-VPN connection.
   * 
   * @example
   * cgw-p0w2jemrcj5u61un8****
   */
  customerGatewayId?: string;
  /**
   * @remarks
   * Specifies whether to enable the DPD feature for the tunnel. Valid values:
   * 
   * *   **true** (default): enables DPD. The initiator of the IPsec-VPN connection sends DPD packets to check the existence and availability of the peer. If no feedback is received from the peer within the specified period of time, the connection fails. In this case, ISAKMP SA and IPsec SA are deleted along with the security tunnel.
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
   * The BGP configurations of the tunnel.
   * 
   * >  If you enable BGP for an IPsec-VPN connection, you must set **EnableTunnelsBgp** parameter to **true**.
   */
  tunnelBgpConfig?: CreateVpnAttachmentRequestTunnelOptionsSpecificationTunnelBgpConfig;
  /**
   * @remarks
   * The configurations of Phase 1 negotiations.
   */
  tunnelIkeConfig?: CreateVpnAttachmentRequestTunnelOptionsSpecificationTunnelIkeConfig;
  /**
   * @remarks
   * The order in which the tunnel was created.
   * 
   * *   **1**: Tunnel 1.
   * *   **2**: Tunnel 2.
   * 
   * @example
   * 1
   */
  tunnelIndex?: number;
  /**
   * @remarks
   * The configurations of Phase 2 negotiations.
   */
  tunnelIpsecConfig?: CreateVpnAttachmentRequestTunnelOptionsSpecificationTunnelIpsecConfig;
  static names(): { [key: string]: string } {
    return {
      customerGatewayId: 'CustomerGatewayId',
      enableDpd: 'EnableDpd',
      enableNatTraversal: 'EnableNatTraversal',
      tunnelBgpConfig: 'TunnelBgpConfig',
      tunnelIkeConfig: 'TunnelIkeConfig',
      tunnelIndex: 'TunnelIndex',
      tunnelIpsecConfig: 'TunnelIpsecConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerGatewayId: 'string',
      enableDpd: 'boolean',
      enableNatTraversal: 'boolean',
      tunnelBgpConfig: CreateVpnAttachmentRequestTunnelOptionsSpecificationTunnelBgpConfig,
      tunnelIkeConfig: CreateVpnAttachmentRequestTunnelOptionsSpecificationTunnelIkeConfig,
      tunnelIndex: 'number',
      tunnelIpsecConfig: CreateVpnAttachmentRequestTunnelOptionsSpecificationTunnelIpsecConfig,
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

